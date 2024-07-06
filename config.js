const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94766859177" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94766859177";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94766859177,94766859177";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94766859177";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "946859177,94766859177";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "dFwiOntcImRldGFpbHNcIjpcIkNKMmVvMm9RMjRhcXNBWVlBeUFBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiaTc5aHUxaWVSWlhXRHk0VTNpWjZHbnFHQVFyNkpkUUFVWm1rN2k4ZDJXMD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkhiblNMaFg0SmNlejBQSlpaMkhoZ2VtN1lkbEhhNkpBWVBObnc2Rm5NL3B4RmpIRnZqa1dvTlNBMnA1Nnd1dDNrRk5rY0FXZm5VN0lRaTNRSlJoWkFBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiY1Z6MkhodThrQUJxSU1aeHZMV2FwS2d6MHJjYzcrYThhTXJzeGE5d05JVVM3ZVRUNVAxdmViazN2OWc5VGV2bFFEeEpjVzIraXBSaW05d0xqSXdVQ1E9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjk0NzY2ODU5MTc3OjVAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTE3MTY3MDkzNzI3NDY3OjVAbGlkXCIsXCJuYW1lXCI6XCJOdXdhYS4uLi5cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5NDc2Njg1OTE3Nzo1QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQll1L1lidFlua1dWMWc4dUZONG1laHA2aGdFSytpWFVBRkdacE80dkhkbHRcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExOTY1MDI1LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQU8yUFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8yTy5qc29uIjogIntcImtleURhdGFcIjpcIjJYVHJiVi9GanFRM096QlBNTGE2KzRSZmRCd2t0c0wyaWd3VzBGYlFkRUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIyODc1NDE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPMlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5VHVZRjNrbVhibk5qL3VFTjlLU0xOZm1DYTBlV3llTUlvQ2pSMXBZaWxvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyMjg3NTQyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzJRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiazZiUUpQRHdnTmFIVFZkY2I5emJacGdDZFpBb2FNMjFGL0JDRGNVUG5ERT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjI4NzU0MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTE4NzQ4NDY0MDZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPMlIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpNzZBbHQ3ckJLV1k0S2R1UTBHWWlVT25qTTg2WkZtVUJYVzNSNDhzdVkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyMjg3NTQyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTzJTLmpzb24iOiAie1wia2V5RGF0YVwiOlwidmw0a0tsL01pNFBXRUY2TXg1THZ4TGdVR21QbzZjdzZVVURrM3FlWGw5Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjI4NzU0MjEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTk0OTIwMDc3OVwifSIKfQ== ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
