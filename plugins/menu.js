exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'A L L   C O M M A N D S',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }]
      await client.sendList(m.chat, '', 'Check My Stories To Get daily Tricks 😏 \n\n Instagram.com/wox_bella', '© wox-bot v1 (Public Bot)', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
