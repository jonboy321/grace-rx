// create router express
const router = require('express').Router();
// get advocate model
const {Advocate,Inventory} = require('../../models');





// create "get" all route
router.get("/", async (req,res) => {
    try{
        const advocateData = await Advocate.findAll({
          include:[{model:Inventory}]
        })
        res.status(200).json(advocateData)
        
    }catch(err){
        res.status(400).json(err)
    }
    
});
router.get("/:id", async (req,res) => {
  try{
      const advocateData = await Advocate.findByPk(req.params.id,{
        include:[{model:Inventory}]
      });

      if(!advocateData){
        res.status(404).json({message:"there's no advocate found with that id"});
        return
      }
      res.status(200).json(advocateData)
      
  }catch(err){
      res.status(400).json(err)
  }
  
});

// create "post" route
router.post("/", async (req,res)=>{
  
    try{
        const advocateData = await Advocate.create(req.body)
        
        res.status(200).json(advocateData)
        
    }catch(err){
      
        res.status(400).json(err)
        
    }
});

// create "delete" route
router.delete("/:id", async (req,res)=>{
    try{
        const advocateData = await Advocate.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json(advocateData)
    }catch(err){res.status(400).json(err)}
});

// create "update" route
router.put('/:id', async (req, res) => {
    try {
      const advocateData = await Advocate.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!advocateData[0]) {
        res.status(404).json({ message: 'No Advocate with this id!' });
        return;
      }
      res.status(200).json(advocateData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;