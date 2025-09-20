-- Supabase schema for Spartan Race Training Tracker

-- Create the milestones table
CREATE TABLE IF NOT EXISTS milestones (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    obstacle_id TEXT NOT NULL,
    milestone_index INTEGER NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, obstacle_id, milestone_index)
);

-- Create the notes table
CREATE TABLE IF NOT EXISTS notes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    obstacle_id TEXT NOT NULL,
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, obstacle_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_milestones_user_obstacle ON milestones(user_id, obstacle_id);
CREATE INDEX IF NOT EXISTS idx_notes_user_obstacle ON notes(user_id, obstacle_id);

-- Enable Row Level Security (RLS)
ALTER TABLE milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS (allowing all operations for now - you can restrict later)
CREATE POLICY "Allow all operations on milestones" ON milestones
    FOR ALL USING (true);

CREATE POLICY "Allow all operations on notes" ON notes
    FOR ALL USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_milestones_updated_at BEFORE UPDATE ON milestones
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_notes_updated_at BEFORE UPDATE ON notes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
