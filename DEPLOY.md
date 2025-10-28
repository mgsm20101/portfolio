# GitHub Pages Deployment Guide

## 🚀 طريقتان للنشر على GitHub Pages

### الطريقة الأولى: النشر التلقائي (موصى به)

#### الخطوات:

1. **ارفع الكود على GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/mgsm20101/portfolio.git
git push -u origin main
```

2. **تفعيل GitHub Pages:**
   - اذهب إلى repository settings
   - اختر "Pages" من القائمة الجانبية
   - في "Build and deployment" اختر:
     - **Source**: GitHub Actions
   - احفظ التغييرات

3. **سيتم النشر تلقائياً!**
   - عند كل push للـ main branch
   - يمكنك متابعة العملية في تبويب "Actions"
   - الموقع سيكون متاح على: `https://mgsm20101.github.io/portfolio/`

---

### الطريقة الثانية: النشر اليدوي

#### الخطوات:

1. **بناء المشروع:**
```bash
npm run build
```

2. **النشر باستخدام gh-pages:**
```bash
npm run deploy
```

3. **تفعيل GitHub Pages (مرة واحدة فقط):**
   - اذهب إلى repository settings
   - اختر "Pages" من القائمة الجانبية
   - في "Build and deployment" اختر:
     - **Source**: Deploy from a branch
     - **Branch**: gh-pages / (root)
   - احفظ التغييرات

4. **الموقع سيكون متاح على:**
   ```
   https://mgsm20101.github.io/portfolio/
   ```

---

## 📝 الملفات التي تم تعديلها:

### 1. `package.json`
- ✅ إضافة `homepage` URL
- ✅ إضافة سكريبتات `predeploy` و `deploy`

### 2. `vite.config.js`
- ✅ إضافة `base: '/portfolio/'` للمسارات الصحيحة

### 3. `.github/workflows/deploy.yml`
- ✅ ملف GitHub Actions للنشر التلقائي

---

## 🔧 الأوامر المتاحة:

```bash
# تشغيل في وضع التطوير
npm run dev

# بناء المشروع
npm run build

# معاينة البناء محلياً
npm run preview

# نشر على GitHub Pages (يدوياً)
npm run deploy
```

---

## ⚠️ ملاحظات مهمة:

1. **تأكد من اسم الـ repository:**
   - الاسم الحالي: `portfolio`
   - إذا كان مختلفاً، عدّل في:
     - `package.json` → `homepage`
     - `vite.config.js` → `base`

2. **الصور المحلية:**
   - ضع الصور في `public/assets-image/`
   - استخدم المسارات: `/portfolio/assets-image/image.jpg`

3. **التحديثات:**
   - **طريقة تلقائية**: فقط اعمل push للـ main branch
   - **طريقة يدوية**: استخدم `npm run deploy`

---

## 🎯 الخطوات السريعة:

```bash
# 1. ارفع الكود
git init
git add .
git commit -m "Deploy portfolio"
git branch -M main
git remote add origin https://github.com/mgsm20101/portfolio.git
git push -u origin main

# 2. فعّل GitHub Pages من Settings
# 3. انتظر دقائق قليلة
# 4. افتح: https://mgsm20101.github.io/portfolio/
```

---

## 📞 استكشاف الأخطاء:

### المشكلة: الموقع لا يعمل
- ✅ تحقق من تفعيل GitHub Pages في Settings
- ✅ انتظر 2-3 دقائق بعد أول push
- ✅ تأكد من أن الـ branch الصحيح محدد

### المشكلة: الصور لا تظهر
- ✅ تأكد من المسارات تبدأ بـ `/portfolio/`
- ✅ ضع الصور في مجلد `public/`

### المشكلة: CSS لا يعمل
- ✅ تأكد من `base: '/portfolio/'` في vite.config.js

---

**تم الإعداد بنجاح! 🎉**
