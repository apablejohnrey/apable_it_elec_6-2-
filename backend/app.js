const express = require('express');
const cors = require('cors'); // Import cors package

const app = express();

app.use(cors()); // Enable CORS for all requests

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
