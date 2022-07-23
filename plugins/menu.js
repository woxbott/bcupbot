exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'التحميل من المواقع',
         rowId: `${isPrefix}menutype 1`,
         description: `fb / youtube / tiktok / instagram ...`
      }, {
         title: 'قسم تحويل الملفات (ملصقات ..)',
         rowId: `${isPrefix}menutype 4`,
         description: `تحول الصور للملصقات مع عمل حقوق + تحويل الصور `
      }, {
         title: 'اوامر اضافية',
         rowId: `${isPrefix}menutype 6`,
         description: ``
      }]
       let text = '  بوبيز بوت هو بوت مغربي يقدم لك خدمات مميزة يمكن ان تساعدك في دراستك وفي حياتك اليومية ♥\n\n'
     
      text += '◦ *❀FACEBOOK* : https://www.facebook.com/profile.php?id=100063533185520\n'
      text += '◦ *❀INSTAGRAM* : https://www.instagram.com/noureddine_ouafy\n\n'
      text += ' اذا واجهتك اي مشكلة في البوت تواصل مع صاحب البوت ☺.'
      await client.sendList(m.chat, '', text, '', ' MENU أنقرهنا ليظهر لك!', [{
         rows
      }], m)
   },
   error: false
}
