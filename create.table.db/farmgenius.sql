--Table user
CREATE TABLE `user` (
  `user_id` varchar(16) primary key,
  `name` varchar(255),
  `email` varchar(255) unique,
  `password` varchar(225),
  `created_at` datetime,
  `updated_at` datetime
);

--Table plant
CREATE TABLE `plant` (
  `plant_id` varchar(16) primary key,
  `nama` varchar(55),
  `deskripsi_tanaman` text
);

--Table disease
CREATE TABLE `disease` (
  `disease_id` varchar(16) primary key,
  `name` varchar(255),
  `deskripsi_penyakit` text,
  `solusi` text 
);

--Tabel detection
CREATE TABLE detection (
  detection_id INT AUTO_INCREMENT PRIMARY KEY,
  fileName VARCHAR(255) NOT NULL,
  detectionDate TIMESTAMP NOT NULL,
  detectionResult VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255) NOT NULL
);

-- Tabel recommendation_farm
CREATE TABLE recommendation_farm (
  recommendation_id VARCHAR(16) PRIMARY KEY,
  daerah VARCHAR(100),
  suhu DECIMAL(8, 2),
  luas_tanah VARCHAR(20),
  recommendasi_tanaman VARCHAR(20),
);

