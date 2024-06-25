function passConfirm() {

   do {
      x = prompt("Please create a new password");
      y = prompt("Please re-enter your password");

   } while (x !== y) {
      alert("Your passwords do not match. Please try again!");

   } if (x === y) {
      alert("Your passwords match! Thank you.");
   }
   }

