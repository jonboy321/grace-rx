// import express with express router
const router = require('express').Router()
// import termination model
const TerminationSize = require('../../models/TerminationSize');



// create "get" route
router.get("/", async (req,res) =>{
    try{ 
    const    terminationData = await TerminationSize.findAll()
        res.status(200).json(terminationData)
    }catch(err){res.status(400).json(err)}
})
// create "post" route to create new user
router.post("/",async (req,res)=>{
    try{
        const terminationData = await TerminationSize.create(req.body)
        res.status(200).json(terminationData)
    } catch(err){res.status(400).json(err)}
})
// create "put" route to update 
router.put("/:id", async (req,res)=>{
    try{
        const terminationData = await TerminationSize.update({
            status:req.body.status,
            terminationdate:req.body.terminationdate,
            employeeid:req.body.employeeid,
            paygrade:req.body.paygrade,
            fullname:req.body.fullname,

        },
        {
            where: {id: req.params.id}
        })
        res.status(200).json(terminationData)
    }catch(err){res.status(err).json(err)}
})
// create "delete" route to delete
router.delete("/:id", async (req,res)=>{
    try{
      const  terminationData = await TerminationSize.destroy({
            where: {
                id:req.body.id
            }
        })
        res.status(200).json(terminationData)
    }catch(err){res.status(400).json(err)}
})



module.exports = router;