
const AUTH1=require('./model')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
 module.exports={

    signup:async(req,res)=>{
      var  user =await AUTH1.find({'email' : req.body.email}) ;
       if( user.length>=1){
        return res.json({massege:'this email already exist'});
       } 
       else{
       
        bcrypt.hash(req.body.password,10,async (error,hash)=>{
        if(error ){
             res.json({massege:"error in password"});
        }
        else{
            const auth=await new AUTH1({
                username:req.body.username,
                email:req.body.email,
                password:hash,
                isAdmin:req.body.isAdmin,
            }).save() ;
            res.json({
                massege:'success',
                email:auth.email,
                name:auth.name,
                password:auth.hash,
                isAdmin:auth.isAdmin
            });
             
        }
       });
    }
    } ,



   login:async(req,res)=>{
var user = await AUTH1.find({email:req.body.email});

if(user.length<1){
    return res.json({massege:"this email not exist"});

}
else{
    bcrypt.compare(req.body.password,user[0].password,async(err,result)=>{
        if(err){
            return res.json({massege:'password not exist'})
        }
        if(result){
            if(user[0].type==0){
                var token=jwt.sign({email:user[0].email,name: user[0].name},"USER");
                res.json({massege:'user logged in',
            email:user[0].email,
            usertype:user[0].type,
            token:token 
            })
            }
            else{
                var token=jwt.sign({email:user[0].email,name: user[0].name},"ADMIN");
             return   res.json({massege:'admin logged in',
             username:user[0].username,
            email:user[0].email,
            usertype:user[0].type,
            token:token 
            }) ;
            }
        }
        else{
            res.json({
                massege:'password not valid'
            })
             }
    });
}
    }
} 





