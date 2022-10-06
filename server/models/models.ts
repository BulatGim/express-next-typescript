export {};

const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Catalog = sequelize.define('catalog', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.CHAR, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull:false}
})

const Stand = sequelize.define('stand',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.CHAR, allowNull: false},
    price: {type: DataTypes.STRING(1234), allowNull: false},
    height: {type: DataTypes.STRING(1234), allowNull: false},
    width: {type: DataTypes.STRING(1234), allowNull: false},
    deep: {type: DataTypes.STRING(1234), allowNull: false},
    photo: {type: DataTypes.ARRAY(DataTypes.STRING),allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true},
    characteristics: {type: DataTypes.TEXT, allowNull:true}
})

const Case = sequelize.define('case', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    company: {type: DataTypes.CHAR, allowNull: false},
    client: {type: DataTypes.CHAR, allowNull: false},
    sphere: {type: DataTypes.STRING, allowNull: false},
    region: {type: DataTypes.STRING, allowNull: false},
    stand: {type: DataTypes.STRING, allowNull: false},
    done: {type: DataTypes.STRING, allowNull: false},
    mainPhoto: {type: DataTypes.STRING, allowNull: false},
    task: {type: DataTypes.STRING, allowNull: false},
    solution: {type: DataTypes.STRING, allowNull: false},
    stage1: {type: DataTypes.STRING, allowNull: false},
    stage2: {type: DataTypes.STRING, allowNull: false},
    stage3: {type: DataTypes.STRING, allowNull: false},
})

const CaseResult = sequelize.define('caseResult', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    resultText:{type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.ARRAY(DataTypes.STRING),allowNull: false},
})

Catalog.hasMany(Stand)
Stand.belongsTo(Catalog)

Case.hasOne(CaseResult)
CaseResult.belongsTo(Case)


module.exports = {
    Stand,
    Catalog,
    Case,
    CaseResult
}