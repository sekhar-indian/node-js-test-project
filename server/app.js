const express=require('express');
const app=express();

const bodyparser=require('body-parser');
const cors=require('cors');

//routers pakeges
const user=require('./routers/user');

//databace conection pakeges
const sequelize=require('./util/dbConection');
const Company=require('./models/company');
const Review=require('./models/review');

//midel wares
app.use(cors());
app.use(bodyparser.json())

//routers here
app.use(user);

//databace conection
Review.belongsTo(Company,{constraints:true,onDelete:'CASCADE'});
Company.hasMany(Review);
sequelize.sync()
.then(res=>{
    app.listen(3000)
})
.catch(e=>console.log(e))

