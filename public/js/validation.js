// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    //on error add animation
    invalidHandler: function() {
    	document.querySelector('.login-form__form-container').classList.add('shakeit')

    	setTimeout(function() {  
    		document.querySelector('.login-form__form-container').classList.remove('shakeit')
    	}, 800);
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function() {
      // form.submit();
      console.log("Email is: " + email.value + " and password is: " + password.value)
      document.querySelector('.login-form__form-container').classList.add('sent')
      document.querySelector('.login-form__form-process').classList.add('sent')
      // let uname = document.querySelector("#uname");
      // function send() {
      //   console.log(uname.value);
      // }
    }
  });
});