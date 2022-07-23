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
         title: 'اوامر صاحب البوت في المجموعات',
         rowId: `${isPrefix}menutype 2`,
         description: ` لا تستعمل هذه الاوامر فهمي خاصة بصاحب البوت فقط `
      }, {
         title: 'معلومات عن المستعمل',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'ميزات أخرى',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }, {
         title: 'أوامر خاصة ب صاحب البوت',
         rowId: `${isPrefix}menutype 5`,
         description: ``
      }, {
         title: 'اوامر اضافية',
         rowId: `${isPrefix}menutype 6`,
         description: ``
      }]
       let text = '  بوبيز بوت هو بوت مغربي يقدم لك خدمات مميزة يمكن ان تساعدك في دراستك وفي حياتك اليومية ♥\n\n'
      text += '◦ *❀DEVELOPER* : ɴᴏᴜʀᴇᴅᴅɪɴᴇ ᴏᴜᴀꜰʏ\n'
      text += '◦ *❀FACEBOOK* : https://www.facebook.com/profile.php?id=100063533185520\n'
      text += '◦ *❀INSTAGRAM* : https://www.instagram.com/noureddine_ouafy\n\n'
      text += ' اذا واجهتك اي مشكلة في البوت تواصل مع صاحب البوت ☺.'
      await client.sendList(m.chat, '', text, '', 'أنقر هنا!', [{
         rows
      }], m)
   },
   error: false
}
