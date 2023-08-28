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