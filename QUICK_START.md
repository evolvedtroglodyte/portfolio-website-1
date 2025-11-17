# Quick Start Guide

This guide will get your portfolio website up and running in 10 minutes!

## 🚀 Quick Setup (10 Minutes)

### 1. Get Your Anthropic API Key (2 minutes)

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Click "API Keys" in the sidebar
4. Click "Create Key"
5. Copy your API key (starts with `sk-ant-api03-`)

### 2. Set Up the Server (3 minutes)

```bash
# Navigate to the server folder
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env and paste your API key
nano .env
# (Press Ctrl+X, then Y, then Enter to save)
```

### 3. Add Your Content (3 minutes)

#### Essential Files to Add:

1. **Profile Photo**: Add `images/profile.jpg` (your headshot)
2. **Video**: Add `videos/about-me.mp4` (30-second intro)
3. **Gallery**: Add 6 images as `images/gallery-1.jpg` through `images/gallery-6.jpg`

#### Quick Image Tips:
- Use professional, high-quality photos
- Profile photo: square aspect ratio (500x500px recommended)
- Gallery: can be from LinkedIn, professional events, hobbies, etc.

### 4. Run the Website (2 minutes)

Open TWO terminal windows:

**Terminal 1 - Backend Server:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
# From the main portfolio-website folder
python3 -m http.server 8000
```

**Open your browser:** http://localhost:8000

## ✅ Checklist

Before submitting your portfolio, make sure:

- [ ] Profile photo is added and displays correctly
- [ ] Video is embedded and plays
- [ ] All 6 gallery images are added
- [ ] Chatbot responds to questions (test it!)
- [ ] LinkedIn link is updated with your profile
- [ ] About Me section has your information
- [ ] Professional Goals reflect your aspirations
- [ ] Resume Highlights showcase your achievements
- [ ] All skills tags represent your competencies
- [ ] Website is responsive (test on mobile by resizing browser)

## 🎯 Customization Priority

### High Priority (Do These First):
1. Add your LinkedIn information to `index.html` About Me section
2. Update chatbot knowledge in `server/server.js` (SYSTEM_PROMPT)
3. Replace 3 Resume Highlights with your actual achievements
4. Update skills tags with your real skills

### Medium Priority:
5. Customize Professional Goals if needed
6. Update Fun Facts section with your hobbies
7. Change colors in `css/styles.css` to match your brand

### Low Priority:
8. Add more gallery images (beyond 6)
9. Customize animations
10. Add more sections

## 💡 Where to Find LinkedIn Information

1. **Go to your LinkedIn profile**
2. **About Section**: Copy to use in "About Me"
3. **Experience Section**: Use top 3 roles for "Resume Highlights"
4. **Skills Section**: Copy all skills for "Core Competencies"
5. **Current Title**: Update in hero section

## 🤖 Training the Chatbot

Edit `server/server.js` and update the SYSTEM_PROMPT with:

1. **Your background**: Education, work history
2. **Specific projects**: Names, technologies, outcomes
3. **Skills**: Technical and soft skills
4. **Achievements**: Awards, certifications, accomplishments
5. **Goals**: Short-term and long-term career goals
6. **Interests**: Hobbies, passions, activities
7. **Personality**: How you want to be represented

**Pro Tip**: The more specific details you add, the better the chatbot will represent you!

## 🐛 Common Issues

### "Server won't start"
- Make sure you ran `npm install` in the server folder
- Check that your API key is in the `.env` file
- Verify Node.js is installed: `node --version`

### "Images not showing"
- Check file names match exactly (case-sensitive)
- Ensure images are in the `images/` folder
- Try hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### "Chatbot not responding"
- Check server terminal for errors
- Verify `.env` file has correct API key
- Make sure server is running on port 3000
- Check browser console (F12) for errors

### "Video not playing"
- Ensure video is MP4 format
- Try a smaller file size (under 50MB)
- Verify path in index.html matches your file

## 📱 Testing Checklist

Test your portfolio:

1. **Desktop**: Full browser window
2. **Tablet**: Resize browser to ~768px width
3. **Mobile**: Resize browser to ~375px width
4. **Navigation**: Click all nav links
5. **Gallery**: Click images to see lightbox
6. **Chatbot**: Ask it questions
7. **Video**: Play the video
8. **Links**: Click LinkedIn link

## 🚀 Ready to Deploy?

Once everything works locally:

1. **Frontend**: Deploy to Netlify or Vercel (free)
2. **Backend**: Deploy to Railway or Render (free tier available)
3. **Update chatbot.js**: Change localhost URL to your deployed server URL

See README.md for detailed deployment instructions!

## 🎓 For Your Academic Assignment

Make sure to emphasize:

1. **Professional Design**: Clean, modern UI/UX
2. **Innovative Features**: AI chatbot integration
3. **Technical Skills**: Full-stack development (Frontend + Backend + AI)
4. **Responsive Design**: Works on all devices
5. **Personal Branding**: Showcases your unique personality and goals

This portfolio demonstrates not just coding skills, but also:
- Understanding of modern web technologies
- Ability to integrate cutting-edge AI
- Professional presentation skills
- Attention to detail and user experience

---

**You've got this! Build something amazing that showcases who you are!** 🌟
