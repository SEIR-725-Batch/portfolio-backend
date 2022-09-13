// Import Dependencies and JSON files
const express = require('express');
const cors = require('cors');
const projects = require('./projects.json');
const about = require('./about.json');

const port = 4001
const app = express();

//! Middleware
app.use(cors());

//! Home Route '/'
app.get('/', (req, res) => {
    res.send('hello there')
})

//! GET /projects
app.get('/projects', (req, res) => {
    res.json(projects);
})
//! GET /about
app.get('/about', (req, res) => {
    res.json(about);
})

//! Listener
app.listen(port, () => {
    console.log(`PORT listening on ${port}...`)
});