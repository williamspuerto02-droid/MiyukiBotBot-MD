import os from 'os'
import moment from 'moment-timezone'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  try {
    await m.react('🐶')
    conn.sendPresenceUpdate('composing', m.chat)

    let mentionedJid = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let totalCommands = Object.keys(global.plugins).length
    const iconos = [
      'https://files.catbox.moe/dapzy2.jpg'
    ]
    const randomIcono = iconos[Math.floor(Math.random() * iconos.length)]

    let timestamp = speed()
    let ping = (speed() - timestamp).toFixed(2)

    // 🕓 Uptime
    let uptime = clockString(process.uptime() * 1000)

    // 🖥️ RAM info
    let total = (os.totalmem() / 1024 / 1024).toFixed(0)
    let free = (os.freemem() / 1024 / 1024).toFixed(0)
    let used = total - free

    // 📅 Fecha y hora
    let fecha = moment.tz('America/Lima').format('DD/MM/YYYY')
    let hora = moment.tz('America/Lima').format('HH:mm:ss')
    let dia = moment.tz('America/Lima').format('dddd')
    let menu = `
╭───── 🐶『 𝗦𝗜𝗳𝘂 𝗕𝗼𝘁 』─🐶─────╮
│ 👤 Usuario: *@${mentionedJid.split('@')[0]}*
│ 💼 Comandos: *${totalCommands}*
│ ⚙️ Versión: *${vs}*
│ 📚 Librería: *${libreria}*
│ 🤖 Modo: *${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub-Bot')}*
│ ⌛ Uptime: *${uptime}*
╰────────────────────────────────╯

╭── 🐶💾 « ESTADO DEL SISTEMA » 💾🐶 ──╮
│ 💻 RAM Total: *${total} MB*
│ 📈 RAM En uso: *${used} MB*
│ 📉 RAM Libre: *${free} MB*
│ ⚡Ping actual: *${ping} ms*
╰────────────────────────────────╯

╭─━━━💰 𝐌𝐄𝐍𝐔 𝐄𝐂𝐎𝐍𝐎𝐌𝐈́𝐀 💰
│✨ Comandos para ganar y administrar tu dinero
│
│🏗️ 𝗧𝗥𝗔𝗕𝗔𝗝𝗢𝗦
│• 💼 #work | #w | #trabajar
│• 💋 #slut | #prostituirse
│• ⛏️ #miming | #minar | #mine
│• 🏕️ #aventura | #adventure
│• 🦌 #cazar | #hunt
│• 🎣 #fish | #pescar
│• ⚔️ #mazmorra | #dungeon
│
│🎲 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 𝘆 𝗝𝗨𝗘𝗚𝗢𝗦
│• 🎰 #casino | #slot [cantidad]
│• 🪙 #coinflip | #flip | #cf [cantidad] <cara/cruz>
│• 🎯 #roulette | #rt [red/black] [cantidad]
│• 🚨 #crime | #crimen
│
│🏦 𝗕𝗔𝗡𝗖𝗢 𝘆 𝗚𝗘𝗦𝗧𝗜𝗢́𝗡
│• 💳 #balance | #bal | #bank <usuario>
│• 💰 #deposit | #dep | #d [cantidad] | all
│• 💸 #withdraw | #with | #retirar [cantidad] | all
│• 💎 #givecoins | #pay | #coinsgive <@usuario> [cantidad]
│• 🏅 #economyboard | #eboard | #baltop <página>
│• 📊 #economyinfo | #einfo
│
│🎁 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔𝗦
│• ⏰ #daily | #diario
│• 🗓️ #weekly | #semanal
│• 📅 #monthly | #mensual
│• 🧰 #cofre | #coffer
│
│💀 𝗔𝗖𝗖𝗜𝗢𝗡𝗘𝗦
│• 🦹 #steal | #robar | #rob <@usuario>
│• ❤️‍🩹 #curar | #heal
│
╰───────────────────────╯
💵 *Haz crecer tu fortuna y conviértete en el más rico del servidor!*

╭─━━━📥 𝐌𝐄𝐍𝐔 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 📥
│✨ Comandos para descargar contenido y archivos
│
│🎶 𝗠𝗨́𝗦𝗜𝗖𝗔 𝘆 𝗩𝗜́𝗗𝗘𝗢𝗦
│• 🎧 #play | #play2 + [canción]
│• 🎵 #ytmp3 | #ytmp4 + [link]
│• 🔍 #ytsearch | #search + [búsqueda]
│
│📱 𝗥𝗘𝗗𝗘𝗦 𝗬 𝗣𝗟𝗔𝗧𝗔𝗙𝗢𝗥𝗠𝗔𝗦
│• 🎬 #tiktok | #tt + [link / búsqueda]
│• 📸 #ig | #instagram + [link]
│• 🐦 #twitter | #x + [link]
│• 📘 #facebook | #fb + [link]
│• 📍 #pinterest | #pin + [búsqueda / link]
│
│📂 𝗔𝗥𝗖𝗛𝗜𝗩𝗢𝗦 𝗬 𝗔𝗣𝗞𝗦
│• 🗂️ #mediafire | #mf + [link]
│• 📦 #mega | #mg + [link]
│• 📱 #apk | #modapk + [búsqueda]
│• 🖼️ #image | #imagen + [búsqueda]
│
╰───────────────────────╯
💡 *Descarga música, videos y archivos desde cualquier sitio con estilo.*

╭─━━━🎴 𝐌𝐄𝐍𝐔 𝐆𝐀𝐂𝐇𝐀 🎴
│✨ Reclama, colecciona y presume tus personajes favoritos
│
│💠 𝗖𝗢𝗠𝗣𝗥𝗔 𝗬 𝗖𝗟𝗔𝗜𝗠
│• 💎 #buycharacter | #buychar | #buyc + [nombre]
│• 🧧 #claim | #c | #reclamar {citar personaje}
│• 🗑️ #delclaimmsg | #deletewaifu | #delchar + [nombre]
│• 💬 #setclaimmsg | #setclaim + [mensaje]
│
│🎨 𝗜𝗠𝗔́𝗚𝗘𝗡𝗘𝗦 𝗬 𝗜𝗡𝗙𝗢
│• 🖼️ #charimage | #waifuimage | #wimage + [nombre]
│• 📜 #charinfo | #winfo | #waifuinfo + [nombre]
│• 📚 #serieinfo | #ainfo | #animeinfo + [nombre]
│• 🗂️ #serielist | #slist | #animelist
│• 💫 #gachainfo | #ginfo | #infogacha
│
│🤝 𝗜𝗡𝗧𝗘𝗥𝗖𝗔𝗠𝗕𝗜𝗢 𝗬 𝗩𝗘𝗡𝗧𝗔
│• 💰 #sell | #vender + [precio] [nombre]
│• 🛍️ #removesale | #removerventa + [precio] [nombre]
│• 🔄 #trade | #intercambiar + [tu personaje] / [personaje 2]
│• 🎁 #givechar | #givewaifu | #regalar + [@usuario] [nombre]
│• 💞 #giveallharem + [@usuario]
│
│🔥 𝗝𝗨𝗘𝗚𝗢𝗦 𝗬 𝗥𝗔𝗡𝗞𝗜𝗡𝗚𝗦
│• 🎲 #rollwaifu | #rw | #roll
│• 💖 #robwaifu | #robarwaifu + [@usuario]
│• 👑 #favoritetop | #favtop
│• 🏆 #waifusboard | #waifustop | #topwaifus | #wtop + [número]
│• 💌 #harem | #waifus | #claims + <@usuario>
│• 🏪 #haremshop | #tiendawaifus | #wshop + <página>
│
╰───────────────────────╯
🌸 *Reúne a tus waifus, sube en el ranking y domina el Gacha!*

╭─━━━🤖 𝐌𝐄𝐍𝐔 𝐒𝐎𝐂𝐊𝐄𝐓𝐒 🤖
│🧩 Comandos para gestionar y vincular tu propio bot
│
│🔐 𝗖𝗢𝗡𝗘𝗫𝗜𝗢𝗡 𝗬 𝗤𝗥
│• 🪪 #qr | #code
│• 🧠 #bots | #botlist
│• 📡 #status | #estado
│• 🛰️ #p | #ping
│
│⚙️ 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗖𝗜𝗢𝗡 𝗗𝗘 𝗕𝗢𝗧
│• 🔗 #join + [invitación]
│• 🚪 #leave | #salir
│• 🧹 #logout
│• 🖼️ #setpfp | #setimage
│• 📝 #setstatus + [estado]
│• 🧍 #setusername + [nombre]
│
╰───────────────────────╯
💠 *Administra, configura y controla tus sesiones desde un solo lugar.*

╭─━━━🛠️ 𝐌𝐄𝐍𝐔 𝐔𝐓𝐈𝐋𝐈𝐃𝐀𝐃𝐄𝐒 🛠️
│⚙️ Herramientas útiles para automatizar, crear y explorar
│
│📜 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗬 𝗔𝗬𝗨𝗗𝗔
│• 💬 #help | #menu
│• 🧾 #sc | #script
│• 🐞 #reporte | #reportar
│• 💡 #sug | #suggest
│
│🧮 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 𝗨́𝗧𝗜𝗟𝗘𝗦
│• ➗ #calcular | #cal
│• 🧩 #delmeta
│• 🪪 #getpic | #pfp + [@usuario]
│• 🗣️ #say + [texto]
│• ✍️ #setmeta + [autor] | [pack]
│
│🎨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗬 𝗘𝗗𝗜𝗖𝗜𝗢́𝗡
│• 🧷 #sticker | #s | #wm {imagen/video}
│• 🖼️ #toimg | #img {sticker}
│• 🎭 #brat | #bratv | #qc | #emojimix
│• ⚡ #enhance | #remini | #hd
│• 🪶 #letra | #style
│
│🌐 𝗡𝗔𝗩𝗘𝗚𝗔𝗖𝗜𝗢́𝗡 𝗬 𝗜𝗡𝗧𝗘𝗟𝗜𝗚𝗘𝗡𝗖𝗜𝗔
│• 🔍 #google
│• 🌎 #wiki | #wikipedia
│• 💭 #ia | #gemini
│• 🧠 #dalle | #flux
│• 🧩 #npmdl | #nmpjs
│
│📦 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 𝗬 𝗧𝗢𝗢𝗟𝗦
│• 🧰 #gitclone + [link]
│• 🔗 #tourl | #catbox
│• 🧭 #ss | #ssweb
│• 📖 #read | #readviewonce
│• 🈯 #translate | #traducir | #trad
│
╰───────────────────────╯
⚡ *Convierte tu bot en una herramienta versátil, rápida y funcional.*

╭─━━━👤 𝐌𝐄𝐍𝐔 𝐏𝐄𝐑𝐅𝐈𝐋 👤
│💫 Personaliza tu cuenta y muestra tu identidad
│
│🏆 𝗣𝗥𝗢𝗚𝗥𝗘𝗦𝗢 𝗬 𝗥𝗔𝗡𝗞𝗜𝗡𝗚
│• 🏅 #leaderboard | #lboard | #top + <página>
│• 🎯 #level | #lvl + <@usuario>
│
│💞 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗘𝗦 𝗬 𝗣𝗥𝗢𝗙𝗜𝗟𝗘
│• 💍 #marry | #casarse + <@usuario>
│• 💔 #divorce
│• 🪪 #profile + <@usuario>
│
│🧩 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗣𝗘𝗥𝗙𝗜𝗟
│• 🎂 #setbirth + [fecha]
│• 🗑️ #delbirth
│• ✏️ #setdescription | #setdesc + [descripción]
│• 🧹 #deldescription | #deldesc
│• ⚧️ #setgenre + Hombre | Mujer
│• 🚫 #delgenre | #delgenero
│• 🌟 #setfavourite | #setfav + [personaje]
│• 💎 #prem | #vip
│
╰───────────────────────╯
✨ *Muestra quién eres y deja huella en el servidor.*

╭─━━━💬 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎𝐒 💬
│👑 Comandos exclusivos para administradores
│
│📢 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗬 𝗠𝗘𝗡𝗖𝗜𝗢𝗡𝗘𝗦
│• 📣 #tag | #hidetag | #invocar | #tagall + [mensaje]
│• 🪩 #admins | #admin + [texto]
│• 🗑️ #del | #delete {citar un mensaje}
│
│🛡️ 𝗣𝗥𝗢𝗧𝗘𝗖𝗖𝗜𝗢́𝗡 𝗬 𝗠𝗢𝗗𝗘𝗥𝗔𝗖𝗜𝗢́𝗡
│• 🚫 #antilink | #antienlace [enable/disable]
│• 🚷 #onlyadmin [enable/disable]
│• ⚙️ #bot [enable/disable]
│• ⚔️ #nsfw [enable/disable]
│• 🪪 #economy [enable/disable]
│• 🎴 #gacha [enable/disable]
│• 🎉 #welcome | #bienvenida [enable/disable]
│• 🔔 #detect | #alertas [enable/disable]
│
│⚙️ 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗔𝗖𝗜𝗢𝗡 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢
│• 🏷️ #gpname | #groupname [texto]
│• 📜 #gpdesc | #groupdesc [texto]
│• 🖼️ #gpbanner | #groupimg
│• 📩 #setwelcome [texto]
│• 🕊️ #setbye [texto]
│• 🪄 #setprimary [@bot]
│• 🔁 #restablecer | #revoke
│
│🚪 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗖𝗜𝗢𝗡 𝗗𝗘 𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦
│• 🧍 #add | #añadir | #agregar {número}
│• 🦶 #kick <@usuario> | {mención}
│• 🏆 #promote <@usuario> | {mención}
│• ⚠️ #demote <@usuario> | {mención}
│• 🕵️ #inactivos | #kickinactivos
│• ☠️ #listnum | #kicknum [texto]
│
│⚖️ 𝗔𝗠𝗢𝗡𝗘𝗦𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦
│• ⚠️ #addwarn | #warn <@usuario>
│• ✅ #unwarn | #delwarn <@usuario>
│• 📋 #advlist | #listadv
│
│📡 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 𝗬 𝗟𝗜𝗡𝗞𝗦
│• 🔗 #link
│• 🧭 #gp | #infogrupo
│• 💻 #linea | #listonline
│• 🔒 #close | #cerrar
│• 🔓 #open | #abrir
│
╰───────────────────────╯
💬 *Administra, protege y personaliza tu grupo con estilo.*

╭─━━━🌸 𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄 🌸
│✨ Reacciona, rolea y expresa emociones con estilo ✨
│
│🎭 𝗘𝗠𝗢𝗖𝗜𝗢𝗡𝗘𝗦 𝗬 𝗘𝗦𝗧𝗔𝗗𝗢𝗦
│• 😡 #angry | #enojado <@mención>
│• ☺️ #blush | #sonrojarse <@mención>
│• 😭 #cry | #llorar <@mención>
│• 😅 #laugh | #reirse <@mención>
│• 😔 #sad | #triste <@mención>
│• 😳 #cringe | #avergonzarse <@mención>
│• 🤔 #think | #pensar <@mención>
│• 😌 #bored | #aburrido <@mención>
│• 😍 #love | #amor | #enamorado <@mención>
│
│💞 𝗔𝗙𝗘𝗖𝗧𝗢 𝗬 𝗖𝗔𝗥𝗜𝗡̃𝗢
│• 😘 #kiss | #muak <@mención>
│• 💋 #kisscheek | #beso <@mención>
│• 🫂 #hug | #abrazar <@mención>
│• ✋ #highfive | #5 <@mención>
│• 🤝 #handhold | #mano <@mención>
│• 🔥 #pat | #palmadita <@mención>
│• 😉 #wink | #guiñar <@mención>
│• 🙂‍↔️ #cuddle | #acurrucarse <@mención>
│
│😏 𝗔𝗖𝗖𝗜𝗢𝗡𝗘𝗦 𝗗𝗜𝗩𝗘𝗥𝗧𝗜𝗗𝗔𝗦
│• 🫦 #bite | #morder <@mención>
│• 🤤 #lick | #lamer <@mención>
│• 🍽️ #eat | #comer <@mención>
│• ☕ #coffee | #café <@mención>
│• 🪩 #dance | #bailar <@mención>
│• 🧼 #bath | #bañarse <@mención>
│• 🚶 #walk | #caminar <@mención>
│• 🏃 #run | #correr <@mención>
│• 🚬 #smoke | #fumar <@mención>
│• 😮‍💨 #spit | #escupir <@mención>
│
│⚔️ 𝗔𝗖𝗖𝗜𝗢𝗡𝗘𝗦 𝗘𝗡𝗘𝗥𝗚𝗜𝗖𝗔𝗦
│• 👊 #punch | #golpear <@mención>
│• 🥊 #slap | #bofetada <@mención>
│• 😏 #facepalm | #palmada <@mención>
│• 🥷 #kill | #matar <@mención>
│• 👣 #step | #pisar <@mención>
│• ⛏️ #poke | #picar <@mención>
│• 😌 #bully | #bullying <@mención>
│
│💫 𝗥𝗢𝗟𝗘𝗣𝗟𝗔𝗬 𝗬 𝗦𝗧𝗬𝗟𝗘
│• 🥴 #seduce | #seducir <@mención>
│• 🤐 #shy | #tímido <@mención>
│• 😫 #dramatic | #drama <@mención>
│• 🍻 #drunk | #borracho <@mención>
│• 🗣️ #smug | #presumir <@mención>
│• 😄 #happy | #feliz <@mención>
│• 😚 #pout | #pucheros <@mención>
│• 🤰 #preg | #embarazar <@mención>
│
│🌸 𝗖𝗢𝗠𝗣𝗟𝗘𝗠𝗘𝗡𝗧𝗢𝗦
│• 🌸 #waifu
│• 🤟 #ppcouple | #ppcp
│
╰───────────────────────╯
👑 © Powered By *OmarGranda*`

/*    await conn.sendMessage(m.chat, {
      video: { url: 'https://files.catbox.moe/pr8jhc.mp4' },
      caption: menu,
      contextInfo: {
        mentionedJid: [mentionedJid],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: channelRD.id,
          serverMessageId: '',
          newsletterName: channelRD.name
        },
        externalAdReply: {
          title: botname,
          body: textbot,
          mediaType: 1,
          mediaUrl: redes,
          sourceUrl: redes,
          thumbnailUrl: randomIcono,
          showAdAttribution: false,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })*/

await conn.sendMessage(
  m.chat,
  {
    video: { url: 'https://files.catbox.moe/pr8jhc.mp4' },
    caption: menu,
    gifPlayback: true,
    gifAttribution: 0,
    contextInfo: {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        serverMessageId: 100,
        newsletterName: channelRD.name
      },
      externalAdReply: {
        title: botname,
        body: dev,
        thumbnailUrl: randomIcono,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  },
  { quoted: m }
)

  } catch (e) {
    console.error(e)
    m.reply('Ocurrió un error al generar el menú.')
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']
handler.register = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}
