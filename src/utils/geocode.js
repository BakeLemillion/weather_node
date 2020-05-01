const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYmlzaG9wMDEiLCJhIjoiY2s3NG12aWR0MG5jZzNldDB6Y3N5ZWxtcCJ9.W6y9Dk9nc9nepk9eJyNPZQ'

    request({url, json: true}, (error, {body})=> {
        if(error) {
            callback('Uneble to connect to location services!', undefined)
        } else if(body.features.length === 0) {
            callback('Huiniu vvel esli chestno', undefined)
        } else {

            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode