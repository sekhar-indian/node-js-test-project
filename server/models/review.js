const Sequelize=require('sequelize');
const sequelize=require('../util/dbConection');

const Review=sequelize.define('comments',{
    pros:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cons:{
        type:Sequelize.STRING,
        allowNull:false
    },
    rating:{
        type:Sequelize.INTEGER,
        allowNull:false
    }

})

module.exports=Review;
