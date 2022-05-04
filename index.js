const btnCarWashEl = document.getElementById("btn-car-wash")
const btnMowLawnEl = document.getElementById("btn-mow-lawn")
const btnPullWeedsEl = document.getElementById("btn-pull-weeds")
const btnSendInvoiceEl = document.getElementById("btn-send-invoice")
const taskListEl = document.getElementById("task-list")
const totalAmountEl = document.getElementById("total-amount")

const washCarPrice = 10
const mowLawnPrice = 20
const pullWeedsPrice = 30

let hasWashCar = false
let hasMowLawn = false
let hasPullWeeds = false

let total = 0

//Wash Car Feature

btnCarWashEl.addEventListener("click", function() {
    if (hasWashCar === false) {
    taskListEl.innerHTML += `<tr id="remove-wash-car">
    <td width="80%"><strong>Wash Car</strong> <span class="btn-remove" onclick="removeWashCar()">[ remove ]</span></td>
    <td>$10</td>
</tr>`
    hasWashCar = true
    total += 10
    btnCarWashEl.classList.add("active")
    totalAmountEl.textContent = "$" + total
    }
    else if (hasWashCar === true) {
        removeWashCar()
    }
    
})

function removeWashCar() {
    if (hasWashCar === true) {
        let removeWashCarEl = document.getElementById("remove-wash-car")
        total -= 10
        hasWashCar = false
        btnCarWashEl.classList.remove("active")
        totalAmountEl.textContent = "$" + total
        return removeWashCarEl.parentNode.removeChild(removeWashCarEl)
    }
}

//Mow Lawn Feature

btnMowLawnEl.addEventListener("click", function() {
    if (hasMowLawn === false) {
    taskListEl.innerHTML += `<tr id="remove-mow-lawn">
    <td width="80%"><strong>Mow Lawn</strong> <span class="btn-remove" onclick="removeMowLawn()">[ remove ]</span></td>
    <td>$20</td>
</tr>`
    hasMowLawn = true
    total += 20
    btnMowLawnEl.classList.add("active")
    totalAmountEl.textContent = "$" + total
    }
    else if (hasMowLawn === true) {
        removeMowLawn()
    }
})

function removeMowLawn() {
    if (hasMowLawn === true) {
        let removeMowLawnEl = document.getElementById("remove-mow-lawn")
        total -= 20
        hasMowLawn = false
        btnMowLawnEl.classList.remove("active")
        totalAmountEl.textContent = "$" + total
        return removeMowLawnEl.parentNode.removeChild(removeMowLawnEl)
    }
}

//Pull Weeds Feature

btnPullWeedsEl.addEventListener("click", function() {
    if (hasPullWeeds === false) {
    taskListEl.innerHTML += `<tr id="remove-pull-weeds">
    <td width="80%"><strong>Pull Weeds</strong> <span class="btn-remove" onclick="removePullWeeds()">[ remove ]</span></td>
    <td>$30</td>
</tr>`
    hasPullWeeds = true
    total += 30
    btnPullWeedsEl.classList.add("active")
    totalAmountEl.textContent = "$" + total
    }
    else if (hasPullWeeds === true) {
        removePullWeeds()
    }
})

function removePullWeeds() {
    if (hasPullWeeds === true) {
        let removePullWeedsEl = document.getElementById("remove-pull-weeds")
        total -= 30
        hasPullWeeds = false
        btnPullWeedsEl.classList.remove("active")
        totalAmountEl.textContent = "$" + total
        return removePullWeedsEl.parentNode.removeChild(removePullWeedsEl)
    }
}

/*Reusable function*/
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

//Send Invoice Feature

const modal = document.getElementById("myModal")

// Modal Window 
btnSendInvoiceEl.addEventListener("click", function() {
    modal.style.display = "block";
    let modalMessageEl = document.getElementById("modal-message")

    //Lets get todays date for the invoice
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    messageDetail = `<h2>Demo Customer Invoice</h2>
    <p><strong>Note:</strong> ***As this is a demo, the email feature has been disabled.***</p>
    <p><strong>Date:</strong> ${today}</p>
    <hr>
    <h3>Order</h3>
    `
    if (hasWashCar) {
        messageDetail += `<p>Wash Car ($${washCarPrice})</p>` 
    }
    if (hasMowLawn) {
        messageDetail += `<p>Mow Lawn ($${mowLawnPrice})</p>` 
    }    
    if (hasPullWeeds) {
        messageDetail += `<p>Pull Weeds ($${pullWeedsPrice})</p>` 
    }
    messageDetail += `<h3>Total</h3><p id="messageTotal">$${total}</p>`
    modalMessageEl.innerHTML = messageDetail
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}