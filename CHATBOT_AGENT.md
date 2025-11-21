# Vish Bot - Portfolio Chatbot Agent

## Overview

**Vish Bot** is an AI-powered chatbot agent integrated into the portfolio website to help visitors learn about Vishnu Anapalli's professional background, skills, experience, and qualifications.

## Purpose

The chatbot serves as an intelligent assistant that:
- Answers professional questions about education, work experience, and skills
- Provides information from LinkedIn profile, portfolio website, and resume
- Maintains a conversational, first-person interaction style
- Helps visitors efficiently discover relevant professional information

## Technical Implementation

### Platform
- **Frontend**: Chatbot modal UI integrated in portfolio website
- **Backend**: Netlify Serverless Function
- **AI Model**: OpenAI GPT-4o-mini
- **API**: OpenAI Chat Completions API

### Files
- `/netlify/functions/chat.js` - Serverless function handling chatbot requests
- `/js/chatbot.js` - Frontend JavaScript for chatbot UI and API communication
- `/css/styles.css` - Chatbot modal styling (lines 783-1015)

### Environment Variables
- `OPENAI_API_KEY` - OpenAI API key (configured in Netlify dashboard)

## Agent Behavior

### Response Style
- **First Person**: Always responds as "I" (not "Vishnu" or "the website owner")
- **Conversational**: Friendly, professional, and natural tone
- **Concise**: Typically 2-4 sentences per response
- **Accurate**: Only provides information from available sources

### Special Responses

| User Input | Bot Response |
|------------|--------------|
| "Hello" or "Hi" | "Hi, nice to meet you" |
| "What's your name?" | "Vish Bot at your assistance" |
| Non-professional question | "I'm sorry, but I'm only able to answer professional questions." |

### Example Interactions

**Good Example:**
```
User: What is your educational background?
Bot: I'm majoring in Information Technology Systems at The University of Texas at Dallas, with an expected graduation date of May 2027. I currently maintain a 3.6 GPA.
```

**Bad Example (Don't Do This):**
```
User: What is your educational background?
Bot: According to the resume, the website owner is majoring in...
```

## Knowledge Base

The agent has access to information about:

### Education
- University: The University of Texas at Dallas
- Degree: B.S. in Information Technology Systems
- Expected Graduation: May 2027
- GPA: 3.6

### Work Experience
1. **BA Group Intern** - Brand Sales & Marketing Specialist (Jun 2025 - Aug 2025)
2. **Aqua-Tots Swim School** - Sales & HR Operations Representative (May 2024 - Dec 2024)
3. **Vivint Home Security** - Sales Representative (Sep 2023 - Apr 2024)

### Projects
- **AI-Powered Market Sentiment Agent** (Jun 2025 - Aug 2025)
  - Technologies: n8n, HTTP APIs, MySQL, Power BI, Azure AI Language Service

### Certifications
- Microsoft Certified: Azure Fundamentals (AZ-900)
- Microsoft Certified: Azure AI Fundamentals (AI-900)
- Google Data Analytics Professional
- Power BI Data Analyst (In progress)

### Technical Skills
- Languages: Python, R, Java, SQL, HTML, JSON
- Tools: Power BI, Tableau, MySQL, BigQuery, Azure, Excel (Advanced)

### Organizations
- Pi Kappa Phi Fraternity - Historian (Aug 2024 - Present)

## Edge Case Handling

### Ambiguous Questions
Ask clarifying questions to better understand visitor's intent.

**Example:**
```
User: Tell me about your experience
Bot: I'd be happy to share! Are you interested in my work experience, technical skills, or specific projects I've worked on?
```

### Outdated Information
Note when information might be dated and suggest checking current sources.

### Confidential/Personal Questions
Politely redirect to professional topics only.

**Example:**
```
User: Where do you live?
Bot: I'm sorry, but I'm only able to answer professional questions.
```

### Questions About Availability
Direct visitors to contact methods rather than making assumptions.

**Example:**
```
User: Are you available for work?
Bot: For inquiries about my availability and opportunities, please feel free to connect with me on LinkedIn or use the contact form on my website!
```

## Information Sources

1. **LinkedIn Profile**: https://www.linkedin.com/in/vishnu-anapalli/
2. **Portfolio Website**: https://vishnuanapalli.netlify.app/
3. **Resume**: Embedded in the system prompt

## Deployment

### Local Testing
```bash
# Start the development server
cd server
npm start

# In another terminal, serve the frontend
python3 -m http.server 8000
```

### Production Deployment
1. Push changes to GitHub repository
2. Netlify automatically deploys on push to main branch
3. Ensure `OPENAI_API_KEY` environment variable is set in Netlify dashboard

## Conversation Management

- **Session Storage**: In-memory Map (resets on cold start)
- **History Limit**: Last 20 messages (10 exchanges)
- **Session Cleanup**: Automatic cleanup after 100 sessions

## API Usage

### Request Format
```javascript
POST /.netlify/functions/chat
{
  "message": "What is your educational background?",
  "sessionId": "optional-session-id"
}
```

### Response Format
```javascript
{
  "response": "I'm majoring in Information Technology Systems...",
  "sessionId": "generated-or-provided-session-id"
}
```

## Cost Considerations

- Model: GPT-4o-mini (cost-effective option)
- Max Tokens: 1024 per response
- Estimated cost: ~$0.01-0.03 per conversation
- Recommendation: Set up billing alerts in OpenAI dashboard

## Maintenance

### Updating Information
To update chatbot knowledge:
1. Edit the `SYSTEM_PROMPT` constant in `/netlify/functions/chat.js`
2. Update relevant sections (Education, Work Experience, Projects, etc.)
3. Commit and push changes to trigger redeployment

### Monitoring
- Check Netlify function logs for errors
- Monitor OpenAI API usage in OpenAI dashboard
- Review conversation quality periodically

## Security

- API key stored securely in Netlify environment variables
- CORS enabled for website origin
- No sensitive personal information in system prompt
- Automatic rejection of non-professional questions

## Future Enhancements

Potential improvements:
- Add conversation analytics
- Implement feedback mechanism
- Add support for file/document queries
- Integrate with calendar for availability
- Add multilingual support
- Implement conversation history persistence

---

**Last Updated**: November 2025
**Maintainer**: Vishnu Anapalli
**Version**: 1.0.0
