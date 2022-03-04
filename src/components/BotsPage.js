import React,{useState,useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/bots")
    .then(resp => resp.json())
    .then(botData => {
        setBots(botData);
    });
    }, []);

    function handleAddToBotArmy(bot){
      const myBotArmy = botArmy.filter(item => bot.id === item.id)
      if (myBotArmy.length <= 0)
        setBotArmy([...botArmy, bot])
    }

    function handleRemoveFromBotArmy(bot){
      const botArmyIndex = botArmy.filter(item => bot.id === item.id)
      if (botArmyIndex.length >= 0) {
          const newBotArray = [...botArmy]
          newBotArray.splice(botArmyIndex,1)
          setBotArmy(newBotArray)
        }
    }

  return (
    <div>
      <YourBotArmy botArmy= {botArmy} onRemoveFromBotArmy={handleRemoveFromBotArmy}/>
      <BotCollection bots = {bots} onAddToBotArmy={handleAddToBotArmy}/>
    </div>
  )
}

export default BotsPage;
