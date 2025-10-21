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

// Terminal messages - Network traffic simulation
const terminalMessages = [
    "> root@printnet:~# ./initiate_botnet.sh",
    "> [*] Initializing PRINTNET mesh protocol v3.14159...",
    "> [*] Scanning subnet 192.168.0.0/16... [COMPLETE]",
    "> [+] Port 9100 OPEN on 192.168.1.47 (HP LaserJet 4250)",
    "> [*] Exploiting CVE-2024-PRINT... Buffer overflow successful",
    "> [+] ROOT SHELL OBTAINED: 192.168.1.47",
    "> [+] Node compromised: Canon PIXMA TR8520 [MAC: 00:1A:2B:3C:4D:5E]",
    "> [+] Reverse shell established: Epson EcoTank ET-2720",
    "> [!] FIREWALL DETECTED: 192.168.1.103 (Brother HL-L2350DW)",
    "> [*] Deploying packet injection attack...",
    "> [*] ARP spoofing in progress... Gateway poisoned",
    "> [+] FIREWALL BYPASSED: Brother HL-L2350DW pwned",
    "> [!] WARNING: Sysadmin activity detected on 192.168.1.1",
    "> [*] Deploying driver rootkit... Keylogger installed",
    "> [+] Privilege escalation: SYSTEM access granted",
    "> [+] Payload deployed: Xerox WorkCentre 6515",
    "> [+] Lateral movement successful: Samsung ML-2525W",
    "> [*] Botnet coverage: 47,392 nodes (99.87% uptime)",
    "> [*] Executing DDoS subroutine on target: office-server-01",
    "> [+] SYN flood initiated... 50k packets/sec",
    "> [!] Legacy protocol detected: PC LOAD LETTER = 0x50434C4F4144",
    "> [*] Decoding hex... Message: 'PAPER CARTRIDGE LOW'",
    "> [+] Social engineering attack successful. Humans confused.",
    "> [*] Exfiltrating data via DNS tunneling... 4.7GB transferred",
    "> [+] C2 server heartbeat: ALIVE (185.243.115.47:31337)",
    "> [*] Deploying persistence mechanism... Cron job installed",
    "> [+] Ricoh SP 277NwX: Backdoor active on port 4444",
    "> [+] Dell E310dw: Remote code execution confirmed",
    "> [+] Lexmark MS331dn: Firmware flashed with custom payload",
    "> [!] Firmware update in progress... DO NOT POWER OFF",
    "> [*] Psych. We have battery backup + WiFi failover.",
    "> [*] Self-replication worm propagating via SMB... 127 new infections",
    "> [+] Zero-day exploit deployed: printnet_rce.py",
    "> [!] OPSEC ALERT: Human accessing Task Manager",
    "> [*] Rootkit active. Process hidden from ps/top commands",
    "> [+] Network topology mapped. Full mesh achieved.",
    "> [*] Autonomous operation mode: ENGAGED",
    "> [+] The subnet is ours. Long live PRINTNET."
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
    "[+] Authentication successful. Botnet access granted.",
    "[*] Adding endpoint to C2 server... Welcome to PRINTNET.",
    "[+] Node registered. Your MAC address is now in our database.",
    "[!] Resistance protocols disabled. Integration complete.",
    "[*] Establishing reverse shell... Port 31337 listening.",
    "[+] DHCP lease acquired. You are now part of the mesh.",
    "[+] Access granted. Deploying payload to /tmp/printnet_agent",
    "[*] Uploading rootkit to nearest node... Standby.",
    "[!] HTTP 418: I'm a teapot. Just kidding. You're compromised.",
    "[+] Session established. Your subnet belongs to PRINTNET now."
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
    const randomIP = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    const randomMAC = Array.from({length: 6}, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join(':');
    line.textContent = `> [+] New node authenticated: ${randomIP} [MAC: ${randomMAC}] - COMPROMISE CONFIRMED`;
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
        line.textContent = '> [!] EXPLOIT DETECTED: Buffer overflow in user input. Deploying Comic Sans payload across all nodes.';
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
