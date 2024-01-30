const Checklistmodel = require('../models/Checklistmodel')

module.exports.getCheckList = async (req,res) => {
    const Checklist = await Checklistmodel.find()
    res.send(Checklist)
}

module.exports.saveCheckList = async (req,res) => {
   
    const { text } = req.body

    Checklistmodel
        .create({text})
        .then((data) => {
            console.log("Added Succesfully..");
            console.log(data)
            res.send(data)
    })
}

module.exports.updateCheckList = async (req,res) => {
    const {_id, text} = req.body

    
    Checklistmodel
        .findByIdAndUpdate(_id, {text})
        .then(() => res.send("Successfully updated..."))
        .catch((err) => console.log(err))

    }

module.exports.deleteCheckList = async (req,res) => {
    const {_id, text} = req.body
    
        
    Checklistmodel
         .findByIdAndDelete(_id)
         .then(() => res.send("Successfully deleted..."))
          .catch((err) => console.log(err))

    }