🧠 BBK Bot – University Timetable Chatbot
FINAL YEAR PROJECT : Sabbas16

BBK Bot is an AI-powered chatbot designed to help students access their university timetable with ease. Built for Computer Science final year assessment, this chatbot allows users to ask natural questions and receive clear answers about upcoming classes, tutors, and locations.

📚 What It Does
🕒 Answers natural questions like "When is my next class?" or "What time is Data Analytics?"

📍 Provides accurate details including subject, day, time, location, and format (e.g. online, lab, seminar)

🧑‍🏫 Identifies the tutor assigned to each lesson

💬 Acts like a personal assistant for navigating academic schedules

🌐 Includes a dark-themed, responsive UI for desktop use

⚙️ Setup & Development
1. Clone the repository
bash
Copy
git clone https://github.com/sabbas16/bbk_bot_timetable.git
cd bbk_bot_timetable
2. Install dependencies
bash
Copy
npm install
3. Start the development server
bash
Copy
npm run dev
Now open http://localhost:8080 in your browser.

🔐 Environment Variables
If your project uses external services (e.g. Supabase or OpenAI), create a .env file in the root directory:

env
Copy
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key
Never commit sensitive keys to a public repo. Use .gitignore to exclude your .env file.

🚀 Deployment
You can deploy the frontend using:

Vercel

Netlify

GitHub Pages (for static builds)

Supabase Edge Functions and databases can be managed via the Supabase Dashboard.

🧪 Example Queries
"When is Software Engineering II?"

"What room is Mobile Computing in?"

"Who teaches Data Analytics using R?"

"Do I have any classes on Tuesday?"

📌 Purpose
This project demonstrates the use of structured data + conversational AI to improve how students manage complex academic schedules. It serves as a practical implementation of human-computer interaction, data parsing, and prompt engineering.
