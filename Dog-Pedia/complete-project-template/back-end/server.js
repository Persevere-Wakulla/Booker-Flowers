import mongoose from "mongoose"
import express, { urlencoded } from "express"
import cors from "cors"
import Dog from "./models/dogs.js"
import Knowledge from "./models/knowledge.js"
import Donate from "./models/donations.js"
import Treats from "./models/treat.js"
import Adopts from "./models/adopts.js"
import Supplies from "./models/supplies.js"
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import Customers from "./models/customers.js"


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const parent = path.dirname(dirname)
// console.log(parent);

const PORT = 3000
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', async (req, res) => {
    res.sendFile('C:/Users/PCC-17/Desktop/projects for git/Dog-Pedia/complete-project-template/front-end/home.html')

})



app.get('/front-end/dog-pedia.html', async (req, res) => {
    const dogsData = await Dog.find({})
    // console.log(dogsData)
    await res.json(dogsData)
})

app.post(`/front-end/dog-pedia.html`, async (req, res) => {
    console.log('attempting to post')
    console.log(req.body)
    const newDog = req.body
    Dog.create(newDog)
})

app.get('/front-end/customer.html', async (req, res) => {
    const customersData = await Customers.find({}).populate('cart')
    console.log(customersData, 'test')
    await res.json(customersData)
})

app.post(`/front-end/customer.html`, async (req, res) => {
    if (req.body.password) {
        console.log('you are one of us')
        console.log(req.body)
        const newCustomer = req.body
        Customers.create(newCustomer)
    } else {
        console.log('logging in')
        console.log(req.body);
        const { first, last, code } = req.body
        const current = await Customers.find({ fname: first, lname: last, password: code })
        if (!current){
            res.status(400).json({message: 'customer not found'})
        }
        return res.json(current)
    }
})


app.get('/front-end/knowledge.html', async (req, res) => {
    const knowledgeData = await Knowledge.find({})
    // console.log(knowledgeData)
    await res.json(knowledgeData)
})


app.post(`/front-end/knowledge.html`, async (req, res) => {
    // console.log('attempting to post this')
    // console.log(req.body)
    const newKnowledge = req.body
    Knowledge.create(newKnowledge)
    return res.json({ message: 'new knowledge aqcuired' })

})


app.get('/front-end/donate.html', async (req, res) => {
    const donationData = await Donate.find({})
    return res.json(donationData);

})
app.post(`/front-end/donate.html`, async (req, res) => {
    console.dir(req.body)
    const message = req.body
    // console.dir(message)
    await Donate.create(message)
    // console.log(path.join(parent,'front-end', 'donate.html'))
    return res.json({ message: "you rock" })
    // res.sendFile(path.join(parent,'front-end','index.html'))


})

app.get('/front-end/recipe.html', async (req, res) => {
    const recipeData = await Treats.find({})
    // console.log(recipeData)
    return res.json(recipeData)
})


app.post(`/front-end/recipe.html`, async (req, res) => {
    // console.log('you will post this')
    // console.log(req.body)
    const newRecipe = req.body
    await Treats.create(newRecipe)
    return res.json({ message: 'cook this' })
})

app.get('/front-end/adopt.html', async (req, res) => {
    const adoptData = await Adopts.find({})
    //   console.log(adoptData)
    return res.json(adoptData)
})

app.post(`/front-end/adopt.html`, async (req, res) => {
    // console.log('you did this ish')
    // console.log(req.body)
    const newAdoption = req.body
    await Adopts.create(newAdoption)
    return res.json({ message: 'Got me one' })
})

app.get('/front-end/products.html', async (req, res) => {
    const suppliesData = await Supplies.find({})
    // console.log('they have everythin')
    return res.json(suppliesData)
})

app.post(`/front-end/products.html`, async (req, res) => {
    // console.log('sell it for me')
    // console.log(req);
    // console.log(req.body)
    // let {item} = req.item
    const newProduct = req.body
    await Supplies.create(newProduct)
    // console.log(newProduct)
    return res.json({ message: 'buy it' })
})
app.put(`/front-end/products.html`, async (req, res) => {
    const { customer, item } = req.body
    console.log(item);
    const updated = await Customers.findByIdAndUpdate(customer._id, { cart: [...customer.cart, item._id] })
    if (updated){
        console.log(customer);
        console.log('added to cart');
    }
})




mongoose.connect("mongodb://127.0.0.1/dogs").then(() => {
    console.log("connect to DB");
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
})
