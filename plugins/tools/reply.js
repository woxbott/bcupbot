exports.run = {
   usage: ['menu'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
     // ________________________________________________
     if (command == 'menu') {
       
       client.reply(m.chat, `boubiz bot by nourddine :)`, m)
         client.sendFile(m.chat, 'https://github.com/silana2016/neoxr-bot/blob/master/media/image/Boobiz%20(%20DRILL%20REMIX%20)%20(%20256kbps%20cbr%20).mp3?raw=true', 'MED.mp3', '', m, {
               document: false
            })
      }
     // ________________________________________________
   },
   error: false,
   private: false,
   limit: true,
   group: false,
   cache: true,
   location: __filename
}


