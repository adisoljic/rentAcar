-- db_schema.sql (Draft ERD - plan only for Milestone 1)
-- Entities: users, customers, categories, cars, reservations

-- users (for authentication)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150),
  email VARCHAR(150) UNIQUE,
  password_hash VARCHAR(255),
  role ENUM('user','admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- customers (optional: link to users)
CREATE TABLE IF NOT EXISTS customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  full_name VARCHAR(200),
  phone VARCHAR(50),
  license_number VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- categories (car categories)
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT
);

-- cars
CREATE TABLE IF NOT EXISTS cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  make VARCHAR(100),
  model VARCHAR(100),
  year INT,
  plate_number VARCHAR(50) UNIQUE,
  category_id INT,
  status ENUM('available','rented','maintenance') DEFAULT 'available',
  daily_price DECIMAL(10,2),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- reservations
CREATE TABLE IF NOT EXISTS reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  car_id INT,
  start_date DATE,
  end_date DATE,
  total_price DECIMAL(10,2),
  status ENUM('pending','confirmed','cancelled') DEFAULT 'pending',
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (car_id) REFERENCES cars(id)
);
