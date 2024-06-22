function checkPass() {

   let userPass;
   let verifyPass;
   
   do {
      userPass =(prompt("Please enter a new password"));
      console.log("The password you entered was:" + userPass);
         if (userPass === "");
         alert("Thank you");
   
    }    while (userPass !== "");
         alert ("That is not a valid input. Please enter a new password!");
      
   
   
   do {
      verifyPass = prompt("Please re-enter your password for verification:");
      console.log("You entered:" + verifyPass);
         if (verifyPass === userPass);
         alert("Your passwords match. Thank you!");
         break;
   
   }  while (verifyPass !== userPass);
      alert ("Your passwords do not match. Please try again!");
   
   
   }
