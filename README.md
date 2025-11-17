# Professional Portfolio Website with AI Chatbot

A modern, responsive portfolio website featuring an integrated AI-powered chatbot built with Claude AI. This project showcases professional experience, goals, and personal interests in an engaging and interactive format.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Profile Section**: Comprehensive about me, embedded video, and professional goals
- **Resume Highlights**: Timeline-based presentation of key achievements
- **Photo Gallery**: Interactive gallery with lightbox functionality
- **AI Chatbot**: Intelligent chatbot powered by Claude AI that answers questions about you
- **Smooth Navigation**: Fixed navigation with smooth scrolling
- **SEO Optimized**: Semantic HTML and meta tags for better search visibility

## Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── main.js           # Main JavaScript functionality
│   └── chatbot.js        # Chatbot integration
├── images/               # Your images folder
│   ├── profile.jpg       # Profile photo
│   ├── gallery-1.jpg     # Gallery images
│   └── ...
├── videos/               # Your videos folder
│   └── about-me.mp4      # 30-second intro video
├── server/               # Backend server
│   ├── server.js         # Express server with Claude API
│   ├── package.json      # Server dependencies
│   └── .env.example      # Environment variables template
├── .gitignore
└── README.md
```

## Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Anthropic API Key** - [Get from Anthropic Console](https://console.anthropic.com/)
- A modern web browser
- Basic knowledge of terminal/command line

## Setup Instructions

### Step 1: Add Your Content

#### 1.1 Personal Information
Edit `index.html` and replace placeholder content:

- **Line 68**: Replace profile photo path with your actual photo
- **Lines 90-107**: Update "About Me" section with your LinkedIn information
- **Line 115**: Add your 30-second video path
- **Lines 165-195**: Update the 3 key achievements with your actual experience
- **Lines 202-209**: Add your actual skills

#### 1.2 Images and Videos

Add your media files to the appropriate folders:

```bash
# Profile photo
images/profile.jpg

# Gallery images (at least 6 images recommended)
images/gallery-1.jpg
images/gallery-2.jpg
images/gallery-3.jpg
images/gallery-4.jpg
images/gallery-5.jpg
images/gallery-6.jpg

# Video
videos/about-me.mp4
```

**Image Recommendations:**
- Profile photo: 500x500px, professional headshot
- Gallery images: 800x800px or larger, high quality
- Video: 30 seconds, MP4 format, 1920x1080 resolution

### Step 2: Set Up the Chatbot Server

#### 2.1 Install Dependencies

```bash
cd server
npm install
```

#### 2.2 Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your Anthropic API key
# You can use any text editor:
nano .env
# or
vim .env
# or open in your preferred editor
```

In the `.env` file, replace `your_anthropic_api_key_here` with your actual API key:

```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
PORT=3000
NODE_ENV=development
```

**Getting an Anthropic API Key:**
1. Go to [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it into your `.env` file

#### 2.3 Customize Chatbot Knowledge

Edit `server/server.js` and update the `SYSTEM_PROMPT` variable (lines 19-75) with your actual information from LinkedIn:

- Professional background and experience
- Specific achievements and projects
- Skills and competencies
- Career goals and aspirations
- Personal interests and hobbies

The more detailed and accurate this information, the better the chatbot will represent you!

### Step 3: Run the Website

You have two options:

#### Option A: Simple File Server (for testing)

If you just want to test the website without the chatbot:

```bash
# If you have Python 3 installed:
python3 -m http.server 8000

# Then open: http://localhost:8000
```

#### Option B: Full Setup with Chatbot (recommended)

1. **Start the backend server:**

```bash
cd server
npm start
```

You should see:
```
╔═══════════════════════════════════════════════════════╗
║  Portfolio Chatbot Server Running                    ║
║  Port: 3000                                          ║
║  Status: Ready to accept requests                    ║
╚═══════════════════════════════════════════════════════╝
```

2. **In a new terminal, start the frontend:**

```bash
# Go back to the main directory
cd ..

# Start a simple file server
python3 -m http.server 8000

# Or use npx if you prefer:
npx serve .
```

3. **Open your browser:**

Navigate to: `http://localhost:8000`

## Customization Guide

### Changing Colors

Edit `css/styles.css` and modify the CSS variables at the top (lines 11-25):

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent */
    --accent-color: #f59e0b;       /* Highlight color */
    /* ... etc */
}
```

### Modifying Sections

All sections can be edited in `index.html`:

- **Hero Section**: Lines 40-70
- **About Me**: Lines 73-123
- **Professional Goals**: Lines 126-181
- **Resume Highlights**: Lines 184-233
- **Gallery**: Lines 236-283
- **Fun Facts**: Lines 286-320
- **Contact**: Lines 323-341

### Adding More Gallery Items

In `index.html`, duplicate a gallery item block:

```html
<div class="gallery-item">
    <img src="images/gallery-X.jpg" alt="Gallery image X" loading="lazy">
    <div class="gallery-overlay">
        <div class="gallery-text">Your Caption</div>
    </div>
</div>
```

## Deployment

### Deploy to Netlify (Frontend)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --dir=. --prod
```

### Deploy Server to Railway/Render/Heroku

#### For Railway:
1. Sign up at [railway.app](https://railway.app)
2. Create a new project
3. Connect your GitHub repository
4. Add environment variables in Railway dashboard
5. Deploy

#### For Render:
1. Sign up at [render.com](https://render.com)
2. Create a new Web Service
3. Connect your repository
4. Set build command: `cd server && npm install`
5. Set start command: `cd server && npm start`
6. Add environment variables
7. Deploy

### Important: Update API Endpoint

After deploying your server, update the API endpoint in `js/chatbot.js` (line 67):

```javascript
// Change from:
const response = await fetch('http://localhost:3000/api/chat', {

// To your deployed URL:
const response = await fetch('https://your-server.railway.app/api/chat', {
```

## Troubleshooting

### Chatbot Not Working

1. **Check server is running**: You should see the server startup message
2. **Verify API key**: Make sure your `.env` file has the correct API key
3. **Check browser console**: Press F12 and look for errors
4. **CORS errors**: Make sure both frontend and backend are running

### Images Not Loading

1. **Check file paths**: Ensure images are in the `images/` folder
2. **File names**: Match exactly (case-sensitive on some systems)
3. **Supported formats**: Use .jpg, .jpeg, .png, or .webp

### Video Not Playing

1. **Format**: Ensure video is in MP4 format
2. **Codec**: Use H.264 codec for best compatibility
3. **File size**: Keep under 50MB for better loading
4. **Path**: Verify the video path in index.html is correct

## Adding LinkedIn Information

To extract your LinkedIn information:

1. **Visit your LinkedIn profile**
2. **Copy content for each section**:
   - About/Summary → Use in "About Me" section
   - Experience → Use for "Resume Highlights"
   - Skills → Update in "Core Competencies"
   - Current position → Update in hero subtitle

3. **For the chatbot**: Copy all relevant information into `server/server.js` SYSTEM_PROMPT

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Fully responsive

## Performance Optimization

- Images are lazy-loaded for faster initial page load
- CSS and JS are minified for production
- Smooth scroll behavior is hardware-accelerated
- Chatbot conversations are managed efficiently

## Security Notes

- **Never commit `.env` file** - It's in .gitignore by default
- **API Key**: Keep your Anthropic API key secret
- **CORS**: The server has CORS enabled for development. Restrict origins for production.

## Cost Considerations

The Claude API operates on a pay-per-use model:
- Claude 3.5 Sonnet: ~$0.003 per 1K input tokens, ~$0.015 per 1K output tokens
- A typical conversation (10 exchanges) costs approximately $0.05-0.15
- Set up billing alerts in your Anthropic account

## Support

If you encounter issues:

1. Check this README thoroughly
2. Verify all prerequisites are installed
3. Check browser console for errors (F12)
4. Ensure server is running and API key is valid

## License

MIT License - Feel free to use this for your portfolio!

## Credits

- **Built by**: Vishnu Anapalli
- **AI Integration**: Anthropic Claude API
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins, Inter)

---

**Good luck with your portfolio! This project is designed to impress potential employers with both its professional presentation and innovative AI integration.**
