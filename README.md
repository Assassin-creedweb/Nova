# NOVA Performance Club

A high-performance strength and conditioning gym web experience featuring interactive headline lockups, smooth scroll-driven visual transitions, schedule breakdowns, coaching team highlights, and an interactive trial pass reservation modal.

---

## ⚡ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Interactions:** [GSAP](https://gsap.com/) & [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`, `pnpm`, or `bun`

### 1. Clone or Copy the Repository

```bash
git clone <your-repository-url>
cd nova-performance-club
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using bun:
```bash
bun install
```

### 3. Environment Variables (Optional)

Copy the `.env.example` file to `.env.local` if you plan to integrate Gemini API features:

```bash
cp .env.example .env.local
```

### 4. Run Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:3000` to preview the site.

---

## 🛠️ Build & Production

To build the static production bundle:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
├── public/                 # Static assets and media sequence frames
│   └── assets/
│       └── aistudio/       # WebP scroll frame sequence
├── src/
│   ├── assets/             # Brand and coach imagery
│   │   └── images/
│   ├── App.tsx             # Main application layout and components
│   ├── index.css           # Global Tailwind and font styles
│   └── main.tsx            # React application entry point
├── .env.example            # Environment variables template
├── .gitignore              # Clean gitignore configuration
├── index.html              # HTML root shell
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 📄 License

This project is licensed under the MIT License - feel free to customize and adapt for your own projects.

