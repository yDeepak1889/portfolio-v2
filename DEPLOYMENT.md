# Portfolio V2 - Deployment Guide

## 🚀 GitHub Pages Deployment

This portfolio is configured for easy deployment to GitHub Pages with two methods:

### Method 1: Manual Deployment (Recommended for First Deploy)

1. **Update Repository Name**
   
   Edit `package.json` and `vite.config.js` to replace `portfolio-v2` with your actual repository name:
   
   ```json
   // package.json
   "homepage": "https://[your-username].github.io/[your-repo-name]"
   ```
   
   ```javascript
   // vite.config.js
   base: '/[your-repo-name]/'
   ```

2. **Build and Deploy**
   
   ```bash
   npm run deploy
   ```
   
   This will:
   - Build your project
   - Create a `gh-pages` branch
   - Deploy to GitHub Pages

3. **Enable GitHub Pages**
   
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select the `gh-pages` branch
   - Click **Save**
   
   Your site will be live at: `https://[your-username].github.io/[your-repo-name]`

---

### Method 2: Automatic Deployment with GitHub Actions

For automatic deployment on every push to `main`:

1. **Enable GitHub Pages**
   
   - Go to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

2. **Push to Main Branch**
   
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```
   
   The GitHub Actions workflow will automatically:
   - Build your project
   - Deploy to GitHub Pages
   - Update your live site

3. **Monitor Deployment**
   
   - Go to the **Actions** tab in your repository
   - Watch the deployment progress
   - Once complete, your site will be live!

---

## 🌐 Custom Domain (Optional)

To use a custom domain like `richachaturvedi.com`:

1. **Update Configuration**
   
   ```javascript
   // vite.config.js
   base: '/',  // Change from '/portfolio-v2/' to '/'
   ```
   
   ```json
   // package.json
   "homepage": "https://richachaturvedi.com"
   ```

2. **Add CNAME File**
   
   Create a file named `CNAME` in the `public` folder:
   ```
   richachaturvedi.com
   ```

3. **Configure DNS**
   
   Add these DNS records with your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: [your-username].github.io
   ```

4. **Enable Custom Domain in GitHub**
   
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Check "Enforce HTTPS"

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update `homepage` in `package.json` with your GitHub username and repo name
- [ ] Update `base` in `vite.config.js` with your repo name
- [ ] Test the build locally: `npm run build && npm run preview`
- [ ] Commit all changes to git
- [ ] Push to GitHub

---

## 🔧 Troubleshooting

### Blank Page After Deployment

If you see a blank page:
1. Check that `base` in `vite.config.js` matches your repository name
2. Verify `homepage` in `package.json` is correct
3. Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### 404 Errors

If you get 404 errors:
1. Ensure GitHub Pages is enabled in repository settings
2. Check that the `gh-pages` branch exists
3. Verify the source is set correctly in Pages settings

### Build Fails

If the build fails:
1. Run `npm run build` locally to see errors
2. Fix any linting or build errors
3. Ensure all dependencies are installed: `npm install`

---

## 🎨 Features Included

✅ Dark/Light mode toggle with localStorage persistence  
✅ Responsive design for all devices  
✅ Smooth animations and transitions  
✅ SEO optimized  
✅ Fast loading with Vite  
✅ Modern React 18  

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to GitHub Pages
npm run lint      # Run ESLint
```

---

## 🤝 Support

If you encounter any issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Open an issue in the repository

---

**Happy Deploying! 🚀**
