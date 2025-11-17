# 🚨 DEPLOY NOW - Fix Chatbot Error

## Why You're Getting the Error:

The chatbot is showing "Sorry, I encountered an error" because you're testing the **OLD VERSION** of your site. You need to deploy the **NEW VERSION** with the Netlify Function I just created.

---

## ✅ FOLLOW THESE EXACT STEPS:

### STEP 1: Add API Key to Netlify (DO THIS FIRST!)

1. Open your browser and go to: https://app.netlify.com
2. Log in to your account
3. Click on your **"vishnuanapalli"** site (or whatever your site name is)
4. In the left sidebar, click **"Site configuration"**
5. Scroll down and click **"Environment variables"**
6. Click the **"Add a variable"** button (or "Add environment variables")
7. In the form that appears:
   - **Key**: Type exactly: `ANTHROPIC_API_KEY`
   - **Value**: Copy and paste this: `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`
   - **Scopes**: Leave as default (All scopes)
8. Click **"Create variable"** or **"Save"**

### STEP 2: Deploy Your New Site

#### Option A: Drag & Drop (EASIEST)

1. In Netlify, click **"Deploys"** at the top
2. Find the box that says **"Need to update your site? Drag and drop your site output folder here"**
3. Open Finder on your Mac
4. Navigate to: `/Users/vishnuanapalli/Documents/Websites/portfolio-website`
5. **Drag the ENTIRE "portfolio-website" folder** into the Netlify deploy box
6. Wait 2-3 minutes while it builds and deploys
7. You'll see "Site is live" when it's done

#### Option B: Manual Upload

1. In Netlify, go to **Deploys** tab
2. Scroll down to "Deploy manually"
3. Click "Browse to upload"
4. Select your entire portfolio-website folder
5. Wait for upload to complete

### STEP 3: Test Your Chatbot

**IMPORTANT**: After deployment, wait 2-3 minutes, then:

1. Go to https://vishnuanapalli.netlify.app/
2. **Hard refresh** your browser:
   - **Mac**: Press `Command + Shift + R`
   - **Windows**: Press `Ctrl + Shift + R`
   - **Phone**: Close the browser app completely and reopen
3. Click "Ask Vishnu"
4. Type: "what major are you"
5. You should get a response! ✅

---

## 🔍 If It Still Doesn't Work:

1. **Check the browser console for errors:**
   - Right-click on the page → "Inspect" → "Console" tab
   - Look for red error messages
   - Send me a screenshot

2. **Verify the API key was added:**
   - Go back to Netlify → Site configuration → Environment variables
   - Make sure `ANTHROPIC_API_KEY` is listed

3. **Check deployment status:**
   - Go to Netlify → Deploys
   - Make sure the latest deploy says "Published" (not "Failed")
   - If it says "Failed", click on it to see the error

4. **Clear your cache:**
   - Try opening in an Incognito/Private window
   - Or completely clear your browser cache

---

## 📱 Testing on Phone:

After deploying:
1. **Close your phone browser completely** (don't just close the tab)
2. Reopen browser
3. Go to https://vishnuanapalli.netlify.app/
4. Test the chatbot

---

## ⏰ Timeline:

- Adding API key: 1 minute
- Deploying site: 2-3 minutes
- Testing: 1 minute
- **Total: ~5 minutes** and your chatbot will work everywhere!

---

## 🎯 What Will Happen:

✅ Chatbot will work on your Mac
✅ Chatbot will work on your phone
✅ Chatbot will work for anyone you send the link to
✅ No more "localhost" errors
✅ No need to keep your Mac running

---

**Do these steps NOW and the chatbot will work perfectly!** 🚀

Let me know once you've deployed and I'll help you test it!
