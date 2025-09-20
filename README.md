# Spartan Sprint Training Tracker

A clean, minimalistic web application to track your progress preparing for a Spartan Sprint race.

## Features

- **20 Spartan Sprint Obstacles**: Complete breakdown of all potential obstacles
- **Progressive Milestones**: 1-5 training milestones per obstacle, from gym exercises to race completion
- **Progress Tracking**: Check off milestones with automatic date tracking
- **Notes System**: Add training notes for each obstacle
- **Race Countdown**: Live countdown to your race day (December 14, 2025)
- **Progress Overview**: Visual progress tracking with statistics
- **Dark Mode UI**: Clean, Cursor-inspired interface
- **Local Storage**: All progress automatically saved to your browser

## Obstacles Included

1. **Pull-Up Training** - Build foundational strength for pull-up dependent obstacles
2. Rope Climb
3. Monkey Bars
4. Sandbag Carry
5. Bucket Brigade
6. Barbed Wire Crawl
7. Spear Throw
8. Wall Climb
9. Hercules Hoist
10. Tyrolean Traverse
11. Over-Under-Through
12. Atlas Carry
13. Slip Wall
14. Multi-Rig
15. Z-Wall
16. A-Frame Cargo Net
17. Inverted Wall
18. Stairway to Sparta
19. Twister
20. Beater
21. Bender

## How to Use

1. Open `index.html` in your web browser
2. Review each obstacle and its training milestones
3. Check off milestones as you complete them
4. Add notes about your training progress
5. Track your overall progress in the overview section

## Milestone System

Each obstacle has 1-5 progressive milestones designed for all fitness levels:
- **Milestone 1-2**: Foundation exercises and basic strength building
- **Milestone 3-4**: Intermediate training with increasing difficulty
- **Milestone 5**: Complete obstacle under actual race conditions

**Special Note**: The first obstacle is "Pull-Up Training" - a dedicated section to build the foundational strength needed for many Spartan obstacles, starting from basic dead hangs and progressing to full pull-ups.

## Data Storage

Your progress is automatically saved to both:
- **Supabase Cloud Database** - Syncs across all your devices
- **Local Storage** - Works offline and as a backup

The app automatically detects your connection status and syncs when online.

## Race Day

**Target Date**: December 14, 2025  
**Distance**: 5km (3.1 miles)  
**Obstacles**: 20 obstacles

## Deployment

This app is designed to be deployed to Vercel for mobile access with Supabase for cloud data storage.

### Quick Deploy
```bash
./deploy.sh
```

### Manual Setup
See `SETUP.md` for detailed instructions on:
- Setting up Supabase database
- Deploying to Vercel
- Configuring mobile access

Good luck with your training! 💪
