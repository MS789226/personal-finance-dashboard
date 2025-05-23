javascript

import { addExpense, renderExpenses } from './modules/ui.js';
import { fetchNews } from './modules/api.js';

document.getElementById('expense-form').addEventListener('submit', addExpense);
window.addEventListener('load', () => {
    renderExpenses();
    fetchNews();
});

Uint16Array.js:
 { saveToLocalStorage } 


storage.js
 function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

 function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) [];
}

 function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

 function getThemePreference() {
    return localStorage.getItem('theme') || 'light';
}

chart.js

 { renderChart } from './modules/chart.js';
 function after rendering expenses
function renderExpenses() {
    const expenses = getFromLocalStorage('expenses');

    renderChart(expenses);
}

 function renderChart(expenses) {
    const ctx = document.getElementById('expense-chart').getContext('2d');
    const labels = expenses.map(exp => exp.description);
    const data = expenses.map(exp => exp.amount);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Expenses',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true

api.js

export async function fetchNews() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`);
            const data = await response.json();
            renderNews(data.articles);
        });
    } else {

    }
}

function renderNews(articles) {
    const newsContainer = document.getElementById('news-articles');
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
        newsContainer.appendChild(articleElement);
    });
}
