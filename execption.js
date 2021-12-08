function execption(){
    var user_name=document.getElementById("res").value;
    var password=document.getElementById("pass").value;
    if( user_name!==""){
        if( user_name.length > 5){
            if(user_name.match(/^[a-z]/)){
                if(password!==""){
                    document.getElementById("msg").innerHTML="login succesful";
                }else{document.getElementById("msg").innerHTML="enter password";}
            }else{document.getElementById("msg").innerHTML="invalid user_name it must be in lowercase";}
        }else{document.getElementById("msg").innerHTML="user_name must greater than 5"}
    }else{document.getElementById("msg").innerHTML="user_name empty";}

}
                
                
                
                
                
                
                
                
                
                
                
                
                
//                 else if(password===""){
//               document.getElementById("msg").innerHTML="enter password";
//             }else{document.getElementById("msg").innerHTML="login succesful";}
//         }
//         }else{
//              document.getElementById("msg").innerHTML="user_name must greater than 5";
//             }
       
//    }else{ document.getElementById("msg").innerHTML="user_name empty";}

// }
