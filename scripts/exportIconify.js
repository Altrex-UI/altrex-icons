import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get package version
const packageJson = JSON.parse(await fs.readFile('./package.json', 'utf8'));

// Categories to process
const categories = ['generic', 'brand', 'flag'];

// Simple SVG body extractor
function extractSVGBody(svgContent) {
    // Remove the svg wrapper and extract inner content
    let body = svgContent
        .replace(/<\?xml[^>]*>/g, '')
        .replace(/<svg[^>]*>/g, '')
        .replace(/<\/svg>/g, '')
        .trim();

    return body;
}

// Parse viewBox from SVG
function getViewBox(svgContent) {
    const match = svgContent.match(/viewBox="([^"]*)"/);
    if (match) {
        const values = match[1].split(' ').map(Number);
        return { width: values[2], height: values[3] };
    }
    return { width: 24, height: 24 }; // default
}

// Process each category
for (const category of categories) {
    try {
        console.log(`Processing ${category} icons...`);

        const iconsPath = path.join(__dirname, '..', 'icons', category);
        const files = await fs.readdir(iconsPath);

        const icons = {};
        let width = 24;
        let height = 24;

        for (const file of files) {
            if (file.endsWith('.svg')) {
                const iconName = file.replace('.svg', '');
                const filePath = path.join(iconsPath, file);
                const content = await fs.readFile(filePath, 'utf8');

                // Extract body and viewBox
                const body = extractSVGBody(content);
                const viewBox = getViewBox(content);

                // Use the viewBox dimensions (most icons will be consistent)
                width = viewBox.width;
                height = viewBox.height;

                icons[iconName] = { body };
            }
        }

        // Create iconify JSON structure
        const iconifyData = {
            prefix: `altrex-${category}`,
            lastModified: Math.floor(Date.now() / 1000),
            width,
            height,
            icons
        };

        // Create iconify directory if it doesn't exist
        await fs.mkdir('./iconify', { recursive: true });

        // Write JSON file
        const exported = JSON.stringify(iconifyData, null, '\t') + '\n';
        await fs.writeFile(`./iconify/altrex-${category}.json`, exported, 'utf8');

        console.log(`✓ Generated iconify/altrex-${category}.json (${Object.keys(icons).length} icons)`);
    } catch (err) {
        console.error(`✗ Error processing ${category}:`, err);
    }
}

console.log('\n✓ Iconify export complete!');
