# 🚀 Sohith Kancharana - AI Engineer Portfolio

A stunning, futuristic portfolio with a **HUD-style interface** featuring circular segment navigation and interactive animations.

## ✨ Features

- 🎯 **Circular Navigation** - 9 segments arranged in a perfect circle around your image
- 💫 **Futuristic Design** - Neon glows, rotating rings, and smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile (all screen sizes)
  - 💻 Desktop (1920px+)
  - 🖥️ Laptop (1024px - 1920px)
  - 📱 Tablet (768px - 1024px)
  - 📱 Mobile (480px - 768px)
  - 📱 Small Mobile (< 480px)
  - 🔄 Landscape orientation support
- ⚡ **Fast Loading** - Optimized for performance
- 🎨 **Interactive** - Click segments to see detailed information
- 📄 **PDF Resume Download** - One-click resume download functionality

## 📂 Project Structure

```
My Portfolio/
├── public/                  # All files for deployment
│   ├── images/             # Profile images
│   │   └── Sohith Image Object.png
│   ├── resume/             # PDF resume folder
│   │   ├── README.md       # Resume setup instructions
│   │   └── Sohith_Kancharana_Resume.pdf  ← Place your PDF here
│   ├── index.html          # Main HTML file
│   ├── styles.css          # All styling
│   └── script.js           # Interactive features
├── .vercelignore           # Vercel ignore rules
├── package.json            # NPM configuration
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)

#### Option 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to project directory:
   ```bash
   cd "C:\Users\Sohith\Downloads\My Portfolio"
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - **Set up and deploy?** → Yes
   - **Which scope?** → Your account
   - **Link to existing project?** → No
   - **Project name?** → sohith-kancharana-portfolio
   - **Directory?** → ./
   - **Override settings?** → No

5. Your portfolio will be live! 🎉

#### Option 2: Using Vercel Dashboard

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your Git repository OR drag & drop this folder
4. Vercel will auto-detect the configuration
5. Click **"Deploy"**
6. Done! Your portfolio is live! 🎉

### Deploy to Netlify (Alternative)

1. Go to [https://netlify.com](https://netlify.com)
2. Drag & drop the `public` folder
3. Your site is live!

## 🎯 Segment Priority Order

The segments are arranged for maximum recruiter impact:

1. **ABOUT ME** - Top center (first impression)
2. **EXPERIENCE** - Left upper (work history)
3. **SKILLS** - Right upper (technical expertise)
4. **ACHIEVEMENTS** - Left middle (awards)
5. **PROFESSIONAL** - Right middle (work projects)
6. **PERSONAL** - Left lower (side projects)
7. **EDUCATION** - Right lower (academic)
8. **FREELANCE** - Bottom left (client work)
9. **CONTACT** - Bottom right (get in touch)

## 🛠️ Local Development

### Quick Start

1. Double-click `start.bat` (Windows)
   
   OR

2. Open `public/index.html` in your browser

### Using a Local Server

```bash
# Install serve globally
npm install -g serve

# Run local server
npm start

# Or directly:
npx serve public
```

Then visit: `http://localhost:3000`

## 📝 Customization

### Update Your Information

1. **Profile Image**: Replace `public/images/Sohith Image Object.png` with your image
2. **Resume PDF**: Place your PDF resume in `public/resume/` folder (see instructions below)
3. **Content**: Edit `public/index.html` - Update text in each segment template
4. **Colors**: Edit `public/styles.css` - Change CSS variables in `:root`
5. **Animations**: Edit `public/script.js` - Modify animation speeds and effects

### 📄 Setting Up PDF Resume Download

**IMPORTANT**: For the resume download to work, you need to add your PDF resume:

1. **Create/Export your resume as PDF** (e.g., from Word, Google Docs, Canva)

2. **Name it**: `Sohith_Kancharana_Resume.pdf`

3. **Place it here**: `public/resume/Sohith_Kancharana_Resume.pdf`

4. **For GitHub + Vercel**:
   ```bash
   # Add your PDF to git
   git add public/resume/Sohith_Kancharana_Resume.pdf
   
   # Commit and push
   git commit -m "Add resume PDF"
   git push
   ```

5. **Test locally**: 
   - Open your portfolio
   - Click "Resume" in navigation
   - PDF should download

**Note**: Keep your PDF under 2MB for faster downloads.

**Different filename?** Update the path in `public/script.js` (line ~189):
```javascript
const resumePath = 'resume/YOUR_FILE_NAME.pdf';
```

### Key Files

- **`public/index.html`** - All content and structure
- **`public/styles.css`** - All styling and animations
- **`public/script.js`** - All interactive features

## 🎨 Color Scheme

- **Primary**: Pure Black (#000000)
- **Accent Cyan**: #00d4ff
- **Accent Purple**: #a855f7
- **Accent Pink**: #ff0066
- **Text**: White & Gray tones

## 📧 Contact

- **Email**: sohithkancharana@gmail.com
- **Phone**: +91 9381536325
- **LinkedIn**: [kancharana-sohith](https://www.linkedin.com/in/kancharana-sohith-5b17461a0)

## 📜 License

MIT License - Feel free to use this template for your own portfolio!

---

**Built with passion and innovation** 🚀

*A futuristic portfolio that stands out from the crowd!*
