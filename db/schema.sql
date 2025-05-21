-- Create topics table
CREATE TABLE IF NOT EXISTS topics (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  count INT DEFAULT 0
);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  code TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer VARCHAR(10) NOT NULL,
  explanation TEXT NOT NULL,
  topic_id VARCHAR(50) NOT NULL REFERENCES topics(id),
  topic_name VARCHAR(100) NOT NULL,
  difficulty VARCHAR(20) NOT NULL,
  java_version VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster filtering
CREATE INDEX IF NOT EXISTS idx_questions_topic ON questions(topic_id);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);
