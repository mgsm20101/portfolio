# 📄 CV/Resume Setup Instructions

## Adding Your CV to the Portfolio

### Step 1: Place Your CV File

1. **Copy your CV PDF file** to the `public` folder
2. **Rename it** (optional but recommended):
   - Current expected name: `Mohamed Gamal Sedeek.pdf`
   - Or update the path in `Hero.jsx` if using a different name

```
public/
  ├── Mohamed Gamal Sedeek.pdf  ← Place your CV here
  └── assets-image/
```

### Step 2: Verify the Download Button

The download button is automatically added to the Hero section with these features:
- 📄 Icon for visual indication
- Direct download on click
- Styled with accent color
- Responsive on all devices

### Step 3: Update CV Path (if needed)

If you use a different filename, edit `src/components/Hero.jsx`:

```jsx
<a
  href="/portfolio/YOUR-CV-FILENAME.pdf"  // Update this line
  download
  className="..."
>
  <span>📄</span>
  Download CV
</a>
```

---

## 🔄 After Adding Your CV:

### Rebuild and Deploy:

```bash
# Option 1: Manual deployment
npm run deploy

# Option 2: Automatic via Git
git add public/"Mohamed Gamal Sedeek.pdf"
git commit -m "Add CV file"
git push origin main
```

---

## 📝 Notes:

1. **File Size**: Keep CV under 2MB for faster downloads
2. **Format**: PDF is recommended (universal compatibility)
3. **Name**: Use clear naming like "FirstName-LastName-CV.pdf"
4. **Path**: The `/portfolio/` prefix is required for GitHub Pages
5. **Testing**: Test locally first with `npm run dev`

---

## ✅ Checklist:

- [ ] CV file placed in `public/` folder
- [ ] File named correctly or path updated in Hero.jsx
- [ ] Tested locally (`npm run dev`)
- [ ] Deployed to GitHub Pages (`npm run deploy`)
- [ ] Verified download works on live site

---

**CV Download Button is Ready! 🎉**
