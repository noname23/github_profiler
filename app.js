/* TODO: [x] Connect to GitHub API */
const https = require('https');
const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/sebutsajasayaiman',
    method: 'GET',
    headers:{
        'user-agent': 'nodejs'
    }
}
/* TODO: [x] Read the Data */
let request = https.request(options, (response) => {

    let body = ''
response.on('data', (data) => {
    body = body + data
})
response.on('end', () => {

    /*TODO: [x] Parse the data*/
    // Convert String to JSON (Javascript Object)
    let profile = JSON.parse(body)

    //TODO: [x] Print out the data
    console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s).`)
})
})

request.end()

request.on('error', (e) => {
    console.error(e)
})

