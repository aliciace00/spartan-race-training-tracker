# Setup Guide for Spartan Race Training Tracker

This guide will help you deploy your Spartan Race Training Tracker to Vercel and set up Supabase for cloud data storage.

## Step 1: Set up Supabase

1. **Create a Supabase account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up for a free account

2. **Create a new project**
   - Click "New Project"
   - Choose your organization
   - Enter project name: `spartan-race-tracker`
   - Set a strong database password
   - Choose a region close to you
   - Click "Create new project"

3. **Set up the database schema**
   - Go to the SQL Editor in your Supabase dashboard
   - Copy the contents of `supabase-schema.sql`
   - Paste it into the SQL Editor and run it
   - This will create the necessary tables for milestones and notes

4. **Get your project credentials**
   - Go to Settings > API
   - Copy your Project URL and anon/public key
   - Update `supabase-config.js` with these values:
     ```javascript
     const SUPABASE_URL = 'your-project-url-here';
     const SUPABASE_ANON_KEY = 'your-anon-key-here';
     ```

## Step 2: Deploy to Vercel

1. **Install Vercel CLI** (if you haven't already)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy your project**
   ```bash
   vercel
   ```
   - Follow the prompts:
     - Set up and deploy? Yes
     - Which scope? (choose your account)
     - Link to existing project? No
     - Project name: spartan-race-tracker
     - Directory: ./
     - Override settings? No

4. **Your app will be deployed!**
   - Vercel will give you a URL like `https://spartan-race-tracker.vercel.app`
   - You can also set up a custom domain later

## Step 3: Test the deployment

1. **Open your deployed app** on your phone
2. **Test milestone tracking** - check off a few milestones
3. **Test notes** - add some notes to obstacles
4. **Test cross-device sync** - open the app on another device and verify your progress syncs

## Step 4: Mobile optimization

The app is already mobile-responsive, but you can:
- Add the app to your phone's home screen for easy access
- The app works offline and will sync when you're back online

## Troubleshooting

### If Supabase connection fails:
- Check that your URL and API key are correct
- Verify the database schema was created successfully
- Check the browser console for error messages

### If Vercel deployment fails:
- Make sure all files are committed to git
- Check that `vercel.json` is in the root directory
- Try running `vercel --prod` for production deployment

### If data doesn't sync:
- Check your internet connection
- Verify Supabase credentials are correct
- The app falls back to localStorage if Supabase is unavailable

## Security Notes

- The current setup uses a simple user ID system
- For production use, consider implementing proper authentication
- The RLS policies are currently set to allow all operations
- You can restrict access later by updating the policies in Supabase

## Next Steps

Once deployed, you can:
- Share the URL with friends who are also training
- Add more features like training schedules
- Implement user authentication for multiple users
- Add data export/import functionality

Your Spartan Race Training Tracker is now ready to use on any device! 🏃‍♀️💪
