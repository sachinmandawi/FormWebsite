# FormTools India 🇮🇳

A production-ready student utility web app built for Indian students to prepare documents for entrance exams, admissions, and scholarships.

## 🚀 Live Demo
The app is designed to run perfectly on **GitHub Pages**.

## ✨ Features
- **100% Client-Side:** No file uploads to any server. Complete privacy.
- **Fast & Lightweight:** Built with Vite, React, and Tailwind CSS.
- **Mobile First:** Optimized for mobile browser users.
- **AdSense Ready:** Clean layout with dedicated, compliant ad placeholders.
- **SEO Optimized:** Meta tags, canonical URLs, and structured data ready.

## 🛠️ Tools Included
- **Image Compressor:** Targeted KB size compression.
- **Passport Photo Maker:** Indian exam dimension presets (NEET/JEE/UPSC).
- **Image to PDF:** Combine marksheets into one PDF.
- **PDF Tools:** Merge and Split PDF documents.
- **Sign PDF:** Draw and place signatures on forms.
- **Format Converter:** Convert between JPG and PNG.
- **Resize Image:** Change pixel dimensions easily.

## 📦 Tech Stack
- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **PDF Logic:** `pdf-lib`
- **Image Logic:** `browser-image-compression`
- **Icons:** `lucide-react`

## 🛠️ Local Development

1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd form-tools-india
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🚀 Deployment to GitHub Pages

This repository includes a GitHub Action in `.github/workflows/deploy.yml`. 

1. Push your code to the `main` branch.
2. Go to **Settings > Pages** in your GitHub repo.
3. Under **Build and deployment**, set Source to **GitHub Actions**.
4. The site will be live at `https://<username>.github.io/<repo-name>/`.

### Custom Domain Setup
1. In **Settings > Pages**, enter your domain name (e.g., `formtoolsindia.com`).
2. Update your DNS provider with an `A` record pointing to GitHub IPs and a `CNAME` for `www`.

## 💰 AdSense Integration
Search for the `AdSlot` component in the codebase.
To enable ads:
1. Create a `.env` file with `VITE_ENABLE_ADS=true`.
2. In `src/components/AdSlot.tsx`, replace the placeholder with your actual AdSense `<ins>` code.

## 📄 License
MIT License. Not affiliated with any govt authority.
