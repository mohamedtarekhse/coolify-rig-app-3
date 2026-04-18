# SAP Fiori-like React Application

A modern, responsive frontend application built with React and styled with SAP Fiori design principles.

## Features

- **SAP Fiori-inspired Design**: Clean, professional UI with the signature ShellBar navigation
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Navbar Navigation**: Top navigation bar (not sidebar) for easy access to all sections
- **7 Main Pages**:
  - Dashboard - Overview with KPI tiles and recent orders
  - Overview - General overview page
  - Products - Product catalog management
  - Orders - Order tracking and management
  - Customers - Customer directory
  - Reports - Report generation center
  - Settings - Application configuration

## Tech Stack

- React 19
- React Router DOM for navigation
- Vite for fast development and building
- CSS3 with custom styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd fiori-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
fiori-app/
├── src/
│   ├── components/
│   │   ├── ShellBar.jsx       # Top navigation bar component
│   │   └── ShellBar.css       # ShellBar styles
│   ├── pages/
│   │   ├── Dashboard.jsx      # Dashboard page with KPIs
│   │   ├── Overview.jsx       # Overview page
│   │   ├── Products.jsx       # Products management
│   │   ├── Orders.jsx         # Orders tracking
│   │   ├── Customers.jsx      # Customer directory
│   │   ├── Reports.jsx        # Reports center
│   │   ├── Settings.jsx       # Settings page
│   │   └── Page.css           # Shared page styles
│   ├── App.jsx                # Main app component with routing
│   ├── App.css                # App-specific styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── package.json
└── vite.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design Features

### ShellBar (Top Navigation)
- Company logo and branding
- Navigation links with icons
- Active state indication
- Search functionality
- Notifications and help buttons
- User profile menu with dropdown

### Dashboard
- KPI tiles with metrics
- Color-coded status indicators
- Recent orders table
- Interactive hover effects

### Data Tables
- Clean, readable layout
- Status badges with color coding
- Action menus
- Responsive design

## Customization

You can easily customize:
- Color scheme in CSS files
- Navigation items in ShellBar.jsx
- Page content in individual page components
- Add new pages by creating components and adding routes

## License

MIT
