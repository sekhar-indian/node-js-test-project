const Sequelize=require('sequelize');
const sequelize=require('../dbConection');

const comments=sequelize.define('companyComments',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    comment:{
        type:Sequelize.STRING,
        allowNull:false
    },
    rating:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    companyId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=comments;