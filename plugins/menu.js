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
       let text = 'لي يتم إنشاء هذا البوت لاية اغراض تجارية ، بل لمساعدة الطلاب في دراستهم و إيصال المعلومة اليهم\n\n'
      text += '◦ *DEVELOPER* : محمد بلا\n'
      text += '◦ *🟣FACEBOOK* : https://www.facebook.com/profile.php?id=100063533185520\n'
      text += '◦ *🟣INSTAGRAM* : https://www.instagram.com/noureddine_ouafy *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'أنقر هنا!', [{
         rows
      }], m)
   },
   error: false
}
