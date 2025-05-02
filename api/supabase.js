const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://syfkkmaxmwpsvxhkqyua.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5ZmtrbWF4bXdwc3Z4aGtxeXVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNjgxNTcsImV4cCI6MjA2MTc0NDE1N30.enapNnqwXDy9Y3pxIQMCLvSOKNUIF03aneJzH1B9dPs'
);

module.exports = supabase;