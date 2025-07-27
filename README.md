# Sanjay Kumar Gangishetty - Portfolio Website

A modern, responsive portfolio website built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> showcasing my skills, experience, and projects as a Full Stack Developer.

## 📋 Quick Navigation

- [🚀 Live Demo](#-live-demo)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📝 Available Scripts](#-available-scripts)
- [🎨 Customization](#-customization)
- [🚀 Deployment](#-deployment)
- [📱 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Contact](#-contact)

## 🚀 Live Demo

Visit my portfolio at: https://sanjay-gangishetty.github.io/portfolio-v2/

## ✨ Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Performance Optimized**: Built with Gatsby for fast loading times
- **SEO Friendly**: Optimized for search engines with proper meta tags
- **Mobile Responsive**: Works perfectly on all devices
- **Dark Theme**: Elegant dark color scheme with green accents
- **Smooth Animations**: Scroll animations and transitions using Framer Motion
- **Contact Form**: Integrated contact form for easy communication
- **Project Showcase**: Detailed project pages with GitHub links
- **Blog Section**: Technical blog posts and insights
- **Skills Visualization**: Interactive skills section
- **Experience Timeline**: Professional experience with detailed descriptions

## 🛠 Tech Stack

### Frontend

- **Gatsby.js** - Static site generator
- **React.js** - UI library
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **ScrollReveal** - Scroll animations

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit hooks

### Deployment

- **GitHub Pages** - Hosting and deployment

## 📁 Project Structure

```
portfolio-v2/
├── content/                 # Content files (projects, posts, jobs)
│   ├── featured/           # Featured projects
│   ├── jobs/              # Work experience
│   ├── posts/             # Blog posts
│   └── projects/          # Project details
├── src/
│   ├── components/        # React components
│   │   ├── icons/        # SVG icons
│   │   └── sections/     # Page sections
│   ├── hooks/            # Custom React hooks
│   ├── images/           # Static images
│   ├── pages/            # Gatsby pages
│   ├── styles/           # Global styles and themes
│   ├── templates/        # Gatsby templates
│   └── utils/            # Utility functions
├── static/               # Static assets
└── gatsby-config.js      # Gatsby configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sanjay-gangishetty/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run develop
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000` to view your portfolio

## 📝 Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run develop` | Start development server       |
| `npm run build`   | Build for production           |
| `npm run serve`   | Serve production build locally |
| `npm run clean`   | Clear Gatsby cache             |
| `npm run format`  | Format code with Prettier      |
| `npm run deploy`  | Deploy to GitHub Pages         |

## 🎨 Customization

### Personal Information

Update your personal information in `src/config.js`:

```javascript
module.exports = {
  email: 'your-email@example.com',
  mobile: '+1 234 567 8900',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
    },
    // Add more social links...
  ],

  navLinks: [
    // Customize navigation links...
  ],
};
```

### Content Management

- **Projects**: Add new projects in `content/projects/`
- **Experience**: Update work experience in `content/jobs/`
- **Blog Posts**: Create new posts in `content/posts/`
- **Featured Projects**: Highlight projects in `content/featured/`

### Styling

- **Colors**: Modify color scheme in `src/styles/theme.js`
- **Typography**: Update fonts in `src/styles/fonts.js`
- **Global Styles**: Customize styles in `src/styles/GlobalStyle.js`

## 🚀 Deployment

### GitHub Pages

```bash
npm run deploy
```

## 📱 Performance

This portfolio is optimized for performance with:

- **Static Site Generation** - Fast loading times
- **Image Optimization** - Automatic image compression
- **Code Splitting** - Lazy loading of components
- **SEO Optimization** - Meta tags and structured data
- **PWA Features** - Offline support and app-like experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Brittany Chiang** - Original design inspiration from [brittanychiang.com](https://brittanychiang.com)

## 📞 Contact

- **Email**: gangishettysanjaykumar@gmail.com
- **LinkedIn**: [Sanjay Kumar Gangishetty](https://www.linkedin.com/in/sanjay-gangishetty)
- **GitHub**: [@sanjay-gangishetty](https://github.com/sanjay-gangishetty)
- **LeetCode**: [sanjaykumarg](https://leetcode.com/u/sanjaykumarg)
