exports.run = {
   usage: ['menu', 'help', 'bot', 'boubiz' , 'list' ],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: ': الـتحـميل مــن الـمـواقــع مثـال ',
         rowId: `${isPrefix}menutype 1`,
         description: `fb / youtube / tiktok / instagram / mediafire ...`
      }, {
         title: 'قـسم تـحـويـل المـلـفـات (مــلصـقـات ..)',
         rowId: `${isPrefix}menutype 4`,
         description: `Sticker & video & music Converter ❄ `
      }, {
         title: 'أوامــر إضـــافية',
         rowId: `${isPrefix}menutype 6`,
         description: ` @wox_bella سيتم إضافة مميزات أخرى من طرف   `
      }]
       let text = '  بوبيز بوت هو بوت مغربي يقدم لك خدمات مميزة يمكن ان تساعدك في دراستك وفي حياتك اليومية ♥\n\n'
     
      text += '◦ *❀FACEBOOK* : https://www.facebook.com/profile.php?id=100063533185520\n'
      
      text += '◦ *❀INSTAGRAM* : https://www.instagram.com/noureddine_ouafy\n\n'
      
      text += ' اذا واجــهتك اي مشكلة في البــوت تـواصـل مع صـاحـب البوت ☺.'
      await client.sendList(m.chat, '', text, '', 'MENU أنقر هنا ليظهر لـك', [{
         rows
      }], m)
   },
   error: false
}
