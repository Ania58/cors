const express = require('express')
const axios = require('axios')
const app = express()

const cors = require('cors')
app.use(cors())


app.get('/characters/:characterName', async (req,res) => {
    const characterName = req.params.characterName
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`

    try {
        const response = await axios.get(url)
        const character = response.data.results;
        const {name, status, species, gender, origin, image} = character[0]
        res.json({name, status, species, gender, origin: origin.name, image})
    } catch (error) {
        res.status(404).json({error: 'character not found'})
    }
})

app.listen(3000, () => {
    console.log('Express is listening on port http://localhost:3000')
})