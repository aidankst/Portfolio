# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, a clean UI, and showcases my projects, skills, and professional experience.

## Features

- Responsive design that works on all devices
- Smooth animations and transitions using Framer Motion
- Material-UI components for a modern look
- Dark/Light theme support
- Sections for Projects, Experience, Education, and Certifications

## Tech Stack

- React 19
- TypeScript
- Vite
- Material-UI
- Framer Motion
- React Router

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/aidankst/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The deployment workflow is triggered when changes are pushed to the main branch.

The deployment configuration can be found in `.github/workflows/deploy.yml`.

## Project Structure

```
/src
  /assets        # Images and static assets
  /components    # React components
  App.tsx        # Main application component
  main.tsx       # Application entry point
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## License

This project is open source and available under the MIT License.
