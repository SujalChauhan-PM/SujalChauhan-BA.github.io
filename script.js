document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Dynamic Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 3. API INTEGRATION: GitHub User Stats
    // Fetches your public repo count to show technical activity
    const githubUsername = 'sujalchauhan-ba'; 
    const repoCountElement = document.getElementById('repo-count');

    if(repoCountElement) {
        fetch(`https://api.github.com/users/${githubUsername}`)
        .then(response => {
            if (!response.ok) throw new Error("GitHub API failed");
            return response.json();
        })
        .then(data => {
            repoCountElement.textContent = data.public_repos;
        })
        .catch(error => {
            console.log('GitHub API Error:', error);
            repoCountElement.textContent = "5+"; // Fallback number
        });
    }

    // 4. API INTEGRATION: Business/Tech Quote Generator
    // Uses a local array for speed and reliability (no CORS issues)
    const quotes = [
        "Innovation distinguishes between a leader and a follower.",
        "Data is the new oil. It’s valuable, but if unrefined it cannot really be used.",
        "Efficiency is doing things right; effectiveness is doing the right things.",
        "The best way to predict the future is to create it.",
        "Technology is best when it brings people together.",
        "Automation applied to an efficient operation will magnify the efficiency."
    ];

    const quoteElement = document.getElementById('dynamic-quote');
    if(quoteElement) {
        // Pick a random quote
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = `"${randomQuote}"`;
    }
});
