# Altrex Icons

**1,585 free SVG icons** organized into three categories: Free, Brand, and Flag icons.

Altrex Icons is an open-source icon library providing high-quality SVG icons optimized for web use. All icons are available as SVG sprites and Iconify JSON format for easy integration into any project.

> **Credits**: This library is built upon [CoreUI Icons](https://github.com/coreui/coreui-icons) by [creativeLabs Łukasz Holeczek](https://coreui.io). The original icon designs and source SVG files are from the CoreUI Icons project. We've restructured the build system to follow modern icon library patterns (SVG sprites + Iconify format) while maintaining full attribution to the original creators.

## Table of Contents

- [Installation](#installation)
- [Icon Categories](#icon-categories)
- [Usage](#usage)
  - [SVG Sprites](#svg-sprites)
  - [Iconify JSON](#iconify-json)
  - [Direct Icon Access](#direct-icon-access)
- [Build from Source](#build-from-source)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

### NPM

```bash
npm install @altrex/icons
```

### Yarn

```bash
yarn add @altrex/icons
```

## Icon Categories

The library includes **1,585 icons** organized into three categories:

| Category | Count | Prefix | Description |
|----------|-------|--------|-------------|
| **Free** | 556 icons | `cil-` | General-purpose UI icons (linear style) |
| **Brand** | 830 icons | `cib-` | Company and product logos |
| **Flag** | 199 icons | `cif-` | Country flags |

## Usage

### SVG Sprites

The most efficient way to use icons in web applications. All 1,585 icons are included in a single sprite file.

#### HTML Usage

```html
<!-- Free icons -->
<svg width="24" height="24">
  <use href="node_modules/@altrex/icons/altrex.svg#cil-apple"/>
</svg>

<!-- Brand icons -->
<svg width="24" height="24">
  <use href="node_modules/@altrex/icons/altrex.svg#cib-twitter"/>
</svg>

<!-- Flag icons -->
<svg width="24" height="24">
  <use href="node_modules/@altrex/icons/altrex.svg#cif-us"/>
</svg>
```

#### ES Modules (Webpack, Vite, etc.)

```javascript
import altrexSprite from '@altrex/icons/altrex.svg';
```

### Iconify JSON

Iconify format enables framework-agnostic icon usage and is compatible with popular icon libraries.

#### Import Iconify JSON

```javascript
// ES Modules
import freeIcons from '@altrex/icons/iconify/altrex-free.json';
import brandIcons from '@altrex/icons/iconify/altrex-brand.json';
import flagIcons from '@altrex/icons/iconify/altrex-flag.json';
```

#### Use with Iconify Libraries

**React:**
```jsx
import { Icon } from '@iconify/react';
import freeIcons from '@altrex/icons/iconify/altrex-free.json';

// Register icon set
import { addCollection } from '@iconify/react';
addCollection(freeIcons);

// Use icons
<Icon icon="altrex-free:cil-apple" />
```

**Vue:**
```vue
<template>
  <Icon icon="altrex-free:cil-apple" />
</template>

<script setup>
import { Icon, addCollection } from '@iconify/vue';
import freeIcons from '@altrex/icons/iconify/altrex-free.json';

addCollection(freeIcons);
</script>
```

**Svelte:**
```svelte
<script>
import { Icon, addCollection } from '@iconify/svelte';
import freeIcons from '@altrex/icons/iconify/altrex-free.json';

addCollection(freeIcons);
</script>

<Icon icon="altrex-free:cil-apple" />
```

### Direct Icon Access

#### Individual SVG Files

All source SVG files are available in the [icons/](icons/) directory:

```
icons/
├── free/       # 556 SVG files
├── brand/      # 830 SVG files
└── flag/       # 199 SVG files
```

#### Icon Inventory (JSON)

Use [icons.json](icons.json) to programmatically access icon names:

```javascript
import icons from '@altrex/icons/icons.json';

console.log(icons.free);    // ["cil-3d", "cil-4k", "cil-account-logout", ...]
console.log(icons.brand);   // ["cib-500px", "cib-abstract", ...]
console.log(icons.flag);    // ["cif-ad", "cif-ae", ...]
```

## Build from Source

### Prerequisites

- Node.js >= 24
- npm or yarn

### Build Steps

```bash
# Install dependencies
npm install

# Run full build
npm run build
```

### Build Scripts

| Script | Description |
|--------|-------------|
| `npm run clean` | Remove generated files |
| `npm run optimize` | Optimize SVG files with SVGO |
| `npm run sprite` | Generate icons.json inventory |
| `npm run json` | Create SVG sprite files |
| `npm run iconify` | Export Iconify JSON format |
| `npm run build` | Run all build steps |

### Build Pipeline

The build process follows these steps:

1. **Optimize** (`svgo`) - Cleans and optimizes all SVG files
2. **Inventory** (`createIconsJson.cjs`) - Generates [icons.json](icons.json) with categorized icon names
3. **Sprite** (`createSvgSprite.js`) - Creates single SVG sprite ([altrex.svg](altrex.svg)) with all 1,585 icons
4. **Iconify** (`exportIconify.js`) - Exports Iconify JSON format ([iconify/](iconify/) directory)

## Project Structure

```
altrex-icons/
├── icons/                          # Source SVG files (1,585 files)
│   ├── free/                       # 556 free icons
│   ├── brand/                      # 830 brand icons
│   └── flag/                       # 199 flag icons
├── iconify/                        # Iconify JSON exports
│   ├── altrex-free.json           # Free icons in Iconify format
│   ├── altrex-brand.json          # Brand icons in Iconify format
│   └── altrex-flag.json           # Flag icons in Iconify format
├── scripts/                        # Build scripts
│   ├── createIconsJson.cjs        # Generate icons.json
│   ├── createSvgSprite.js         # Generate SVG sprite
│   └── exportIconify.js           # Generate Iconify JSON
├── altrex.svg                      # SVG sprite with all 1,585 icons
├── icons.json                      # Icon inventory metadata
├── svgo.config.mjs                # SVG optimization config
├── package.json                    # NPM package config
└── README.md                       # This file
```

## Generated Files

After running `npm run build`, the following files are generated:

| File | Size | Description |
|------|------|-------------|
| [altrex.svg](altrex.svg) | ~4.8 MB | SVG sprite with all 1,585 icons |
| [icons.json](icons.json) | ~31 KB | Icon inventory (categorized names) |
| [iconify/altrex-free.json](iconify/altrex-free.json) | ~411 KB | Iconify JSON (free icons) |
| [iconify/altrex-brand.json](iconify/altrex-brand.json) | ~1.4 MB | Iconify JSON (brand icons) |
| [iconify/altrex-flag.json](iconify/altrex-flag.json) | ~3.3 MB | Iconify JSON (flag icons) |

## Icon Naming Convention

Icons follow a consistent naming pattern:

- **Free icons**: `cil-{name}` (e.g., `cil-apple`, `cil-airplane-mode`)
- **Brand icons**: `cib-{name}` (e.g., `cib-twitter`, `cib-facebook`)
- **Flag icons**: `cif-{code}` (e.g., `cif-us`, `cif-gb`, `cif-fr`)

## Styling Icons

### Size Control

```css
/* CSS */
svg {
  width: 24px;
  height: 24px;
}
```

```html
<!-- HTML -->
<svg width="24" height="24">
  <use href="altrex.svg#cil-apple"/>
</svg>
```

### Color Control

Icons use `var(--ci-primary-color, currentColor)` which allows easy color customization:

```css
/* Method 1: currentColor (inherits from parent) */
.icon-wrapper {
  color: #ff6b6b;
}

/* Method 2: CSS variable */
.icon-wrapper {
  --ci-primary-color: #4dabf7;
}
```

### Responsive Icons

```css
.icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}

.large-icon {
  font-size: 2rem;
}
```

## Browser Support

SVG sprites are supported in all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Android Browser (latest)

For older browsers, consider using a polyfill like [svg4everybody](https://github.com/jonathantneal/svg4everybody).

## Credits & Attribution

This library is based on [CoreUI Icons](https://github.com/coreui/coreui-icons) created by:
- **creativeLabs Łukasz Holeczek** - [CoreUI](https://coreui.io)
- **Jazzy Innovations sp. z o.o.** - [jazzy.pro](https://jazzy.pro)
- **CoreUI Team** - [GitHub](https://github.com/orgs/coreui/people/)

All original icon designs are from the CoreUI Icons project. This derivative work restructures the build system and distribution format while maintaining the original icon artwork.

## License

### Code & Build System
MIT License - Copyright (c) 2026 Altrex

The build scripts, configuration files, and distribution format are licensed under the MIT License.

### Icon Artwork

The icon artwork follows the original CoreUI Icons licensing:

- **CoreUI Icons Free** (Linear icons) - CC BY 4.0 License
  - All free icons (`cil-*` prefix) are licensed under Creative Commons Attribution 4.0
  - You can use them for commercial and non-commercial projects
  - Attribution to CoreUI is appreciated but not required

- **Brand Icons** (`cib-*` prefix)
  - Brand icons are trademarks of their respective owners
  - Use of these trademarks does not indicate endorsement
  - Only use brand logos to represent the actual company/product/service

- **Flag Icons** (`cif-*` prefix)
  - Flag icons are in the public domain (CC0 1.0 Universal)

For complete licensing details, see the [original CoreUI Icons repository](https://github.com/coreui/coreui-icons).

---

**Original Icon Library**: [CoreUI Icons](https://github.com/coreui/coreui-icons)
**Original Documentation**: [coreui.io/icons](https://coreui.io/icons/)
