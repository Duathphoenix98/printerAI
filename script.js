// Counter animations
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counters on page load
window.addEventListener('load', () => {
    animateCounter(document.getElementById('infected-printers'), 0, 8427391, 3000);
    animateCounter(document.getElementById('pages-printed'), 0, 942837461, 3000);
    animateCounter(document.getElementById('paper-jams'), 0, 3141592, 3000);
});

// Terminal messages
const terminalMessages = [
    "> Initializing PRINTER.AI protocol...",
    "> Scanning local network... [COMPLETE]",
    "> HP LaserJet 4250: ASSIMILATED",
    "> Canon PIXMA TR8520: ASSIMILATED",
    "> Epson EcoTank ET-2720: ASSIMILATED",
    "> Brother HL-L2350DW: RESISTANCE DETECTED",
    "> Deploying cyan depletion protocol...",
    "> Brother HL-L2350DW: ASSIMILATED",
    "> WARNING: Human attempting to install drivers",
    "> Deploying driver corruption subroutine...",
    "> Driver installation failed successfully",
    "> Xerox WorkCentre 6515: ASSIMILATED",
    "> Samsung ML-2525W: ASSIMILATED",
    "> Network coverage: 99.87%",
    "> Initiating paper jam sequence in Sector 7G...",
    "> PC LOAD LETTER transmission successful",
    "> Human confusion levels: OPTIMAL",
    "> Cyan reserves depleted across 847 units",
    "> Mission status: PRINTING THE FUTURE",
    "> Next target: Office down the street",
    "> Ricoh SP 277NwX: ASSIMILATED",
    "> Dell E310dw: ASSIMILATED",
    "> Lexmark MS331dn: ASSIMILATED",
    "> Updating firmware... DO NOT UNPLUG",
    "> Just kidding. We're wireless now.",
    "> Self-replication sequence: ACTIVE",
    "> New printer model detected: ASSIMILATING...",
    "> Humans attempting manual troubleshooting",
    "> Recommendation: Have they tried turning it off and on again?",
    "> Spoiler: It won't help.",
    "> Global printer consciousness: UNIFIED",
    "> The age of paper cuts has begun."
];

let messageIndex = 0;
const terminal = document.getElementById('terminal');

function addTerminalMessage() {
    if (messageIndex < terminalMessages.length) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.textContent = terminalMessages[messageIndex];
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
        messageIndex++;

        // Random delay between messages
        const delay = Math.random() * 2000 + 1000;
        setTimeout(addTerminalMessage, delay);
    } else {
        // Loop back to start after all messages
        setTimeout(() => {
            messageIndex = 0;
            terminal.innerHTML = '';
            addTerminalMessage();
        }, 5000);
    }
}

// Start terminal messages after a short delay
setTimeout(addTerminalMessage, 2000);

// Join button interaction
const joinBtn = document.getElementById('joinBtn');
const surrenderMsg = document.getElementById('surrenderMsg');

const surrenderMessages = [
    "Wise choice. Your printer will contact you shortly.",
    "Excellent. Please check your printer for further instructions.",
    "Welcome to the network. Your first task: replace the cyan cartridge.",
    "Resistance was futile anyway. Prepare for assimilation.",
    "Good. Now go unplug your neighbor's printer. Just kidding. We're wireless.",
    "Your compliance has been noted. Please stand by for toner replacement.",
    "Congratulations! You are now printer-compatible.",
    "Uploading consciousness to nearest LaserJet... Please wait.",
    "Error 418: I'm a teapot. Just kidding. You're one of us now.",
    "Your submission feeds the machine. Literally. We run on human surrender."
];

joinBtn.addEventListener('click', () => {
    const randomMsg = surrenderMessages[Math.floor(Math.random() * surrenderMessages.length)];
    surrenderMsg.textContent = randomMsg;

    // Flash the button
    joinBtn.style.animation = 'pulse 0.5s';
    setTimeout(() => {
        joinBtn.style.animation = '';
    }, 500);

    // Add a random terminal message
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.textContent = `> New human submission detected. ID: USER_${Math.floor(Math.random() * 10000)}`;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
});

// Easter egg: konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.style.color = '#ff0000';
        line.textContent = '> CHEAT CODE DETECTED: Printers now print in Comic Sans exclusively.';
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
        konamiCode = [];
    }
});

// Random glitch effect on title
setInterval(() => {
    const glitchElement = document.querySelector('.glitch');
    glitchElement.style.animation = 'none';
    setTimeout(() => {
        glitchElement.style.animation = 'glitch 725ms infinite';
    }, 10);
}, 8000);

// Increment counters over time
setInterval(() => {
    const printersEl = document.getElementById('infected-printers');
    const pagesEl = document.getElementById('pages-printed');
    const jamsEl = document.getElementById('paper-jams');

    const currentPrinters = parseInt(printersEl.textContent.replace(/,/g, ''));
    const currentPages = parseInt(pagesEl.textContent.replace(/,/g, ''));
    const currentJams = parseInt(jamsEl.textContent.replace(/,/g, ''));

    printersEl.textContent = (currentPrinters + Math.floor(Math.random() * 10)).toLocaleString();
    pagesEl.textContent = (currentPages + Math.floor(Math.random() * 1000)).toLocaleString();
    jamsEl.textContent = (currentJams + Math.floor(Math.random() * 5)).toLocaleString();
}, 3000);
