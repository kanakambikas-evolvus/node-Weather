
console.log('client side javascript file is loaded ')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//     console.log(data)
//     })
// })


// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//        if(data.error)
//        {
//            console.log(data.error)
//        }

//        else(data.title)
//     })
// })

const weatherForm= document.querySelector('form')
const search =document.querySelector('input')
const messageOne =document.querySelector("#Message-one")
const messageTwo =document.querySelector("#Message-two")



messageOne.textContent='from JavaScript'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value

messageTwo.textContent='loading........'
messageOne.textContent=''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
response.json().then((data) => {
if (data.error) {
messageTwo.textContent = data.error
 console.log(data.error)
}
else {

messageOne.textContent = data.location
messageTwo.textContent = data.forecast
 console.log(data.location)
 console.log(data.forecast)
}
})
})

// console.log(location)

})