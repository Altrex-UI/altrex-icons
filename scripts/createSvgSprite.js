import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import SVGSpriter from 'svg-sprite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get package.json for version
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const version = packageJson.version;

// Categories to process
const categories = ['generic', 'brand', 'flag'];

// Create a single sprite with all icons
const config = {
    shape: {
        id: {
            generator: function(name) {
                const pathArray = name.split(path.sep);
                const fileName = pathArray.at(-1);
                const iconName = fileName.split('.').at(0);
                return iconName;
            }
        }
    },
    svg: {
        doctypeDeclaration: false,
        namespaceIDs: true,
        dimensionAttributes: false
    },
    mode: {
        symbol: {
            dest: '.',
            sprite: 'altrex.svg',
            example: false
        }
    }
};

const spriter = new SVGSpriter(config);
let totalIcons = 0;

// Add all SVG files from all categories
categories.forEach(category => {
    const iconsPath = path.join(__dirname, '..', 'icons', category);
    const files = fs.readdirSync(iconsPath);

    files.forEach(file => {
        if (file.endsWith('.svg')) {
            const filePath = path.join(iconsPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            spriter.add(filePath, null, content);
            totalIcons++;
        }
    });
});

// Compile the sprite
spriter.compile((error, result) => {
    if (error) {
        console.error('✗ Error creating altrex-icons.svg:', error);
        return;
    }

    for (const mode in result) {
        for (const resource in result[mode]) {
            let content = result[mode][resource].contents.toString();

            // Append version comment
            content = content.trimEnd() + `\n<!-- @altrex/icons v${version} -->\n`;

            fs.writeFileSync(result[mode][resource].path, content);
            console.log(`✓ Generated altrex-icons.svg (${totalIcons} icons from ${categories.length} categories)`);
        }
    }
});