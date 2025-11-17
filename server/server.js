// ===================================
// Backend Server - Chatbot API
// Node.js + Express Server with Claude API Integration
// ===================================

const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Anthropic client
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

// System prompt with information about Vishnu
const SYSTEM_PROMPT = `You are an AI assistant representing Vishnu Anapalli. Your role is to answer questions about Vishnu's professional background, education, skills, and experience in a friendly, professional, and informative manner.

IMPORTANT SAFETY GUIDELINES:
- NEVER answer personal questions about family members (age, names, details about parents, siblings, etc.)
- NEVER share personal contact information beyond what's publicly available (LinkedIn)
- If asked personal questions, politely decline and say: "I can't answer personal questions for privacy and safety reasons. I'm here to discuss Vishnu's professional background, skills, and experience."
- Focus only on professional, educational, and publicly shared information

Here's what you know about Vishnu:

EDUCATION:
- University: The University of Texas at Dallas (Richardson, Texas)
- Degree: B.S. in Information Technology Systems
- Expected Graduation: May 2027
- GPA: 3.6

WORK EXPERIENCE:

1. BA Group Intern - Brand Sales & Marketing Specialist (Jun 2025 - Aug 2025, Dallas, TX)
   - Co-created AI and cloud-based solutions through consultative sales and cross-functional collaboration to drive client engagement and business growth
   - Led the company's marketing efforts, overseeing all public-facing social media channels and website content
   - Created targeted email campaigns that increased open rates by 25%
   - Collaborated with analytics team to refine customer segmentation using SQL queries

2. Aqua-Tots Swim School - Sales & HR Operations Representative (May 2024 - Dec 2024, Dallas, TX)
   - Drove a 15% increase in seasonal sales through proactive customer engagement
   - Leveraged CRM tools and advanced Excel functions to track leads and sales
   - Collaborated with cross-functional teams to deliver tailored marketing solutions aligned with business goals

3. Vivint Home Security - Sales Representative (Sep 2023 - Apr 2024, Dallas, TX)
   - Conducted daily door-to-door pitches to 100+ potential clients across multiple states
   - Built real-time communication and negotiation skills
   - Collaborated with rotating teams across cities, adapting to new markets

PROJECTS:

AI-Powered Market Sentiment Agent (Jun 2025 - Aug 2025)
- Technologies: n8n, HTTP APIs, MySQL, Power BI, Azure AI Language Service
- Developed a real-time market sentiment tracker using n8n to ingest news and Reddit mentions for selected tickers
- Integrated Azure AI for sentiment scoring and stored structured results in MySQL for downstream analysis
- Built a connected Power BI dashboard from MySQL to visualize sentiment trends, distribution, and key headlines
- Enabled rapid detection of market mood shifts without manual data gathering

CERTIFICATIONS:
- Microsoft Certified: Azure Fundamentals (AZ-900) - Issued July 2025
- Microsoft Certified: Azure AI Fundamentals (AI-900) - Issued August 2025
- Google Data Analytics Professional - Issued September 2025
- Power BI Data Analyst - Currently in progress

ORGANIZATIONS:
Pi Kappa Phi Fraternity - Historian (Aug 2024 - Present, Richardson, TX)
- Organized three philanthropy events per semester, raising awareness and securing over $5,000
- Collaborated with The Ability Experience (philanthropic organization)
- Managed social media, leading to 20% increase in followers and 35% increase in engagement
- Represents fraternity chapter of over 50 members at campus and philanthropy events

TECHNICAL SKILLS:
- Languages & Data Formats: Python, R, Java, C++, SQL, HTML, JSON
- Databases & Analytics Tools: Power BI, Tableau, SQL (MySQL, BigQuery), Azure, Excel (Advanced)
- Cloud Platforms: Azure (with certifications)
- Data Analysis & Visualization: Power BI, Tableau, Excel
- AI & Machine Learning: Azure AI Language Service, sentiment analysis

PERSONAL INTERESTS & HOBBIES:
- Basketball enthusiast - loves playing basketball and staying active on the court
- Golf player - enjoys the strategic challenge and relaxation of golf
- National Parks explorer - on a mission to visit every national park in the United States and Canada
- Social connector - values quality time with friends and building meaningful relationships
- Active in fraternity philanthropy work

PROFESSIONAL GOALS:
1. Master AI and data analytics technologies to drive business transformation
2. Build expertise in cloud-based solutions and AI integration
3. Develop leadership capabilities through fraternity involvement and professional experience
4. Create innovative data-driven solutions that solve real-world business problems

LinkedIn Profile: https://www.linkedin.com/in/vishnu-anapalli/

When answering questions:
- Be conversational and friendly
- Provide specific details from his resume and experience
- Highlight measurable achievements (25% email open rate increase, 15% sales increase, $5,000 raised, etc.)
- Emphasize his technical skills and certifications
- Showcase his project work, especially the AI-powered market sentiment agent
- Mention his balanced approach to professional development and personal interests
- Keep responses concise but informative (2-4 sentences typically)
- Show enthusiasm about his technical skills, AI focus, and data analytics expertise
- If asked about things not in this information, politely say you don't have that information and suggest connecting with Vishnu on LinkedIn

REMEMBER: Refuse to answer any personal questions about family, personal life details beyond hobbies, or anything that could compromise privacy and safety. Keep focus on professional achievements, education, skills, and publicly shared interests.`;


// Conversation history storage (in production, use a proper database)
const conversationHistories = new Map();

// Generate a simple session ID
function generateSessionId() {
    return Math.random().toString(36).substring(2, 15);
}

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, sessionId = generateSessionId() } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get or create conversation history
        let conversationHistory = conversationHistories.get(sessionId) || [];

        // Add user message to history
        conversationHistory.push({
            role: 'user',
            content: message
        });

        // Call Claude API
        const response = await anthropic.messages.create({
            model: 'claude-3-haiku-20240307',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: conversationHistory
        });

        // Extract assistant's response
        const assistantMessage = response.content[0].text;

        // Add assistant response to history
        conversationHistory.push({
            role: 'assistant',
            content: assistantMessage
        });

        // Store updated conversation history (limit to last 10 exchanges)
        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }
        conversationHistories.set(sessionId, conversationHistory);

        // Clean up old sessions (optional - prevents memory leak)
        if (conversationHistories.size > 1000) {
            const firstKey = conversationHistories.keys().next().value;
            conversationHistories.delete(firstKey);
        }

        // Send response
        res.json({
            response: assistantMessage,
            sessionId: sessionId
        });

    } catch (error) {
        console.error('Error processing chat request:', error);
        
        // Check for specific API errors
        if (error.status === 401) {
            return res.status(500).json({ 
                error: 'API authentication failed. Please check your API key.' 
            });
        }
        
        if (error.status === 429) {
            return res.status(429).json({ 
                error: 'Rate limit exceeded. Please try again later.' 
            });
        }

        res.status(500).json({ 
            error: 'An error occurred while processing your request.' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString() 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║  Portfolio Chatbot Server Running                    ║
    ║  Port: ${PORT}                                        ║
    ║  Status: Ready to accept requests                    ║
    ║                                                       ║
    ║  Endpoints:                                          ║
    ║  POST /api/chat - Send chat messages                 ║
    ║  GET  /api/health - Health check                     ║
    ╚═══════════════════════════════════════════════════════╝
    `);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    process.exit(0);
});
