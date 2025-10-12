# 📄 Resume Folder

## ⚠️ IMPORTANT: Place Your PDF Resume Here

This folder is where your PDF resume should be stored for download functionality.

### 📝 Instructions:

1. **Prepare your resume as a PDF** (e.g., using Word, Google Docs, Canva, etc.)

2. **Name your PDF file**: `Sohith_Kancharana_Resume.pdf`

3. **Place it in this folder**: 
   ```
   public/resume/Sohith_Kancharana_Resume.pdf
   ```

4. **For GitHub + Vercel Deployment**:
   - Add your PDF to this folder
   - Commit and push to GitHub:
     ```bash
     git add public/resume/Sohith_Kancharana_Resume.pdf
     git commit -m "Add resume PDF"
     git push
     ```
   - Vercel will automatically deploy with your resume included

### 🔄 Alternative Naming:

If you want to use a different filename:
1. Update the path in `public/script.js` (line ~189):
   ```javascript
   const resumePath = 'resume/YOUR_FILE_NAME.pdf';
   ```

### 📂 Current Structure:
```
public/
├── resume/
│   ├── README.md (this file)
│   └── Sohith_Kancharana_Resume.pdf ← Place your PDF here
├── images/
├── index.html
├── styles.css
└── script.js
```

### ✅ Testing Locally:
- Open your portfolio in a browser
- Click "Resume" in the navigation
- The PDF should download automatically

---

**Note**: Make sure your PDF file is web-optimized (not too large) for faster downloads. Recommended size: under 2MB.

