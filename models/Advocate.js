

// get model and datatype from sequelize
const {Model,DataTypes} = require('sequelize');
// get sequelize from config

const sequelize = require('../config/connection')





// create class
class Advocate extends Model{}


// build model
Advocate.init({
    mobile:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowull: false,
        autoIncrement: true
    },
    firstname: {
        type:DataTypes.STRING,
        allowNull: false,
        // defaultValue: "John "
    
    },
    lastname: {
        type:DataTypes.STRING,
        allowNull: false,
        // defaultValue: " Doe"
    },
    position: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "ceo"
    },
    social: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    dob: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false
    },
    datastarted: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    datavh:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    shippingaddress: {
        type:DataTypes.STRING,
        allowNull: false
    },
    personaladdress: {
        type:DataTypes.STRING,
        allowNull: false
    },
    onboadmangerid: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    verified: {
        type:DataTypes.STRING,
        
    },
    insurance: {
        type:DataTypes.STRING,
        
    },
    daysh: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    teamsize: {
        type:DataTypes.INTEGER,
    },
    prev2weeksale: {
        type:DataTypes.STRING,
    },
    prev2weekteamsale: {
        type:DataTypes.INTEGER,
    },
    onhandinventory: {
        type:DataTypes.INTEGER,
    }
   
    
},
{
    sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'advocate',
}
)



module.exports = Advocate;