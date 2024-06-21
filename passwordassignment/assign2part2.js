

function passCheck() {

   let pass1 = prompt("Please enter a new password");
   let pass2 = prompt("Please re-enter your password for verification");

do {
   if (pass1 === ''){
   alert("Thank you");
   break;
}
      else 
      alert("Please enter letters only");
      continue;
}

do {
   if (pass2 === pass1) {
      alert("Your passwords match!");
      break;
   }

   }

   }   while (false); {
         alert("Your passwords do not match! Please try again!");
         continue;
   }


