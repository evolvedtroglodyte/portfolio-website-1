# Quick Deployment Steps

## Step 1: Push to GitHub

Run these commands in your terminal:

```bash
cd ~/Documents/Websites/portfolio-website
git push -u origin main
```

When prompted, enter:
- **Username**: evolvedtroglodyte
- **Password**: Your GitHub password or Personal Access Token

## Step 2: Update Netlify Environment Variable

1. Open browser and go to: https://app.netlify.com
2. Click on your **vishnuanapalli** site
3. Go to: **Site configuration** → **Environment variables**
4. Find the existing variable (might be named `ANTHROPIC_API_KEY`)
5. Click **Edit** or **Delete** and add new:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-proj-` or `sk-...`)
6. Click **Save**
7. Netlify will automatically redeploy (takes ~1-2 minutes)

## Step 3: Test the Chatbot

1. Wait for deployment to complete
2. Visit: https://vishnuanapalli.netlify.app/
3. Click the "Ask Vishnu" button
4. Try test messages:
   - "Hello" → Should respond: "Hi, nice to meet you"
   - "What's your name?" → Should respond: "Vish Bot at your assistance"
   - "What is your educational background?" → Should respond in first person

## Troubleshooting

If chatbot doesn't work:
- Check Netlify deploy logs for errors
- Verify `OPENAI_API_KEY` is set correctly
- Check browser console (F12) for JavaScript errors
- Make sure OpenAI API key has credits

---

**Note**: After completing these steps, the chatbot will be live with the new OpenAI integration and updated system prompt!
