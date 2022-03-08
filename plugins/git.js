const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/XCM04h0.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `SHIBISER BOT CREATED BY SHIBISER 

🌐 ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : wa.me/917594029466

🌐 ɢɪᴛʜᴜʙ ʟɪɴᴋ : https://github.com/SHIBI-SER/SHIBI-SER_V2

🌐 ɢʀᴏᴜᴩ ʟɪɴᴋ : https://tinyurl.com/y9ldzfzo

🌐 ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅꜱ :https://tinyurl.com/yacnvlto

🌐 ꜱᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ: https://tinyurl.com/y7tyqdzo

🌐 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ: https://t.ly/TGSb

🌐 𝙴𝙽𝙹𝙾𝚈 𝚃𝙷𝙴 𝚂𝙷𝙸𝙱𝙸 𝚂𝙴𝚁 𝙱𝙾𝚃 💗

🌐 ꜱʜɪʙɪꜱᴇʀ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ🍃😊🥰

🌐SHIBI BOT🌐
`}) 

}));
