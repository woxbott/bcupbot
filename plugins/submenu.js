exports.run = {
   usage: ['menutype'],
   async: async (m, {
      client,
      args,
      isPrefix
   }) => {
      const option = args[0] || 1
      if (option == 1) return client.reply(m.chat, submenu1(isPrefix), m)
      if (option == 2) return client.reply(m.chat, submenu2(isPrefix), m)
      if (option == 3) return client.reply(m.chat, submenu3(isPrefix), m)
      if (option == 4) return client.reply(m.chat, submenu4(isPrefix), m)
      if (option == 5) return client.reply(m.chat, submenu5(isPrefix), m)
      if (option == 6) return client.reply(m.chat, submenu6(isPrefix), m)
   },
   error: false
}

const submenu1 = prefix => {
   return `◦  ${prefix}fb  * التحميل من الفيسبوك*
◦  ${prefix}ig          *التحميل من الانستغرام*
◦  ${prefix}mediafire  * التحميل من ميديافاير *
◦  ${prefix}play    *تحميل الاغانـــي*
◦  ${prefix}tiktok  *(التحميل من تيكتوك  (الفيديو*
◦  ${prefix}tikmp3  *(التحميل من تيكتوك (الموسيقى*
◦  ${prefix}twitter *التحميل من تويتر*
◦  ${prefix}video   *تحميل فيديوات يوتوب*
◦  ${prefix}ytmp3   *فيديوات يوتوب بصيغة موسيقى*
◦  ${prefix}ytmp4   *فيديوات يوتوب بصيغة فيديو*
◦  ${prefix}yts     *البـــحث في اليوتوب*`
}

const submenu3 = prefix => {
   return `◦  ${prefix}limit
◦  ${prefix}me`
}

const submenu4 = prefix => {
   return `◦  ${prefix}ava  *قم بالاشارة للرسالة *
◦  ${prefix}run
◦  ${prefix}sticker  *تحويل صورة لملصق*
◦  ${prefix}swm  *وضع حقوق على الملصق*
◦  ${prefix}take  *وضع حقوق على الملصق*
◦  ${prefix}toimg  *تحويل ملصق لصورة*
◦  ${prefix}tomp3  *تحويل فيديو لموسيقى*
◦  ${prefix}tovn *تحويل موسيقى او فيديو لـأوديـــو*`
}

const submenu5 = prefix => {
   return `◦  ${prefix}autodownload *on / off*
◦  ${prefix}autoread *on / off*
◦  ${prefix}bc *text or reply media*
◦  ${prefix}bcgc *text or reply media*
◦  ${prefix}backup
◦  ${prefix}ban *mention or reply*
◦  ${prefix}changename *text*
◦  ${prefix}unban *mention or reply*
◦  ${prefix}block *mention or reply*
◦  ${prefix}unblock *mention or reply*
◦  ${prefix}chatbot *on / off*
◦  ${prefix}debug *on / off*
◦  ${prefix}prefix *symbol*
◦  ${prefix}-prefix *symbol*
◦  ${prefix}+prefix *symbol*
◦  ${prefix}cmdstic
◦  ${prefix}-cmdstic *reply sticker*
◦  ${prefix}+cmdstic *reply sticker*  
◦  ${prefix}disable *command*
◦  ${prefix}enable *command*
◦  ${prefix}-prem *mention or reply*
◦  ${prefix}+prem *mention or reply*
◦  ${prefix}multiprefix *on / off*
◦  ${prefix}plugen *plugin*
◦  ${prefix}plugdis *plugin*
◦  ${prefix}join *link*
◦  ${prefix}reset
◦  ${prefix}restart
◦  ${prefix}self *on / off*
◦  ${prefix}setpp *reply photo*
◦  ${prefix}setmsg *text*
◦  ${prefix}setwm *packname* | *author*
◦  ${prefix}-mimic *mention or reply*
◦  ${prefix}+mimic *mention or reply*
◦  ${prefix}online *on / off*
◦  ${prefix}-owner *mention or reply*
◦  ${prefix}+owner *mention or reply*`
}

const submenu6 = prefix => {
   return `◦  ${prefix}botstat
◦  ${prefix}checkapi
◦  ${prefix}hitdaily
◦  ${prefix}hitstat
◦  ${prefix}list
◦  ${prefix}owner
◦  ${prefix}premium`
}
