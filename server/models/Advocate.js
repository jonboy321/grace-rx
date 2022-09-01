

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
    fname: {
        type:DataTypes.STRING,
        allowNull: false,
        // defaultValue: "John "
    
    },
    lname: {
        type:DataTypes.STRING,
        allowNull: false,
        // defaultValue: " Doe"
    },
    position: {
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "ceo"
    },
    ss: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    dob: {
        type:DataTypes.INTEGER,
        
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
    saddress: {
        type:DataTypes.STRING,
        allowNull: false
    },
    paddress: {
        type:DataTypes.STRING,
        allowNull: false
    },
    obmi: {
        type:DataTypes.INTEGER,
        
    },
    verified: {
        type:DataTypes.STRING,
        
    },
    insurance: {
        type:DataTypes.STRING,
        
    },
    dsh: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    teamsize: {
        type:DataTypes.INTEGER,
    },
    p2wsale: {
        type:DataTypes.STRING,
    },
    p2wtsale: {
        type:DataTypes.INTEGER,
    },
    ohi: {
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