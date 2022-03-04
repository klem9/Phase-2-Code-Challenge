import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy,onRemoveFromBotArmy, onBotDelete}) {
  const botCards = botArmy.map(bot => {
    return <BotCard key={bot.id} bot={bot} onBotClicked = {onRemoveFromBotArmy} />
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botCards}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
