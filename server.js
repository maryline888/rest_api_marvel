const express = require('express');
const crypto = require('crypto');
const app = express();
const path = require('path');
const fs = require('fs');
const request = require("request");
const { PORT, API_PUBLIC_KEY, API_PRIVATE_KEY } = require("./config.js");

app.get('/', function (req, res) {

    let timeStamp = Date.now();
    let ts = timeStamp.toString();

    let preHash = ts + API_PRIVATE_KEY + API_PUBLIC_KEY;
    let hash = crypto.createHash('md5').update(preHash).digest("hex");

    const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=50`;
    request.get({
        url: url,
        json: true,
        headers: { 'User-agent': 'request'}
    }, (err, res, data) => {
        if (err) {
            console.log('Error = ', err);
        } else if (res.statusCode !== 200) {
            console.log('Status code = ', res.statusCode);
        } else {
            const newData = JSON.stringify(data)
            fs.writeFile(path.join(__dirname, "frontend", "static", "js", "views","characters.json"), newData, err => {
                if (err) throw err;
                console.log('File successfully written to marvel.json');
            })
        }
    })
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
   
})


// ===============================
app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')));

// route par défaut ramène toujours à la page "principale" qui est l'affichage de la liste des données
app.get("/*", (req, res) => {

    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})
// ===============================

app.listen(PORT || 4001, () => {
    console.log(`Server is running on port ${PORT || 4001}`);
});
