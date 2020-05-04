const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#massage-1')
const messageTwo = document.querySelector('#message_2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading'
    messageTwo.textContent = " "

    fetch(`/weather?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error) {
                messageOne.textContent = `${data.error}`
                messageTwo.textContent = " "
                console.log(data.error)
            } else {
                messageOne.textContent = `${data.location}`
                messageTwo.textContent = `${data.forecast.timezone}, ${data.forecast.summary}, Температура сейчас: ${Math.round((data.forecast.temperature - 32)/1.8)}℃`
                console.log(data.forecast, data.location, data.body)
            }
        })
    })
})