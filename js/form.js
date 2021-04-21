class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("ASPHALT 8")
        title.position(140,0) 

        var input = createInput("Name")
        input.position(130,160)

        var button = createButton('play')
        button.position(250,200)

        var greeting = createElement('h3')

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount +=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hey " + name)
            greeting.position(130,160)
        })
    }
}