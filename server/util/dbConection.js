const Sequelize=require('sequelize');
const sequelize=new Sequelize('company_reviews','root','1122',{
   host: 'localhost',
  dialect: 'mysql'
})
module.exports=sequelize;
 