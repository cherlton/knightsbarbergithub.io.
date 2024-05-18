
function show(){

    const applicationForm = document.querySelector(".appointment-form")
    setTimeout(()=>{
        applicationForm.style.transform ="translateX(0)";
        applicationForm.classList.remove("hide")
        setTimeout(()=>{
            applicationForm.style.opacity="1"
        },500)
      
    },100)
   
}
function hide(){
 
    const applicationForm = document.querySelector(".appointment-form")
    setTimeout(()=>{
        applicationForm.style.opacity="0"
       
        setTimeout(()=>{
            applicationForm.style.transform ="translateX(200%)";
        applicationForm.classList.add("hide")
        },500)
   
    },100)
   
}

function showTablet(){
  
    const applicationForm = document.querySelector(".appointment-formTablet")
    setTimeout(()=>{
        applicationForm.style.transform ="translateX(0)";
        applicationForm.classList.remove("hide")
        setTimeout(()=>{
            applicationForm.style.opacity="1"
        },500)
    
    },100)
   
}
function hideTablet(){
 
    const applicationForm = document.querySelector(".appointment-formTablet")
    setTimeout(()=>{
        applicationForm.style.opacity="0"
       
        setTimeout(()=>{
            applicationForm.style.transform ="translateX(200%)";
        applicationForm.classList.add("hide")
        },500)
       
    },100)
   
}


function showMobile(){
 
    const applicationForm = document.querySelector(".appointment-formMobile")
    setTimeout(()=>{
        applicationForm.style.transform ="translateX(0)";
        applicationForm.classList.remove("hide")
        setTimeout(()=>{
            applicationForm.style.opacity="1"
        },500)
      
    },100)
   
}
function hideMobile(){
    
    const applicationForm = document.querySelector(".appointment-formMobile")
    setTimeout(()=>{
        applicationForm.style.opacity="0"
       
        setTimeout(()=>{
            applicationForm.style.transform ="translateX(200%)";
        applicationForm.classList.add("hide")
        },500)
       
    },100)
   
}
document.addEventListener('DOMContentLoaded', function () {
    var onlinePayment = document.getElementById('option8');
    var cashPayment = document.getElementById('option5');
    var makeAppointmentBtn = document.querySelector('.sub');
    

    onlinePayment.addEventListener('change', function () {
      if (onlinePayment.checked) {
        makeAppointmentBtn.disabled=true;
      } else {
        makeAppointmentBtn.textContent = 'Make an Appointment';
      }
    });

    cashPayment.addEventListener('change', function () {
        if (cashPayment.checked) {
          makeAppointmentBtn.textContent = 'Make An Appointment';
          makeAppointmentBtn.disabled=false
        } 
      });
  });

  const selectElement = document.querySelector('.form-select');
const priceInput = document.getElementById('selectedPrice');

selectElement.addEventListener('change', (event) => {
  const selectedOption = event.target.selectedOptions[0];
  const price = selectedOption.dataset.price;
  console.log(price)
  priceInput.value = price;
});


chekForm();


function chekForm(){
    document.addEventListener("DOMContentLoaded", function() {
        var checkbox = document.getElementById("flexSwitchCheckDefault");
    
        checkbox.addEventListener("click", function(event) {
          event.preventDefault();
          event.stopPropagation();
    
          // Toggle the visibility of name, surname, and phone number inputs
          var nameInput = document.getElementById('namefield')
          console.log(nameInput)
          var surnameInput = document.getElementById('surnamefield')
          var phoneInput = document.getElementById('phonefield')
          
          
          if (checkbox.checked) {
              nameInput.style.display = "none";
              surnameInput.style.display = "none";
              phoneInput.style.display = "none";
          } else {
            nameInput.style.display = "block";
            surnameInput.style.display = "blcok";
            phoneInput.style.display = "blcok";
          }
        });
    });
}


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);

    // Make fetch request
    fetch('http://localhost:3423/Booking.api', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data) {
            console.log("Login successful");
            var checkbox = document.getElementById("flexSwitchCheckDefault");
            checkbox.checked = true;
            
        } else {
            console.log("Login failed");
            // Handle login failure if needed
        }
    })
    .catch(error => {
        // Handle error here
        console.error('Error:', error);
    })
    .finally(()=>{
        e.target.reset()
        var checkbox = document.getElementById("flexSwitchCheckDefault");
        var nameInput = document.getElementById('namefield')
          console.log(nameInput)
          var surnameInput = document.getElementById('surnamefield')
          var phoneInput = document.getElementById('phonefield')
          
          
          if (checkbox.checked) {
              nameInput.style.display = "none";
              surnameInput.style.display = "none";
              phoneInput.style.display = "none";
          } else {
            nameInput.style.display = "block";
            surnameInput.style.display = "blcok";
            phoneInput.style.display = "blcok";
          }
        chekForm()
    }
        )
});
