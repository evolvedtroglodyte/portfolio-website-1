# Quick Start Guide

Get your portfolio up and running in 3 simple steps!

## Step 1: Preview Your Site (1 minute)

Open the portfolio in your browser to see what it looks like:

### Option A: Double-click
Simply double-click the `index.html` file

### Option B: Use a local server (recommended)
```bash
cd portfolio-website
python3 -m http.server 8000
```
Then visit: http://localhost:8000

---

## Step 2: Customize Content (30 minutes)

Follow the **CUSTOMIZATION-CHECKLIST.md** file, which includes:

### Must-Do Items:
1. ✏️ Replace your name (search for "Vishnu Anapalli")
2. 🎓 Update your major and school
3. 🔗 Update all LinkedIn URLs (3 places)
4. 📝 Write your About Me paragraph
5. 🎯 Update your goals and objectives
6. ⭐ Add your 3 key achievements to Highlights
7. 🎨 Customize your interests

### Quick Customization Tips:
- **Find & Replace is your friend!** Use Ctrl+F (or Cmd+F on Mac)
- Edit the `index.html` file with any text editor
- Don't worry about breaking things - you can always start over
- Test in your browser after each major change

---

## Step 3: Deploy Your Site (5 minutes)

### Fastest Method: GitHub Pages

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository:**
   - Go to https://github.com/new
   - Name it: `portfolio`
   - Make it Public
   - Click "Create repository"

3. **Upload your files:**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "My professional portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your GitHub username)

4. **Enable GitHub Pages:**
   - Go to Settings > Pages
   - Source: Deploy from branch
   - Branch: main / root
   - Save

5. **Visit your live site!**
   - URL: `https://YOUR_USERNAME.github.io/portfolio/`
   - Wait 2-3 minutes for it to go live

**See DEPLOYMENT.md for more detailed instructions and alternative hosting options.**

---

## 🎥 Optional: Add Your Video (10 minutes)

After you've customized the content:

1. **Record a 30-second video** answering "Tell me about yourself"
2. **Save it as:** `assets/videos/introduction.mp4`
3. **Update the HTML** (see README.md "Adding Your Video" section)

**Video tips:**
- Use good lighting
- Dress professionally
- Smile and make eye contact with the camera
- Practice a few times before recording

---

## 📁 File Structure Overview

```
portfolio-website/
├── index.html                    ← Your main website file (CUSTOMIZE THIS!)
├── css/styles.css               ← All the styling (change colors here)
├── js/script.js                 ← JavaScript for interactions
├── assets/
│   ├── images/                  ← Put images here
│   └── videos/                  ← Put your intro video here
├── README.md                    ← Full documentation
├── CUSTOMIZATION-CHECKLIST.md   ← Step-by-step customization guide
├── DEPLOYMENT.md                ← Detailed deployment instructions
└── QUICK-START.md              ← This file!
```

---

## 🎨 Want to Change Colors?

Edit `css/styles.css` at the top (lines 4-16):

### Current (Professional Blue):
```css
--primary-color: #2563eb;
--primary-dark: #1e40af;
--primary-light: #3b82f6;
```

### Try These Instead:

**Tech Green:**
```css
--primary-color: #10b981;
--primary-dark: #059669;
--primary-light: #34d399;
```

**Corporate Purple:**
```css
--primary-color: #7c3aed;
--primary-dark: #6d28d9;
--primary-light: #8b5cf6;
```

**Modern Teal:**
```css
--primary-color: #14b8a6;
--primary-dark: #0f766e;
--primary-light: #2dd4bf;
```

Save the file and refresh your browser to see the changes!

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio with the world:

- [ ] All content is customized (no "Vishnu Anapalli" references)
- [ ] LinkedIn URLs are updated
- [ ] Spell-checked everything
- [ ] Tested all navigation links
- [ ] Viewed on mobile phone
- [ ] Shared with a friend for feedback

---

## 🆘 Need Help?

### Common Issues:

**"My changes aren't showing!"**
- Hard refresh your browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**"The styling looks broken!"**
- Make sure `css/styles.css` exists
- Check that you didn't accidentally delete any HTML tags

**"Navigation links don't work!"**
- Make sure you're using a local server or opened from the deployed site
- File:// protocol has limitations

**"I broke something!"**
- Don't panic! You can always start over by re-downloading the original files

### Where to Get Help:
1. Check the README.md file
2. Read CUSTOMIZATION-CHECKLIST.md
3. Google specific error messages
4. Ask your instructor or classmates

---

## 🚀 You're Ready!

Your portfolio includes:

✅ **Professional Design** - Modern, clean, and impressive
✅ **Fully Responsive** - Looks great on all devices
✅ **Smooth Animations** - Professional transitions and effects
✅ **Easy to Customize** - Clear instructions and well-commented code
✅ **Ready to Deploy** - Host-ready for GitHub Pages, Netlify, or Vercel

**Time to make it yours and launch it! Good luck! 🎉**

---

## 📚 Documentation Files:

- **README.md** - Complete documentation (read this for full details)
- **CUSTOMIZATION-CHECKLIST.md** - Step-by-step guide to personalizing content
- **DEPLOYMENT.md** - Detailed hosting instructions
- **QUICK-START.md** - This file (fastest way to get started)

Start with this Quick Start guide, then refer to the other docs as needed!
