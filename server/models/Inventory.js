// get model and datatype from sequelize
const { Model, DataTypes } = require("sequelize");
// get sequelize from config

const sequelize = require("../config/connection");

// create class
class Inventory extends Model {}

// build model
Inventory.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowull: false,
			autoIncrement: true,
		},
		// mobile: {
		// 	type: DataTypes.STRING,

		// 	allowull: false,
			
		// },
		// fullname: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	// defaultValue: "John "
		// },

		// tfname: {
		// 	type: DataTypes.STRING,
		// 	allowNull: false,
		// 	// defaultValue: "ceo",
		// },
		// employeeid: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// },
		// dos: {
		// 	type: DataTypes.STRING,
		// },
		// ct: {
		// 	type: DataTypes.INTEGER,
		// },
		// patientfn: {
		// 	type: DataTypes.STRING,
		// },
		// dob: {
		// 	type: DataTypes.INTEGER,
		// },
		// ssn: {
		// 	type: DataTypes.INTEGER,
		// },
		
		// email: {
		// 	type: DataTypes.STRING,
		// },
		covid19: {
			type: DataTypes.STRING,
            allowNull: false,
		},
		flua: {
			type: DataTypes.STRING,
            allowNull: false,
		},
		flub: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		paytype: {
			type: DataTypes.INTEGER,
            allowNull: false,
		},
		advocate_id:{
            type:DataTypes.INTEGER,
            references:{
                model: 'advocate',
                key: 'id'
            }
        }
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "inventory",
	}
);

module.exports = Inventory;
