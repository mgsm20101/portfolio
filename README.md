# Dynamic Portfolio App

A fully responsive, JSON-driven portfolio website built with React, TailwindCSS, and Framer Motion. All content is dynamically rendered from a single JSON file, making it easy to update and customize.

## ✨ Features

- **JSON-Driven Content**: All portfolio data (Hero, About, Skills, Projects, Experience, Contact) stored in `src/data/portfolio.json`
- **CV Download**: Downloadable resume/CV with one click
- **Theme Customization**: Colors and fonts configurable via JSON
- **Fully Responsive**: Mobile-first design that adapts to all screen sizes
- **Smooth Animations**: Framer Motion animations throughout
- **Project Filtering**: Featured/All projects filter
- **Contact Form**: Built-in contact form with validation
- **Scroll Effects**: Sticky navigation, scroll-to-top button, and scroll-triggered animations
- **Hot Reload**: Changes to JSON automatically update the app in development
- **GitHub Pages Ready**: Configured for easy deployment

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
developerFolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with intro
│   │   ├── About.jsx          # About section with stats
│   │   ├── Skills.jsx         # Skills with progress bars
│   │   ├── Projects.jsx       # Project cards with filtering
│   │   ├── Experience.jsx     # Work experience timeline
│   │   └── Contact.jsx        # Contact form and info
│   ├── data/
│   │   └── portfolio.json     # All portfolio content and theme
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Updating Content

Edit `src/data/portfolio.json` to update your portfolio content. The app will automatically reflect changes in development mode.

**JSON Structure:**

```json
{
  "theme": {
    "colors": { ... },
    "fonts": { ... }
  },
  "hero": { ... },
  "about": { ... },
  "skills": { ... },
  "projects": { ... },
  "experience": { ... },
  "contact": { ... }
}
```

### Theme Colors

Update colors in `portfolio.json` under `theme.colors`:

```json
"theme": {
  "colors": {
    "primary": "#6366f1",
    "secondary": "#8b5cf6",
    "accent": "#ec4899",
    "background": "#0f172a",
    "surface": "#1e293b",
    "text": "#f1f5f9",
    "textSecondary": "#94a3b8"
  }
}
```

### Adding Projects

Add new projects to the `projects.items` array:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "image": "image-url",
  "tags": ["React", "Node.js"],
  "links": {
    "github": "github-url",
    "live": "live-demo-url"
  },
  "featured": true
}
```

### Sections Included

1. **Hero**: Name, title, image, CTA buttons, social links
2. **About**: Description, paragraphs, statistics
3. **Skills**: Categorized skills with progress bars and icons
4. **Projects**: Project cards with images, tags, and links
5. **Experience**: Timeline of work experience with achievements
6. **Contact**: Contact information and form

## 🎯 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are optimized for these breakpoints using TailwindCSS utilities.

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## 📝 Tips

1. **Images**: Use high-quality images from Unsplash or your own assets
2. **Links**: Update all placeholder URLs with your actual links
3. **Content**: Keep descriptions concise and impactful
4. **Icons**: Emoji icons are used by default, but you can integrate icon libraries
5. **SEO**: Update `index.html` meta tags for better SEO
6. **CV/Resume**: Place your PDF resume in `public/` folder (see CV_SETUP.md for details)

## 📄 Adding Your CV

1. Place your CV PDF in the `public/` folder
2. Name it `Mohamed Gamal Sedeek.pdf` or update the path in `src/components/Hero.jsx`
3. The download button is automatically added to the Hero section
4. See `CV_SETUP.md` for detailed instructions

## 🚀 Deployment

### Quick Deploy to GitHub Pages:

```bash
npm run deploy
```

For detailed deployment instructions, see:
- `DEPLOY.md` - Complete deployment guide
- `SUCCESS.md` - Post-deployment checklist
- `TROUBLESHOOT.md` - Common issues and solutions

## 🌟 Features in Detail

### Auto-Update from JSON
The app watches `portfolio.json` and automatically updates when you save changes during development.

### CV Download
- One-click download button in Hero section
- PDF format for universal compatibility
- Styled with accent color for visibility

### Smooth Animations
- Scroll-triggered animations using Framer Motion
- Staggered animations for lists and grids
- Hover effects on interactive elements
- Progress bar animations for skills

### Responsive Navigation
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scroll to sections
- Visual feedback on scroll

### Project Filtering
- Filter between "All Projects" and "Featured"
- Smooth transitions between filter states
- Maintains responsive grid layout

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ using React, TailwindCSS, and Framer Motion
