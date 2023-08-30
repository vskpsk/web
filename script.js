const chmodtext = " cd Documents/vsk";
const dotnettext = " dotnet run";
const echotext = " ./welcome.sh"
const welcometext = " Welcome to my website!";
const cursor = document.createElement("span");
cursor.textContent = "_";

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function typeWriterEffect(text, line, starter = "") {
    line.textContent += starter;
    for (const char of text) {
        await delay(100);
        line.textContent = line.textContent.slice(0, -1);
        line.textContent += char;
        line.appendChild(cursor);
    }
}

function toggleCursor() {
    cursor.style.visibility = (cursor.style.visibility === "visible") ? "hidden" : "visible";
}

async function startTyping(text, line, starter = "") {
    await delay(1000);
    setInterval(toggleCursor, 1000);
    await typeWriterEffect(text, line, starter);
}

const chmodline = document.getElementById("chmod");
const dotnetline = document.getElementById("dotnet");
const dotnetre = document.getElementById("dotnetre");
const echo = document.getElementById("echo");
const welcome = document.getElementById("welcome");
const ls = document.getElementById("ls");
const github = document.getElementById("github");

function showText(text, line) {
    line.textContent = line.textContent.slice(0, -1) + text;
    line.appendChild(cursor);
}



async function runTyping() {
    await startTyping(chmodtext, chmodline);
    await startTyping(dotnettext, dotnetline, "vskpsk@foo:~/Documents/vsk$ ");
    await delay(1000);
    await showText("Hi my name is vsk! Im c# and python devolper!", dotnetre);
    await delay(1000);
    await startTyping(" ./welcome.sh", echo, "vskpsk@foo:~/Documents/vsk$ ");
    await delay(1000);
    await showText(welcometext, welcome);
    await delay(1000);
    await startTyping(" ls /social", ls, "vskpsk@foo:~/Documents/vsk$ ");
    await delay(1000);
    await showText("github: vskpsk", github);
    await showText("discord: vasek-san", document.getElementById("discord"));
    await showText("email: vasek@sprincl.com", document.getElementById("email"));
    await delay(700);
    await startTyping(" ", document.getElementById("end"), "vskpsk@foo:~/Documents/vsk$ ");

}

runTyping();
