exports.run = {
   usage: ['pdf', 'course', 'section','element','gdrive1','category2','bella','alloschool'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {  
      // getcategory 
      if (command == 'alloschool' || command == 'alloschool') {
       client.reply(m.chat, `Tips : لا تستعمل واتساب معدل \n\n`, m)
      // if (!text) return client.reply(m.chat,'no text', m)
      let json = await scrap.getcategory()
     //  command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
      let rows = [] 
      json.data.title.map((v, i) => rows.push({
          title: '📁 ' + v,
          rowId: `${isPrefix}category2 ` + json.data.link[i],
          description: '🚩 follow me on instagram : wox_bella'
      }))              
      await client.sendList(m.chat, '', `乂  *category*\n\n`, '', 'Tap!', [{
         rows
      }], m)               
      }
      // getcategory 
      if (command == 'category2') {
       
       client.reply(m.chat, ` 😊  `, m)
      // if (!text) return client.reply(m.chat,'no text', m)
      let json = await scrap.getcategory2(text)
     //  command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
      let rows = [] 

      json.data.title.map((v, i) => rows.push({
          title: '📁 ' + v,
          rowId: `${isPrefix}course ` + json.data.link[i],
          description: json.data.bigtitle[i]
      }))              
      await client.sendList(m.chat, '', `乂  *category*\n\n`, '', 'Tap!', [{
         rows
      }], m)
      }

      // urbn 
      if (command == 'course'){
          client.reply(m.chat, ` 🙂 `, m)
         // if (!text) return client.reply(m.chat,'no text', m)
         let json = await scrap.lesson(text)
         let rows = [] 

         json.data.title.map((v, i) => rows.push({
             title: '📁 ' + v,
             rowId: `${isPrefix}section ` + json.data.link[i],
             description: 'follow me on instagrm : wox_bella'
         }))          
         await client.sendList(m.chat, '', `乂  *P D F*\n\n`, '', 'Tap!', [{
            rows
         }], m)
      }   
      // urbn 
      if (command == 'section'){
       client.reply(m.chat, ` ✨ `, m)
      // if (!text) return client.reply(m.chat,'no text', m)
      let json = await scrap.section(text)
      //client.reply(m.chat, json.data.link[0], m)
     // client.reply(m.chat, json.data.title[0], m)
      let rows = [] 
      json.data.title.map((v, i) => rows.push({
          title: v,
          rowId: `${isPrefix}element ` + json.data.link[i],
          description: 'follow me on instagrm : wox_bella'
      }))                  
         await client.sendList(m.chat, '', `乂  *تابعني على الانستغرام  Instagram.com/wox_bella*\n\n`, '', 'Tap!', [{
            rows
         }], m)
      }
      
       // element  
      if (command == 'element') {
         let json = await scrap.pdfdl(text)
           client.sendFile(m.chat, json.data.dl_link[0] , 'follow me : @wox_bella ', '', m)  
          //client.reply(m.chat, json.data.yt_link, m)
      }
   },
   error: false,
   private: false,
   limit: true,
group: true,
   cache: true,
   location: __filename
}
