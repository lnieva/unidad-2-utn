const {contact, countryModel, companyModel, channelModel} = require('../models/menu.js')
//const countryModel = require('../models/country.js')

const allUser = () => {
    return contact.find()
}

const allCountry = () => {
    return countryModel.find()
}

const allCompany = () => {
    return companyModel.find()
}

const allChannel = () => {
    return channelModel.find()
}


module.exports = { allUser, allCountry, allCompany, allChannel };