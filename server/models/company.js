
const Sequelize=require('sequelize');
const sequelize=require('../util/dbConection');


const company=sequelize.define('company',{
    company:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true 
    },
    
})

module.exports=company;