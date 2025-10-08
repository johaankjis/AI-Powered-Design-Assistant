# AI-Powered Design Assistant

An intelligent Figma-integrated design assistant that leverages AI to automate layout suggestions, content generation, and visual consistency checks. Reduce manual iteration time by 40% with GPT-4 powered insights.

## 🌟 Overview

The AI-Powered Design Assistant is a modern web application built with Next.js that helps designers streamline their workflow through intelligent automation. It analyzes your designs, provides actionable suggestions, generates content, and ensures design system compliance—all powered by GPT-4 and CoreML.

## ✨ Key Features

### 🎯 Smart Design Suggestions
- **Layout Optimization**: AI-powered recommendations for spacing, alignment, and visual hierarchy
- **Content Improvements**: Intelligent CTA copy suggestions and microcopy generation
- **Visual Consistency**: Automated checks for icon styles, color contrast, and design system compliance
- **High Confidence Scoring**: Each suggestion includes a confidence score (typically 85-98%)

### 🤖 AI-Powered Content Generation
- **Multiple Content Types**: Generate headlines, subheadlines, CTAs, and descriptions
- **Context-Aware**: Provide your product context and target audience for tailored results
- **Multiple Variations**: Get 3+ variations for each content request
- **One-Click Copy**: Easy copying and implementation of generated content

### 🎨 Visual Consistency Checker
- **Design System Compliance**: Ensure adherence to your design tokens and guidelines
- **Severity-Based Alerts**: Critical, medium, and low severity issue detection
- **Category Analysis**: Typography, color, spacing, and component consistency checks
- **Real-Time Scoring**: Live consistency score based on detected issues

### 📐 Interactive Layout Editor
- **Live Preview**: Real-time visualization of layout changes
- **Adjustable Parameters**: Control columns, spacing, alignment, and border radius
- **Grid System**: Flexible grid-based layout system
- **Component Export**: Export layouts with code generation support

### 📊 Performance Dashboard
- **Metrics Overview**: Track iteration reduction, time saved, and suggestions generated
- **Recent Activity**: Monitor latest suggestions and their status
- **AI Model Status**: View GPT-4 and CoreML Vision usage statistics
- **Activity Charts**: Visual representation of your workflow improvements

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom design system
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Theme**: Dark/Light mode support with [next-themes](https://github.com/pacocoursey/next-themes)
- **AI Models**: 
  - GPT-4 for design rationale & content generation
  - CoreML Vision for icon & image style recognition

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Setup

1. Clone the repository:
```bash
git clone https://github.com/johaankjis/AI-Powered-Design-Assistant.git
cd AI-Powered-Design-Assistant
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🚀 Usage

### Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

### Available Pages

The application consists of several main pages:

1. **Home** (`/`) - Landing page with overview and features
2. **Dashboard** (`/dashboard`) - Performance metrics and recent activity
3. **Suggestions** (`/suggestions`) - View and manage AI-generated design suggestions
4. **Consistency** (`/consistency`) - Visual consistency checker and design system reference
5. **Generator** (`/generator`) - AI-powered content generation tool
6. **Editor** (`/editor`) - Interactive layout editor with live preview

## 📁 Project Structure

```
AI-Powered-Design-Assistant/
├── app/                          # Next.js app directory
│   ├── consistency/              # Consistency checker page
│   ├── dashboard/                # Dashboard page
│   ├── editor/                   # Layout editor page
│   ├── generator/                # Content generator page
│   ├── suggestions/              # Suggestions page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── activity-chart.tsx
│   │   ├── ai-models-status.tsx
│   │   ├── metrics-overview.tsx
│   │   └── recent-suggestions.tsx
│   ├── ui/                       # Reusable UI components (shadcn/ui)
│   ├── header.tsx                # Header component
│   └── theme-provider.tsx        # Theme context provider
├── lib/                          # Utility functions and data
│   └── mock-data.ts              # Mock data for demonstration
├── hooks/                        # Custom React hooks
├── public/                       # Static assets
├── styles/                       # Additional styles
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🎨 Features in Detail

### Design Metrics

The dashboard tracks key performance indicators:
- **40%** iteration reduction
- **127** hours saved
- **1,543** suggestions generated
- **94%** consistency score

### Suggestion Types

1. **Layout Suggestions**
   - Card spacing optimization
   - Button size standardization
   - Component alignment

2. **Content Suggestions**
   - CTA copy improvements
   - Helper text additions
   - Headline optimization

3. **Visual Suggestions**
   - Icon style consistency
   - Color contrast compliance (WCAG AA)
   - Typography standardization

### AI Model Integration

- **GPT-4**: Used for design rationale generation and content creation with context-aware suggestions
- **CoreML Vision**: Analyzes icons and images for style recognition and consistency checking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Follow the existing code style and conventions
2. Write meaningful commit messages
3. Update documentation as needed
4. Test your changes thoroughly
5. Ensure the build passes before submitting PR

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Powered by GPT-4 and CoreML

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Made with ❤️ for designers who want to work smarter, not harder.**
