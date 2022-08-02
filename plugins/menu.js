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
      await client.sendList(m.chat, '', 'H E L L O', '© wox-bote v1 (Public Bot)', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
