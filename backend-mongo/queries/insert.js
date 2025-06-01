const contact = require('../models/menu.js');

const agregarUser = (data) => {
  const moongoseMenu = new contact(data);
  moongoseMenu.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newTodoObj);
  })
}

module.exports = { agregarUser };