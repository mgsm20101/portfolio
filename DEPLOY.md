# GitHub Pages Deployment Guide

## 🚀 Two Methods to Deploy on GitHub Pages

### Method 1: Automatic Deployment (Recommended)

#### Steps:

1. **Upload code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/mgsm20101/portfolio.git
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to repository settings
   - Select "Pages" from sidebar
   - Under "Build and deployment" choose:
     - **Source**: GitHub Actions
   - Save changes

3. **Auto-deployment activated!**
   - Triggers on every push to main branch
   - Monitor progress in "Actions" tab
   - Website will be available at: `https://mgsm20101.github.io/portfolio/`

---

### Method 2: Manual Deployment

#### Steps:

1. **Build the project:**
```bash
npm run build
```

2. **Deploy using gh-pages:**
```bash
npm run deploy
```

3. **Enable GitHub Pages (one-time setup):**
   - Go to repository settings
   - Select "Pages" from sidebar
   - Under "Build and deployment" choose:
     - **Source**: Deploy from a branch
     - **Branch**: gh-pages / (root)
   - Save changes

4. **Website will be available at:**
   ```
   https://mgsm20101.github.io/portfolio/
   ```

---

## 📝 Modified Files:

### 1. `package.json`
- ✅ Added `homepage` URL
- ✅ Added `predeploy` and `deploy` scripts

### 2. `vite.config.js`
- ✅ Added `base: '/portfolio/'` for correct paths

### 3. `.github/workflows/deploy.yml`
- ✅ GitHub Actions file for automatic deployment

---

## 🔧 Available Commands:

```bash
# Run in development mode
npm run dev

# Build project
npm run build

# Preview build locally
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy
```

---

## ⚠️ Important Notes:

1. **Verify repository name:**
   - Current name: `portfolio`
   - If different, update in:
     - `package.json` → `homepage`
     - `vite.config.js` → `base`

2. **Local images:**
   - Place images in `public/assets-image/`
   - Use paths: `/portfolio/assets-image/image.jpg`

3. **Updates:**
   - **Automatic method**: Just push to main branch
   - **Manual method**: Use `npm run deploy`

---

## 🎯 Quick Steps:

```bash
# 1. Upload code
git init
git add .
git commit -m "Deploy portfolio"
git branch -M main
git remote add origin https://github.com/mgsm20101/portfolio.git
git push -u origin main

# 2. Enable GitHub Pages from Settings
# 3. Wait a few minutes
# 4. Open: https://mgsm20101.github.io/portfolio/
```

---

## 📞 Troubleshooting:

### Issue: Website doesn't work
- ✅ Check GitHub Pages is enabled in Settings
- ✅ Wait 2-3 minutes after first push
- ✅ Verify correct branch is selected

### Issue: Images don't appear
- ✅ Ensure paths start with `/portfolio/`
- ✅ Place images in `public/` folder

### Issue: CSS doesn't work
- ✅ Verify `base: '/portfolio/'` in vite.config.js

---

**Setup Complete! 🎉**
