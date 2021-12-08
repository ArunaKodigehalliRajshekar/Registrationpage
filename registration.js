function discription(){

    var First_name=document.getElementById("fname").value;
    var Last_name=document.getElementById("lname").value;
    var email =document.getElementById("mail").value;
    var Adress =document.getElementById("DOB").value;
    var Contact_no =document.getElementById("contact").value;
    var password =document.getElementById("pass").value;
    var confirm_password = document.getElementById("pass").value;
    var ram = document.getElementById("msg");
    if(First_name!==""){
        if(First_name.match a-z){
            ram.innerHTML="Enter valid first name";
          } else if(Last_name===""){
            ram.innerHTML="enter valid last name";
          }else if(email===""){
             ram.innerHTML="enter email"
          }else if(email.length <8){
                 ram.innerHTML="enter valid email";
          }else if(DOB===""){
             ram.innerHTML="enter DOB";
          } else if(Contact_no===""){
            ram.innerHTML="enter contact_no";
          }else if(Contact_no.length <10){
                    ram.innerHTML="enter valid contact_no";
          }else if(password===""){
            ram.innerHTML="enter password";
          }else if(password.length <6){
                 ram.innerHTML="password is not strong";
          }else if(confirm_password!=password){
                 ram.innerHTML="password missmatch";}
       else{  
           ram.innerHTML="succesfully registered";}
   }else{
       ram.innerHTML= "enter first name";
      }
}
     
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
//         if(First_name.length <5){
//             document.getElementById("msg").innerHTML="Enter valid name";
//         } if(Last_name!==""){
//              if(email!==""){
//                if(email.length <8){
//                 document.getElementById("msg").innerHTML="enter valid email";
//             }
//          if(Adress!==""){
//            if(Contact_no!==""){
//             if(Contact_no.length <10){
//                 document.getElementById("msg").innerHTML="enter valid contact_no";
//             }if(password!==""){
//                 if(confirm_password!==""){
//                     document.getElementById("msg").innerHTML="Succesfully Registered";
//                 }else{document.getElementById("msg").innerHTML="please confirm password";}
            
//             }else{ document.getElementById("msg").innerHTML="enter password";}
//         }else{document.getElementById("msg").innerHTML="enter contact_no";}
//     }else{document.getElementById("msg").innerHTML="enter current Adress";}
// }else{document.getElementById("msg").innerHTML="enter your email id";}
//         }else{document.getElementById("msg").innerHTML="enter last name";}
//     }else{document.getElementById("msg").innerHTML="enter first name";}
// }