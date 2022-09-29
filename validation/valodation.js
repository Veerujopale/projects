console.log("hiiii");


function Usrname(){
    let usrerror="Username must be between 3 to 10 characters"
    let usr_val=document.getElementById('name').value;
    let usr_pass= document.getElementById('mypass').value;
    let usr_cnfpass=document.getElementById('confirm_pass').value;
    // let usr_val=document.forms['myForm']['fname'].value;
     if(usr_val.length<10){
         document.getElementById('usr').innerHTML=usrerror;
         return false;
     }
   
    if(usr_pass.length<8){
      
        document.getElementById('pass').innerHTML="Password must contain at least 8 characters ";
        return false;
    }
    if(usr_pass!=usr_cnfpass){
        document.getElementById('cpass').innerHTML="Password must match";
        return false;
    }
    


    
    
    }
  
 


