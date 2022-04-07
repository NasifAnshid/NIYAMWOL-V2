const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/aqjv8k9.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `ɴɪʏᴀᴍᴡᴏʟ BOT CREATED BY ɴᴀsɪғ ᴊʀ ᴀɴsʜɪᴅ ᴅx

🌐 ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : wa.me/919037601967

🌐 ɢɪᴛʜᴜʙ ʟɪɴᴋ : https://github.com/NasifAnshid/NIYAMWOL-V2

🌐 ɢʀᴏᴜᴩ ʟɪɴᴋ : https://tinyurl.com/y9ldzfzo

🌐 ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅꜱ :https://tinyurl.com/yacnvlto

🌐 ꜱᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ: https://tinyurl.com/y7tyqdzo

🌐 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ: https://t.ly/TGSb

🌐 𝙴𝙽𝙹𝙾𝚈 𝚃𝙷𝙴 𝚂𝙷𝙸𝙱𝙸 𝚂𝙴𝚁 𝙱𝙾𝚃 💗

🌐 ɴɪʏᴀ ᴍᴡᴏʟ ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ🍃😊🥰

🌐ɴᴀsɪғ ᴊʀ ᴀɴsʜɪᴅ ᴅx🌐
`}) 

}));
