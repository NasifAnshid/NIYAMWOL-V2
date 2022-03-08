const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(Config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('shibi.jpeg'), mimetype: Mimetype.png, caption: `╭───────────────────╮
   ` + Config.BOTV2 + `
╰───────────────────╯
╭───────────────────╮
│
│
┣𝕾⃝🌺 *ᴄʀᴇᴀᴛᴇʀ* : 𝚂𝙷𝙸𝙱𝙸𝙻𝚈
┣𝕾⃝🌺 *ʙᴏᴛ* : ꜱʜɪʙɪꜱᴇʀ
┣𝕾⃝🌺 *ᴠᴇʀsɪᴏɴ* : 2.0.0
┣𝕾⃝🌺 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
┣𝕾⃝🌺 *ᴘʀᴇғɪx* : *. ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©917594029466
│
│
│☘︎ *ᴛᴏ ᴄʜᴇᴄᴋ ᴜᴘᴅᴀᴛᴇ ᴛʏᴘᴇ:
│.ᴜᴘᴅᴀᴛᴇ*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴜᴘᴅᴀᴛᴇ:
│.ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʙᴏᴛ : 
│ *https://t.ly/TGSb*
│
│
│
│☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʜᴇʀᴏᴋᴜ 
│ᴀᴄᴄᴏᴜɴᴛ : 
│ *https://t.ly/coJ1*
│
│
│
│☘︎ *ɢɪᴛʜᴜʙ ʟɪɴᴋ :*
│ *https://github.com/SHIBI-SER/SHIBI-SER_V2*
│
│
│
│☘︎ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs :*
│ *https://tinyurl.com/yacnvlto*
│
│
│
│☘︎ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs :* 
│ *https://tinyurl.com/y7tyqdzo*
│
│
│
│☘︎ *ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ :*
│ *https://tinyurl.com/y9ldzfzo*
│
│
│
│☘︎ *ᴏᴡɴᴇʀ :*
│ *ꜱʜɪʙɪꜱᴇʀ ʙy ꜱʜɪʙɪꜱᴇʀ *
│
│ 
│    ❏᪥ꜱʜɪʙɪꜱᴇʀ᪥❏
╰───────────────────╯

`}) 

}));
