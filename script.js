// Array of Matrix-inspired usernames
const usernames = ['Neo', 'Trinity', 'Morpheus', 'Cypher', 'Tank'];
// Generate a random username and folder
const username = usernames[Math.floor(Math.random() * usernames.length)];
const folder = `Folder${Math.floor(Math.random() * 999)}`;

// ASCII Art
const asciiArt = `
 /$$                           /$$      /$$  
| $$                          | $$    /$$$$  
/$$$$$$    /$$$$$$   /$$$$$$$ /$$$$$$ |_ $$  
|_$$_/   /$$__  $$ /$$_____/|_  $$_/   | $$  
| $$    | $$$$$$$$|  $$$$$$   | $$     | $$  
| $$ /$$| $$_____/ \ ____  $$  | $$ /$$ | $$  
|  $$$$/|  $$$$$$$ /$$$$$$$/  |  $$$$//$$$$$$
 \___/   \_______/|_______/    \___/ |______/
                                             
                                             
      
`;

function updatePrompt() {
  const promptElement = document.getElementById('prompt');
  promptElement.textContent = `${username}@${folder} ~ % `;
}



window.onload = () => {
  const output = document.getElementById('output');
  output.innerHTML += `${asciiArt}<br>`;
  output.innerHTML += `Last login: ${new Date().toString()}<br>`;
  updatePrompt(); // Set the initial prompt
  document.getElementById('input').focus(); // Focus on input after setup
};


document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const input = this.value;
    this.value = ''; // Clear input field

    // Append the user input to the output area, including the prompt text
    const output = document.getElementById('output');
    output.innerHTML += `${document.getElementById('prompt').textContent}${input}<br>`; // Use the current prompt text

    processCommand(input);
    updatePrompt(); // Update the prompt for subsequent inputs
    output.scrollTop = output.scrollHeight; // Ensure output scrolls to the bottom
  }
});


function processCommand(input) {
  const output = document.getElementById('output');
  output.textContent += `> ${input}\n`; // Display input in output

  switch (input.trim().toLowerCase()) {
    case 'help':
      output.textContent += `whois          Who are you?\n`;
      output.textContent += `test1          Launch test1 program\n`;
      output.textContent += `dex            Launch DexScreener\n`;
      output.textContent += `tg             Launch Telegram for test1\n`;
      output.textContent += `x              Launch Twitter/X website\n`;
      output.textContent += 'history        Check the chain\n';
      break;
    case 'whois':
      output.textContent += `Username: ${username}\n`;
      break;
    case 'test1':
      window.open('https://www.pump.fun/C1KVoDKqiEYnQERGpHbzPTwkSZjtfTFFmRZHH1rGZmdm', '_blank');
      break;
    case 'dex':
      window.open('https://dexscreener.com/solana/5wsrqgrjfivs4tdfzcavqzksgcgk3nu9gjiqoilnuazu', '_blank');
      break;
    case 'tg':
      window.open('https://t.me/test1sol', '_blank');
      break;
    case 'x':
      window.open('https://twitter.com/test1onSolana', '_blank');
      break;
    case 'history':
      window.open('https://solscan.io/tx/4N9wyLcS94DnYk24jyKqaMBnSsu8RGoqiN3aCFVcY5jqyxTp8ezuQ5iKnGeSz4GPraXVoS5YNsGAv4yxUpRGX5f4', '_blank');
      break;  
    default:
      output.textContent += 'Command not recognized.\n';
  }

 // output.textContent += `${username}@${folder} ~ % `;
  output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
}
