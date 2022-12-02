//jsonwebtoken
const jwt=require('jsonwebtoken')

database={
    1000:{acno:1000,username:'neer',password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,username:'laisha',password:1001,balance:6000,transaction:[]},
    1002:{acno:1002,username:'vyom',password:1002,balance:5000,transaction:[]}
  }


 const  register=(acno,username,password)=>{
    
    if(acno in database){
     return {
        statusCode:404,
        status:false,
        message:'user already exist please login'
     }
 
    }
    else{
        database[acno]={
       acno,
       username,
       password,
       balance:0,
       transaction:[]
 
     }
     
     return {
        statusCode:200,
        status:true,
        message:'register successfully'
     }
    }
    }
    //login
   const login=(acno,pswd)=>{
    
      if(acno in database){
        if(pswd==database[acno]['password']){
          currentUser=database[acno]['username']
          currentAcno=acno
          
          return{
            statusCode:200,
            status:true,
            message:'login successfully',
            currentUser,
            currentAcno

            
            
          }
        }
        else{
          
          return {
            statusCode:404,
            status:false,
            message:'incorrect password'
          }

  
        }
      }
      else{
        
        return {
          statusCode:404,
        status:false,
        message:'user does not exist' 
        }
      }
    }

      //deposit
      const deposit=(acno,pswd,amt)=>{
       
         const amount = parseInt(amt)
        if(acno in database){
        if(pswd==database[acno]['password']){
         database[acno]['balance']+=amount
         database[acno]['transaction'].push({
           type:'CREDIT',
           amount
         })
         
        return{
         statusCode:200,
         status:true,
         message:`${amount} deposited successfully and new balance is ${ database[acno]['balance']}`
        } 
        database[acno]['balance']
         
         
     
     
        }
        else{
         alert('incorrect password')
             return{
               statusCode:404,
               status:false,
               message:'incorrect password'
             }
        }
        }
        else{
         alert('user does not exist')
         return{
            statusCode:404,
            status:false,
            message:'user does not exist'
         }
     
        }
     
       }
       //withdraw
       const withdraw=(acno,pswd,amt)=>{
         
         const amount = parseInt(amt)
        if(acno in database){
        if(pswd==database[acno]['password']){
         if(database[acno]['balance']>amount){
            database[acno]['balance']-=amount
            database[acno]['transaction'].push({
             type:'DEBIT',
             amount
           })
         
         return {
            statusCode:200,
            status:true,
            message:`${amount} debited successfully and new balance is ${ database[acno]['balance']}`
         }
         
     
         }
         else{
          
           return{
            statusCode:404,
            status:false,
            message:'insufficient balance'
           }
         }
         
     
     
        }
        else{
        
             return{

               statusCode:404,
            status:false,
            message:'incorrect password'
             }
        }
        }
        else{
        
         return {
            statusCode:404,
            status:false,
            message:'user does not exist'
         }
         
     
        }
     
       }
       //transation
      const getTransaction=(acno)=>{
         if(acno in database){
            return{
               statusCode:200,
               status:true,
               transaction:' database[acno].transaction'
            }
        
       }
       else{
         return{
         statusCode:404,
         status:false,
         message:'user does not exist'

       }
      }
   }
    module.exports={
        register,
        login,
        deposit,
        withdraw,
        getTransaction

    }