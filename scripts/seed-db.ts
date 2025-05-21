import { query } from "../lib/db"
import { allQuestions } from "../lib/questions"
import { topics } from "../lib/topics"

async function seedDatabase() {
  try {
    console.log("Starting database seeding...")

    // Insert topics
    console.log("Inserting topics...")
    for (const topic of topics) {
      await query(
        "INSERT INTO topics (id, name, count) VALUES ($1, $2, $3) ON CONFLICT (id) DO UPDATE SET name = $2, count = $3",
        [topic.id, topic.name, topic.count],
      )
    }

    // Insert questions
    console.log("Inserting questions...")
    for (const question of allQuestions) {
      await query(
        `INSERT INTO questions 
         (id, text, code, options, correct_answer, explanation, topic_id, topic_name, difficulty, java_version) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         ON CONFLICT (id) DO UPDATE SET 
         text = $2, code = $3, options = $4, correct_answer = $5, explanation = $6, 
         topic_id = $7, topic_name = $8, difficulty = $9, java_version = $10`,
        [
          question.id,
          question.text,
          question.code,
          JSON.stringify(question.options),
          question.correctAnswer,
          question.explanation,
          question.topicId,
          question.topicName,
          question.difficulty,
          question.javaVersion || null,
        ],
      )
    }

    console.log("Database seeding completed successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

// Run the seeding function
seedDatabase()
