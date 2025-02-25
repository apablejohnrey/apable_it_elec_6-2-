const express = require('express');
// const cors = require('cors'); 

const app = express();
const bodyParser = require('body-parser')

app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");

        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
        next();
})

app.post("/api/posts", (req, res, next) =>{
    const post =req.body;
    console.log(post),
    res.status(201).json({
        message: 'Post added succesfully',
        post
    })
})

// app.use(cors()); 
app.use('/api/posts', (req, res, next) => {
    const posts = [ 
        {
            id: "grwr",
            title: "first title from server-side",
            content: "first content from server-side"
        },
        {
            id: "gffttfc",
            title: "second title from server-side",
            content: "second content from server-side"
        },
    ];
    
    res.status(200).json({
        message: 'Posts successfully fetched',
        posts: posts
    });
});

module.exports = app;
