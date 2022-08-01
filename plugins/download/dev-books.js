exports.run = {
   usage: ['devbook','devbookdl'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {  
      // getcategory 
      if (command == 'devbook') {
      // client.reply(m.chat, `Tips : لا تستعمل واتساب معدل \n\n`, m)
      // if (!text) return client.reply(m.chat,'no text', m)
       let json = await scrap.devbooks()
     //  command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
      let rows = [] 
      json.data.title.map((v, i) => rows.push({
          title: '📘 ' + v,
          rowId: `${isPrefix}devbookdl ` + json.data.link[i],
          description: '🌚 follow me on INSTAGRAM : @wox_bella'
      }))              
      await client.sendList(m.chat, '', `乂  *P D Fs  F O R  D E V E L O P E R S ❤️*`, '', 'Tap!', [{
         rows
      }], m)               
      }

       // devbookdl  
      if (command == 'devbookdl') {
         let json = await scrap.devbookdl(text)
         client.sendFile(m.chat, json.data.img , '', '', m)  
         client.sendFile(m.chat, json.data.link , 'INSTAGRAM : @wox_bella ', '', m)  
         client.reply(m.chat, 'MY INSTAGRAM : *instagram.com/wox_bella*', m)
       }
   },
   error: false,
   private: false,
   limit: true,
   group: false,
   cache: true,
   location: __filename
}
