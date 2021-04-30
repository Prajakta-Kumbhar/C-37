class Game
{
    constructor()
    {
    
    }
   
    getState()
    {
        var dbref = database.ref("gameState")
        dbref.on("value",function(data) {
          gameState = data.val()
        })
    }

    updateState(state)
    {
        database.ref("/").update({"gameState": state})
    }

    startGame()
    {
      form = new Form()
      player = new Player()
      player.getCount()
      form.display()
    }

    play()
    {
      form.hideform()
      Player.getAllPlayersInfo()
      textSize(20)
      text("Game Started",200,250)
      if(allPlayers != undefined)
      {
        var textY = 300
        for(var plr in allPlayers)
        {
          
          if(plr === "player" + player.index)
           fill("red")
           else 
             fill("black")

         text(allPlayers[plr].name + " : "+ allPlayers[plr].distance,200,textY)
         textY += 20
        }
       
        if(keyIsDown  (UP_ARROW) && player.index != null)
        {
           player.distance += 50
           player.update()
        }
      
      }
    }
}