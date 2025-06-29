# İletişim Group Website - Setup & Deployment Guide

## 📋 Project Overview

This is a comprehensive corporate website for İletişim Group, built as a modern React application with TypeScript. The project includes both frontend and backend components, designed to be scalable, maintainable, and performant.

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Icons**: Lucide React

### Backend (API)
- **Runtime**: Node.js
- **Framework**: Express.js
- **CORS**: Enabled for frontend communication
- **Environment**: dotenv for configuration

## 🚀 Quick Start

### Prerequisites
```bash
# Required versions
Node.js >= 18.0.0
npm >= 9.0.0
```

### Frontend Setup
```bash
# 1. Navigate to project root
cd "İletişim Group"

# 2. Install dependencies
npm install

# 3. Create environment file (optional)
cp .env.example .env

# 4. Start development server
npm run dev
```

### Backend Setup
```bash
# 1. Navigate to server directory
cd server

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Start development server
npm run dev
```

## 🌐 Environment Configuration

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=İletişim Group
VITE_ENABLE_SEARCH=true
VITE_ENABLE_NEWSLETTER=true
```

### Backend (server/.env)
```env
PORT=3001
NODE_ENV=development
```

## 📂 Project Structure

```
İletişim Group/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── common/        # Reusable components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Page sections
│   ├── pages/             # Route components
│   ├── services/          # API services
│   ├── config/            # Configuration
│   ├── data/              # Static data
│   ├── hooks/             # Custom hooks
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── server/                # Backend API
│   ├── index.js          # Express server
│   └── package.json      # Server dependencies
└── README.md
```

## 🔧 Available Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend
```bash
npm start            # Start production server
npm run dev          # Start development server
```

## 🚢 Deployment

### Frontend Deployment (Netlify/Vercel)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Configure environment variables** on your hosting platform:
   ```
   VITE_API_URL=https://your-api-domain.com/api
   ```

3. **Deploy the `dist` folder**

### Backend Deployment (Railway/Render/DigitalOcean)

1. **Prepare for production**
   ```bash
   cd server
   npm install --production
   ```

2. **Set environment variables**:
   ```
   PORT=3001
   NODE_ENV=production
   ```

3. **Start command**: `npm start`

### Docker Deployment

#### Frontend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
```

#### Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm ci --only=production
COPY server/ .
EXPOSE 3001
CMD ["npm", "start"]
```

## 🔒 Security Considerations

### Frontend
- Environment variables are build-time only
- No sensitive data in client-side code
- HTTPS in production
- CSP headers recommended

### Backend
- CORS properly configured
- Input validation on all endpoints
- Rate limiting (to be implemented)
- Helmet.js for security headers (to be added)

## 📊 Performance Optimization

### Frontend
- Code splitting with React.lazy()
- Image optimization
- Bundle analysis with `npm run build --analyze`
- CDN for static assets

### Backend
- Response compression
- Database connection pooling (when DB is added)
- Caching layer (Redis recommended)
- PM2 for process management

## 🧪 Testing

### Setup Testing Environment
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

### Run Tests
```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run with coverage report
```

## 📈 Monitoring & Analytics

### Frontend Analytics
- Google Analytics (configure VITE_GOOGLE_ANALYTICS_ID)
- Performance monitoring with Web Vitals
- Error tracking with Sentry (to be added)

### Backend Monitoring
- Health check endpoint: `/api/health`
- Request logging
- Error tracking
- Performance metrics

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run test
      # Add deployment steps
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5176
   npx kill-port 5176
   ```

2. **API connection failed**
   - Check if backend server is running
   - Verify VITE_API_URL in .env
   - Check CORS configuration

3. **Build fails**
   - Clear node_modules and reinstall
   - Check TypeScript errors
   - Verify all imports are correct

## 📞 Support

For technical support or questions:
- Email: tech@iletisimgroup.com.tr
- Documentation: /docs
- Issues: GitHub Issues

## 📝 License

This project is proprietary to İletişim Group. All rights reserved.
