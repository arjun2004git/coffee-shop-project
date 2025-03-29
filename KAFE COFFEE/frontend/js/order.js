document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const totalAmountElement = document.getElementById("totalAmount");
    const complementaryItems = document.querySelectorAll(".complementary-container input");
    const menuInputs = document.querySelectorAll(".menu-item input");

    function updateTotalAmount() {
        let totalAmount = 0;
        let totalItems = 0;

        menuInputs.forEach(input => {
            const quantity = parseInt(input.value) || 0;
            const price = parseInt(input.dataset.price) || 0;
            totalAmount += quantity * price;
            totalItems += quantity;
        });

        // Update Total Amount Display
        totalAmountElement.textContent = totalAmount;

        // Enable Complimentary Items Based on Conditions
        complementaryItems.forEach(item => (item.disabled = true));

        if (totalAmount > 600) {
            complementaryItems.forEach((item, index) => {
                if (index < 3) item.disabled = false;
            });
        } else if (totalAmount > 400) {
            complementaryItems.forEach((item, index) => {
                if (index < 2) item.disabled = false;
            });
        } else if (totalAmount > 200) {
            complementaryItems[0].disabled = false;
        }

        // Restrict Maximum Total Items to 10
        if (totalItems > 10) {
            alert("You can order a maximum of 10 items.");
            return false;
        }

        return totalAmount > 0; // Returns true if order is valid
    }

    // Update Total on Input Change
    menuInputs.forEach(input => {
        input.addEventListener("input", updateTotalAmount);
    });

    // Form Submission Handling
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent Default Form Submission

        if (!updateTotalAmount()) {
            alert("Please select at least one item before proceeding to payment.");
        } else {
            // Save Order Details in Local Storage
            localStorage.setItem("totalAmount", totalAmountElement.textContent);
            localStorage.setItem("selectedItems", JSON.stringify(getSelectedItems()));

            // Redirect to Payment Page
            window.location.href = "payment.html";
        }
    });

    // Function to Get Selected Items
    function getSelectedItems() {
        let selectedItems = [];
        menuInputs.forEach(input => {
            if (input.value > 0) {
                selectedItems.push({
                    name: input.parentElement.querySelector("span").textContent.split(" - ")[0],
                    quantity: input.value,
                    price: input.dataset.price
                });
            }
        });
        return selectedItems;
    }
    
    const menuItemsContainer = document.getElementById("menu-items");
    const menuData = [
        { category: "Coffee", items: [
            { name: "Espresso", price: 120 },
            { name: "Cappuccino", price: 150 },
            { name: "Latte", price: 160 },
            { name: "Mocha", price: 180 },
            { name: "Cold Brew", price: 140 }
        ]},
        { category: "Snacks", items: [
            { name: "Veg Burger", price: 180 },
            { name: "Cheese Pizza", price: 250 },
            { name: "French Fries", price: 120 },
            { name: "Paneer Wrap", price: 200 },
            { name: "Grilled Sandwich", price: 170 }
        ]},
        { category: "Other Beverages", items: [
            { name: "Masala Chai", price: 90 },
            { name: "Green Tea", price: 100 },
            { name: "Hot Chocolate", price: 180 },
            { name: "Milkshake", price: 220 },
            { name: "Lemon Iced Tea", price: 130 }
        ]},
        { category: "Best Sellers", items: [
            { name: "Caramel Macchiato", price: 200 },
            { name: "Oreo Shake", price: 220 },
            { name: "Loaded Cheese Fries", price: 180 }
        ]}
    ];

    menuData.forEach(category => {
        const section = document.createElement("h2");
        section.classList.add("menu-section");
        section.textContent = category.category;
        menuItemsContainer.appendChild(section);

        category.items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");
            itemDiv.innerHTML = `
                <span>${item.name} - ₹${item.price}</span>
                <input type="number" min="0" max="10" value="0" data-price="${item.price}">
            `;
            menuItemsContainer.appendChild(itemDiv);
        });
    });
});
