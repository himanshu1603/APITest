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


module.exports = router;