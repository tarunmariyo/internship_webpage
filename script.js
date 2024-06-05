const button = document.getElementById("MagicButton");
const colorPalette = ["#FFFFFF","#000000","#87CEEB"];
let currentColorIndex = 0;

button.addEventListener("click", () => {
  if (currentColorIndex === 0) {
    document.body.style.backgroundColor = colorPalette[1];
    currentColorIndex = 1;
  } else if (currentColorIndex === 1) {
    document.body.style.backgroundColor = colorPalette[2];
    currentColorIndex = 2;
  } 
  
  else {
    document.body.style.backgroundColor = colorPalette[0];
    currentColorIndex = 0;
  }

}
);



function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a, b) => b.id - a.id);

            const recentPosts = sortedData.slice(0, 40); 
            displayData(recentPosts);
      })
      .catch(error => console.error(error));
  }

  function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('post');

      div.innerHTML = `
      <h4>${item.title}</h4>
      <p1><strong>User ID:</strong> ${item.userId}</p1>
      <p>${item.body}</p>
        `;
      container.appendChild(div);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    fetchData();
  }); 
  function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
  
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
  
    var isValid = true;
  
    
    if (firstName.value.trim() === "") {
      firstNameError.innerHTML = "Please enter your first name.";
      isValid = false;
    } else {
      firstNameError.innerHTML = "";
    }
  
    
    if (lastName.value.trim() === "") {
      lastNameError.innerHTML = "Please enter your last name.";
      isValid = false;
    } else {
      lastNameError.innerHTML = "";
    }
  
    
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
      emailError.innerHTML = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.innerHTML = "";
    }
  
    
    if (message.value.trim() === "" || message.value.length < 10 || message.value.length > 100) {
      messageError.innerHTML = "Please enter a message between 10 and 100 characters.";
      isValid = false;
    } else {
      messageError.innerHTML = "";
    }
  
    return isValid;
  }
  