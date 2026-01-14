// Function to update the clock and greeting
function updateDashboard() {
    const now = new Date();
    
    // Update Clock
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('clock').textContent = timeString;

    // Update Greeting
    const hour = now.getHours();
    const greeting = document.getElementById('greeting');
    if (hour < 12) greeting.textContent = "Good Morning!";
    else if (hour < 18) greeting.textContent = "Good Afternoon!";
    else greeting.textContent = "Good Evening!";
}

// To-Do List Logic
const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.onclick = () => li.remove(); // Click a task to remove it
        list.appendChild(li);
        input.value = "";
    }
});

// Start clock
setInterval(updateDashboard, 1000);
updateDashboard();