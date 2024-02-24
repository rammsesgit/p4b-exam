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


DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(1000) NOT NULL,
  author VARCHAR(255) NOT NULL
);
INSERT INTO posts (title, content, author) VALUES
  ('Isaac Newton quote', 'If I have seen further it is by standing on the shoulders of Giants.', 'Guest'),
  ('Albert Einstein quote', 'Life is like riding a bicycle. To keep your balance, you must keep moving forward.', 'Guest'),
  ('Marie Curie quote', 'Nothing in life is to be feared, it is only to be understood.', 'Guest');

