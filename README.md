# Portfolio Website

A professional portfolio website showcasing my work as a full-stack developer and AI engineer. Built with Next.js, React, TypeScript, and Mantine UI.

## 🚀 Live Demo

[View Live Portfolio](https://portfolio-nine-taupe-35.vercel.app/)

## ✨ Features

- **Modern Design**: Clean, professional slate gray theme with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 16 for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant
- **Expandable**: Easy to add more projects as they're completed

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Component Library**: Mantine UI
- **Styling**: Mantine CSS + Custom styles
- **Deployment**: Vercel

## 📁 Project Structure

```
website/
├── app/
│   ├── page.tsx          # Home page
│   ├── projects/
│   │   └── page.tsx      # Projects showcase
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── contact/
│   │   └── page.tsx      # Contact page
│   ├── layout.tsx        # Root layout
│   └── providers.tsx     # Mantine provider
├── lib/
│   └── theme.ts          # Mantine theme configuration
└── public/               # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Slate Gray (#475569, #64748b)
- **Background**: Medium-dark slate (#94a3b8)
- **Cards**: Light ash (#cbd5e1) with glassmorphism
- **Text**: Dark slate (#1e293b, #0f172a)

### Key Design Features
- Glassmorphism effects on cards
- Smooth hover animations
- Professional typography
- Balanced spacing and layout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iyinoluwAA/portfolio.git
   cd portfolio/website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding New Projects

Projects are defined in `app/projects/page.tsx` in the `projects` array. To add a new project:

```typescript
{
  id: 6,
  name: 'Your Project Name',
  description: 'Project description...',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://your-demo-url.com', // or null
  status: 'Production-ready',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
}
```

The grid layout automatically adjusts to accommodate new projects.

## 🎯 Projects Showcased

1. **Emotion Detection API** - Production-ready AI API with 78.8% accuracy
2. **Ascend** - Full-stack AI study assistant (Rust + Next.js)
3. **Esquie** - System-level transcription platform
4. **CurableLabs Platform** - Legacy system modernization (work experience)
5. **Axum Full Backend** - Production-ready Rust backend system

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Your site will be live in minutes!

### Environment Variables
No environment variables required for basic deployment.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Ade-williams Joshua (AJ)**
- Full-Stack Developer & AI Engineer
- Email: iyinoluwa150@gmail.com
- GitHub: [@iyinoluwAA](https://github.com/iyinoluwAA)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Mantine](https://mantine.dev/)
- Icons from [Tabler Icons](https://tabler.io/icons)

---

**Note**: This portfolio is actively maintained and updated as new projects are completed.
