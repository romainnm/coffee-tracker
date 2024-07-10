const express = require('express');
require('dotenv').config();

// Create an instance of express
const app = express();

(function start(){
    // TODO: configure PORT in .env - default port 3000
    const PORT = process.env.PORT || 3000;

    try {
        // TODO: Initialize connection to DB

        app.listen(PORT, ()=>{
            console.log(`Server listening on ${PORT}`);
        })
    } catch (error) {
        console.log(error);    
    }
})();



