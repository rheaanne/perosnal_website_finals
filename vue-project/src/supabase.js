import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-https://eeomhghphspzjcitknfn.supabase.co.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlb21oZ2hwaHNwempjaXRrbmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMjUxMTUsImV4cCI6MjA1NjgwMTExNX0.XvlKe8x1tQTK7ZEMxpmkRDPii0T_zRdpftGz2lGid6w';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
