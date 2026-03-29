alert("Welcome to the Petrol Calculator"); // displays when page loads in.

// Function to calculate total cost
function calculateTotal() {

    // Get values from inputs
    let cost = document.getElementById("cost").value;
    let liters = document.getElementById("liters").value;

    // Convert to numbers
    cost = parseFloat(cost);
    liters = parseFloat(liters);

    // Calculate total
    let total = cost * liters;

    // Handle invalid input
    if (isNaN(total)) {
        document.getElementById("result").textContent = "Please enter valid numbers."; // Displays error message if given invalid input
        return;
    }

    // Display result with 2 decimal places
    document.getElementById("result").textContent = "Total: $" + total.toFixed(2); // Displays the total cost rounded to 2 decimal places (Basically it rounds the number to 2 decimal places and adds a dollar sign in front of it)
}