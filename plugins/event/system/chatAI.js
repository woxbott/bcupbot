exports.run = {
    usage: ['menu','ig','mediafire','apkgoogle','apk','play','yts','alloschool','pdfdrive','devbook','sticker','s'],
   async: async (m, {
      client,
      body,
      chats,
      setting,
      command,
      prefixes
   }) => {
      try { 
        if (command == 'menu' || command == 'ig' || command == 'mediafire' || command == 'apkgoogle' || command == 'apk' || command == 'play' || command == 'yts' || command == 'alloschool' || command == 'pdfdrive' || command == 'devbook'|| command == 'sticker'|| command == 's')  {
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
