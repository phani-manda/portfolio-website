# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern UI with Shadcn/ui components
- 📱 Fully responsive design
- ⚡ Fast and optimized
- 🎯 Clean and professional layout
- 🔧 Easy to customize

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components (Shadcn)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── UpcomingProjects.jsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.js          # Main App component
│   ├── index.js        # Entry point
│   └── mock.js         # Mock data
├── package.json
└── tailwind.config.js
```

## Customization

1. Update your personal information in `src/data/portfolioData.js`
2. Modify components in `src/components/`
3. Adjust styling in component files or Tailwind config
4. Add your projects and skills data

## Technologies Used

- React 18
- Tailwind CSS
- Shadcn/ui Components
- Radix UI
- Lucide Icons

## License

MIT License - feel free to use this for your own portfolio!
