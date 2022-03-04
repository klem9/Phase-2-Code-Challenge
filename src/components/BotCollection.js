import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots,onAddToBotArmy, onBotDelete}) {
  const botsCards = bots.map(bot => { 
    return <BotCard key ={bot.id} bot ={bot} onBotClicked = {onAddToBotArmy} onBotDelete={onBotDelete}/>
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {botsCards}
      </div>
    </div>
  );
}

export default BotCollection;
