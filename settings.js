const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const {
    en,
    es,
    ar,
    id,
    pt,
    rs
} = require('./libs/idiomas/total-idiomas.js')
const axios = require('axios')

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [
    ["15166130120", "Owner", true],
    ["18298838883"],
    ["123456789"],
    ["123456789"]
]
global.mods = []
global.premium = []
global.blockList = []

//---------[ NOMBRE/INFO ]---------
global.pagina = "https://virusbot.netlify.app/"
global.botname = "Virus Bot 🦠"
global.wm = 'Virus Bot 🦠'
global.vs = '1.1'
global.creador = 'Virus Lyrics'
global.creador2 = 'Bryant Lyrics'
global.nunber = Math.floor(Math.random() * (27 - 18 + 1)) + 18;

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}



//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +59309090909
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Managua' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [` `]

//---------[ APIS GLOBAL ]---------
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');
global.apis = 'https://deliriussapi-oficial.vercel.app'
global.eliasarapi = 'EliasarYT'
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['565b063b6fa9058e01c7b489']; // ['GataDios'];  
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '');

global.APIs = {
        //ApiEmpire: 'https://',
        CFROSAPI: 'https://api.cafirexos.com',
        nrtm: 'https://fg-nrtm.ddns.net',
        fgmods: 'https://api.fgmods.xyz',
        xteam: 'https://api.xteam.xyz',
        dzx: 'https://api.dhamzxploit.my.id',
        lol: 'https://api.lolhuman.xyz',
        neoxr: 'https://api.neoxr.my.id',
        zenzapis: 'https://api.zahwazein.xyz',
        akuari: 'https://api.akuari.my.id',
        akuari2: 'https://apimu.my.id',
        botcahx: 'https://api.botcahx.biz.id',
        ibeng: 'https://api.ibeng.tech/docs',
        rose: 'https://api.itsrose.site',
        popcat: 'https://api.popcat.xyz',
        xcoders: 'https://api-xcoders.site',
        vihangayt: 'https://vihangayt.me',
        erdwpe: 'https://api.erdwpe.com',
        xyroinee: 'https://api.xyroinee.xyz',
        nekobot: 'https://nekobot.xyz'
    },
    global.APIKeys = {
        'https://api.xteam.xyz': `${keysxteam}`,
        'https://api.lolhuman.xyz': 'GataDios',
        'https://api.neoxr.my.id': `${keysneoxr}`,
        'https://api.zahwazein.xyz': `${keysxxx}`,
        'https://api.fgmods.xyz': 'DRLg5kY7',
        'https://api-fgmods.ddns.net': 'fg-dylux',
        'https://api.botcahx.biz.id': 'Admin',
        'https://api.ibeng.tech/docs': 'tamvan',
        'https://api.itsrose.site': 'Rs-Zeltoria',
        'https://api-xcoders.site': 'Frieren',
        'https://api.xyroinee.xyz': 'uwgflzFEh6'
    };

//---------[ STICKERS ]---------
global.packname = ""
global.author = `
 Bot: Virus Bot 🦠
  Autor: Virus Lyrics
  Creador: Bryant Lyrics`

//-----------------IMAGENES---------
global.menuimg = "https://tinyurl.com/2c7j5a5r"
global.img = "https://tinyurl.com/2c7j5a5r";
global.img1 = "https://tinyurl.com/2c7j5a5r";
global.img2 = 'https://tinyurl.com/2c7j5a5r';
global.img3 = 'https://tinyurl.com/2c7j5a5r';
global.img4 = 'https://tinyurl.com/2c7j5a5r';
global.img5 = 'https://tinyurl.com/2c7j5a5r';
global.img6 = 'https://tinyurl.com/2c7j5a5r';
global.img7 = 'https://tinyurl.com/2c7j5a5r';
global.img8 = 'https://tinyurl.com/2c7j5a5r';
global.img9 = 'https://tinyurl.com/2c7j5a5r';
global.img10 = 'https://tinyurl.com/2c7j5a5r';
global.subbot = 'https://i.ibb.co/Tx6WbkXr/IMG-3422.jpg'
global.randomImage = pickRandom([img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]);




global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = 'https://i.ibb.co/Tx6WbkXr/IMG-3422.jpg'
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.verificar = fs.readFileSync('./media/menu2.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com/BryantPPT/VirusBot-MD.git'
global.yt = 'https://www.youtube.com/'
global.tiktok = 'https://www.tiktok.com/@virs.vsp'
global.fb = 'https://www.facebook.com/'
global.faceb = 'https://www.facebook.com/'
global.paypal = 'https://www.paypal.me/'

global.host = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV';
global.nna = 'https://whatsapp.com/channel/0029Vb1faMi6xCSVWEElsQ38';
global.nn = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nn2 = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nn3 = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nn4 = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nn5 = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nn6 = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nn7 = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nn8 = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.multi = 'https://chat.whatsapp.com/6pW7hubXuxoKdbwJGX9CrV'
global.nna2 = 'https://whatsapp.com/channel/0029Vb1faMi6xCSVWEElsQ38'
global.n2 = 'https://whatsapp.com/channel/0029Vb1faMi6xCSVWEElsQ38'
//---------[ INFO ]--------- 
global.info = {
    wait: '*_■■□□□40%_*',
    waitt: '*_■■■□□60%_*',
    waittt: '*_■■■■□80%_*',
    waitttt: '*_■■■■□90%_*',
    waittttt: '*_■■■■■100%_*',
    result: `${lenguaje['exito']()}`,
    admin: `${lenguaje['admin']()}`,
    botAdmin: `${lenguaje['botAdmin']()}`,
    owner: `${lenguaje['propietario']()}`,
    premium: `${lenguaje['prem']()}`,
    group: `${lenguaje['group']()}`,
    private: `${lenguaje['private']()}`,
    bot: `${lenguaje['bot']()}`,
    error: `${lenguaje['error']()}`,
    advertencia: `${lenguaje['advertencia']()}`,
    registra: `${lenguaje['registra']()}`,
    limit: `${lenguaje['limit']()}`,
    AntiNsfw: `${lenguaje['AntiNsfw']()}`,
    endLimit: `${lenguaje['endLimit']()}`,
}
global.rwait = '⏳'
global.dmoji = '😅'
global.done = '✔️'
global.error = '⚠️'
global.xmoji = '😈'

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 30 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '5' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    const fileName = path.basename(file)
    console.log(chalk.greenBright.bold(`Update '${fileName}'.`))
    delete require.cache[file]
    require(file)
})
