# Quick Deployment Guide

This guide will help you deploy your portfolio website in under 5 minutes.

## Fastest Method: GitHub Pages

### Prerequisites
- A GitHub account
- Git installed on your computer

### Steps

1. **Initialize Git repository** (in the portfolio-website folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: My professional portfolio"
   ```

2. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `portfolio` (or any name you like)
   - Make it Public
   - DO NOT initialize with README
   - Click "Create repository"

3. **Push your code to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click "Save"

5. **Access your live website:**
   - Wait 2-3 minutes for deployment
   - Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`
   - This URL will appear in the Pages settings

### Making Updates

After you make changes to your website:

```bash
git add .
git commit -m "Updated portfolio content"
git push
```

Your site will automatically update in 1-2 minutes.

---

## Alternative: Netlify (Drag & Drop)

### Steps

1. **Go to https://app.netlify.com/drop**

2. **Drag and drop** your `portfolio-website` folder into the box

3. **Your site is live!** Netlify gives you a random URL like:
   `https://random-name-12345.netlify.app`

4. **Optional: Customize the domain:**
   - Click "Site settings"
   - Click "Change site name"
   - Choose a better name: `yourname-portfolio.netlify.app`

### Making Updates

1. Make changes to your files locally
2. Go to your Netlify dashboard
3. Drag and drop the folder again to update

---

## Alternative: Vercel

### Steps

1. **Install Vercel:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd portfolio-website
   vercel
   ```

3. **Follow the prompts:**
   - "Set up and deploy? Y
   - "Which scope? (your account)
   - "Link to existing project? N
   - "What's your project's name? my-portfolio
   - "In which directory is your code located? ./

4. **Your site is live!**
   - Vercel provides a URL: `https://my-portfolio-xxx.vercel.app`

### Making Updates

```bash
vercel --prod
```

---

## Custom Domain (Optional)

If you own a domain name (like `yourname.com`), you can connect it:

### For GitHub Pages:
1. Go to repository Settings > Pages
2. Enter your custom domain
3. Follow DNS instructions from your domain provider

### For Netlify:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow DNS instructions

### For Vercel:
1. Go to Project settings > Domains
2. Add your domain
3. Follow DNS instructions

---

## Recommended: GitHub Pages

**Why?**
- ✅ Free forever
- ✅ Automatic updates when you push code
- ✅ Professional GitHub URL
- ✅ Easy to manage
- ✅ Good for portfolios and resumes

---

## Troubleshooting

### GitHub Pages shows 404
- Make sure `index.html` is in the root of your repository
- Wait 5 minutes after enabling Pages
- Check that the branch is `main` and folder is `/ (root)`

### Changes not showing up
- Wait 2-3 minutes for deployment
- Hard refresh your browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

### Git push asks for username/password
- Use a Personal Access Token instead of password
- Generate one at: https://github.com/settings/tokens
- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

## Next Steps After Deployment

1. **Test your live site:**
   - Check on mobile phone
   - Test all navigation links
   - Verify video plays (if added)
   - Test LinkedIn button

2. **Share your portfolio:**
   - Add to your resume
   - Add to your LinkedIn profile
   - Share in email signatures
   - Include in job applications

3. **Track visitors (optional):**
   - Add Google Analytics
   - Use Netlify Analytics
   - Monitor GitHub repository traffic

---

**Congratulations! Your portfolio is now live! 🎉**
