-- Create projects table for Buildangle
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  location TEXT,
  year INTEGER DEFAULT 2024,
  status TEXT DEFAULT 'ongoing' CHECK (status IN ('ongoing', 'completed', 'planning')),
  featured BOOLEAN DEFAULT false,
  image_url TEXT,
  gallery JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);

-- Allow owner write access (managed via API)
CREATE POLICY "Allow authenticated write access" ON projects
  FOR ALL USING (true);

-- Insert sample projects
INSERT INTO projects (title, slug, description, location, year, status, featured, image_url) VALUES
('Royal Lanka Villa', 'royal-lanka-villa', 'Luxury beachfront villa with infinity pool and tropical gardens', 'Bentota', 2024, 'completed', true, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80'),
('Colombo Modern Home', 'colombo-modern-home', 'Contemporary urban residence with smart home features', 'Colombo 7', 2024, 'completed', true, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'),
('Hill Country Retreat', 'hill-country-retreat', 'Mountain view eco-luxury villa with sustainable design', 'Nuwara Eliya', 2023, 'completed', false, 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'),
('Coastal Paradise', 'coastal-paradise', 'Exclusive coastal mansion with private beach access', 'Negombo', 2024, 'ongoing', true, 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80'),
('Urban Heights Tower', 'urban-heights-tower', 'Mixed-use commercial and residential development', 'Colombo', 2023, 'completed', false, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')
ON CONFLICT (slug) DO NOTHING;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);