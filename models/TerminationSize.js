const sequelize = require('../config/connection')

// get model and datatype from sequelize
const {Model,DataTypes} = require('sequelize');
// get sequelize from config







// create class
class TerminationSize extends Model{}


// build model
TerminationSize.init({
   status:{
    type:DataTypes.STRING,
    allowNull: true
   },
   terminationdate: {
    type:DataTypes.INTEGER,
    allowNull: true
   },
   employeeid: {
    type:DataTypes.INTEGER,
    allowNull: false
   },
   paygrade: {
    type:DataTypes.INTEGER,
    allowNull: false
   },
   fullname: {
    type:DataTypes.STRING,
    allowNull: true
   },
   advocate_id: {
    type:DataTypes.INTEGER,
    references: {
       
        model: 'advocate',
        key: 'id',
      },
   }
    
},
{
    sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'terminationsize',
}
)



module.exports = TerminationSize;