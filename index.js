
const terminal = document.getElementById("terminal");
const bar = document.getElementById("bar");
const beep = document.getElementById("beep");

function delay(ms){
    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}

function randomDelay(){
    return delay(
        Math.random() * 2000 + 500
    );
}

async function typeLine(text){

    const div =
        document.createElement("div");

    terminal.appendChild(div);

    const colors = [
        "lime",
        "cyan",
        "yellow",
        "orange"
    ];

    div.style.color =
        colors[
            Math.floor(
                Math.random()*colors.length
            )
        ];

    for(const char of text){

        div.innerHTML += char;

        if(beep){
            beep.currentTime = 0;
        }

        await delay(20);
    }

    terminal.scrollTop =
        terminal.scrollHeight;
}

async function progressAnimation(){

    for(let i=0;i<=100;i++){

        bar.style.width =
            i + "%";

        await delay(40);
    }
}

async function startHack(){

    const ip =
        `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;

    const threatLevels =
        ["LOW","MEDIUM","HIGH","CRITICAL"];

    const logs = [

        "Initializing System...",

        `Target IP Found : ${ip}`,

        "Connecting To Remote Server...",

        "Scanning Open Ports...",

        "Firewall Detected...",

        "Bypassing Security...",

        `RAM Usage : ${
            Math.floor(Math.random()*90)
        }%`,

        `Network Strength : ${
            Math.floor(Math.random()*100)
        }%`,

        `Threat Level : ${
            threatLevels[
                Math.floor(
                    Math.random()*4
                )
            ]
        }`,

        "Reading User Files...",

        "Password Database Located...",

        "Decrypting Passwords...",

        "Uploading Data...",

        "Cleaning Logs...",

        "✓ Access Granted",

        "✓ Operation Completed Successfully"
    ];

    for(const log of logs){

        await typeLine(log);

        await randomDelay();
    }
}

progressAnimation();
startHack();


// DOWNLOAD LOG

document
.getElementById("download")
.addEventListener("click",()=>{

    const blob =
        new Blob(
            [terminal.innerText],
            {
                type:"text/plain"
            }
        );

    const a =
        document.createElement("a");

    a.href =
        URL.createObjectURL(blob);

    a.download =
        "terminal-log.txt";

    a.click();
});


// MATRIX EFFECT

const canvas =
    document.getElementById("matrix");

const ctx =
    canvas.getContext("2d");

function resizeCanvas(){

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$#%&";

const fontSize = 16;

let columns =
    Math.floor(
        canvas.width / fontSize
    );

let drops =
    Array(columns).fill(1);

function draw(){

    ctx.fillStyle =
        "rgba(0,0,0,0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
        "#00ff00";

    ctx.font =
        fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text =
            chars[
                Math.floor(
                    Math.random()
                    * chars.length
                )
            ];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if(
            drops[i] * fontSize >
            canvas.height &&
            Math.random() > 0.97
        ){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw,33);