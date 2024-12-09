const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const bod = document.getElementsByTagName('body');
// battle array
const battle = ['you win', 'you lose', 'you win', 'you win', 'you lose'];


// for keeping track of what the character has on them goods/equipment
let state = {}

// function battleOutCome(arr){
//     for (let i = o; i < battle.length; i++){

//         Math.floor(Math.random(battle))
//     }
//         return battle[i]
// }

// console.log(battle[i])


function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
    document.body.style.backgroundImage = textNode.backgroundImage;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center top';
    document.body.style.backgroundSize = 'cover';
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a cave, outside the sky is bright with the new day and beside you is a sword and shield. You are not in Kansas any more! Hell, you are not on earth any more!',

        options: [
            {
                text: 'take sword and shield',
                setState: { swordAndSheild: true },
                nextText: 2
            },
            {
                text: 'leave sword and shield',
                nextText: 8
            },
        ],

        backgroundImage: 'url(./images/rock-wall-dark-hole-entrance-260nw-2306484133.webp)'
    },
    {
        id: 2,
        text: 'You venture forth in search of answers and come across a grove of trees with a wierd purple fruit. You are very hungry',
        options: [
            {
                text: 'You pick some friut to eat',
                nextText: 4,
            },

            {
                text: 'you ignore the fruit',
                nextText: 10,
            },

            {
                text: 'you look around for more options',
                nextText: 3
            }
        ],
        backgroundImage: 'url(./images/hiking-though-giants.jpg)'
    },
    {
        id: 3,
        text: 'You notice a small home off in the distance with green smoke coming from the chimney',
        options: [
            {
                text: 'You walk towards the house and seek food and shelter',
                nextText: 5
            },

            {
                text: 'You walk in the opposite direction of the house',
                nextText: 10
            },

            {
                text: 'You hunt around the grove for something to eat',
                nextText: 10
            }
        ],
        backgroundImage: 'url(./images/beat_up_shack_by_jim88bro_d8bi2qk-fullview.jpg)'
    },

    {
        id: 4,
        text: 'You eat the fruit and your stomach rebels, you feel very nausious and you pass out never to wake again.',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/dnd-sorcerer-5e-white-robes.jpg)'

    },

    {
        id: 5,
        text: 'You knock on the house door and a beautiful woman lets you in, she is so gorgeous and she says to you "I am so lonely,stay with me,look into my eyes and tell  me you love me"',
        options: [
            {
                text: 'You gaze into her beautiful eyes',
                nextText: 6
            },

            {
                text: 'You push her away and grab you sword to fight',
                nextText: 7
            }


        ],
        backgroundImage: 'url(./images/girl.png)'
    },

    {
        id: 6,
        text: 'You are alive but cannot move, you see her walking around touching all the status and whispering words of endearment.',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/0_mTfxg55LXI_LbYsu.jpg)'
    },

    {
        id: 7,
        text: 'As you swing your sword a hidious head with hissing and striking snakes falls to the floor. You have killed Medusa',
        options: [
            {
                text: 'You search the house for treasure',
                nextText: 9
            },

            {
                text: 'You flee the house as fast as you can',
                nextText: 8
            }


        ],
        backgroundImage: 'url(./images/download.jpg)'
    },

    {
        id: 8,
        text: 'You come face to face with a gargantous red dragon, he roars and engulfs your body in flames',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/dragon-spitting-fire.webp)'
    },

    {
        id: 9,
        text: 'You find a singing sword that glows with an ice blue flame when drawn, 250 siver coins, 39 gold coins, and 3 healing potions. Also you notice a portal in a mirror which says "The Only Safe Passage!"',
        options: [
            {
                text: 'You leave the same way you came in',
                nextText: 8
            },

            {
                text: 'You walk through the portal',
                nextText: 11
            }


        ],
        backgroundImage: 'url(./images/Weapon_Sword_of_Narzissenkreuz_Ousia_3D.webp)'
    },

    {
        id: 10,
        text: 'You see a gargantous red dragon stalking you ',
        options: [
            {
                text: 'You prepare for combat and race to face your foe ',
                nextText: 8
            },

            {
                text: 'You flee towards the house',
                nextText: 5
            }


        ],
        backgroundImage: 'url(./images/il_1140xN.4488972880_3h3k.avif)'
    },

    {
        id: 11,
        text: 'You find yourself in a castle surrounded by statues of men turned to stone.',
        options: [
            {
                text: 'You search the castle for treasure',
                nextText: 12
            },

            {
                text: 'You seek the first exit and leave through it',
                nextText: 8
            }


        ],
        backgroundImage: 'url(./images/widen_1840x0.jpg)'
    },



    {
        id: 12,
        text: 'You find room filled with status of unfortunate men who gazed upon Medusa, piles of gold and silver, armour and weapons to numerous to count. A shield of protection rest agains a pile of gold',
        options: [
            {
                text: 'Trade your shield for the shield of protection',
                nextText: 13
            },

            {
                text: 'Gather as much gold and silver as you can carry',
                nextText: 15
            }


        ],
        backgroundImage: 'url(./images/3d-metalic-shield-light-background-style-red-silver-gold-tones_334364-2850.avif)'
    },


    {
        id: 13,
        text: 'You hear the singing sword calling out to the shield of protection and you feel the power. You also feel a pull towards a back table',
        options: [
            {
                text: 'You go to explore the table',
                nextText: 14
            },

            {
                text: 'You ignore the pull and seek a way out of the castle',
                nextText: 15
            }


        ],
        backgroundImage: 'url(./images/Weapon_Sword_of_Narzissenkreuz_Ousia_3D.webp)'
    },


    {
        id: 14,
        text: 'On the table you see the lion faced bracers of Hercules',
        options: [
            {
                text: 'You put the bracers on your arms',
                nextText: 16
            },

            {
                text: 'You leave the bracers where they lie',
                nextText: 15
            }


        ],
        backgroundImage: 'url(./images/Mfw_i_have_to_get_an_apple.webp)'
    },



    {
        id: 15,
        text: 'You find the exit to the castle and the red dragon is waiting for you. The castle door slams closed behind you there is no escape you must fight',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/il_1140xN.4488972880_3h3k.avif)'
    },

    {
        id: 16,
        text: 'Fully armed and armoured you feel stonger than ever and the shield of protection radiates a force field of protection around you. With the singing sword in hand you search for the exit',
        options: [
            {
                text: 'Exit through the front',
                nextText: 17
            },

            {
                text: 'Exit the castle from the rear',
                nextText: 19
            }


        ],
        backgroundImage: 'url(./images/Black-Man-With-Sword-In-Biblical-Times-46205695-1.png)'
    },


    {
        id: 17,
        text: 'You find the exit to the castle and the red dragon is waiting for you. The castle door slams close behind you there is no escape you must fight',
        options: [

            {
                text: 'Fight for you life',
                nextText: 19
            },

            {
                text: 'Seduce the dragon with the singing swords power',
                nextText: 18
            }
        ],
        backgroundImage: 'url(./images/il_1140xN.4488972880_3h3k.avif)'
    },

    {
        id: 18,
        text: 'You have overcome the dragon with the power of the sword',
        options: [

            {
                text: 'Kill the dragon with sword',
                nextText: 22
            },

            {
                text: 'Keep the dragon as a mount',
                nextText: 20
            }
        ],
        backgroundImage: 'url(./images/il_1140xN.4488972880_3h3k.avif)'
    },

    {
        id: 19,
        //event listener on this one to trigger random function
        text: 'Let the battle begin',
        options: [
            {
                text: 'Use your craftiness and knowledge to fight the dragon from a distance',
                nextText: 8
            },

            {
                text: 'combine the powers of sword, bracers and shield and attack',
                nextText: 22
            },

            {
                text: 'Let out a loud battle cry and attack in a rush of steel and might',
                nextText: 21
            },

            {
                text: 'Use the strength of the bracers to climb the castle wall and leap through a window',
                nextText: 23
            }


        ],
        backgroundImage: 'url(./images/il_1140xN.4488972880_3h3k.avif)'
    },
    {
        id: 20,
        text: 'The dragon flys you to its huge cave at the top of the tallest mountain you have ever seen',
        options: [

            {
                text: 'You are sleepy, you lie down and go to sleep',
                nextText: 24
            },

            {
                text: 'You are sleepy but you search for a way out of the mountian cave',
                nextText: 25
            }
        ],
        backgroundImage: 'url(./images/Mitchell_Caverns_Entrance.jpg)'
    },

    {
        id: 21,
        text: 'After a battle worth the songs of the ballards the dragon overcomes you with his might and devours you in one bite',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/dragon-spitting-fire.webp)'
    },

    {
        id: 22,
        text: 'You have won a very long battle, the dragon is slian and you took no damage',
        options: [

            {
                text: 'Search for a town or shelter other than the castle',
                nextText: 26
            },

            {
                text: 'Remain at the castle, go in search of a place to sleep and food to eat',
                nextText: 27
            }
        ],
        backgroundImage: 'url(./images/Black-Man-Wielding-Sword-In-Biblical-Times-46205631-1.png)'
    },

    {
        id: 23,
        text: 'Your back gets singed by fire but you made it barely. You find your self in a room with hundres of vipers slithering on the floor. You were lucky and landed in the center of the room. You are unlucky in that you are surrounded by vipers. There is a door 20feet away made from wood.',
        options: [

            {
                text: 'Charge through the vipers swinging your sword and crash through the door',
                nextText: 29
            },

            {
                text: 'Bash a hole in the floor and jump through',
                nextText: 30
            },

            {
                text: 'Leap back out the window',
                nextText: 8
            }
        ],
        backgroundImage: 'url(./images/widen_1840x0.jpg)'
    },

    {
        id: 24,
        text: 'You wake up to the jaws of the dragon and remember no more.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }

        ],
        backgroundImage: 'url(./images/dragon-spitting-fire.webp)'
    },

    {
        id: 25,
        text: 'You find a large tunnel large enough for a dragon, and two small tunnels which you can barely squeeze through',
        options: [

            {
                text: 'You walk through the large tunnel',
                nextText: 8
            },

            {
                text: 'You choose to squeeze through the tunnel on the right',
                nextText: 28
            },

            {
                text: 'You choose to squeeze through the tunnel on the left',
                nextText: 28
            }
        ],
        backgroundImage: 'url(./images/silhouette-person-entering-small-cave-man-exploring-interior-mysterious-cave_671318-35.avif)'
    },
    {
        id: 26,
        text: 'Off in the distance you see smoke rising into the air as if from multiple chimneys or camp fires.',
        options: [

            {
                text: 'Walk in the other direction of the smoke',
                nextText: 8
            },

            {
                text: 'Walk towards the smoke',
                nextText: 28
            },

            {
                text: 'Eat some of the vegtables and fruit you see outside',
                nextText: 27
            }
        ],
        backgroundImage: 'url(./images/hiking-though-giants.jpg)'
    },

    {
        id: 27,
        text: 'You eat the food and your stomach rebels, you feel very nausious and you pass out never to wake again.',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/dnd-sorcerer-5e-white-robes.jpg)'
    },

    {
        id: 28,
        text: 'You come upon a 30ft wall and follow it to a road and a gate with guards and wizards. You hear the alarm being raised, someone is screaming "Stranger Approaching"',
        options: [

            {
                text: 'Show your hands and call out that you are lost and in need of a meal and a warm bed.You also mention that you have coins to spend',
                nextText: 32
            },

            {
                text: 'You continue walking towards the gate you are anxious to get inside',
                nextText: 31
            }
        ],
        backgroundImage: 'url(./images/DD2_Sorcerer_Single_art_set_4K_png_jpgcopy.0.jpg)'
    },

    {
        id: 29,
        text: 'You have won a very long battle, the dragon is slian and you took no damage',
        options: [

            {
                text: 'Search for a town or shelter other than the castle',
                nextText: 26
            },

            {
                text: 'Remain at the castle, go in search of a place to sleep and food to eat',
                nextText: 27
            }
        ],
        backgroundImage: 'url(./images/widen_1840x0.jpg)'
    },

    {
        id: 30,
        text: 'You just jumped into a celler filled with viper and another Medusa with a serpants body you are bitten 500 times before you can even land',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/download.jpg)'
    },

    {
        id: 31,
        text: 'The wizards loose a firery barrage of spell and your life ends in an explosion of light and fire.',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/main-qimg-011a1fbc03b331118e54c5eeaf1008bd-lq.jpg)'
    },

    {
        id: 32,
        text: 'You are welcomed into the city after undergoing a spell of truth to determine whether you are a monster or the servant of a monster you are lead to a tavern and you eat a hardy stew and bread with a dragon meat pie. You are safe for the moment. Then the people tell you about the evil wizard known as Slither',
        options: [

            {
                text: 'You will help them fight the evil',
                nextText: 33
            },
            {
                text: 'You refuse to help fight and leave the city the next morning',
                nextText: 8
            }
        ],
        backgroundImage: 'url(./images/images.jpg)'
    },

    {
        id: 33,
        text: 'You have joined the people of the city Resistance and you are now a worrior of the Light. You will be trained in sorcery and in the use of all weapons. You will stand against Slither.',
        options: [

            {
                text: 'Restart',
                nextText: -1
            }
        ],
        backgroundImage: 'url(./images/chinese-dragon.jpg)'
    },

  


]

let fight = textNodes[18]
console.log(fight)
startGame()