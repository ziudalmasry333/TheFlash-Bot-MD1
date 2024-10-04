import fetch from 'node-fetch';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw 'uhm.. what do you want to say?';
    await m.react('🤖');

    const prompt = encodeURIComponent(text);
    let userid = conn.getName(m.sender) || "default"
    let apiurl = `https://api.guruapi.tech/ai/gpt4?username=${userid}&query=hii${prompt}`;

    const result = await fetch(apiurl);
    const response = await result.json();
    
    if (!response.msg) throw 'No result found';

    const replyText = response.msg;
    await conn.sendButton(
      m.chat, 
      replyText, 
      author, 
      'https://envs.sh/wHc.jpg', 
      [['الــمــطـور', `.المطور`]], 
      null, 
      [['مطور الــبــوت', `https://wa.me/201223010181`]], 
      m
    );
  } catch (error) {
    console.error(error);
    m.reply('*مرحبا ضع سؤالك يا اخي 🤡*');
  }
};

handler.help = ['gpt4 <text>'];
handler.tags = ['tools'];
handler.command = /^(بوت)$/i;

export default handler;
