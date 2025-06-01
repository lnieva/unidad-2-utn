const { contact }= require('../models/menu.js');

exports.user = (req,res) => {
  contact.findByIdAndRemove({_id: req.params.id}, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "Todo successfully deleted",
        id: todo._id
    };
    return res.status(200).send(response);
});

}