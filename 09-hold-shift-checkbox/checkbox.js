const checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');

let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));  // iterate over checkbox and runs this 
                                                                                  // callback function when clicked
function handleCheck(e) {
  let inBetween = false;                                      // initial state

  if (e.shiftKey && this.checked) {                     // if pressing the shift key while checking a checkbox, 
                                                        // loop over those checkbox                              
    checkboxes.forEach(checkbox => {   
      console.log(checkbox)                     
      if (checkbox === this || checkbox === lastChecked) {  // if (latest checkbox you clicked || first checkbox clicked)
        inBetween = !inBetween;                              // initial value false will be true
        if (inBetween) {                                      
          console.log("Starting to check in between")        // if true this will print
        } else {
          console.log("This is the end of the loop")         // once the inBetween become false it will print
        }
        
      }
      if (inBetween) {                                // the checkboxes in between are gonna get checked as long as the 
        checkbox.checked = true;                      // inBetween is true
      }
    })
  }
  lastChecked = this;     // Whether you do or didn't press the shift key when you checked the box, this will be updated to be 
}                         // that checkbox you just clicked
                          // it will always be executed

// NOTE: Run the debugger to understand it more in dev tools -> sources -> click the leftmost to create breakpoints