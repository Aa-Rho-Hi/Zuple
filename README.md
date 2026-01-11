🚀 Zuple — Discover Brands Before They Go Mainstream
Zuple is a curated discovery platform for emerging Indian brands.
We help users explore thoughtful, high-quality products and unlock insider perks before brands go mainstream.
🔗 Live Site: https://zuple.co

✨ Features
🧠 Curated Brand Discovery — Quality over noise
🎁 Insider Perks — Early access & exclusive benefits
📱 Mobile-First Landing Page — Optimized hero flow
📝 Waitlist Collection — Supabase-powered backend
⚡ Fast & Lightweight — Built with Vite + React
🛠 Tech Stack
Frontend: React + TypeScript
Styling: Tailwind CSS
Build Tool: Vite
Backend: Supabase (waitlist storage)
Hosting: Netlify
Domain: Custom domain with HTTPS (Let’s Encrypt)

📂 Project Structure
src/
├── assets/            # Images & static assets
├── components/
│   ├── Hero.tsx
│   ├── Showcase.tsx
│   ├── WaitlistForm.tsx
│   ├── HowItWorks.tsx
│   ├── InsiderPerks.tsx
│   ├── ClosingMessage.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css


🚀 Getting Started (Local Development)
1️⃣ Clone the repo
git clone https://github.com/your-username/zuple-landing-page.git
cd zuple-landing-page
2️⃣ Install dependencies
npm install
3️⃣ Create environment variables
Create a .env file in the root:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
4️⃣ Run locally
npm run dev
App will be available at:
http://localhost:5173
🏗 Build for Production
npm run build
Preview production build:
npm run preview
🌐 Deployment (Netlify)
Build command: npm run build
Publish directory: build
Environment variables set in Netlify UI
Custom domain with HTTPS via Let’s Encrypt

📸 Design Notes
Mobile hero spacing optimized to avoid content overlap
Phone mockup positioned to guide scroll toward waitlist
Minimal, brand-first typography using Outfit
Purple accent color used only for emphasis & CTAs

🧩 Roadmap
 Brand discovery feed
 User authentication
 Brand submissions
 Insider reward system
 Public launch

🤝 Contributing
Contributions, ideas, and feedback are welcome.
Open an issue or submit a pull request.

📄 License
This project is currently proprietary.

All rights reserved © Zuple.

