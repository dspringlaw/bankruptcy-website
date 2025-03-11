# Bankruptcy Website

A professional website for a bankruptcy law firm built with React and Tailwind CSS.

## Features

- Home page with an overview of bankruptcy services
- Blog page for bankruptcy-related articles
- Contact page for inquiries and consultations
- Responsive design with a professional theme

## Pages

- **Home**: Overview of bankruptcy services (Chapter 7, Chapter 11, Chapter 13)
- **Blog**: Articles related to bankruptcy law and financial recovery
- **Contact**: Contact form and information for consultations

## Technologies Used

- React
- React Router for navigation
- Tailwind CSS for styling
- PostCSS and Autoprefixer for CSS processing

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd bankruptcy-website
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```
npm run build
```

This will create an optimized production build in the `build` folder.

## Project Structure

```
bankruptcy-website/
├── public/
│   └── index.html             # HTML template
├── src/
│   ├── assets/                # Images, icons, etc.
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Page components
│   ├── App.js                 # Main app component with routing
│   └── index.js               # Entry point
└── ...