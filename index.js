const fetch = require('node-fetch')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


let channels = [['1034691887371665420', 'hhh', 10], ['1042520665087021086', 'hii', 15]]
let discord_token = "";

let main = async () =>{
  for (x = 0; x<channels.length; x++){
    start(channels[x][0], channels[x][1], channels[x][2], [channels[x][3]])
  }
}

let start = async (channel, content, delays) =>{
  while (true){
    let response = await fetch(`https://discord.com/api/v9/channels/${channel}/messages`, {
      method: 'POST',
      headers: {
        'authorization': discord_token,
        'content-type': 'application/json'
    },
      body: JSON.stringify({
          'content': content,
          'tts': false
      })
  });
  console.log(response.status)
  if (response.status === 200){
        console.log(`Sent message "${content}"to channel ID: ${channel}`)
        await delay(delays*1000)
      }
  else{
        console.log(`Failed to send message to channel ID: ${channel}. Waiting 10 seconds till retry`)
        await delay(10000)
      }
  }
      
  
}

main();
