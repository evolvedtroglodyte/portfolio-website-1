# Portfolio Customization Checklist

Use this checklist to ensure you've personalized all sections of your portfolio before deploying.

## 🎯 Essential Customizations (Do These First!)

### 1. Personal Information in Hero Section
**File:** `index.html` (Lines 55-65)

- [ ] Replace "Vishnu Anapalli" with your full name
- [ ] Update "Computer Information Systems @ UTD" with your major/school
- [ ] Change the tagline "Future Technology Consultant | AI Solutions Architect"
- [ ] Verify LinkedIn URL: https://www.linkedin.com/in/YOUR-PROFILE/

**Search for:** `<span class="name">Vishnu Anapalli</span>`

---

### 2. About Me Paragraph
**File:** `index.html` (Lines 79-95)

- [ ] Write your own professional introduction (150-200 words)
- [ ] Mention your current education
- [ ] Include your career goals
- [ ] Highlight what makes you unique
- [ ] Explain your passion for your field

**Search for:** `<p class="about-paragraph">`

**Tips:**
- Answer: Who am I? What do I study? What are my goals?
- Be authentic and professional
- Show personality but stay business-appropriate
- Proofread carefully!

---

### 3. Update All LinkedIn URLs
**File:** `index.html` (3 locations)

- [ ] Line 61: Hero section "LinkedIn" button
- [ ] Line 277: Contact section "Connect on LinkedIn" button
- [ ] Line 302: Footer LinkedIn icon

**Search for:** `https://www.linkedin.com/in/vishnu-anapalli/`
**Replace with:** `https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/`

---

### 4. Statistics Cards
**File:** `index.html` (Lines 97-119)

- [ ] Card 1: Update "CIS" and "Major @ UTD"
- [ ] Card 2: Update "AI" and specialization focus
- [ ] Card 3: Update career goals description

**Make them specific to you!**

---

### 5. Goals Section
**File:** `index.html` (Lines 169-217)

#### Career Objectives (4-5 items)
- [ ] Goal 1: Your primary career objective
- [ ] Goal 2: Specific role or company type you want
- [ ] Goal 3: Area of specialization
- [ ] Goal 4: Leadership or impact goals

#### Skill Development (5-6 items)
- [ ] Technical skill 1
- [ ] Technical skill 2
- [ ] Business/soft skill
- [ ] Certifications you want
- [ ] Communication skills

**Search for:** `<ul class="goal-list">`

---

### 6. Highlights Section (Most Important!)
**File:** `index.html` (Lines 222-268)

Update all three highlight cards with YOUR achievements:

#### Highlight 1
- [ ] Choose relevant icon (fa-code, fa-trophy, fa-lightbulb, etc.)
- [ ] Write compelling title
- [ ] Describe achievement (3-4 sentences using STAR method)
- [ ] Add 2-4 relevant skill tags

#### Highlight 2
- [ ] Choose relevant icon
- [ ] Write compelling title
- [ ] Describe achievement
- [ ] Add skill tags

#### Highlight 3
- [ ] Choose relevant icon
- [ ] Write compelling title
- [ ] Describe achievement
- [ ] Add skill tags

**Tips:**
- Use the STAR method: Situation, Task, Action, Result
- Quantify when possible (numbers, percentages, scale)
- Focus on impact and outcomes
- Make each unique and specific

**Icon Options:**
- `fa-code` - Programming/Development projects
- `fa-graduation-cap` - Academic achievements
- `fa-trophy` - Awards and recognition
- `fa-lightbulb` - Innovation and creative solutions
- `fa-users` - Leadership and teamwork
- `fa-chart-line` - Growth and measurable results
- `fa-rocket` - Launched projects
- `fa-briefcase` - Work experience

---

### 7. Interests Section
**File:** `index.html` (Lines 273-314)

- [ ] Interest 1: Title, icon, and description
- [ ] Interest 2: Title, icon, and description
- [ ] Interest 3: Title, icon, and description
- [ ] Interest 4: Title, icon, and description

**Tips:**
- Mix professional and personal interests
- Show you're well-rounded
- Keep it professional (avoid controversial topics)
- Connect to your career when possible

**Search for:** `<div class="interest-card">`

---

### 8. Contact Section
**File:** `index.html` (Lines 319-341)

- [ ] Review the contact description text
- [ ] Verify LinkedIn button URL (again!)
- [ ] Optional: Update the contact note text

---

### 9. Footer
**File:** `index.html` (Lines 343-357)

- [ ] Update copyright year if needed: `&copy; 2024 Vishnu Anapalli`
- [ ] Replace with your name
- [ ] Verify LinkedIn URL in footer (3rd location!)

---

## 🎨 Optional Customizations (Nice to Have)

### 10. Color Scheme
**File:** `css/styles.css` (Lines 4-16)

- [ ] Keep default professional blue, OR
- [ ] Change to one of the suggested color schemes in README
- [ ] Test the new colors on all sections

**Default colors:**
```css
--primary-color: #2563eb;
--primary-dark: #1e40af;
--primary-light: #3b82f6;
```

---

### 11. Fonts
**File:** `index.html` (Line 12) and `css/styles.css`

- [ ] Keep Inter and Playfair Display, OR
- [ ] Choose new fonts from Google Fonts
- [ ] Update font imports and CSS variables
- [ ] Test readability on mobile

---

### 12. Page Title
**File:** `index.html` (Line 7)

- [ ] Update: `<title>Vishnu Anapalli | Professional Portfolio</title>`
- [ ] Change to: `<title>Your Name | Professional Portfolio</title>`

---

### 13. Meta Description
**File:** `index.html` (Line 6)

- [ ] Update the meta description with your information
- [ ] Keep it under 160 characters
- [ ] Include your name, school, and career goals

**Current:** `<meta name="description" content="Vishnu Anapalli - Professional Portfolio | CIS Student @ UTD | Aspiring Technology Consultant & AI Solutions Developer">`

---

## 🎥 Video Integration

### 14. Add Your 30-Second Video
**File:** `index.html` (Lines 125-143)

- [ ] Record your professional introduction video
- [ ] Optimize video (under 10MB, MP4 format)
- [ ] Save as `assets/videos/introduction.mp4`
- [ ] Optional: Create thumbnail `assets/images/video-thumbnail.jpg`
- [ ] Replace the video placeholder code (instructions in README)

**Video Content Should Answer:**
- Who are you?
- What are you studying?
- What are your career goals?
- What makes you unique?

---

## ✅ Pre-Launch Checklist

Before deploying, verify:

### Content Review
- [ ] All names and titles are spelled correctly
- [ ] No placeholder text remains (search for "Vishnu Anapalli")
- [ ] All LinkedIn URLs are updated (3 locations)
- [ ] Grammar and spelling checked throughout
- [ ] Professional tone maintained throughout

### Functionality Testing
- [ ] Open `index.html` in browser locally
- [ ] Click all navigation links - do they work?
- [ ] Test mobile menu (resize browser to < 768px width)
- [ ] Click LinkedIn buttons - do they go to your profile?
- [ ] Scroll through entire page - any visual issues?
- [ ] Test on actual mobile device if possible

### Visual Check
- [ ] Hero section looks professional
- [ ] About section is readable and not too long
- [ ] Goals are well-formatted and clear
- [ ] Highlights stand out and are scannable
- [ ] Interests section is complete
- [ ] Contact section works
- [ ] Footer is updated

### Technical Check
- [ ] All CSS styles loading correctly
- [ ] JavaScript working (smooth scroll, mobile menu)
- [ ] No console errors (press F12 in browser)
- [ ] Page loads quickly

---

## 🚀 Deployment Checklist

- [ ] Choose hosting platform (GitHub Pages, Netlify, or Vercel)
- [ ] Follow deployment instructions in DEPLOYMENT.md
- [ ] Verify live site loads correctly
- [ ] Test all links on live site
- [ ] Test on mobile device
- [ ] Share URL with a friend for feedback

---

## 📊 Post-Launch

- [ ] Add portfolio URL to your resume
- [ ] Add portfolio URL to LinkedIn profile
- [ ] Share in email signature
- [ ] Include in job applications
- [ ] Optional: Set up Google Analytics to track visitors

---

## 🎯 Quick Find & Replace

Use these search terms to find sections that need customization:

1. **Search:** `Vishnu Anapalli` → Replace with your name (3-4 places)
2. **Search:** `vishnu-anapalli` → Replace with your LinkedIn username (3 places)
3. **Search:** `UTD` → Replace with your school abbreviation
4. **Search:** `Computer Information Systems` → Replace with your major
5. **Search:** `Technology Consultant` → Replace with your career goal

---

## 💡 Pro Tips

1. **Write Naturally:** Don't use AI-generated content that sounds generic. Be authentic.

2. **Proofread:** Have someone else read your content before deploying.

3. **Mobile First:** Test on your phone - many recruiters browse on mobile.

4. **Be Specific:** Instead of "good at programming," say "developed 5 Python applications"

5. **Show Personality:** It's okay to let your personality shine through professionally.

6. **Update Regularly:** Keep your portfolio current as you gain experience.

7. **Get Feedback:** Show to mentors, professors, or career services before using.

---

## ❓ Common Questions

**Q: Do I need to fill out every section?**
A: Yes! Empty or generic sections look unprofessional.

**Q: Can I add more sections?**
A: Yes, but keep the core structure. You can add Projects, Skills, etc.

**Q: How long should my About Me be?**
A: 150-200 words. Enough to be comprehensive, short enough to keep attention.

**Q: Should I include a photo?**
A: Optional. If you do, make sure it's professional (LinkedIn-quality).

**Q: Can I skip the video?**
A: The placeholder looks fine, but adding your video makes a bigger impact.

---

**Ready to deploy? Double-check this list and you'll have an amazing portfolio! 🎉**
