exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'التحميل من المواقع',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'اوامر صاحب البوت في المجموعات',
         rowId: `${isPrefix}menutype 2`,
         description: ` لا تستعمل هذه الاوامر`
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
      await client.sendList(m.chat, '', global.db.setting.msg, 'ʙᴏʙɪᴢ ʙᴏᴛ', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
