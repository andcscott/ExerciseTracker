import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });

// Connect to to the database
const db = mongoose.connection;
// Log successful database connection
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 *  Define the exercises schema
 */
const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true },
});

/**
 * Compile the model from the schema
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Create a new exercise
 */
const createExercise = async (name, reps, weight, unit, date) => {
  const exercise = new Exercise({
    name: name,
    reps: reps,
    weight: weight,
    unit: unit,
    date: date,
  });
  return exercise.save();
};

const findExercises = async (filter) => {
  const query = Exercise.find(filter);
  return query.exec();
};

const findExerciseById = async (_id) => {
  const query = Exercise.findById(_id);
  return query.exec();
};

const updateExercise = async (_id, update) => {
  const result = await Exercise.updateOne(_id, update);
  return result.modifiedCount;
};

export { createExercise, findExerciseById, findExercises, updateExercise };
