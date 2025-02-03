// Function to generate the certificate based on the selected template
function generateCertificate() {
  const userName = document.getElementById("user-name").value;
  const templateSelector = document.getElementById("template-selector").value;
  const certificateContainer = document.getElementById("certificate-container");
  const certificateName1 = document.getElementById("certificate-name");
  const certificateName2 = document.getElementById("certificate-name-2");
  const certificateName3 = document.getElementById("certificate-name-3");
  const dateSpan1 = document.getElementById("date");
  const dateSpan2 = document.getElementById("date-2");
  const dateSpan3 = document.getElementById("date-3");

  if (userName.trim() !== "") {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    // Set the name and date in all templates
    certificateName1.textContent = userName;
    certificateName2.textContent = userName;
    certificateName3.textContent = userName;
    dateSpan1.textContent = `Issued on: ${formattedDate}`;
    dateSpan2.textContent = `Issued on: ${formattedDate}`;
    dateSpan3.textContent = `Issued on: ${formattedDate}`;

    // Show the selected template
    if (templateSelector === "template1") {
      document.getElementById("template1").style.display = "block";
      document.getElementById("template2").style.display = "none";
      document.getElementById("template3").style.display = "none";
    } else if (templateSelector === "template2") {
      document.getElementById("template1").style.display = "none";
      document.getElementById("template2").style.display = "block";
      document.getElementById("template3").style.display = "none";
    } else {
      document.getElementById("template1").style.display = "none";
      document.getElementById("template2").style.display = "none";
      document.getElementById("template3").style.display = "block";
    }

    // Display the certificate container
    certificateContainer.style.display = "block";
  } else {
    alert("Please enter a valid name.");
  }
}

// Function to print the certificate
function printCertificate() {
  window.print();
}
