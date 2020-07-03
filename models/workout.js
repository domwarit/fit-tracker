const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day:{
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                catagory: {
                type: String,
                trim: true,
                required: "Enter exercise catagory"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter exercise discription"
    
                },
                duration: {
                    type: Number,
                    required: "Enter exercise duration"
                },
                weight:{
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
            
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);
//adds create property to the schema
workoutSchema.virtual("sessionSummary").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

  const Workout = mongoose.model("Workout", workoutSchema);

  module.exports = Workout;