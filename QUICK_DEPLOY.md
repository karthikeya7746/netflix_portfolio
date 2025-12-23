# 🚀 Quick Deploy Guide - karthikeyareddy.com

## Fastest Way: Netlify (Recommended)

### Step 1: Push to GitHub
```bash
# Make sure your code is on GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect GitHub and select your repository
4. Configure:
   - **Base directory**: `netflix_portfolio` (if repo root is parent folder)
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Click **"Deploy site"**

### Step 3: Add Custom Domain
1. In Netlify dashboard → **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `karthikeyareddy.com`
4. Follow DNS instructions (add CNAME or A record)
5. Wait 5-60 minutes for DNS propagation

**That's it!** Your site will be live at `https://karthikeyareddy.com` 🎉

---

## Alternative: Vercel (Also Great)

### Step 1: Deploy
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `netflix_portfolio`
   - **Framework**: Create React App
5. Click **"Deploy"**

### Step 2: Add Domain
1. Go to **Settings** → **Domains**
2. Add `karthikeyareddy.com`
3. Update DNS as instructed

---

## Before Deploying: Test Build Locally

```bash
cd netflix_portfolio
npm install
npm run build
```

If build succeeds, you're ready to deploy!

---

## Need Help?

See `../DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.

