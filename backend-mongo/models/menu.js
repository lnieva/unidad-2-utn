const mongoose = require('../conexion.js');

const contact = mongoose.model('contact', {
  contact: String,
  region: String,
  company: String,
  position: String,
  channel:  [
                    {
                      comunication: String,
                      user_account: String,
                      preferences: String
                    }
                  ],
  interet: Number,
  email: String
});

const countryModel = mongoose.model('countries',{
  pais: String
})

const companyModel = mongoose.model('businesses',{
  compania: String
})

const channelModel = mongoose.model('channels',{
  compania: String
})

module.exports = {contact, countryModel, companyModel, channelModel};