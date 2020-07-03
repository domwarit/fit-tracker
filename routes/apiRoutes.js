const router = require("express").Router()
const Workout = require("../models/workout")


    router.get('api/workouts', function (req, res){
        Workout.find({})
        .then(data =>{
            console.log(data)
            res.json(data)
        })
        .catch(error => {
            res.json(error)

        })
        
    });
    router.get("/api/workouts/range", function (req, res){
        Workout.find({}).limit(7)
        .then(data =>{
            console.log(data)
            res.json(data)
        })
        .catch(error => {
            res.json(error)

        })
    });

    router.post("/api/workouts", function (req, res){
        Workout.create({})
        .then(data => res.json(data))
        .catch(error => {
            console.log("error", error)
            res.json(error)
        })
    });

    router.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

    module.exports = router;