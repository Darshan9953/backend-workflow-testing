const express = require("express");

const app = express();

app.use(express.json());


// SESSION CREATION API
app.post("/session/create", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Session created successfully",
        sessionId: "SESSION123"
    });

});


// INTERVIEW START API
app.post("/interview/start", (req, res) => {

    res.status(200).json({
        started: true,
        message: "Interview started successfully"
    });

});


// SAVE INTERVIEW API
app.post("/interview/save", (req, res) => {

    res.status(200).json({
        saved: true,
        message: "Interview response saved"
    });

});


// RECOVERY API
app.get("/interview/recover", (req, res) => {

    res.status(200).json({
        recovered: true,
        message: "Interview recovered successfully"
    });

});


module.exports = app;