# Assets Images

This folder contains all images used in the portfolio.

## Recommended Images

### Hero Section
- **profile.jpg** - Your professional photo (400x400px recommended)

### Projects
- **project-1.jpg** - Integration Service screenshot
- **project-2.jpg** - Complaints Management System
- **project-3.jpg** - Data Warehouse & ETL
- **project-4.jpg** - SPARROW-INN Hotel Management
- **project-5.jpg** - Judicial Portal & Statistics
- **project-6.jpg** - Real-time CDC Pipeline

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Profile Photo**: 400x400px (square)
- **Project Images**: 600x400px (landscape)
- **Max File Size**: < 500KB per image
- **Optimization**: Use tools like TinyPNG or ImageOptim

## Usage

To use local images in your portfolio:

1. Place your images in this folder
2. Update `src/data/portfolio.json` with relative paths:

```json
{
  "hero": {
    "image": "/portfolio/assets-image/profile.jpg"
  },
  "projects": {
    "items": [
      {
        "image": "/portfolio/assets-image/project-1.jpg"
      }
    ]
  }
}
```

## Current Images

- Place your images here and list them above
