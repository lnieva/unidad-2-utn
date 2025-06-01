const { contact } = require('../queries/user.js')

exports.contact = function(req, res){
    contact()
    .then(response => {
        res.json(response)
    })
}