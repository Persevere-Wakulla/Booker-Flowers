const playerState = 'run';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 2524;
const CANVAS_HEIGHT = canvas.height = 2566;

const playerImage = new Image();
playerImage.src = 'src/Dogs/Fast or slow dogs movement set.jpg';
const spriteWidth = 2700;
const spriteHeight = 2666;


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


