# 🚀 Neurolov Portal Setup Guide

## 📋 Environment Setup

### 1. Create Environment File
Copy the development template and add your Supabase credentials:

```bash
cp .env.development .env.local
```

### 2. Get Supabase Credentials
1. Go to [supabase.com](https://supabase.com)
2. Create a new project or use existing
3. Go to Settings → API
4. Copy your:
   - **Project URL** 
   - **Anon/Public Key** 

### 3. Update .env.local
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Create Newsletter Table (Optional)
If you want newsletter functionality, run this SQL in Supabase:

```sql
CREATE TABLE newsletter_subscriptions (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    source VARCHAR(100) DEFAULT 'website',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ⚠️ Troubleshooting

**White Screen?**
- Check browser console for errors
- Make sure .env.local file exists with correct Supabase credentials
- Refresh the page

**Build Errors?**
- Delete node_modules and package-lock.json
- Run npm install again
- Check that all environment variables are set

**Newsletter Not Working?**
- Verify Supabase credentials in .env.local
- Check that newsletter_subscriptions table exists
- The app will work without newsletter functionality
