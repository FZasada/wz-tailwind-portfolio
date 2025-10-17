# 🎨 Wiktoria's Portfolio - Content Management Guide

A modern, modular portfolio website built with React, Vite, and Tailwind CSS. This guide will help you quickly update content, add projects, and deploy changes.

## 🚀 Quick Start

### For Content Updates (No Code Required)

1. **Update Text Content**: Edit `src/data/content.json`
2. **Add/Edit Projects**: Edit `src/data/projects.json`  
3. **Update Experience**: Edit `src/data/timeline.json`
4. **Deploy**: Run `npm run quick-deploy`

That's it! 🎉

## 📁 Content Structure

### 📝 Text Content (`src/data/content.json`)
```json
{
  "siteInfo": {
    "name": "Your Name",
    "title": "Your Title", 
    "email": "your@email.com",
    "cvPassword": "your-cv-password"
  },
  "hero": {
    "greeting": "Hi there,",
    "name": "I'm Your Name",
    "tagline": "Your tagline here"
  }
  // ... more sections
}
```

### 🎨 Projects (`src/data/projects.json`)
```json
[
  {
    "id": 1,
    "slug": "project-name",
    "title": "Project Title",
    "subtitle": "Project Type",
    "shortDescription": "Brief description...",
    "tags": ["Tag1", "Tag2"],
    "color": "#HEXCOLOR",
    "featured": true,
    "images": {
      "logo": "folder/logo.png",
      "banner": "folder/banner.png"
    }
  }
]
```

### 📚 Experience (`src/data/timeline.json`)
```json
[
  {
    "type": "work", // or "education"
    "date": "2023 - Present",
    "title": "Job Title",
    "company": "Company Name",
    "description": "What you did..."
  }
]
```

## 🛠️ Common Tasks

### ✏️ Update Text Content

1. Open `src/data/content.json`
2. Edit any text field
3. Save and deploy: `npm run quick-deploy`

### 📁 Add New Project

**Option 1: Interactive Script**
```bash
npm run content:add-project
```

**Option 2: Manual**
1. Add project entry to `src/data/projects.json`
2. Create folder `src/assets/projects/project-name/`
3. Add images: `logo.png`, `banner.png`, `banner2.png`

### 🖼️ Update Images

1. Replace image files in `src/assets/` directories
2. Keep the same filename OR update the path in JSON files
3. Deploy changes

### 🔐 Change CV Password

1. Edit `cvPassword` in `src/data/content.json`
2. Deploy changes

### 📄 Update CV File

1. Replace `public/docs/cv.pdf` with your new CV
2. Deploy changes

## 🚀 Deployment

### Quick Deployment (Recommended)
```bash
npm run quick-deploy
```
This script will:
- Check for changes
- Commit and push to GitHub  
- Build the project
- Deploy to GitHub Pages

### Manual Deployment
```bash
git add .
git commit -m "Your message"
git push origin master
npm run build
npm run deploy
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Validate content structure
npm run content:validate

# Add new project (interactive)
npm run content:add-project

# Run all checks
npm run check
```

## 📂 File Structure

```
src/
├── data/                    # 📊 Content files (EDIT THESE)
│   ├── content.json        # Site content & text
│   ├── projects.json       # Project data
│   ├── timeline.json       # Work & education
│   └── assets.json         # Asset configuration
├── assets/                  # 🖼️ Images & files
│   ├── icons/
│   ├── projects/
│   └── about_me/
├── components/              # ⚛️ React components
├── hooks/                   # 🪝 Custom React hooks
├── utils/                   # 🔧 Utilities
└── ...
```

## 🎯 Content Management Benefits

### ✅ What's Better Now:

- **No Code Required**: Update content via JSON files
- **Quick Updates**: Change text, add projects without touching components
- **Asset Management**: Organized image structure
- **Validation**: Automatic content validation
- **One-Command Deploy**: `npm run quick-deploy` does everything
- **Modular**: Easy to add new sections or projects

### 🔄 Typical Workflow:

1. Edit content in `src/data/*.json` files
2. Add/replace images in `src/assets/` 
3. Run `npm run quick-deploy`
4. Done! ✨

## 🆘 Troubleshooting

### Content Not Updating?
- Check JSON syntax with `npm run content:validate`
- Clear browser cache
- Check browser console for errors

### Images Not Loading?
- Ensure images exist in correct `src/assets/` folders
- Check file paths in JSON match actual files
- Supported formats: `.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`

### Deployment Issues?
- Check GitHub Pages settings
- Ensure `CNAME` file exists in `public/` folder
- Verify domain configuration

## 📝 Adding New Content Types

Want to add testimonials, blog posts, or other content? 

1. Create new JSON file in `src/data/`
2. Add loader function to `src/utils/contentManager.js`
3. Create component to display the content
4. Add validation schema to `scripts/validate-content.js`

## 💡 Tips

- **Backup**: Always commit changes before deploying
- **Preview**: Use `npm run dev` to preview changes locally
- **Validation**: Run `npm run content:validate` before deploying
- **Images**: Optimize images for web (use tools like TinyPNG)
- **SEO**: Update meta tags in `index.html` and content.json

---

**Need Help?** Check the validation output or create an issue in the repository.

**Happy Portfolio Building! 🚀**