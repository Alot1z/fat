let rankings = [
    { name: 'Alice', weight: 75 },
    { name: 'Bob', weight: 85 },
    { name: 'Charlie', weight: 65 }
];

function toggleButton(buttonId) {
    var buttons = document.getElementsByClassName('toggle-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    document.getElementById(buttonId).classList.add('active');
    playClickSound();
    if (buttonId === 'ranking-btn') {
        showRanking();
    } else {
        hideRanking();
    }
}

function playClickSound() {
    var sound = document.getElementById('click-sound');
    sound.play();
}

function showRanking() {
    var contentDiv = document.getElementById('dynamic-content');
    contentDiv.innerHTML = `
        <h2>Ranking</h2>
        <form id="weight-form" onsubmit="addRanking(event)">
            <input type="text" id="name" placeholder="Name" required />
            <input type="number" id="weight" placeholder="Weight (kg)" required />
            <button type="submit">Submit</button>
        </form>
        <table id="ranking-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Weight (kg)</th>
                </tr>
            </thead>
            <tbody id="ranking-body">
                ${rankings.map(user => `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.weight}</td>
                </tr>`).join('')}
            </tbody>
        </table>
    `;
}

function hideRanking() {
    var contentDiv = document.getElementById('dynamic-content');
    contentDiv.innerHTML = '';
}

function addRanking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const weight = parseInt(document.getElementById('weight').value);
    rankings.push({ name, weight });
    rankings.sort((a, b) => b.weight - a.weight);
    showHer er den endelige kode til din hjemmeside med den dynamiske "Ranking" sektion, baggrundsvideo, lyd og moderne design:

### HTML (index.html)
```html
<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interaktiv Toolbar</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="background-animation">
        <video autoplay loop muted playsinline>
            <source src="4kwallocean.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="overlay"></div>
    </div>
    <div class="toolbar">
        <button class="toggle-btn" id="btn1" onclick="toggleButton('btn1')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12H22L12 2Z" fill="currentColor"/>
                <path d="M2 12L12 22L22 12H2Z" fill="currentColor"/>
            </svg>
            Knap 1
        </button>
        <button class="toggle-btn" id="ranking-btn" onclick="toggleButton('ranking-btn')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12H22L12 2Z" fill="currentColor"/>
                <path d="M2 12L12 22L22 12H2Z" fill="currentColor"/>
            </svg>
            Ranking
        </button>
        <button class="toggle-btn" id="btn3" onclick="toggleButton('btn3')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12H22L12 2Z" fill="currentColor"/>
                <path d="M2 12L12 22L22 12H2Z" fill="currentColor"/>
            </svg>
            Knap 3
        </button>
        <button class="toggle-btn" id="btn4" onclick="toggleButton('btn4')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 12H22L12 2Z" fill="currentColor"/>
                <path d="M2 12L12 22L22 12H2Z" fill="currentColor"/>
            </svg>
            Knap 4
        </button>
    </div>
    <audio id="click-sound" src="button-click.mp3"></audio>
    <div class="dynamic-content" id="dynamic-content"></div>
    <script src="scripts.js"></script>
</body>
</html>
