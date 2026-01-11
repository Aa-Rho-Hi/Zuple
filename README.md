````md
# 🚀 Zuple — Discover Brands Before They Go Mainstream

Zuple is a **curated discovery platform for emerging Indian brands**.  
We help users explore thoughtful, high-quality products and unlock **insider perks** before brands go mainstream.

🔗 **Live Site:** https://zuple.co

---

## ✨ Features

- 🧠 **Curated Brand Discovery** — Quality over noise  
- 🎁 **Insider Perks** — Early access & exclusive benefits  
- 📱 **Mobile-First Landing Page** — Optimized hero flow  
- 📝 **Waitlist Collection** — Supabase-powered backend  
- ⚡ **Fast & Lightweight** — Built with Vite + React  

---

## 🛠 Tech Stack

**Frontend**
- React + TypeScript  
- Tailwind CSS  

**Build Tool**
- Vite  

**Backend**
- Supabase (waitlist storage)  

**Hosting**
- Netlify  

**Domain**
- Custom domain with HTTPS (Let’s Encrypt)

---

## 📂 Project Structure

```txt
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
````

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/zuple-landing-page.git
cd zuple-landing-page
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4️⃣ Run the app locally

```bash
npm run dev
```

The app will be available at:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🏗 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 Deployment (Netlify)

* **Build Command:** `npm run build`
* **Publish Directory:** `build`
* **Environment Variables:** Set in Netlify UI
* **HTTPS:** Enabled via Let’s Encrypt
* **Domain:** Custom domain configured

---

## 📸 Design Notes

* Mobile hero spacing optimized to avoid content overlap
* Phone mockup positioned to guide scroll toward the waitlist CTA
* Minimal, brand-first typography using **Outfit**
* Purple accent color used sparingly for emphasis and CTAs

---

## 🧩 Roadmap

* [ ] Brand discovery feed
* [ ] User authentication
* [ ] Brand submissions
* [ ] Insider reward system
* [ ] Public launch

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome.
Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is currently **proprietary**.

All rights reserved © **Zuple**

```

**This is a clean, production-ready `README.md` you can directly paste into GitHub.**
```
