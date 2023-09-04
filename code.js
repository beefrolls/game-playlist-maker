/*

function itemFactory(name, price) {
    function convertMoney() {
        price = (Number(price) * 50).toString()
    }
    function readInfo() {
        console.log(`${name} is worth ${price}`)
    }

    convertMoney()
    return {readInfo}
}

const item1 = itemFactory('Candy', '200')
const item2 = itemFactory('Car', '5000')


/* Game Playlist */
/*
function gameFactory(name, platform, compatibility, downloader) {
    const game = {
        name,
        platform,
        compatibility,
        downloader
    }
    
    function reader() {
        console.log(
            `Game Info:
                Name: ${name}
                Platform: ${platform}
                Compatibility: ${compatibility}
                Downloader: ${downloader}`
        )
    }

    return {reader}
}

const game1 = gameFactory('lol','lol','lol','lol')
game1.reader()
*/

const title = document.querySelector('#title');
const downloaders = document.querySelector('#inputField');
const pc = document.querySelector('#pc');
const mac = document.querySelector('#mac');
const compat = document.querySelector('#yes');
const incompat = document.querySelector('#no');
const btn = document.querySelector('#submit');



const games = document.querySelector('.games');

btn.addEventListener('click', function() {
    if (title.value && downloaders.value) {
        if ((pc.checked || mac.checked) && (compat.checked || incompat.checked)) {
            console.log('Proceed to checking radio values')
            if (pc.checked) {
                var usrPlat = 'PC'
            } else {
                var usrPlat = 'MAC'
            }
            /* Compatibility check to follow*/
            const newGame = gameFactory(title.value, usrPlat, 'Yes', downloaders.value) 
            newGame.reader()
            newGame.checkHTML()
        } else {
            console.log('please fill up all forms')
        }
    } else {
        console.log('please fill up all forms')
    }
})

function gameFactory(title, platform, compatibility, downloaders) {
    const game = {
        title,
        platform,
        compatibility,
        downloaders
    }

    function reader() {
        console.log(`Game Added:
            Name: ${title}
            Platform: ${platform}
            Compatible: ${compatibility}
            Downloaders: ${downloaders}`)
    }

    function createHTML() {
        const gameDiv = document.createElement('div');
        const gameImg = document.createElement('img');
        const gameInfo = document.createElement('div');
        const gameTitle = document.createElement('h5');
        const gamePlat = document.createElement('p');
        const gameDL = document.createElement('p');

        gameImg.src = 'images/icon.jpeg';
        gameTitle.innerText = title;
        gamePlat.innerText = platform;
        gameDL.innerText = downloaders;

        gameDiv.classList.add('game');
        gameInfo.classList.add('info');
        gameInfo.appendChild(gameTitle);
        gameInfo.appendChild(gamePlat);
        gameInfo.appendChild(gameDL);
        gameDiv.appendChild(gameImg);
        gameDiv.appendChild(gameInfo);
        games.appendChild(gameDiv);
    }

    function checkHTML() {
        createHTML()
        console.log(games)
    }

    return {game,reader,checkHTML}
}


const game1 = gameFactory('Skyrim','PC','Yes','GOG-Games')
game1.reader()
game1.checkHTML()