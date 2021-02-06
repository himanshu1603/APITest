const express = require("express");
const router = express.Router();

// Load Process model
const Process = require("../../models/Process");


// @route GET /process
// @desc create a process

router.get("/process", (req, res) => {

    let d = new Date();

    const newProcess = new Process({
        date: d.toISOString(),
        method: "get",
        headers: req.headers,
        path: '/process',
        query: req.query,
        body: req.body,
        duration: Math.floor(Math.random() * (15))+15

    });
    newProcess.save()
    .then(process => res.json(process))
    .catch(err => console.log(err));

});

// @route POST /process
// @desc create a process

router.post("/process", (req, res) => {

    let d = new Date();

    const newProcess = new Process({
        date: d.toISOString(),
        method: "post",
        headers: req.headers,
        path: '/process',
        query: req.query,
        body: req.body,
        duration: Math.floor(Math.random() * (15))+15

    });
    newProcess.save()
    .then(process => res.json(process))
    .catch(err => console.log(err));

});

// @route PUT /process
// @desc create a process

router.put("/process", (req, res) => {

    let d = new Date();

    const newProcess = new Process({
        date: d.toISOString(),
        method: "put",
        headers: req.headers,
        path: '/process',
        query: req.query,
        body: req.body,
        duration: Math.floor(Math.random() * (15))+15

    });
    newProcess.save()
    .then(process => res.json(process))
    .catch(err => console.log(err));

});

// @route DELETE /process
// @desc create a process

router.delete("/process", (req, res) => {

    let d = new Date();

    const newProcess = new Process({
        date: d.toISOString(),
        method: "delete",
        headers: req.headers,
        path: '/process',
        query: req.query,
        body: req.body,
        duration: Math.floor(Math.random() * (15))+15

    });
    newProcess.save()
    .then(process => res.json(process))
    .catch(err => console.log(err));

});


// @route GET /stats
// @desc return average running time for each api method

router.get("/stats", (req, res) => {

    let fromDate  = req.query.fromDate ?  new Date(req.query.fromDate) : new Date("1900-01-01T00:00:00.000Z")
    let toDate = req.query.toDate ?  new Date(req.query.toDate) : new Date()
    

    Process.aggregate([
        { "$match": {
            "date": { "$gte": fromDate,  "$lt": toDate}
        }}, 
        {$group : {_id : "$method", num_req : {$sum : 1}, avg_time: {$avg : "$duration"}}}      
    ])
    .then(result => {
        res.json(result)
    })

});


module.exports = router;