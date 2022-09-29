const express=require("express")

const mongoose=require("mongoose")

const router=require('./Router/Router.js')

const app=express()

app.use(express.json())

app.use ("/",router)

app.listen(4000,()=>console.log('Listening to the port..'))