function saveCandidateDetails() {
    // This function can save data or perform other actions before navigating to the details page
    // For now, it simply sets the URL to the candidate_details.html page
    var Name = document.getElementById('Name').value;
    var SerialNo = document.getElementById('SerialNo').value;
    var LastDate = document.getElementById('LastDate').value;

    // Here, you can save the details before navigating to the details page
    // For demonstration purposes, this code just updates the URL
    //var detailsLink = `details.html?name=${Name}&serial=${SerialNo}&lastDate=${LastDate}&age=${Age}&email=${E-mail}&dob=${DOB}&gender=${Gender}`;
    //window.location.href = detailsLink;
}
// Assigning the function to the button click event
//document.getElementById('viewDetailsBtn').onclick = viewDetails;

document.getElementById('detailsTable').addEventListener('click', function() {
    // Replace 'URL' with the actual URL of the page you want to open
    window.open('Details.html', '_blank');
  });
