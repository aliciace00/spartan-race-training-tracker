// Supabase configuration
// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://geurvjdgkqbkfzbwexdh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdldXJ2amRna3Fia2Z6YndleGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzOTg1OTIsImV4cCI6MjA3Mzk3NDU5Mn0.BvvjrRvr2X3_OzMKo4JcF9THqsQqTcgmeCu8bZ2oxXg';

// Initialize Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// User ID - for now using a simple identifier, you can implement proper auth later
const USER_ID = 'spartan-user-1';

// Supabase API functions
const SupabaseAPI = {
    // Save milestone completion
    async saveMilestone(obstacleId, milestoneIndex, completed) {
        try {
            const { data, error } = await supabaseClient
                .from('milestones')
                .upsert({
                    user_id: USER_ID,
                    obstacle_id: obstacleId,
                    milestone_index: milestoneIndex,
                    completed: completed,
                    completed_at: completed ? new Date().toISOString() : null
                }, {
                    onConflict: 'user_id,obstacle_id,milestone_index'
                });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error saving milestone:', error);
            throw error;
        }
    },

    // Get all milestones for a user
    async getMilestones() {
        try {
            const { data, error } = await supabaseClient
                .from('milestones')
                .select('*')
                .eq('user_id', USER_ID);
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching milestones:', error);
            throw error;
        }
    },

    // Save obstacle notes
    async saveNotes(obstacleId, content) {
        try {
            const { data, error } = await supabaseClient
                .from('notes')
                .upsert({
                    user_id: USER_ID,
                    obstacle_id: obstacleId,
                    content: content
                }, {
                    onConflict: 'user_id,obstacle_id'
                });
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error saving notes:', error);
            throw error;
        }
    },

    // Get all notes for a user
    async getNotes() {
        try {
            const { data, error } = await supabaseClient
                .from('notes')
                .select('*')
                .eq('user_id', USER_ID);
            
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Error fetching notes:', error);
            throw error;
        }
    }
};

// Export for use in main script
window.SupabaseAPI = SupabaseAPI;
