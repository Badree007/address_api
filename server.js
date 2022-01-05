const fs = require('fs');
const express = require('express');
// const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static('frontend'));
app.use(express.json());

//Allow frontend
// app.use(cors());
// app.use(cors({
//     origin: 'https://badridahal.netlify.app'
// }))

//Read json file
const address = JSON.parse(fs.readFileSync(
    `${__dirname}/main-api.json`
));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/frontend/index.html`);
})

app.get(`/api/:postcode`, (req, res) => {
    const postcode = req.params.postcode *1;
    for (const add of address) {
        const place = add.places.find(place => place.postcode === postcode);
        console.log(place);
        if(place) {
            return res.status(200).json({
                status: "success",
                noOfCities: place.cities.length,
                data: {
                    state: add.state, 
                    ...place
                }
            });
        }
    }
    res.status(404).json({
            status: "fail",
            message: "Postcode not found!"
    });
})

app.post('/', (req,res)=> {
    res.status(405).json({
        status: "Not allowed",
        message: "Method not allowed"
    })
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})