document.addEventListener("DOMContentLoaded", function() {
    let newOrdersContainer = document.getElementById("newOrders");
    let pendingOrdersContainer = document.getElementById("pendingOrders");
    let completedOrdersContainer = document.getElementById("completedOrders");

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    function loadOrders() {
        newOrdersContainer.innerHTML = "";
        pendingOrdersContainer.innerHTML = "";
        completedOrdersContainer.innerHTML = "";

        orders.forEach((order, index) => {
            let orderDiv = document.createElement("div");
            orderDiv.classList.add("order");
            orderDiv.innerHTML = `
                <p><strong>Order #${index + 1}</strong></p>
                <p><strong>Items:</strong> ${order.items.join(", ")}</p>
                <p><strong>Total Amount:</strong> ₹${order.total}</p>
                <p><strong>Status:</strong> ${order.status}</p>
                ${order.status === "New" ? `<button onclick="moveToPending(${index})">Move to Pending</button>` : ""}
                ${order.status === "Pending" ? `<button onclick="moveToCompleted(${index})">Mark as Completed</button>` : ""}
            `;

            if (order.status === "New") {
                newOrdersContainer.appendChild(orderDiv);
            } else if (order.status === "Pending") {
                pendingOrdersContainer.appendChild(orderDiv);
            } else if (order.status === "Completed") {
                completedOrdersContainer.appendChild(orderDiv);
            }
        });

        localStorage.setItem("orders", JSON.stringify(orders));
    }

    window.moveToPending = function(index) {
        orders[index].status = "Pending";
        loadOrders();
    }

    window.moveToCompleted = function(index) {
        orders[index].status = "Completed";
        loadOrders();
    }

    loadOrders();
});