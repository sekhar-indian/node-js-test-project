const Review=require('../models/review');
const Company=require('../models/company');
const { json } = require('body-parser');
const { where } = require('sequelize');

exports.data= async (req,res,next)=>{
   try{
    const { company, pros, cons, rating }= await req.body
    let newCompany;
    try{
         newCompany= await Company.create({company:company});
    }catch{
        const foundCompany = await Company.findOne({ where: {company:company } });
         newCompany=foundCompany
    }
    
    const newReview=await  Review.create({
        pros:pros,
        cons:cons,
        rating:rating,
        companyId:newCompany.id
    })

    res.send('hi')
   }
   catch(err){
    console.log(err)
   }

}



exports.companyreview= async (req,res,next)=>{
    const companyname= req.body.companyname;
    console.log(companyname)
   //get company reviews
  try{
    
        const foundCompany = await Company.findOne({ where: {company:companyname } });
        console.log(foundCompany)
   
    
       let companyReview= await Review.findAll({where:{companyId:foundCompany.id}})
       return res.status(200).json({foundCompany:foundCompany, companyReview:companyReview})
  
   
  }
  catch{
    return res.status(500).json({err:'errr'})
  }

}


