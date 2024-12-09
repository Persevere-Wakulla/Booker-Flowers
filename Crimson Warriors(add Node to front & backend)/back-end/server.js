import mongoose from "mongoose"
import express, { urlencoded } from "express"
import cors from "cors"
import Stores from "./models/stores.js"
import Characters from "./models/characters.js"
import Monsters from "./models/monsters.js"
import Users from "./models/users.js"
import path from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const parent = path.dirname(dirname)

const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// post request for the logIn at the home page.
app.post(`/`, async (req, res) => {
    console.log(req.body)
    const current = req.body
    // only create has fname
    if (current.fname) {
        const creation = {
            firstName: req.body.fname,
            lastName: req.body.lname,
            pinNumber: req.body.pnum,
            purse: 30000,
            expPoints: 0,
            level: 1,
            character: ''
        }
        const newUser = await Users.create(creation)
        // console.log(newUser)

        return res.json({ message: `${newUser.firstName}` })
    } else {
        // login uses firstName
        const usersData = await Users.findOne(req.body).populate('pack')
        // console.log(usersData)
        if (usersData) {
            return res.json(usersData)
        } else {
            res.status(400).send({ message: 'You have no account, go create one.' })
        }
    }
})

// store page 
app.get('/store', async (req, res) => {
    const storesData = await Stores.find({})
    res.send(storesData)
})

app.put('/store', async (req, res) => {
    console.log(req.body);
    // found
    if (req.body.found) {
        const { user, found, gold } = req.body
        // get item list
        const itemList = await Stores.find({})
        // found = index
        const update = await Users.findOne({_id: user})
            update.purse = gold
            update.pack = [...update.pack, itemList[found]]
            await update.save()

        console.log(update);

        if(update){
            res.send(update.populate('pack'))
        }

    } else {
        // purchase
        // player info sent
        const { _id, purse, pack } = req.body

        const update = await Users.findByIdAndUpdate(_id, { purse, pack })

        // did it work?
        if (update) {
            console.log(update);
            console.log('added to pack');
            res.send(update)
        }
    }
})

// CharacterBuilder Page
app.get('/character', async (req, res) => {
    const charactersData = await Characters.find({})

    res.send(charactersData)
})

app.put('/character', async (req, res) => {
    const { character } = req.body
    const { user } = req.body
    // find who is the current user?
    // update the current user obj with the character they have chose
    // const update = await Users.findByIdAndUpdate(user._id, {character})
    // upadating - what you want to update needs to be in an  obj {}
    const update = await Users.findByIdAndUpdate(user._id, { character })
    // console.log(update)
    res.json('User Updated')
})

app.get('/board', async (req, res) => {
    // console.log("its me")
    const monstersData = await Monsters.find({})
    // console.log(monstersData)
    res.send(monstersData)

})












mongoose.connect("mongodb://127.0.0.1/crimsons").then(() => {
    console.log("connect to DB");
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
})

// ! When user signs up, store their info in session storage