console.log('kanaka')
const express = require('express')
const path =require('path')

const app=express()

console.log(__filename)
console.log(path.join(__dirname,'../Assignment/public/index.html'))
const publicDirectoryPath= path.join(__dirname,'/home/user/Desktop/NODEJS/Assignment/public/index.html')

//app.use(express.static(publicDirectoryPath))

//app.com
app.get('', (req, res) => {
    res.send('Hello USER !')
})

app.get('/index',(req,res)=>
{
    app.use(express.static(publicDirectoryPath))
})


//app.com/help
app.get('/help', (req, res)=>
{
res.send('Follow the below instruction.')
})

//app.com/about

app.get('/about', (req, res) =>
{
    res.send('<h1>About</h1>')
})

//app.com/people
app.get('/Hotel', (req, res) =>
{
    res.send([
        {
            name: '1947'
        },
        {
            name : 'KFC'
        },
        {
            name: 'empire'
        },
        {
            name: 'paradise'
        },
        {
            name: 'MTR'
        }
    ])
})

//app.com/company

app.get('/Food', (req, res) =>
{
    res.send([
        {
        name: 'Chicken',
        place: 'Banglore'
    },
    {
        name: 'biriyano',
        place: 'Raichur'
    },
    {
        name: 'kabab',
        place: 'Raichur'
    }
    ])

})

app.listen(3000, () =>
{
    console.log('server is up on port 3000.')
})