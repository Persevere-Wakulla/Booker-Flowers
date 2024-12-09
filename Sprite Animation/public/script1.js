// !this is just another way to see both lessons at once, not connected to HTML

// initial lesson for the animation of the dog frames

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'src/Dogs/Fast or slow dogs movement set.jpg';
spriteWidth = 575;
spriteHeight = 523;
let frameX = 0;
let frameY = 5;
let gameFrame = 0;
const staggerFrames = 5;



function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(100,50,100,100);
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 15) frameX++;
        else frameX = 0;
    }


    requestAnimationFrame(animate);
};
animate();

// ! The second part of the lesson added some changes that are illustrated below..........

const playerState = 'run';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'src/Dogs/7843606.jpg';
const spriteWidth = 1000;
const spriteHeight = 668;


let gameFrame = 0;
const staggerFrames = 12;
const spriteAnimations = [];
const animationStates = [
    {
        name:'run',
        frames: 3,
    },
    {
        name:'stop',
        frames: 3,
    }

];
animationStates.forEach((state, index)=> {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});



function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);


    gameFrame++
    requestAnimationFrame(animate);
};
animate();