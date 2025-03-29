document.addEventListener("DOMContentLoaded", function () {
    const totalAmountElement = document.getElementById("totalAmount");
    const paymentForm = document.getElementById("paymentForm");
    const paymentMethod = document.getElementById("paymentMethod");
    const cardDetails = document.getElementById("cardDetails");
    const upiDetails = document.getElementById("upiDetails");

    // Retrieve & Display Correct Total Amount
    let totalAmount = localStorage.getItem("totalAmount");
    if (totalAmount) {
        totalAmountElement.textContent = totalAmount;
    } else {
        alert("No order found! Redirecting to order page.");
        window.location.href = "order.html";
    }

    // Toggle Payment Fields Based on Selected Method
    paymentMethod.addEventListener("change", function () {
        if (paymentMethod.value === "card") {
            cardDetails.style.display = "block";
            upiDetails.style.display = "none";
        } else {
            cardDetails.style.display = "none";
            upiDetails.style.display = "block";
        }
    });

    // Validate Payment Before Submission
    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = false;

        if (paymentMethod.value === "card") {
            const cardNumber = document.getElementById("cardNumber").value.trim();
            const cardHolder = document.getElementById("cardHolder").value.trim();
            const expiryDate = document.getElementById("expiryDate").value.trim();
            const cvv = document.getElementById("cvv").value.trim();

            if (cardNumber.length === 16 && cardHolder && expiryDate.length === 5 && cvv.length === 3) {
                isValid = true;
            } else {
                alert("Please enter valid card details.");
            }
        } else {
            const upiID = document.getElementById("upiID").value.trim();
            if (upiID.includes("@")) {
                isValid = true;
            } else {
                alert("Please enter a valid UPI ID.");
            }
        }

        if (isValid) {
            alert("Payment Successful! Thank you for your order.");
            localStorage.clear(); // Clear Storage After Payment
            window.location.href = "confirmation.html";
        }
    });
});
