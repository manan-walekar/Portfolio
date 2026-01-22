# Quick Start Guide

Get your application deployed to Vercel in 5 minutes!

## Step 1: Prepare Your GitHub Repository (2 min)

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: deployment ready"

# Create GitHub repository at https://github.com/new
# Then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel (2 min)

### Option A: Via Web Interface (Recommended for First-time Users)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Select your repository
5. Accept default settings (they're already configured!)
6. Click "Deploy"
7. Wait for deployment to complete (~2-3 minutes)

### Option B: Via CLI (For Experienced Users)

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Step 3: Add Environment Variables (1 min)

In Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_value
   VITE_EMAILJS_TEMPLATE_ID=your_value
   VITE_EMAILJS_PUBLIC_KEY=your_value
   ```
3. Click "Save"
4. Redeploy (Vercel will automatically redeploy)

## Done! 🎉

Your site is now live at: `https://your-project-name.vercel.app`

---

## What Was Configured For You?

✅ **Vite Build System** - Fast, optimized builds
✅ **TypeScript** - Type-safe development
✅ **React + Router** - Modern React with routing
✅ **Tailwind CSS** - Utility-first styling
✅ **ESLint** - Code quality checks
✅ **GitHub Actions** - Automatic CI/CD pipeline
✅ **Security Headers** - Industry-standard security
✅ **Cache Optimization** - Fast asset delivery

---

## Next Steps

### Troubleshooting

**Build Failed?**

- Check [DEPLOYMENT.md](DEPLOYMENT.md) → Troubleshooting section

**Need Custom Domain?**

- Follow [DEPLOYMENT.md](DEPLOYMENT.md) → Custom Domain Setup

### Development

```bash
# Local development
npm run dev

# Production build (test locally)
npm run build && npm run preview

# Code quality
npm run lint
npm run type-check
```

### Performance Monitoring

Visit Vercel Dashboard:

- **Deployments** - View build history
- **Analytics** - Monitor performance
- **Logs** - Check for errors

---

## Common Tasks

### Update Your Site

```bash
# Make changes
git add .
git commit -m "Update: describe your changes"
git push origin main
# Vercel automatically deploys!
```

### Rollback to Previous Version

1. Go to Vercel Dashboard → Deployments
2. Find previous deployment
3. Click "..." → "Promote to Production"

### Custom Domain

1. Vercel Dashboard → Settings → Domains
2. Add your domain
3. Follow DNS instructions provided

---

## Important Files

| File                           | Purpose                       |
| ------------------------------ | ----------------------------- |
| `vercel.json`                  | Vercel deployment config      |
| `.env.example`                 | Environment variable template |
| `.github/workflows/deploy.yml` | CI/CD pipeline                |
| `DEPLOYMENT.md`                | Full deployment guide         |

---

## Support

- 📖 [Full Deployment Guide](DEPLOYMENT.md)
- 📋 [Pre-Deployment Checklist](DEPLOYMENT_CHECKLIST.md)
- 🔒 [Security Policy](SECURITY.md)
- 🤝 [Contributing Guide](CONTRIBUTING.md)

---

**Questions?** Check the full documentation or open an issue on GitHub!
