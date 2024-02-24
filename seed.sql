DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image_url VARCHAR(255)
);

INSERT INTO profiles (name, image_url) VALUES
  ('Sarah', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=4&w=198&h=198'),
  ('John', 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=facearea&facepad=4&w=198&h=198'),
  ('Bess', 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?fit=facearea&facepad=4&w=198&h=198');
