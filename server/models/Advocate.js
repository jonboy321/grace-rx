// get model and datatype from sequelize
const { Model, DataTypes } = require("sequelize");
// get sequelize from config

const sequelize = require("../config/connection");

// create class
class Advocate extends Model {}

// build model
Advocate.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowull: false,
			autoIncrement: true,
		},
		mobile: {
			type: DataTypes.STRING,

			allowull: false,
			unique: true,
		},
		fullname: {
			type: DataTypes.STRING,
			allowNull: false,
			// defaultValue: "John "
		},

		position: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "ceo",
		},
		ss: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		dob: {
			type: DataTypes.INTEGER,
		},
		email: {
			type: DataTypes.STRING,
		},
		datestarted: {
			type: DataTypes.INTEGER,
		},
		datevh: {
			type: DataTypes.INTEGER,
		},
		saddress: {
			type: DataTypes.STRING,
		},
		paddress: {
			type: DataTypes.STRING,
		},
		obmi: {
			type: DataTypes.INTEGER,
		},
		verified: {
			type: DataTypes.STRING,
		},
		insurance: {
			type: DataTypes.STRING,
		},
		dsh: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		teamsize: {
			type: DataTypes.INTEGER,
		},
		p2wsale: {
			type: DataTypes.STRING,
		},
		p2wtsale: {
			type: DataTypes.INTEGER,
		},
		ohi: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "advocate",
	}
);

module.exports = Advocate;
