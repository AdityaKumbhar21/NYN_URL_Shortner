# 🔗 NYNURL - Not Your Normal URL Shortener

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-8.19.1-green?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

**The Only URL Shortener That Provides Detailed Analytics for FREE**

[Live Demo](https://nyn-url-shortner.vercel.app/) · [Report Bug](https://github.com/AdityaKumbhar21/NYN_URL_Shortner/issues) · [Request Feature](https://github.com/AdityaKumbhar21/NYN_URL_Shortner/issues)

</div>

---

## 🌟 Why NYNURL?

**NYNURL** is not just another URL shortener. It's a complete analytics platform that gives you insights into every click - **absolutely free**.

### What Makes Us Different?

- 🎯 **Free Advanced Analytics** - Get detailed insights that competitors charge for
- ⚡ **Lightning Fast** - Sub-100ms redirects with optimized MongoDB queries
- 🎨 **Beautiful SaaS UI** - Professional, modern interface with custom blue theme
- 📊 **Visual Analytics** - Interactive charts showing trends and patterns
- 🔒 **Custom Branding** - Create memorable short links with custom slugs
- 📱 **Mobile Optimized** - Perfect experience on all devices
- 🚀 **Enterprise Ready** - Built with Next.js 15 and TypeScript for scalability  

---

## 🚀 Features

### 🔗 Core URL Shortening
- ✅ **Instant URL Shortening** - Shorten any URL in milliseconds
- ✅ **Custom Slug Support** - Create branded, memorable short links (e.g., `/my-campaign`)
- ✅ **Auto-Generated Slugs** - Random slugs if you don't provide one
- ✅ **Smart Redirects** - Fast 307 redirects to original URLs
- ✅ **Slug Validation** - Prevents duplicate and invalid slugs
- ✅ **Copy to Clipboard** - One-click copy for easy sharing

### 📊 Analytics & Insights
- ✅ **Real-Time Click Tracking** - Every click recorded instantly
- ✅ **Total Clicks Counter** - Lifetime click count for each link
- ✅ **Daily Analytics** - Day-by-day click breakdown
- ✅ **User Agent Tracking** - See what browsers/devices are used
- ✅ **Interactive Charts** 
  - 📈 Beautiful area charts with gradient fills
  - 📊 Bar charts for user agent statistics
  - 📉 Time-series trend visualization
- ✅ **Data Tables** - Detailed tabular view of all statistics
- ✅ **Analytics Dashboard** - Dedicated page for each short link (`/{slug}/stats`)

### 🎨 User Interface
- ✅ **Modern SaaS Design** - Professional, polished interface
- ✅ **Custom Blue Theme** - Consistent `#0353a4` color scheme
- ✅ **Responsive Layout** - Mobile-first design that works everywhere
- ✅ **Dark Mode Support** - Full dark theme implementation
- ✅ **Navigation Bar** - Sticky header with smooth scrolling
- ✅ **Footer** - Comprehensive footer with links and branding
- ✅ **Landing Page**
  - Hero section with compelling copy
  - Features showcase (3 highlighted features)
  - How It Works section (3-step process)
  - Pricing section (Free forever!)
  - Call-to-action section
- ✅ **Loading States** - Beautiful spinners and skeleton screens
- ✅ **Error Handling** - User-friendly error pages
- ✅ **Toast Notifications** - Real-time feedback with Sonner

### 🛠️ Technical Features
- ✅ **Next.js 15 App Router** - Latest features and performance
- ✅ **Server Components** - Optimal performance
- ✅ **TypeScript** - Full type safety
- ✅ **MongoDB Integration** - Scalable database with Mongoose
- ✅ **API Routes** 
  - POST `/api/shorten` - Create short URLs
  - GET `/api/stats/[slug]` - Get analytics
  - GET `/[slug]` - Redirect handler
- ✅ **Environment Variables** - Secure configuration
- ✅ **SEO Optimized** - Proper meta tags and descriptions
- ✅ **Vercel Deployment** - One-click deploy ready

### 🎯 User Experience
- ✅ **Instant Feedback** - Real-time validation and messages
- ✅ **View Analytics Button** - Quick access from shortener form
- ✅ **Share Options** - Copy links with visual confirmation
- ✅ **Empty States** - Helpful messages when no data
- ✅ **Back Navigation** - Easy navigation between pages
- ✅ **External Link Indicators** - Clear icons for external links

### 📈 Data & Storage
- ✅ **Persistent Storage** - All data saved in MongoDB
- ✅ **Click History** - Complete audit trail of all clicks
- ✅ **Timestamp Tracking** - Precise click timing
- ✅ **Efficient Queries** - Optimized aggregation pipelines
- ✅ **Auto-Increment Clicks** - Atomic click counting
- ✅ **Data Relationships** - Proper MongoDB references

### 🔐 Quality & Reliability
- ✅ **Error Recovery** - Graceful error handling
- ✅ **Database Connection Pooling** - Efficient DB usage
- ✅ **Input Validation** - Server-side validation
- ✅ **Type Safety** - TypeScript interfaces throughout
- ✅ **ESLint Configuration** - Code quality enforcement
- ✅ **Clean Code** - Well-organized project structure

---

## 🛠️ Tech Stack

<table>
<tr>
<td>

### Frontend
- **Framework:** Next.js 15.5.4
- **Language:** TypeScript 5.0
- **Styling:** TailwindCSS 4.0
- **UI Library:** Shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts 3.2.1
- **Notifications:** Sonner

</td>
<td>

### Backend
- **Runtime:** Node.js
- **Database:** MongoDB
- **ORM:** Mongoose 8.19.1
- **API:** Next.js Route Handlers
- **HTTP Client:** Axios

</td>
</tr>
<tr>
<td>

### Development
- **Package Manager:** npm/yarn/pnpm
- **Build Tool:** Turbopack
- **Type Checking:** TypeScript
- **Linting:** ESLint
- **Fonts:** Geist Sans & Mono

</td>
<td>

### Deployment
- **Platform:** Vercel
- **Environment:** Edge Functions
- **CDN:** Vercel Edge Network
- **Database:** MongoDB Atlas

</td>
</tr>
</table>

---

## ⚙️ Installation & Setup

### Prerequisites

Before you begin, ensure you have:
- **Node.js** 18 or higher installed
- **MongoDB** database (local or MongoDB Atlas)
- **Git** for version control
- A code editor (VS Code recommended)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AdityaKumbhar21/NYN_URL_Shortner.git
cd NYN_URL_Shortner
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_API_BASE_URL=http://localhost:3000
```

**Example MongoDB URI:**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/urlshortener?retryWrites=true&w=majority
```

**For local MongoDB:**
```
mongodb://localhost:27017/urlshortener
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**

### 5️⃣ Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
not_your_normal_url_shortner/
├── 📂 app/                          # Next.js App Router
│   ├── 📂 [slug]/                   # Dynamic route for redirects
│   │   ├── route.ts                 # GET handler for redirects
│   │   └── 📂 stats/                # Analytics pages
│   │       └── page.tsx             # Analytics dashboard
│   ├── 📂 api/                      # API Routes
│   │   ├── 📂 shorten/
│   │   │   └── route.ts             # POST - Create short URLs
│   │   └── 📂 stats/
│   │       └── 📂 [slug]/
│   │           └── route.ts         # GET - Fetch analytics
│   ├── 📂 error-page/
│   │   └── page.tsx                 # 404/Error page
│   ├── layout.tsx                   # Root layout (Navbar + Footer)
│   ├── page.tsx                     # Landing page
│   └── globals.css                  # Global styles + Blue theme
│
├── 📂 components/                   # React Components
│   ├── 📂 ui/                       # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── sonner.tsx
│   ├── Navbar.tsx                   # Navigation bar
│   └── Footer.tsx                   # Footer component
│
├── 📂 lib/                          # Utility functions
│   ├── connectDB.ts                 # MongoDB connection handler
│   └── utils.ts                     # Helper functions
│
├── 📂 models/                       # MongoDB Schemas
│   ├── URL.ts                       # URL model (slug, url, clicks)
│   └── Click.ts                     # Click tracking model
│
├── 📂 public/                       # Static assets
│
├── 📄 .env.local                    # Environment variables (gitignored)
├── 📄 components.json               # Shadcn UI config
├── 📄 eslint.config.mjs             # ESLint configuration
├── 📄 next.config.ts                # Next.js configuration
├── 📄 package.json                  # Dependencies
├── 📄 postcss.config.mjs            # PostCSS config
├── 📄 tailwind.config.ts            # Tailwind configuration
├── 📄 tsconfig.json                 # TypeScript config
└── 📄 README.md                     # You are here!
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `app/[slug]/route.ts` | Handles URL redirects and click tracking |
| `app/[slug]/stats/page.tsx` | Analytics dashboard with charts |
| `app/api/shorten/route.ts` | API endpoint to create short URLs |
| `app/api/stats/[slug]/route.ts` | API endpoint to fetch analytics |
| `lib/connectDB.ts` | MongoDB connection with caching |
| `models/URL.ts` | Schema: `{ slug, url, clicks, createdAt }` |
| `models/Click.ts` | Schema: `{ urlId, timeStamp, userAgent }` |
---

## � API Documentation

### Create Short URL

**Endpoint:** `POST /api/shorten`

**Request Body:**
```json
{
  "url": "https://example.com/very-long-url-here",
  "customSlug": "my-link"  // Optional
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "URL shortened successfully",
  "shortUrl": "http://localhost:3000/my-link"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Slug already exists"
}
```

### Get Analytics

**Endpoint:** `GET /api/stats/[slug]`

**Success Response (200):**
```json
{
  "success": true,
  "slug": "my-link",
  "url": "https://example.com/very-long-url-here",
  "totalClicks": 42,
  "daily": [
    { "_id": "2025-10-17", "count": 15 },
    { "_id": "2025-10-16", "count": 27 }
  ],
  "userAgents": [
    { "_id": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...", "count": 20 },
    { "_id": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0)...", "count": 22 }
  ]
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "No url found"
}
```

### Redirect to Original URL

**Endpoint:** `GET /[slug]`

**Behavior:**
- Returns 307 redirect to original URL
- Increments click counter
- Records click with timestamp and user agent
- If slug not found, redirects to `/error-page`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AdityaKumbhar21/NYN_URL_Shortner)

**Steps:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   - Add `MONGODB_URI` with your MongoDB connection string
   - Add `NEXT_API_BASE_URL` with your Vercel URL

4. **Deploy!** 🎉
   - Vercel will auto-deploy on every push to main

### Other Deployment Options

| Platform | Difficulty | Notes |
|----------|-----------|-------|
| **Vercel** | ⭐ Easy | Best for Next.js, zero config |
| **Netlify** | ⭐⭐ Medium | Requires build commands |
| **Railway** | ⭐⭐ Medium | Good for full-stack apps |
| **AWS** | ⭐⭐⭐ Hard | Most flexible, complex setup |
| **DigitalOcean** | ⭐⭐⭐ Hard | VPS hosting |
---

## 📊 Database Schema

### URL Collection

```typescript
interface URL {
  slug: string;        // Unique identifier (e.g., "my-link")
  url: string;         // Original long URL
  clicks: number;      // Total click count (default: 0)
  createdAt: Date;     // Creation timestamp
}
```

**Indexes:**
- `slug`: Unique index for fast lookups
- `createdAt`: For sorting recent links

### Click Collection

```typescript
interface Click {
  urlId: ObjectId;     // Reference to URL document
  timeStamp: Date;     // When the click occurred
  userAgent: string;   // Browser/device information
}
```

**Indexes:**
- `urlId`: For efficient analytics queries
- `timeStamp`: For date-based aggregations

**Relationships:**
```
URL (1) ─────< (Many) Click
  _id          urlId
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Blue** | `#0353a4` | Buttons, links, charts, accents |
| **Light Blue** | `oklch(0.95 0.01 250)` | Backgrounds, secondary elements |
| **Dark Blue** | `oklch(0.35 0.18 250)` | Dark mode primary |
| **White** | `#ffffff` | Backgrounds (light mode) |
| **Dark** | `oklch(0.145 0.01 250)` | Backgrounds (dark mode) |

### Typography

- **Primary Font:** Geist Sans
- **Monospace Font:** Geist Mono
- **Headings:** Bold, varying sizes
- **Body:** Regular weight, 16px base

### Components

- **Cards:** Rounded corners, subtle shadows
- **Buttons:** Primary (blue), Secondary (outline), Ghost
- **Inputs:** Clean borders, focus states
- **Charts:** Blue gradient fills, smooth animations

---

## 📝 Usage Guide

### Creating a Short URL

1. **Navigate to the homepage** at `http://localhost:3000`
2. **Enter your long URL** in the input field
3. **(Optional)** Add a custom slug for branding
4. **Click "Shorten URL"**
5. **Copy your short link** and share!

### Viewing Analytics

**Method 1: From Shortener**
- After creating a URL, click "View Analytics"

**Method 2: Direct URL**
- Visit `http://localhost:3000/{your-slug}/stats`

**What You'll See:**
- 📊 Total click count
- 📈 Daily click trends (area chart)
- 📊 User agent breakdown (bar chart)
- 📋 Detailed daily statistics (table)
- 📅 Days active counter

### API Integration

**Using cURL:**
```bash
# Create short URL
curl -X POST http://localhost:3000/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com","customSlug":"test"}'

# Get analytics
curl http://localhost:3000/api/stats/test
```

**Using JavaScript/Fetch:**
```javascript
// Create short URL
const response = await fetch('/api/shorten', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://example.com',
    customSlug: 'my-link'
  })
});
const data = await response.json();

// Get analytics
const stats = await fetch('/api/stats/my-link');
const analytics = await stats.json();
```

---

## 🗺️ Roadmap

### ✅ Completed
- [x] URL Shortening with custom slugs
- [x] Click tracking and analytics
- [x] Beautiful charts (Area & Bar)
- [x] Professional SaaS UI
- [x] Mobile responsive design
- [x] Dark mode support
- [x] Copy to clipboard
- [x] Error handling
- [x] User agent tracking

### 🔜 Coming Soon
- [ ] **QR Code Generation** - Generate QR codes for short links
- [ ] **Link Expiration** - Set expiry dates for temporary links
- [ ] **Password Protection** - Secure links with passwords
- [ ] **Geographic Analytics** - See where clicks come from
- [ ] **Device Analytics** - Detailed device/browser breakdown
- [ ] **Link Preview** - Show preview of destination
- [ ] **Bulk URL Import** - Upload CSV to create many links
- [ ] **Export Analytics** - Download stats as CSV/PDF
- [ ] **API Key Management** - Generate API keys for developers
- [ ] **Rate Limiting** - Prevent abuse
- [ ] **Link Editing** - Update destination URLs
- [ ] **Link Deletion** - Remove unwanted links
- [ ] **Search/Filter** - Find links quickly

### 🌟 Future Features
- [ ] **User Authentication** - Login with NextAuth
- [ ] **User Dashboard** - Manage all your links
- [ ] **Team Collaboration** - Share links with teams
- [ ] **Custom Domains** - Use your own domain
- [ ] **A/B Testing** - Test different destinations
- [ ] **Webhooks** - Get notified on events
- [ ] **Public API** - Full REST API access
- [ ] **Analytics API** - Programmatic access to stats
- [ ] **Link Tags** - Organize with categories
- [ ] **Comments** - Add notes to links

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click the Fork button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/NYN_URL_Shortner.git
   cd NYN_URL_Shortner
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests if applicable

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: amazing new feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repo
   - Click "New Pull Request"
   - Describe your changes

### Contribution Ideas

- � Fix bugs
- ✨ Add new features
- 📝 Improve documentation
- 🎨 Enhance UI/UX
- ⚡ Optimize performance
- 🧪 Add tests
- 🌐 Add translations

---

## � License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Aditya Kumbhar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

Special thanks to these amazing open-source projects:

- **[Next.js](https://nextjs.org/)** - The React Framework for Production
- **[Vercel](https://vercel.com/)** - Deployment and hosting platform
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB ODM
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[Lucide](https://lucide.dev/)** - Beautiful icon set
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

---

## 📧 Contact & Support

**Aditya Kumbhar**

- 🐙 GitHub: [@AdityaKumbhar21](https://github.com/AdityaKumbhar21)
- 📦 Repository: [NYN_URL_Shortner](https://github.com/AdityaKumbhar21/NYN_URL_Shortner)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/aditya-kumbhar)

### Support the Project

If you find this project helpful:

- ⭐ **Star this repository** on GitHub
- 🐦 **Share it** on social media
- 🐛 **Report bugs** via GitHub Issues
- 💡 **Suggest features** via GitHub Issues
- 🤝 **Contribute** by submitting a PR

---

<div align="center">

### 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=AdityaKumbhar21/NYN_URL_Shortner&type=Date)](https://star-history.com/#AdityaKumbhar21/NYN_URL_Shortner&Date)

---

### Made with ❤️ by [Aditya Kumbhar](https://github.com/AdityaKumbhar21)

**NYNURL** - Not Your Normal URL Shortener

*Free Analytics. Forever.*

---

</div>