// This script can be run with: node scripts/run-seed.js
require("dotenv").config()
const { Pool } = require("pg")
const fs = require("fs")
const path = require("path")

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
})

async function runSeed() {
  let client

  try {
    console.log("Connecting to database...")

    // Test connection
    client = await pool.connect()
    console.log("Connected to database successfully")

    // Read and execute schema.sql
    console.log("Creating database schema...")
    const schemaPath = path.join(__dirname, "../db/schema.sql")
    const schemaSql = fs.readFileSync(schemaPath, "utf8")
    await client.query(schemaSql)

    // Import sample data
    console.log("Loading sample data...")

    // Sample topics data
    const topics = [
      { id: "variables-operators", name: "Variables & Operators", count: 120 },
      { id: "control-statements", name: "Control Statements", count: 100 },
      { id: "oop", name: "OOP (Inheritance, Polymorphism, etc.)", count: 130 },
      { id: "strings-arrays", name: "Strings & Arrays", count: 110 },
      { id: "static-final-blocks", name: "Static, Final, and Blocks", count: 80 },
      { id: "exception-handling", name: "Exception Handling", count: 90 },
      { id: "interfaces-abstract", name: "Interfaces, Abstract Classes", count: 100 },
      { id: "java8-features", name: "Java 8 Features (Lambdas, Streams)", count: 100 },
      { id: "collections-generics", name: "Collections & Generics", count: 110 },
      { id: "multithreading", name: "Multithreading, Synchronization", count: 90 },
      { id: "inner-classes", name: "Inner Classes", count: 80 },
      { id: "misc", name: "Misc (Enums, File I/O, etc.)", count: 70 },
    ]

    // Sample questions data (just a few for testing)
    const questions = [
      {
        id: 1,
        text: "What will be the output of the following code?",
        code: `public class Main {
  public static void main(String[] args) {
    int i = 10;
    System.out.println(i++ + ++i);
  }
}`,
        options: [
          { id: "a", text: "21" },
          { id: "b", text: "22" },
          { id: "c", text: "20" },
          { id: "d", text: "Compilation error" },
        ],
        correctAnswer: "b",
        explanation:
          "i++ uses the current value (10) then increments to 11. ++i increments to 12 first, then uses the value. So 10 + 12 = 22.",
        topicId: "variables-operators",
        topicName: "Variables & Operators",
        difficulty: "Basic",
      },
      {
        id: 2,
        text: "What will be the output of the following code?",
        code: `public class Main {
  public static void main(String[] args) {
    double d = 10.0 / 0;
    System.out.println(d);
  }
}`,
        options: [
          { id: "a", text: "0.0" },
          { id: "b", text: "Infinity" },
          { id: "c", text: "ArithmeticException" },
          { id: "d", text: "NaN" },
        ],
        correctAnswer: "b",
        explanation: "Division of a non-zero number by zero in floating-point arithmetic results in Infinity.",
        topicId: "variables-operators",
        topicName: "Variables & Operators",
        difficulty: "Basic",
      },
      {
        id: 3,
        text: "What will be the output of the following code?",
        code: `public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
          break;
        }
        System.out.print(i + "" + j + " ");
      }
    }
  }
}`,
        options: [
          { id: "a", text: "00 01 02 10 11 12 20 21 22" },
          { id: "b", text: "00 01 02 10 20 21 22" },
          { id: "c", text: "00 01 02 10 11 12" },
          { id: "d", text: "00 01 02 10 20 21 22" },
        ],
        correctAnswer: "b",
        explanation:
          "The break statement only breaks out of the innermost loop. When i=1 and j=1, the inner loop is exited, but the outer loop continues. So we skip printing '11' and '12', but continue with i=2.",
        topicId: "control-statements",
        topicName: "Control Statements",
        difficulty: "Basic",
      },
    ]

    // Insert topics
    console.log("Inserting topics...")
    for (const topic of topics) {
      await client.query(
        "INSERT INTO topics (id, name, count) VALUES ($1, $2, $3) ON CONFLICT (id) DO UPDATE SET name = $2, count = $3",
        [topic.id, topic.name, topic.count],
      )
    }

    // Insert questions
    console.log("Inserting sample questions...")
    for (const question of questions) {
      await client.query(
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
  } finally {
    if (client) {
      client.release()
    }
    await pool.end()
  }
}

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error("ERROR: DATABASE_URL environment variable is not set")
  console.log("Please create a .env file with your PostgreSQL connection string:")
  console.log("DATABASE_URL=postgres://username:password@hostname:port/database")
  process.exit(1)
}

// Run the seeding function
runSeed()
