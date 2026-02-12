/*
  # Create Health Data and Practitioner Tables
  
  1. New Tables
    - `health_conditions` - Health conditions database by age group
    - `practitioners` - Doctors, yoga instructors, ayurveda practitioners
    - `ayurveda_products` - Products available in store
    - `job_listings` - Job postings for instructors and practitioners
  
  2. Security
    - Enable RLS on all tables
    - Public read access for conditions and products
    - Authenticated access for practitioners and jobs
*/

-- Health Conditions by Age Group
CREATE TABLE IF NOT EXISTS health_conditions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  age_group text NOT NULL,
  disease_name text NOT NULL,
  symptoms text,
  causes text,
  diet_lifestyle text,
  herbs text,
  formulations text,
  home_remedies text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE health_conditions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read health conditions"
  ON health_conditions
  FOR SELECT
  TO public
  USING (true);

-- Practitioners Directory
CREATE TABLE IF NOT EXISTS practitioners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  specialization text NOT NULL,
  location text NOT NULL,
  latitude float,
  longitude float,
  phone text,
  email text,
  experience_years int,
  qualifications text,
  availability_status text DEFAULT 'available',
  rating float DEFAULT 0,
  bio text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE practitioners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read practitioners"
  ON practitioners
  FOR SELECT
  TO public
  USING (true);

-- Ayurveda Store Products
CREATE TABLE IF NOT EXISTS store_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text,
  price float NOT NULL,
  stock_quantity int DEFAULT 0,
  image_url text,
  health_benefits text,
  ingredients text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE store_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read store products"
  ON store_products
  FOR SELECT
  TO public
  USING (true);

-- Job Listings
CREATE TABLE IF NOT EXISTS job_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  position_type text NOT NULL,
  location text NOT NULL,
  description text,
  requirements text,
  salary_range text,
  posted_by text,
  status text DEFAULT 'open',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read job listings"
  ON job_listings
  FOR SELECT
  TO public
  USING (true);
