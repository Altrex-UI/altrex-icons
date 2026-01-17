const fs = require('fs');
const path = require('path');

// Read all icon categories from the icons directory
const iconsDir = './icons';
const icons = {};

// Get all category directories
const categories = fs.readdirSync(iconsDir).filter(item => {
    const itemPath = path.join(iconsDir, item);
    return fs.statSync(itemPath).isDirectory();
});

// For each category, get all SVG files
categories.forEach(category => {
    const categoryPath = path.join(iconsDir, category);
    icons[category] = [];

    const files = fs.readdirSync(categoryPath);
    files.forEach(file => {
        if (file.endsWith('.svg')) {
            // Remove .svg extension
            const iconName = file.replace('.svg', '');
            icons[category].push(iconName);
        }
    });

    // Sort alphabetically
    icons[category].sort();
});

// Write to icons.json
fs.writeFileSync('./icons.json', JSON.stringify(icons, null, 2));

console.log('✓ Generated icons.json');
console.log(`  Total categories: ${Object.keys(icons).length}`);
Object.keys(icons).forEach(category => {
    console.log(`  - ${category}: ${icons[category].length} icons`);
});
