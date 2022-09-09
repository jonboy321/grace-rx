const Advocate = require('./Advocate');
const Inventory = require('./Inventory');


Advocate.hasOne(Inventory,{
    foreignKey: "advocate_id",
    onDelete: 'CASCADE',
})



Inventory.belongsTo(Advocate,{
    foreignKey:"advocate_id",

})


module.exports = {Advocate,Inventory}