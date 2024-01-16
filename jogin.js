function validateForm(event) {
    // Get form values
    var name = document.getElementById('Name').value;
    var serialNo = document.getElementById('SerialNo').value;
    var lastDate = document.getElementById('LastDate').value;

    // Check if any field is empty
    if (name === '' || serialNo === '' || lastDate === '') {
      // Display error message
      document.getElementById('errormessage').innerHTML = 'Please fill in all the fields.';
      // Prevent form submission
      event.preventDefault();
    } else {
      // Clear any previous error message
      document.getElementById('errormessage').innerHTML = '';
      // Continue with form submission or processing

      // Open the details table page
      window.open('Details.html', '_blank');
    }
  }
