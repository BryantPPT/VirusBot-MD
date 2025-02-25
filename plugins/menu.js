const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
//if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
function ucapan() {
  const time = moment.tz("America/Managua").format("HH");
  let res = "🌉 ¡Hora de soñar un poquito más!";

  if (time >= 4 && time < 9) {
    res = "🌅 ¡Buen desayuno y a disfrutar el día!";
  } else if (time >= 9 && time < 12) {
    res = "🌞 ¡Aprovecha la mañana, que rinda!";
  } else if (time >= 12 && time < 14) {
    res = "🍽️ ¡Hora de comer rico, buen provecho!";
  } else if (time >= 14 && time < 18) {
    res = "🌤️ ¡La tarde invita a seguir adelante, ánimo!";
  } else if (time >= 18 && time < 21) {
    res = "🌇 ¡Qué bonito atardecer, relájate un rato!";
  } else if (time >= 21 || time < 4) {
    res = "🌌 ¡A descansar que mañana será un gran día!";
  }

  return res;
}
let submenu = ` `
let descargar = `꧁✦  *📥 Menú de Descargas 📥*  ✦꧂

┏━━━━━🎶 Música━━━━━┓
┃ ➫ ❏ ${prefix}play   _(🎵 Música)_   
┃ ➫ ❏ ${prefix}spotify  _(🎤 Spotify)_  
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━🎥 Videos━━━━━━┓
┃ ➫ ❏ ${prefix}fb  _(📹 Facebook)_  
┃ ➫ ❏ ${prefix}ig  _(📸 Instagram)_  
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━🔍 Otros━━━━━━┓
┃ ➫ ❏ ${prefix}gitclone _(📂 Repositorio)_  
┃ ➫ ❏ ${prefix}tiktok  _(🎥 TikTok)_  
┃ ➫ ❏ ${prefix}twitter  _(🐦 Twitter)_  
┗━━━━━━━━━━━━━━━━━━┛`
let grupos = `꧁✦  *🔰 ＭＥＮＵ ＰＡＲＡ ⃐ＧＲＵＰＯＳ 🔰*  ✦꧂

┏━━━━━━━━━Gestion general━━┓
┃ ➫ ❏ ${prefix}welcome _(on/off)_  
┃ ➫ ❏ ${prefix}groupinfo  
┃ ➫ ❏ ${prefix}infogrupo  
┃ ➫ ❏ ${prefix}admins _(invocar a los admins)_  
┃ ➫ ❏ ${prefix}grupo _(close/open)_  
┗━━━━━━━━━━━━━━━━━━┛

┏━━━🔒 Seguridad 🔒━━━━┓
┃ ➫ ❏ ${prefix}antilink _(on/off)_  
┃ ➫ ❏ ${prefix}antifake _(on/off)_  
┃ ➫ ❏ ${prefix}antiarabe _(on/off)_  
┃ ➫ ❏ ${prefix}antitoxic _(on/off)_  
┃ ➫ ❏ ${prefix}antilink2 _(on/off)_  
┃ ➫ ❏ ${prefix}𝐴nti𝑇witer _(on/off)_  
┃ ➫ ❏ ${prefix}antitiktok _(on/off)_  
┃ ➫ ❏ ${prefix}antitelegram _(on/off)_  
┃ ➫ ❏ ${prefix}antifacebook _(on/off)_  
┃ ➫ ❏ ${prefix}𝐴nti𝐹b _(on/off)_  
┃ ➫ ❏ ${prefix}antiyoutube _(on/off)_  
┃ ➫ ❏ ${prefix}antinsfw _(on/off)_  
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━Reglas━━━━━━━┓
┃ ➫ ❏ ${prefix}addrules _(text)_  
┃ ➫ ❏ ${prefix}setrules _(text)_  
┃ ➫ ❏ ${prefix}rules _(reglas del grupo)_  
┃ ➫ ❏ ${prefix}kick _(@tag)_  
┃ ➫ ❏ ${prefix}add _(@tag)_  
┃ ➫ ❏ ${prefix}invita _(@tag)_  
┃ ➫ ❏ ${prefix}promote _(@tag)_  
┃ ➫ ❏ ${prefix}demote _(@tag)_  
┃ ➫ ❏ ${prefix}warn _(@tag)_  
┃ ➫ ❏ ${prefix}advertencia _(@tag)_  
┃ ➫ ❏ ${prefix}unwarn _(@tag)_  
┃ ➫ ❏ ${prefix}quitardvertencia _(@tag)_  
┃ ➫ ❏ ${prefix}setppname _(cambiar nombre del grupo)_  
┃ ➫ ❏ ${prefix}setdesc _(cambia la descripcion del grupo)_  
┃ ➫ ❏ ${prefix}setppgroup _(cambiar la foto del grupo)_  
┃ ➫ ❏ ${prefix}anularlink  
┃ ➫ ❏ ${prefix}resetlink _(restablecer el link del grupo)_  
┗━━━━━━━━━━━━━━━━┛

┏━━🎧 Autoresponder 🎧━━━┓
┃ ➫ ❏ ${prefix}autosticker _(on/off)_  
┃ ➫ ❏ ${prefix}detect _(on/off)_  
┃ ➫ ❏ ${prefix}autodetect _(on/off)_  
┃ ➫ ❏ ${prefix}modocaliente _(on/off)_  
┃ ➫ ❏ ${prefix}modoadmin _(on/off)_  
┃ ➫ ❏ ${prefix}audios _(on/off)_  
┃ ➫ ❏ ${prefix}cℎatbot _(on/off)_  
┃ ➫ ❏ ${prefix}autolevelup _(on/off)_  
┃ ➫ ❏ ${prefix}ℎidetag _(etiquetar a todos en un mensaje)_  
┃ ➫ ❏ ${prefix}tagall  
┃ ➫ ❏ ${prefix}invocar _(invocar a todos en una lista)_  
┃ ➫ ❏ ${prefix}listonline _(usuarios online)_  
┗━━━━━━━━━━━━━━━━━━┛`

let buscadores = `꧁✦  *🔎 ＭＥＮＵ ＢＵＳＣＡＤＯＲＥＳ 🔎*  ✦꧂

┏━━━━━━━━━━━━━━━━━━┓
┃         🔍 Búsqueda 🔍        
┃ ➫ ❏ ${prefix}google _(buscar info con Google)_  
┃ ➫ ❏ ${prefix}cℎatgpt  
┃ ➫ ❏ ${prefix}ia _(buscar info con IA)_  
┃ ➫ ❏ ${prefix}bard _(buscar info)_ 
┃ ➫ ❏ ${prefix}ɢᴘᴛ4ᴏ _(ʙᴜsᴄᴀʀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴄᴏɴ ʟᴀ ɪᴀ)_
┃ ➫ ❏ ${prefix}ɢɴᴜʟᴀ _( ʙᴜsᴄᴀ ᴘᴇʟɪᴄᴜʟᴀs ᴇɴ ʟɪɴᴇᴀ)_ 
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━┓
┃         🖼️ Imágenes 🖼️         
┃ ➫ ❏ ${prefix}imagen _(imagen en Google)_  
┃ ➫ ❏ ${prefix}wallpaper  _(imagen de wallpaper)_  
┃ ➫ ❏ ${prefix}ss  _(link)_  
┃ ➫ ❏ ${prefix}dall-e  
┃ ➫ ❏ ${prefix}pinterest  
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━┓
┃         📚 Recursos 📚        
┃ ➫ ❏ ${prefix}wikipedia  
┃ ➫ ❏ ${prefix}wiki  
┃ ➫ ❏ ${prefix}ia2 _(crear imagen con IA)_  
┃ ➫ ❏ ${prefix}npmsearcℎ _(info de NPM)_  
┃ ➫ ❏ ${prefix}styletext _(diseños de letras)_  
┃ ➫ ❏ ${prefix}ℎorario  
┗━━━━━━━━━━━━━━━━━━┛`
let juegos = `꧁✦  *👾 ＭＥＮＵ ＪＵＥＧＯＳ 👾*  ✦꧂

┏━━━━━━━━━━━━━━━━━━┓
┃         🎮 Juegos 🎮        
┃ ➫ ❏ ${prefix}simi _(hablar)_  
┃ ➫ ❏ ${prefix}ppt _(piedra, papel)_  
┃ ➫ ❏ ${prefix}gay @tag  
┃ ➫ ❏ ${prefix}pareja @tag  
┃ ➫ ❏ ${prefix}love @tag  
┃ ➫ ❏ ${prefix}follar @tag  
┃ ➫ ❏ ${prefix}topgays  
┃ ➫ ❏ ${prefix}topotakus  
┃ ➫ ❏ ${prefix}top  
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━┓
┃         ❓ Preguntas ❓        
┃ ➫ ❏ ${prefix}pregunta  
┃ ➫ ❏ ${prefix}verdad  
┃ ➫ ❏ ${prefix}reto  
┃ ➫ ❏ ${prefix}doxear  
┃ ➫ ❏ ${prefix}personalidad  
┃ ➫ ❏ ${prefix}racista  
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━┓
┃         🎲 Diversión 🎲        
┃ ➫ ❏ ${prefix}slot  
┃ ➫ ❏ ${prefix}math  
┃ ➫ ❏ ${prefix}matematicas  
┃ ➫ ❏ ${prefix}tictactoe  
┃ ➫ ❏ ${prefix}dado  
┃ ➫ ❏ ${prefix}piropo  
┃ ➫ ❏ ${prefix}ship  
┃ ➫ ❏ ${prefix}formartrio  
┃ ➫ ❏ ${prefix}formarpareja  
┃ ➫ ❏ ${prefix}txt _(texto)_  
┃ ➫ ❏ ${prefix}fake _(texto + tag)_  
┗━━━━━━━━━━━━━━━━━━┛`
let efecto = `꧁✦  *🎤 ＭＥＮＵ ＤＥ ＥＦＥＣＴＯＳ 🎤*  ✦꧂

┏━━━━━━━━━━━━━━━━━━┓
┃ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝑈𝑁 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)* 
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━┓
┃        🔊 Efectos 🔊        
┃ ➫ ❏ ${prefix}bass  
┃ ➫ ❏ ${prefix}blown  
┃ ➫ ❏ ${prefix}deep  
┃ ➫ ❏ ${prefix}earrape  
┃ ➫ ❏ ${prefix}fast  
┃ ➫ ❏ ${prefix}fat  
┃ ➫ ❏ ${prefix}nightcore  
┃ ➫ ❏ ${prefix}reverse  
┃ ➫ ❏ ${prefix}robot  
┃ ➫ ❏ ${prefix}slow  
┃ ➫ ❏ ${prefix}smooth  
┃ ➫ ❏ ${prefix}squirrel  
┗━━━━━━━━━━━━━━━━━━┛`
let convertidores = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🧧ＭＥＮＵ ＣＯＮＶＥＲＴＩＤＯＲＥＳ 🧧*
┊┃━━━━━━━━━━━━━━•
┊┃ ❏ ${prefix}tourl
┊┃ ❏ ${prefix}tts
┊┃ ❏ ${prefix}tomp3
┊┃ ❏ ${prefix}toimg
┊┃ ❏ ${prefix}toaudio
┊┃ ❏ ${prefix}toanime
┊┃ ❏ ${prefix}hd
┊┃ ❏ ${prefix}logos
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
let menuRPG = `꧁✦  *💲 ＭＥＮＵ  ＥＣＯＮＯＭＩＡ 💲*  ✦꧂

┏━━━━━━━━━━━━━━━━━━┓
┃ ＭＥＮＵ ＲＰＧ 
┃━━━━━━━━━━━━━━━━━━┛
┃ ➫ ❏ ${prefix}minar _(para minar exp)_
┃ ➫ ❏ ${prefix}robar
┃ ➫ ❏ ${prefix}rob _(roba exp algun usuarios)_
┃ ➫ ❏ ${prefix}crime
┃ ➫ ❏ ${prefix}trabajar
┃ ➫ ❏ ${prefix}work _(crabaja y ganas exp)_
┃ ➫ ❏ ${prefix}buy _(comprar mas diamantes (limit)_
┃ ➫ ❏ ${prefix}bal
┃ ➫ ❏ ${prefix}balace _(diamante/exp tenés)_
┃ ➫ ❏ ${prefix}claim _(recoger tu recompensa)_
┃ ➫ ❏ ${prefix}lb
┃ ➫ ❏ ${prefix}leaderboard
┃ ➫ ❏ ${prefix}cofre
┃ ➫ ❏ ${prefix}perfil
┃ ➫ ❏ ${prefix}nivel
┃ ➫ ❏ ${prefix}dep
┃ ➫ ❏ ${prefix}depositar
┃ ➫ ❏ ${prefix}retirar
┃ ➫ ❏ ${prefix}toremove
┃ ➫ ❏ ${prefix}levelup
┃ ➫ ❏ ${prefix}transferir
┃ ➫ ❏ ${prefix}transfer
┃ ➫ ❏ ${prefix}afk 
┗━━━━━━━━━━━━━━━━━━┛`
let menuOwner = `꧁✦  *💻 ＭＥＮＵ ＯＷＮＥＲ 💻*  ✦꧂

┏━━━━━━━━━━━━━━━━━━┓
┃ *(Comando exclusivo para propietario/owner del bot)* 
┃━━━━━━━━━━━━━━━━━┛
┃ ➫ ❏ ${prefix}anticall _(on/off)_
┃ ➫ ❏ ${prefix}antillamada _(on/off)_
┃ ➫ ❏ ${prefix}antipv _(on/off)_
┃ ➫ ❏ ${prefix}antiprivado _(on/off)_
┃ ➫ ❏ ${prefix}autoread _(on/off)_
┃ ➫ ❏ ${prefix}modojadibot _(on/off)_
┃ ➫ ❏ ${prefix}añadirdiamantes _(@tag)_
┃ ➫ ❏ ${prefix}addlimit _(@tag)_
┃ ➫ ❏ ${prefix}dardiamantes _(@tag)_
┃ ➫ ❏ ${prefix}añadirxp _(@tag)_
┃ ➫ ❏ ${prefix}addxp _(@tag)_
┃ ➫ ❏ ${prefix}banuser _(@tag)_
┃ ➫ ❏ ${prefix}unbanuser _(@tag)_
┃ ➫ ❏ ${prefix}autoadmin 
┃ ➫ ❏ ${prefix}nuevonombre
┃ ➫ ❏ ${prefix}botname _(cambiar el name del bot)_
┃ ➫ ❏ ${prefix}nuevafoto
┃ ➫ ❏ ${prefix}seppbot
┃ ➫ ❏ ${prefix}fotobot _(cambiar la foto del bot)_
┃ ➫ ❏ ${prefix}bc (difusión a todos los chat)
┃ ➫ ❏ ${prefix}bcgc (difusión solo a grupos)
┃ ➫ ❏ ${prefix}public (modo público) 
┃ ➫ ❏ ${prefix}privado (modo privado) 
┃ ➫ ❏ ${prefix}getcase
┃ ➫ ❏ ${prefix}fetch
┃ ➫ ❏ ${prefix}update
┃ ➫ ❏ ${prefix}restart 
┃ ➫ ❏ ${prefix}reiniciar
┃ ➫ ❏ $ 
┃ ➫ ❏ >
┃ ➫ ❏ => 
┗━━━━━━━━━━━━━━•`

/*if (command == 'menu' || command == 'help') {
    m.react('🦠') 
    const platform = os.platform();
    const uptime = os.uptime();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;

    const formatUptime = (uptime) => {
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        return `${hours}h ${minutes}m`;
    };

    const ramUsage = (usedMem / (1024 * 1024)).toFixed(2);
    const totalRam = (totalMem / (1024 * 1024)).toFixed(2);

  const totalComandos = await obtenerTotalComandos();

    let menu = `
╭━━━━━━━✦✗✦━━━━━━━━╮
┃ ${ucapan()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻┃
╰━━━━━━━✦✗✦━━━━━━━━╯
╭══━━━━✥◈✥━━━━══╮
┃    ℹ️ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ℹ️  ┃
╰══━━━━✥◈✥━━━━══╯
╭━━━━━━━༺༻━━━━━━━
┃ ❐ ❐ 𝙲𝚛𝚎𝚊𝚍𝚘𝚛  ${creador}
┃ ❐ ${lenguaje.menu.text} [ ${prefix} ]
┃ ❐ ${lenguaje.menu.text2} ${date}
┃ ❐ ${lenguaje.menu.text3} ${time}
┃ ❐ ${lenguaje.menu.text4} ${vs}
┃ ❐ ${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
┃ ❐ ${lenguaje.menu.text6} ${runtime(process.uptime())}
┃ ❐ ${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
┃ ❐ Plataforma: ${platform}
┃ ❐ Tiempo activo: ${formatUptime(uptime)} 
┃ ❐ RAM usada: ${ramUsage} MB de ${totalRam} MB
┃ ❐ CPU: ${os.cpus().length} núcleos
┃ ❐ ${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt}` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
╰━━━━━━━༺༻━━━━━━━

❖ ── ✦ ──『𝑪𝑨𝑵𝑨𝑳』── ✦ ── ❖
https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36
❖ ── ✦ ──『𝑾𝑨 𝑩𝑶𝑻』── ✦ ── ❖
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
 💻 ɪɴғᴏ ᴅᴇʟ ᴜsᴜᴀʀɪᴏ  💻
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✎
╭━━━•━•━━•━━•━━━•━━╮
┃  ${lenguaje.menu.text8} ${user.limit}
┃ ${lenguaje.menu.text9} ${user.level}
┃ ${lenguaje.menu.text10} ${user.role}
┃➫ ❏ ᴇxᴘ : ${user.exp}
┃➫ ❏ ᴄᴏɪɴs : ${user.money}
┃
┃ ${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
╰━━━•━•━━•━━•━━━•━━╯

╭━━━━•━━━━•━━━━•━━━━╮
┃ *🇳🇮ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs🇳🇮*
╰━━━━•━━━━•━━━━•━━━━╯
╭━━━━•━━━━•━━━━•━━━━╮
┃ ❏ ${prefix}allmenu | menucompleto
┃ ❏ ${prefix}menu1 | descarga
┃ ❏ ${prefix}menu2 | audio
┃ ❏ ${prefix}menu3 | menugrupos
┃ ❏ ${prefix}menu4 | menubuscadores
┃ ❏ ${prefix}menu5 | menujuegos
┃ ❏ ${prefix}menu6 | menuefecto
┃ ❏ ${prefix}menu7 | menuconvertidores
┃ ❏ ${prefix}menu8 | menurandom
┃ ❏ ${prefix}menu9 | menuRPG
┃ ❏ ${prefix}menu10 | menuSticker
┃ ❏ ${prefix}menu11 | menuOwner
┃ ❏ ${prefix}menu18 | menuhorny
┃ ❏ ${prefix}logos 
╰━━━━•━━━━•━━━━•━━━━╯

╭━━━━•━━━━•━━━━•━━━━╮
┃        🐬 ɪɴғᴏʀᴍᴀᴄɪᴏɴ 🐬
╰━━━━•━━━━•━━━━•━━━━╯
╭━━━━•━━━━•━━━━•━━━━╮
┃ ❏ ${prefix}estado _(estado del bot)_
┃ ❏ ${prefix}nuevo _(nuevo comando)_
┃ ❏ ${prefix}reglas _(reglas)_
┃ ❏ ${prefix}ping
┃ ❏ ${prefix}velocidad
┃ ❏ ${prefix}grupos _(grupos oficiales)_
┃ ❏ ${prefix}join _(solicita un bot para tu grupo)_
┃ ❏ ${prefix}owner
┃ ❏ ${prefix}creador _(contactos de mi creador)_
┃ ❏ ${prefix}instalarbot _(Tutorial de instalación)_
┃ ❏ ${prefix}solicitud
┃ ❏ ${prefix}cuenta 
┃ ❏ ${prefix}cuentaoficiales
┃ ❏ ${prefix}status 
┃ ❏ ${prefix}enable 
┃ ❏ ${prefix}configurar
┃ ❏ ${prefix}report _(reporta errores)_
╰━━━━•━━━━•━━━━•━━━━╯
`;
conn.sendMessage(
    m.chat,
    {
        video: { url: 'https://qu.ax/rRdCm.mp4' },
        gifPlayback: true,
        caption: menu,
    },
    { quoted: m }
);
}*/
/*conn.sendMessage(m.chat, { image: { url: imagen2 }, caption: menu }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 });
};*/
/*conn.sendMessage(m.chat, {
    image: { url: 'https://tinyurl.com/2ba3hubq' },
    caption: `${menu}`, 
    footer: "EliasarYT",
    buttons: [
      {
        buttonId: ".gay",
        buttonText: {
          displayText: "velocidad",
        },
        type: 1,
      },
      {
        buttonId: ".play2 felices los 4",
        buttonText: {
          displayText: "Creador",
        },
        type: 1,
      },
    ],
    viewOnce: true,
    headerType: 4,
    mentions: [m.sender],
  }, { quoted: m });
}*/
if (command == 'menu1' || command == 'descarga') {
m.react('🚀') 
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: descargar }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })};

if (command == 'menu2' || command == 'audio') {

let menu2 = `${lenguaje.menu.text13}\n\na\nfeliz navidad\nMerry Christmas\nFeliz cumpleaños\nPasa pack\nUwu\nSiuuu\nhola\nhello\nVete a la verga\nPasen porno\nHora del sexito\nPongan cuties\nFiesta del admin\nAdmin party\nViernes\nGOOOOD\nAlto temazo\nTodo bien\nBuenos dias\nBot gay\nGracias\nFua\nFino señores\n🧐🍷\nCorte\nGaspi buenos dias\nGaspi me saludas\nGaspi y las minitas\nGaspi todo bien\nGaspi ya no aguanto\nContate algo bot\nSexo\nMomento epico\nEl bot del orto no funciona\nEpicardo\nInsta de la minita\nUna mierda de bot\nUltimo momento\nNefasto\nParaguayo\nBot de mierda\nVenezolano\na nadie le importa\nGaspi corte\nYa me voy a dormir\nCalefon\nApurate bot\nUn chino\nNo funciona\nBoliviano\nEnano\nQuien es tu sempai botsito\nMe gimes 7u7\nTe amo botsito uwu\nOnichan\nLa toca 7w7\nautodestruction\n\n${lenguaje.menu.text14}`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu3' || command == 'menugrupos') {
m.react('🔰') 
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: grupos }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })};

if (command == 'menu4' || command == 'menubuscadores') {
m.react('🪄') 
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: buscadores }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })};

if (command == 'menu5' || command == 'menujuegos') {
m.react('👾') 
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: juegos }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })};

if (command == 'menu6' || command == 'menuefecto') {
m.react('🎤') 
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: efecto }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })};



if (command == 'menuRPG' || command == 'menu9') {
m.react('⚒️') 
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: menuRPG }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })};    

if (command == 'menuOwner' || command == 'menu11') {
m.react('👑') 
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: menuOwner }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })}; 

if (command == 'allmenu' || command == 'menucompleto') {
  m.react('🌟') 
  let menu = `╔━━━▣━━◤Virus-Bot◢━━▣━━━╗
  ║${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
  ║࿇ ══━━━━✥◈✥━━━━══ ࿇
  ║${lenguaje.menu.text} [ ${prefix} ]
  ║${lenguaje.menu.text2} ${date}
  ║${lenguaje.menu.text3} ${time}
  ║${lenguaje.menu.text4} ${vs}
  ║${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
  ║${lenguaje.menu.text6} ${runtime(process.uptime())}
  ║${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
  ║${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt} ` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
  ║ 
  ║${lenguaje.menu.text8} ${user.limit}
  ║${lenguaje.menu.text9} ${user.level}
  ║${lenguaje.menu.text10} ${user.role}
  ║❐ EXP : ${user.exp}
  ║❐ VIRUS-COINS : ${user.money}
  ║ 
  ║${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
  ║࿇ ══━━━━✥◈✥━━━━══ ࿇
  ╚══════ ≪ •❈• ≫ ══════╝
  
  *╔══════ ｉｎｆｏｂｏｔ ══════╗*
  ┃ ➫ ❏ ${prefix}reg _(Registrate en el bot)_
  ┃ ➫ ❏ ${prefix}unreg _(Borrar su registro)_
  ┃ ➫ ❏ ${prefix}myns _(Numero de serie)_
  ┃ ➫ ❏ ${prefix}estado _(Estado del bot)_
  ┃ ➫ ❏ ${prefix}owner
  ┃ ➫ ❏ ${prefix}report _(Reporta errores)_
  ◆━━━━━━◆❃◆━━━━━━◆
  
  *╔══════ 🔄ｄｅｓｃａｒｇａ ══════╗*
  ┃ ➫ ❏ ${prefix}play _(Descargar musica)_
  ┃ ➫ ❏ ${prefix}musica
  ┃ ➫ ❏ ${prefix}video
  ┃ ➫ ❏ ${prefix}yts _(Buscador de youtube)_
  ┃ ➫ ❏ ${prefix}spotify
  ┃ ➫ ❏ ${prefix}music _(Descarga musica de spotify)_
  ┃ ➫ ❏ ${prefix}tiktok _(Descarga video de tiktok)_
  ┃ ➫ ❏ ${prefix}tiktokimg
  ┃ ➫ ❏ ${prefix}ttimg _(Descarga imagen de tiktok)_
  ┃ ➫ ❏ ${prefix}igstalk _(Nombre de un usuario de ig)_
  ┃ ➫ ❏ ${prefix}facebook
  ┃ ➫ ❏ ${prefix}fb _(Descarga videos de facebook)_
  ┃ ➫ ❏ ${prefix}instagram
  ┃ ➫ ❏ ${prefix}ig _(Descarga videos de instagram)_
  *◆━━━━━━◆❃◆━━━━━━◆*
  
  *╔══════ 🔰ｇｒｕｐｏｓ ══════╗*
  ├• Gestionar tu grupo con Virus Bot
  ├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
  ┃ ➫ ❏ ${prefix}welcome _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}antilink
  ┃ ➫ ❏ ${prefix}antifake _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}antiarabe _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}antitoxic _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}kick _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}add _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}invita _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}promote _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}demote _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}admins _(ʟʟᴀᴍᴀ ᴀ ʟᴏs ᴀᴅᴍɪɴs)_
  ┃ ➫ ❏ ${prefix}grupo ᴄʟᴏsᴇ/ᴏᴘᴇɴ 
  ┃ ➫ ❏ ${prefix}advertencia _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}quitaradvertencia _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}resetlink _(ʀᴇsᴛᴀʙʟᴇᴄᴇ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ)_
  ┃ ➫ ❏ ${prefix}hidetag _(ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ᴛᴏᴅᴏs ᴇʟ ᴜɴ ᴍᴇɴsᴀᴊᴇ)_
  ┃ ➫ ❏ ${prefix}tagall 
  ┃ ➫ ❏ ${prefix}invocar _(ᴇᴛɪǫᴜᴇᴛᴀ ᴀ ᴛᴏᴅᴏs ᴇʟ ᴜɴᴀ ʟɪsᴛᴀs)_
  *◆━━━━━━◆❃◆━━━━━━◆*
  
  *╔══════ 🔎ｂｕｓｃａｄｏｒｅｓ ══════╗*
  ┃ ➫ ❏ ${prefix}google _(ʙᴜsᴄᴀʀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴄᴏɴ ɢᴏᴏɢʟᴇ)_
  ┃ ➫ ❏ ${prefix}chatgpt
  ┃ ➫ ❏ ${prefix}imagen _(ɪᴍᴀɢᴇɴ ᴇɴ ɢᴏᴏɢʟᴇ)_
  ┃ ➫ ❏ ${prefix}traducir _(ᴛʀᴀᴅᴜᴄɪʀ ᴀʟɢᴜɴ ᴛᴇxᴛᴏ)_
  ┃ ➫ ❏ ${prefix}wallpaper _(ɪᴍᴀɢᴇɴ ᴅᴇʟ ᴡᴀʟʟᴘᴀᴘᴇʀ)_
  ┃ ➫ ❏ ${prefix}horario
  *◆━━━━━━◆❃◆━━━━━━◆*
  
  *╔══════ 👾ｊｕｅｇｏｓ ══════╗*
  ┃ ➫ ❏ ${prefix}ppt _(ᴘɪᴇᴅʀᴀ, ᴘᴀᴘᴇʟ, ᴏ ᴛɪᴊᴇʀᴀ)_
  ┃ ➫ ❏ ${prefix}gay @ᴛᴀɢ
  ┃ ➫ ❏ ${prefix}pareja @ᴛᴀɢ
  ┃ ➫ ❏ ${prefix}love @ᴛᴀɢ
  ┃ ➫ ❏ ${prefix}follar @ᴛᴀɢ
  ┃ ➫ ❏ ${prefix}topgays
  ┃ ➫ ❏ ${prefix}topotakus
  ┃ ➫ ❏ ${prefix}top
  ┃ ➫ ❏ ${prefix}math
  ┃ ➫ ❏ ${prefix}matematicas
  ┃ ➫ ❏ ${prefix}piropo
  ┃ ➫ ❏ ${prefix}formartrio
  ┃ ➫ ❏ ${prefix}formaparejas
  ┊┃ ❏ ${prefix}txt _(ᴛᴇxᴛᴏ)_
  *◆━━━━━━◆❃◆━━━━━━◆*
  
  *╔══════ 🧧ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs ══════╗*
  ┃ ➫ ❏ ${prefix}tts
  ┃ ➫ ❏ ${prefix}tomp3
  ┃ ➫ ❏ ${prefix}toimg
  ┃ ➫ ❏ ${prefix}toaudio
  ┃ ➫ ❏ ${prefix}toanime
  ┃ ➫ ❏ ${prefix}hd
  *◆━━━━━━◆❃◆━━━━━━◆* 	
               
  *╔══════ ｅｃｏｎｏｍｉａ ══════╗*
  ┃ ➫ ❏ ${prefix}minar _(ᴘᴀʀᴀ ᴍɪɴᴀʀ ᴇxᴘ)_
  ┃ ➫ ❏ ${prefix}robar
  ┃ ➫ ❏ ${prefix}rob _(ʀᴏʙᴀ ᴇxᴘ ᴀʟɢᴜɴ ᴜsᴜᴀʀɪᴏs)_
  ┃ ➫ ❏ ${prefix}crime
  ┃ ➫ ❏ ${prefix}trabajar
  ┃ ➫ ❏ ${prefix}work _(ᴛʀᴀʙᴀᴊᴀ ʏ ɢᴀɴᴀs ᴇxᴘ)_
  ┃ ➫ ❏ ${prefix}buy _(ᴄᴏᴍᴘʀᴀʀ ᴍᴀs ᴅɪᴀᴍᴀɴᴛᴇs (ʟɪᴍɪᴛ)_
  ┃ ➫ ❏ ${prefix}bal
  ┃ ➫ ❏ ${prefix}balace _(ᴅɪᴀᴍᴀɴᴛᴇ/ᴇxᴘ ᴛᴇɴᴇs)_
  ┃ ➫ ❏ ${prefix}claim
  ┃ ➫ ❏ ${prefix}lb
  ┃ ➫ ❏ ${prefix}leaderboard
  ┃ ➫ ❏ ${prefix}cofre
  ┃ ➫ ❏ ${prefix}perfil
  ┃ ➫ ❏ ${prefix}nivel
  ┃ ➫ ❏ ${prefix}levelup
  ┃ ➫ ❏ ${prefix}transferir
  ┃ ➫ ❏ ${prefix}transfer
  ┃ ➫ ❏ ${prefix}afk 
  *◆━━━━━━◆❃◆━━━━━━◆*
  
  *╔══════👽ｓｔｉｃｋｅｒ ══════╗*
  ├❥ *(crear sticker desde whatsapp con virus bot)*
  ├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
  ┃ ➫ ❏ ${prefix}s
  ┃ ➫ ❏ ${prefix}sticker
  ┃ ➫ ❏ ${prefix}qc
  *◆━━━━━━◆❃◆━━━━━━◆*
  
  *╔══════👑ｏｗｎｅｒ ══════╗*
  ├❥ _(ᴄᴏᴍᴀɴᴅᴏ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ/ᴏᴡɴᴇʀ ᴅᴇʟ ʙᴏᴛ)_
  ├┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
  ┃ ➫ ❏ ${prefix}anticall _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}antillamada _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}antipv _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}antiprivado _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}autoread _(ᴏɴ/ᴏғғ)_
  ┃ ➫ ❏ ${prefix}añadirdiamantes _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}addlimit _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}dardiamantes _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}añadirxp _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}addxp _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}banuser _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}unbanuser _(@ᴛᴀɢ)_
  ┃ ➫ ❏ ${prefix}autoadmin 
  ┃ ➫ ❏ ${prefix}nuevonombre
  ┃ ➫ ❏ ${prefix}botname _(ᴄᴀᴍʙɪᴀʀ ᴇʟ ɴᴀᴍᴇ ᴅᴇʟ ʙᴏᴛ)_
  ┃ ➫ ❏ ${prefix}nuevafoto
  ┃ ➫ ❏ ${prefix}fotobot _(ᴄᴀᴍʙɪᴀʀ ʟᴀ ғᴏᴛᴏ ᴅᴇʟ ʙᴏᴛ)_
  ┃ ➫ ❏ ${prefix}setpp (ᴄᴀᴍʙɪᴀ ʟᴀ ғᴏᴛᴏ ᴅᴇʟ ʙᴏᴛ) 
  ┃ ➫ ❏ ${prefix}public (ᴍᴏᴅᴏ ᴘᴜʙʟɪᴄᴏ) 
  ┃ ➫ ❏ ${prefix}privado (ᴍᴏᴅᴏ ᴘʀɪᴠᴀᴅᴏ) 
  ┃ ➫ ❏ ${prefix}getcase
  ┃ ➫ ❏ ${prefix}fetch
  ┃ ➫ ❏ ${prefix}update
  ┃ ➫ ❏ ${prefix}restart 
  ┃ ➫ ❏ ${prefix}reiniciar
  *◆━━━━━━◆❃◆━━━━━━◆*`
conn.sendMessage(m.chat, { image: { url: menuimg }, caption: menu }, { quoted: fkontak, ephemeralExpiration: 24 * 60 * 1000, disappearingMessagesInChat: 24 * 60 * 1000 })};

if (command == 'nuevo' || command == 'extreno') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text15(vs), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363296103096943@newsletter', serverMessageId: '', newsletterName: `${ucapan()} ${pushname}` }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'reglas') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text16, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363296103096943@newsletter', serverMessageId: '', newsletterName: `${ucapan()} ${pushname}` }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
