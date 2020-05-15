const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const geocode = require('./Utils/geocode')
const forecast = require('./Utils/forecast')

const publicDirectory=path.join(__dirname,'../static')
const publicDir=path.join(__dirname,'../views')
const PartialPath =path.join(__dirname,'../partials')
const cssPath=path.join(__dirname,'../js')
app.use(express.static(publicDirectory))
console.log(PartialPath)
app.set('view engine','hbs')
app.set('views',publicDir)
hbs.registerPartials(PartialPath)

console.log(cssPath)

// app.get('',(req,res)=>
// {
//     res.send('<p>good afternoon<p>')
// })
app.use(express.static(publicDir))
app.use(express.static(cssPath))
app.get('',(req,res)=>
{
    res.render('index.hbs')
})
app.get('/index',(req,res)=>
{
    res.render('index',{
        indexText:'we can find something',
        name:'kanaka',
        title:'WEATHER'
    })
    

})

app.get('/About',(req,res)=>
{
    res.render('About',{
        aboutText:'this is info About page',
        name:'kanaka',
        title:'About'
    })
})

app.get('/help',(req,res)=>
{
   res.render('help',{
       helpText:'this is some helpfultext',
       name:'kanaka',
       title:'Help'
   })
   
})

app.get('/weather', (req,res) =>
{
    if(!req.query.address){
      return  res.send({
            error: 'please provide the addres'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location}) => {
        if (error){
            return res.send({ error})
        }

        forecast(latitude, longitude, (error, forecastData) =>{
            if(error){
                return res.send({ error })
            }

            res.send({
                forecast : forecastData,
                location,
                address: req.query.address
            })
        })


    })

})
app.get('*',(req,res)=>{
    //res.send('Help article not found!!!!!!')   
    res.render('404',{
        title:404,
        name:'kanaka',
        errorMsg:'page not found'
    })    
 })
 app.get('/help/*',(req,res)=>{
    res.send('Help article not found')
    })




    

app.listen(3000)