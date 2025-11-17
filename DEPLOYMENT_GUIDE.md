# Deployment Guide

This guide will help you deploy your portfolio website to the internet so anyone can access it!

## Overview

Your portfolio has two parts that need to be deployed:

1. **Frontend** (HTML, CSS, JS) - The website visitors see
2. **Backend** (Server) - The chatbot API that processes questions

## 🎯 Recommended Hosting (Free Tier Available)

- **Frontend:** Netlify or Vercel (100% free)
- **Backend:** Railway or Render (free tier available)

---

## Part 1: Deploy Backend Server

### Option A: Railway (Recommended)

Railway offers a generous free tier and is very easy to use.

#### Step 1: Prepare Your Code

1. Make sure all your code is in a GitHub repository:
```bash
cd portfolio-website
git init
git add .
git commit -m "Initial commit"

# Create a repo on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio-website.git
git push -u origin main
```

#### Step 2: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your portfolio repository
6. Railway will detect your Node.js app automatically

#### Step 3: Configure Environment

1. In Railway dashboard, click on your project
2. Go to "Variables" tab
3. Add environment variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your API key (starts with sk-ant-api03-)
4. Click "Add"

#### Step 4: Configure Root Directory

Railway needs to know where your server code is:

1. Go to "Settings" tab
2. Under "Build & Deploy"
3. Set "Root Directory" to `server`
4. Save changes

#### Step 5: Deploy

1. Railway will automatically deploy
2. Wait for deployment to complete (2-3 minutes)
3. Click "Generate Domain" to get your server URL
4. Copy the URL (something like: `https://portfolio-chatbot-production.up.railway.app`)

### Option B: Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - Name: `portfolio-chatbot`
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your API key
7. Select "Free" tier
8. Click "Create Web Service"
9. Copy your service URL

---

## Part 2: Deploy Frontend

### Option A: Netlify (Recommended)

#### Step 1: Prepare for Deployment

1. Update the chatbot API URL in `js/chatbot.js`:

Replace line 67:
```javascript
// OLD:
const response = await fetch('http://localhost:3000/api/chat', {

// NEW (use your Railway/Render URL):
const response = await fetch('https://your-server.railway.app/api/chat', {
```

2. Commit the change:
```bash
git add js/chatbot.js
git commit -m "Update API endpoint for production"
git push
```

#### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
   - Build command: Leave empty
   - Publish directory: `.` (root directory)
6. Click "Deploy site"

#### Step 3: Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions to connect your domain

Your site is now live! URL will be like: `https://your-site.netlify.app`

### Option B: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Configure:
   - Framework Preset: Other
   - Root Directory: `./`
6. Click "Deploy"

### Option C: GitHub Pages (Static Only)

**Note:** GitHub Pages won't work perfectly because the server is separate, but you can host the frontend:

1. Go to your GitHub repository
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save
6. Your site will be at: `https://yourusername.github.io/portfolio-website`

---

## Part 3: Final Configuration

### Update CORS Settings

If you're getting CORS errors, update `server/server.js`:

Replace line 11:
```javascript
// OLD:
app.use(cors());

// NEW (replace with your actual frontend URL):
app.use(cors({
    origin: 'https://your-site.netlify.app',
    credentials: true
}));
```

Commit and push:
```bash
git add server/server.js
git commit -m "Update CORS settings"
git push
```

Railway/Render will automatically redeploy.

---

## Testing Your Deployment

1. ✅ Open your frontend URL in a browser
2. ✅ Check all sections load correctly
3. ✅ Verify images display properly
4. ✅ Test video playback
5. ✅ Click all navigation links
6. ✅ Test the chatbot - ask it a question
7. ✅ Test on mobile (resize browser or use real device)
8. ✅ Check LinkedIn link works

---

## Troubleshooting

### "Chatbot not working"

**Check backend server status:**
1. Go to your Railway/Render dashboard
2. Check if service is running (green status)
3. View logs for errors
4. Verify environment variable is set

**Check API URL:**
1. Make sure `js/chatbot.js` has correct production URL
2. URL should start with `https://` not `http://`
3. No trailing slash

### "Images not loading"

**Common causes:**
1. File paths are case-sensitive - check capitalization
2. Make sure images are committed to git
3. Check browser console (F12) for 404 errors

### "CORS Error"

**Solution:**
1. Update CORS settings in `server/server.js` (see above)
2. Make sure frontend and backend URLs are correct
3. Redeploy backend after making changes

### "API Key Error"

**Check:**
1. Environment variable name is exactly `ANTHROPIC_API_KEY`
2. API key has no extra spaces
3. API key is valid (test in Anthropic console)

---

## Cost Monitoring

### Free Tier Limits

**Railway:**
- $5 free credit per month
- Approximately 500 hours of runtime
- Monitor usage in dashboard

**Render:**
- Free tier: 750 hours/month
- Service sleeps after 15 minutes of inactivity
- First request may be slow (cold start)

**Netlify/Vercel:**
- Generous free tier for personal projects
- 100GB bandwidth/month

### Anthropic API Costs

**Typical Usage:**
- 100 chatbot conversations ≈ $0.50 - $1.50
- 1000 conversations ≈ $5 - $15

**Set Budget Alerts:**
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Settings → Billing
3. Set usage alerts
4. Consider monthly spending limits

---

## Optimization Tips

### Frontend Performance

1. **Compress images:**
```bash
# Use online tools like TinyPNG or:
npm install -g imagemin-cli
imagemin images/*.jpg --out-dir=images/optimized
```

2. **Optimize video:**
- Keep under 20MB if possible
- Use H.264 codec
- Consider hosting on YouTube and embedding instead

### Backend Performance

**Render Free Tier:**
If using Render free tier, the server "sleeps" after 15 minutes of inactivity. First request will be slow.

**Solution:** Add this to your frontend to "wake up" the server:
```javascript
// Add to js/chatbot.js at the bottom
// Ping server every 10 minutes to keep it awake
setInterval(async () => {
    try {
        await fetch('https://your-server.railway.app/api/health');
    } catch (error) {
        console.log('Keep-alive ping failed');
    }
}, 600000); // 10 minutes
```

---

## Custom Domain Setup

### Frontend Domain (Netlify)

1. Buy domain from Namecheap, Google Domains, etc.
2. In Netlify: Settings → Domain management → Add custom domain
3. Update DNS records:
   - Type: A
   - Name: @
   - Value: (Netlify provides)
4. Wait for DNS propagation (up to 48 hours)

### Backend Domain (Railway)

1. In Railway project: Settings → Networking
2. Add custom domain
3. Update DNS records with provided values

---

## SSL/HTTPS

Both Netlify and Railway provide free SSL certificates automatically:
- ✅ Your site will use HTTPS
- ✅ Automatic renewal
- ✅ No configuration needed

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Monitor API Usage

Check Anthropic Console regularly:
1. Dashboard shows daily usage
2. Set up billing alerts
3. Review conversation logs

---

## Maintenance

### Regular Updates

**Monthly:**
- Check and update npm packages: `npm outdated`
- Review API usage and costs
- Test chatbot responses
- Check for broken links

**As Needed:**
- Update content (new achievements, skills)
- Add new gallery images
- Refresh video
- Update chatbot knowledge

---

## Sharing Your Portfolio

Once deployed, share your portfolio:

1. ✅ Add to LinkedIn profile (Featured section)
2. ✅ Include in email signature
3. ✅ Add to resume/CV
4. ✅ Share on social media
5. ✅ Include in job applications

**Pro Tip:** Create a short URL using Bitly or similar for easy sharing!

---

## Success Checklist

Before submitting your assignment:

- [ ] Frontend is deployed and accessible via HTTPS
- [ ] Backend is deployed and running
- [ ] Chatbot responds correctly to questions
- [ ] All images load properly
- [ ] Video plays without errors
- [ ] Mobile responsive (tested)
- [ ] LinkedIn link works
- [ ] No console errors (check F12)
- [ ] Page loads in under 3 seconds
- [ ] Content is personalized and accurate
- [ ] SSL certificate is active (green lock in browser)

---

**Congratulations! Your portfolio is now live on the internet!** 🎉

Share it with pride and watch those interview requests come in! 🚀
