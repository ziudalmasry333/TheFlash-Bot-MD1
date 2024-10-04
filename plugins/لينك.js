import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: 'لينك الشات بتاع المطور',
      body: '𝐅𝐋𝐀𝐒𝐇﹝⚡﹞𝐁𝐎𝐓',
      previewType: 0, thumbnail: fs.readFileSync('./Menu.png'),
      sourceUrl: `https://wa.me/201223010181`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
