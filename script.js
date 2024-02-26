let colors = ['green','red','yellow','blue']
let input = []
let solution = []
let level = 0
// keydown to restart/start game.
document.addEventListener('keydown', function()
{
    solution = []
    startGame()
})

// set score to zero and begin the first level
function startGame()
{
    level = 0
    input = []
    solution = []
    console.log('------')
    startLevel()
}

function startLevel()
{
    setTimeout(function()
        {
            input = []
    level++
    document.getElementById('level-title').textContent = ('current level: ' + String(level))
    let newMove = Math.floor(Math.random() * (3 - 0 + 1))
    solution.push(colors[newMove])
    flashButton(colors[newMove])
        }, 1000)
    
}

document.querySelector('.green').addEventListener('click', function()
{
    let x = input.length
    input.push('green')
    if (input[x] != solution[x])
    {
        let sound = new Audio("./sounds/wrong.mp3")
        sound.play()
        gameOver(level);
    }
    else
    {
        let sound = new Audio("./sounds/green.mp3")
        sound.play()
        if (JSON.stringify(input) == JSON.stringify(solution))
        {
            startLevel()
        }
    }
    flashButton('green')
})
document.querySelector('.red').addEventListener('click', function()
{
    let x = input.length
    input.push('red')
    if (input[x] != solution[x])
    {
        let sound = new Audio("./sounds/wrong.mp3")
        sound.play()
        gameOver(level);
    }
    else
    {
        let sound = new Audio("./sounds/red.mp3")
        sound.play()
        if (JSON.stringify(input) == JSON.stringify(solution))
        {
            startLevel()
        }
    }
    flashButton('red')
})
document.querySelector('.yellow').addEventListener('click', function()
{
    let x = input.length
    input.push('yellow')
    if (input[x] != solution[x])
    {
        let sound = new Audio("./sounds/wrong.mp3")
        sound.play()
        gameOver(level);
    }
    else
    {
        let sound = new Audio("./sounds/yellow.mp3")
        sound.play()
        if (JSON.stringify(input) == JSON.stringify(solution))
        {
            startLevel()
        }
        
    }
    flashButton('yellow')
})
document.querySelector('.blue').addEventListener('click', function()
{
    let x = input.length
    input.push('blue')
    if (input[x] != solution[x])
    {
        let sound = new Audio("./sounds/wrong.mp3")
        sound.play()
        gameOver(level);
    }
    else
    {
        let sound = new Audio("./sounds/blue.mp3")
        sound.play()
        if (JSON.stringify(input) == JSON.stringify(solution))
        {
            startLevel()
        }
    }
    flashButton('blue')
})


function flashButton(color)
{
    if (color == 'green')
    {
        console.log('green')
        let sound = new Audio("./sounds/green.mp3")
        sound.play()
        document.querySelector('.green').classList.add('pressed')
        setTimeout(function()
        {
            document.querySelector('.green').classList.remove('pressed')
        }, 100)
    }
    else if (color == 'red')
    {
        console.log('red')
        let sound = new Audio("./sounds/red.mp3")
        sound.play()
        document.querySelector('.red').classList.add('pressed')
        setTimeout(function()
        {
            document.querySelector('.red').classList.remove('pressed')
        }, 100)
    }
    else if (color == 'blue')
    {
        console.log('blue')
        let sound = new Audio("./sounds/blue.mp3")
        sound.play()
        document.querySelector('.blue').classList.add('pressed')
        setTimeout(function()
        {
            document.querySelector('.blue').classList.remove('pressed')
        }, 100)

    }
    else if (color == 'yellow')
    {
        console.log('yellow')
        let sound = new Audio("./sounds/yellow.mp3")
        sound.play()
        document.querySelector('.yellow').classList.add('pressed')
        setTimeout(function()
        {
            document.querySelector('.yellow').classList.remove('pressed')
        }, 100)
        
        
    }
}

  function gameOver(score)
  {
    solution = []
    input = []
    level = 0
    startGame()
  }





