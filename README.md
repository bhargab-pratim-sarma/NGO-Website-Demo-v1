# 🌍 my-ngo-v1

**Empowering Communities, Inspiring Change.**

`my-ngo-v1` is a premium, high-performance NGO website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. It features a modern, responsive design with dynamic animations, dark mode support, and an AI-powered assistant to drive social impact.

---

## ✨ Core Features

### 🎨 Premium UI/UX
- **Modern Aesthetics**: Vibrant color palettes, glassmorphism, and premium typography.
- **Micro-Animations**: Smooth transitions, magnetic buttons, and hover effects using `motion/react`.
- **Responsive Design**: Fluid layouts optimized for mobile, tablet, and desktop.
- **Dark Mode**: Seamless theme switching with persistent user preference.
- **Custom Interactions**: Scroll progress indicators and interactive custom cursors.

### 📊 Impact Tracking
- **Impact Charts**: Visual representation of community growth and metrics using `Recharts`.
- **Interactive Calculator**: Allows users to calculate their potential impact through donations or volunteering.
- **History Timeline**: An animated journey through the foundation's milestones.

### 🤖 AI-Powered Assistant
- **Gemini 2.0 Integration**: A real-time chat assistant trained on foundation-specific data.
- **Context-Aware**: Provides accurate information about missions, programs, and how to get involved.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Model**: [Google Gemini 2.0 Flash](https://ai.google.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Pages & Layout)
├── components/           # React Components
│   ├── sections/         # Individual Page Sections (Hero, About, etc.)
│   ├── ui/               # Shared Reusable UI Components (Cards, Items)
│   ├── AIChatBot.tsx     # Gemini AI Chat Integration
│   └── ...               # Interactive components (Charts, Timeline)
├── lib/                  # Utilities and Context (Theme, Styling)
├── hooks/                # Custom React Hooks
└── public/               # Static Assets
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.x or later
- npm / yarn / pnpm

### 2. Installation
```bash
git clone https://github.com/bhargab-pratim-sarma/NGO-Website-Demo-v1.git
cd NGO-Website-Demo-v1
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add your Gemini API Key:
```env
NEXT_PUBLIC_GEMINI_API_KEY="your_gemini_api_key_here"
```

### 4. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 👤 Author

- **Prepared by**: Bhargav Pratim Sarma
- **Email**: [bhargabpratimsharma@gmail.com](mailto:bhargabpratimsharma@gmail.com)
- **GitHub**: [@bhargab-pratim-sarma](https://github.com/bhargab-pratim-sarma)

---

## 📄 License

This project is licensed under the MIT License.
