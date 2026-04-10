-- 1. Create Services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  short_desc TEXT,
  long_desc TEXT,
  highlights TEXT[],
  icon_name TEXT,
  image_url TEXT
);

-- 2. Create Settings table
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT
);

-- 3. Insert initial founder image setting
INSERT INTO settings (key, value) 
VALUES ('founder_image_url', 'https://images.unsplash.com/photo-1600880212340-02d956ea36d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')
ON CONFLICT (key) DO NOTHING;

-- 4. Enable Row Level Security (RLS) - Optional but recommended
-- For now, we keep it simple, but in a real app you'd add policies.
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read for services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read for settings" ON settings FOR SELECT USING (true);

-- Allow all for now (Admin should ideally be authenticated)
CREATE POLICY "Allow all for services" ON services FOR ALL USING (true);
CREATE POLICY "Allow all for settings" ON settings FOR ALL USING (true);
