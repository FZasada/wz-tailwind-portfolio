# 🎨 Wiktoria's Portfolio Website

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Features modular content management and automated deployment to GitHub Pages.

## 🌍 Live Site

**🔗 [wiktoriazemla.com](https://wiktoriazemla.com)**

## 🚀 Quick Deployment Guide

### **Option 1: One-Command Deployment (Recommended)**

```bash
npm run quick-deploy
```

This automated script will:
- ✅ Check for uncommitted changes
- ✅ Commit and push changes to GitHub
- ✅ Run linting checks
- ✅ Build the project
- ✅ Deploy to GitHub Pages
- ✅ Confirm successful deployment

### **Option 2: Manual Deployment**

```bash
# 1. Commit your changes
git add .
git commit -m "Your commit message"
git push origin master

# 2. Build and deploy
npm run build
npm run deploy
```

### **Option 3: Using the Deploy Script**

```bash
./deploy.sh
```

## 📋 Prerequisites

Before deploying, make sure you have:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Git repository setup with GitHub Pages enabled

## 🛠️ Initial Setup

### 1. Clone and Install

```bash
git clone https://github.com/FZasada/wz-tailwind-portfolio.git
cd wz-tailwind-portfolio
npm install
```

### 2. GitHub Pages Configuration

1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Set source to **Deploy from a branch**
4. Select branch: **gh-pages**
5. Folder: **/ (root)**

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CV_FILE_PATH=/docs/cv.pdf
```

### 4. Domain Configuration (Optional)

If using a custom domain:
1. Add your domain to the `public/CNAME` file
2. Configure DNS settings with your domain provider
3. Update the `homepage` field in `package.json`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |
| `npm run quick-deploy` | **One-command deployment** |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run content:validate` | Validate content structure |
| `npm run content:add-project` | Add new project interactively |

## 📁 File Structure for Content Updates

```
src/
├── data/                 # 📊 EDIT THESE FOR CONTENT UPDATES
│   ├── content.json     # Site text, bio, contact info
│   ├── projects.json    # Portfolio projects
│   └── timeline.json    # Work experience & education
├── assets/              # 🖼️ Images and media files
│   ├── projects/        # Project images
│   ├── icons/           # Icon files
│   └── about_me/        # About page images
└── components/          # ⚛️ React components (code)
```

## ✏️ How to Update Content

### Update Text Content
Edit `src/data/content.json` and deploy:
```bash
npm run quick-deploy
```

### Add New Project
```bash
npm run content:add-project
# Follow the interactive prompts
npm run quick-deploy
```

### Update CV
1. Replace `public/docs/cv.pdf` with your new CV
2. Deploy: `npm run quick-deploy`

### Change Images
1. Replace image files in `src/assets/` directories
2. Deploy: `npm run quick-deploy`

## 🚨 Troubleshooting

### Deployment Fails

**Check these common issues:**

1. **Linting errors**: Run `npm run lint` and fix any errors
2. **Build errors**: Run `npm run build` to check for build issues
3. **Git issues**: Ensure you have push access to the repository
4. **GitHub Pages**: Verify Pages is enabled in repository settings

### Content Not Updating

1. **Clear browser cache** (Cmd+Shift+R or Ctrl+Shift+R)
2. **Check file paths** in JSON files match actual image locations
3. **Validate content**: Run `npm run content:validate`

### Images Not Loading

1. **File format**: Use `.png`, `.jpg`, `.jpeg`, `.svg`, or `.gif`
2. **File paths**: Ensure paths in JSON match actual file locations
3. **Case sensitivity**: Check exact filename case (especially on macOS)

## 📊 Content Management

### Quick Content Updates

| What to Change | File to Edit | Command |
|----------------|--------------|---------|
| Bio, taglines, contact | `src/data/content.json` | `npm run quick-deploy` |
| Projects | `src/data/projects.json` | `npm run quick-deploy` |
| Work experience | `src/data/timeline.json` | `npm run quick-deploy` |
| CV password | `content.json` → `siteInfo.cvPassword` | `npm run quick-deploy` |
| CV file | Replace `public/docs/cv.pdf` | `npm run quick-deploy` |

### Validation Before Deployment

Always validate your content before deploying:

```bash
npm run content:validate  # Check for content errors
npm run lint             # Check for code errors  
npm run build            # Test build process
```

## 🔐 Security Notes

- **CV Password**: Set in `src/data/content.json` → `siteInfo.cvPassword`
- **Environment Variables**: Don't commit `.env` files to Git
- **Sensitive Data**: Keep private information out of public repositories

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Add CNAME file**: Update `public/CNAME` with your domain
2. **DNS Configuration**: Point your domain to GitHub Pages:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME: `username.github.io`
3. **Update package.json**: Set `homepage` field to your domain
4. **Deploy**: Run `npm run quick-deploy`

## 📈 Performance Optimization

The site is optimized for performance with:
- ⚡ **Vite** for fast builds and hot reload
- 🎨 **Tailwind CSS** for optimized styling  
- 📱 **Responsive design** for all devices
- 🖼️ **Optimized images** (consider using WebP format)
- 📦 **Code splitting** via React components

## 🔄 Continuous Deployment

For automated deployment on every push:

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ master ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 📞 Support

### Getting Help

1. **Check this README** for common solutions
2. **Run diagnostics**:
   ```bash
   npm run content:validate
   npm run lint
   npm run build
   ```
3. **Check browser console** for JavaScript errors
4. **Verify GitHub Pages settings** in repository

### Development

For local development:

```bash
npm run dev  # Start development server
```

Visit `http://localhost:5173` to see your changes in real-time.

---

## 🎯 Summary

**For regular updates (90% of use cases):**
```bash
# Edit content in src/data/*.json files
npm run quick-deploy
```

**That's it!** Your portfolio will be live at your configured domain within minutes.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

*Last updated: October 2025*
