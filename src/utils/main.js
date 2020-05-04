const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/84ec4721748c8cb68e6f65275a3fb21b/'+ encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude) +'?lang=ru'

    request({url, json: true}, (error, {body})=> {
        if(error) {
            callback('Error has been found', undefined)
        } else if (body.error) {
            callback('Pizda s adresom', undefined)
        } else {
             
            callback(undefined, {
                body: body,
                timezone: body.timezone,
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                chanceofrain: body.currently.precipProbability,
            })
        }
    })
}

module.exports = forcast