const Sequelize=require('sequelize');
const sequelize=require('../dbConection');

const company=sequelize.define('company',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    companyName:{
        type:Sequelize.STRING,
        allowNull:false
    },
   
})

module.exports=company;