const { decode } = require('html-entities')
const { yta } = require('../../lib/y2mate')
const yt = require('usetube')
exports.run = {
   usage: ['play'],
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'lathi'), m)
         client.sendReact(m.chat, 'π', m.key)
         const search = await (await yt.searchVideo(text)).videos
         if (!search || search.length == 0) return client.reply(m.chat, global.status.fail, m)
         const {
            dl_link,
            thumb,
            title,
            duration,
            filesizeF
         } = await yta('https://youtu.be/' + search[0].id)
         if (!dl_link) return client.reply(m.chat, global.status.fail, m)
         let caption = `δΉ  *Y T - P L A Y*\n\n`
         caption += `	β¦  *Title* : ${decode(title)}\n`
         caption += `	β¦  *Size* : ${filesizeF}\n`
         caption += `	β¦  *Duration* : ${duration}\n`
         caption += `	β¦  *Bitrate* : 128kbps\n\n`
         caption += global.footer
         let chSize = Func.sizeLimit(filesizeF, global.max_upload)
         if (chSize.oversize) return client.reply(m.chat, `π File size (${filesizeF}) exceeds the maximum limit, downleoad it by yourself via this link : ${await (await scrap.shorten(dl_link)).data.url}`, m)
         client.sendMessageModify(m.chat, caption, m, {
            title: 'Β© wox-bot v1 (Public Bot)',
            largeThumb: true,
            thumbnail: await Func.fetchBuffer(thumb)
         }).then(() => {
            client.sendFile(m.chat, dl_link, decode(title) + '.mp3', '', m, {
               document: false
            })
         })
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   group: true,
   location: __filename
}
