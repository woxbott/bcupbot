exports.run = {
   async: async (m, {
      client,
      body,
      chats,
      setting,
      commands,
      prefixes
   }) => {
      try { 
        if (commands == 'hello')  {
         client.reply(m.chat, `  غير مسموح لهذا الحساب باستخدام البوت ٠ تواصل مع صاحب البوت من اجل الانضمام للمجموعة wa.me/212690516633  `, m).then(async () => await client.updateBlockStatus(m.sender, 'block'))
        }
      } catch (e) {
         console.log(e)
      }
   },
   error: false,
   private: true,
   cache: true,
   location: __filename
}
