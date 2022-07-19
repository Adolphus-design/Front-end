let user = require('./users');
const dboperations = require('./dboperations');


dboperations.getUsers().then(result => {
    console.log(result)
})