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

// Random Quotes Logic
const quotes = [
    "Believe you can and you're halfway there.",
    "Don't stop when you're tired. Stop when you're done.",
    "Discipline is doing what needs to be done, even if you don't want to do it.",
    "Your future is created by what you do today, not tomorrow.",
    "Focus on being productive instead of busy.",
    "Success is the sum of small efforts, repeated day in and day out."
];

const quoteText = document.getElementById('quote-text');
const quoteBtn = document.getElementById('new-quote-btn');

quoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex]}"`;
});

// To-Do List Logic
const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.onclick = () => li.remove();
        list.appendChild(li);
        input.value = "";
    }
});

// Start systems
setInterval(updateDashboard, 1000);
updateDashboard();