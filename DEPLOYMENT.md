# Deployment Guide

This guide covers deploying your Vite React application to GitHub and Vercel.

## Prerequisites

- Node.js 18+ and npm installed
- A GitHub account with repository access
- A Vercel account (free tier available)
- Git installed and configured

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Then update the values in `.env.local` with your actual configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_API_URL=your_api_url
VITE_APP_URL=https://your-domain.com
```

### 4. Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Building for Production

### Local Build Test

```bash
npm run build
npm run preview
```

This will create an optimized production build in the `dist/` directory.

## GitHub Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com/new) and create a new repository
2. Don't initialize with README (we already have one)
3. Get the repository URL

### 2. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. GitHub Actions Setup (Optional)

The workflow file `.github/workflows/deploy.yml` is already configured for automatic deployments.

## Vercel Deployment

### 1. Connect Vercel to GitHub

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project" → "Import Git Repository"
3. Select your GitHub repository
4. Click "Import"

### 2. Configure Project Settings

In Vercel dashboard:

- **Framework Preset**: Select "Vite"
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Add Environment Variables

In Vercel Project Settings → Environment Variables, add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_API_URL=your_production_api_url
VITE_APP_URL=https://your-vercel-url.vercel.app
```

### 4. Deploy

Click "Deploy" or push to `main` branch to trigger automatic deployment.

## Vercel CLI Deployment (Alternative)

If you prefer using the command line:

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy

```bash
# First deployment (interactive)
vercel

# Subsequent deployments
vercel --prod
```

## Production Optimizations

The following optimizations are already configured:

✅ **Tree-shaking**: Unused code is removed during build
✅ **Minification**: Code is minified for smaller bundle size
✅ **Source Maps**: Generated in development for easier debugging
✅ **Caching**: Asset caching headers configured in Vercel
✅ **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.

## Custom Domain Setup (Vercel)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions provided by Vercel
4. Update `VITE_APP_URL` environment variable with your custom domain

## Troubleshooting

### Build Fails

- Ensure all environment variables are set correctly
- Run `npm run type-check` to check for TypeScript errors
- Check that all imports use correct paths

### White Screen in Production

- Check browser console for errors
- Verify all environment variables are set
- Ensure the build completed successfully

### Performance Issues

- Analyze bundle with: `npm run build && npm run preview`
- Check Lighthouse scores in Chrome DevTools
- Review Vercel Analytics in dashboard

## Health Checks

After deployment, verify:

1. ✅ Site loads correctly
2. ✅ All routes work (especially dynamic routes)
3. ✅ Forms and API calls work
4. ✅ No console errors
5. ✅ Mobile responsive design works
6. ✅ Images load correctly

## Rollback

To rollback to a previous version on Vercel:

1. Go to Deployments tab
2. Find the previous stable deployment
3. Click the three dots menu
4. Select "Promote to Production"

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [React Router Documentation](https://reactrouter.com/)

## Support

For issues or questions:

1. Check existing GitHub Issues
2. Review logs in Vercel Dashboard
3. Check build logs in GitHub Actions
4. Consult project documentation

---

**Last Updated**: January 2026
