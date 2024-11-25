const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "242064064148";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_21_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDkyLFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc1LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic3dDWW9hYk5iT3FpeE1QNkE0R2w1V1pHOGRzL3dRYnJqV2prb0t5Vm45UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidXpBQS0xMmtTVmlvWW5oMkp1NnpId1wiLFxuICBcInBob25lSWRcIjogXCIyNmExMWU1Mi03YjY5LTQwODAtODM2OS04NzM0YjcyOGE1NmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgODAsXG4gICAgICAxOSxcbiAgICAgIDE1MyxcbiAgICAgIDExOSxcbiAgICAgIDEyNyxcbiAgICAgIDQ1LFxuICAgICAgMTU0LFxuICAgICAgMTE1LFxuICAgICAgNDAsXG4gICAgICAxMDQsXG4gICAgICAyMzQsXG4gICAgICAyMzcsXG4gICAgICAzLFxuICAgICAgMTk2LFxuICAgICAgMjksXG4gICAgICAxMzgsXG4gICAgICA5NyxcbiAgICAgIDg4LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDE1OCxcbiAgICAgIDE2LFxuICAgICAgNCxcbiAgICAgIDEyNCxcbiAgICAgIDEzMSxcbiAgICAgIDI0OSxcbiAgICAgIDEzNCxcbiAgICAgIDU0LFxuICAgICAgMTMxLFxuICAgICAgMjA2LFxuICAgICAgMTY4LFxuICAgICAgMzYsXG4gICAgICAyNTAsXG4gICAgICAxNTUsXG4gICAgICAxMDMsXG4gICAgICAxNTQsXG4gICAgICAyMDAsXG4gICAgICA0OSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUS0ZXWEdOTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQyMDY0MDY0MTQ4OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODk3MjE4NTg4NDY4OTE6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHpjdUxzRUVMSGFqN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3N3NzaEFrYTA3aHJqOG1VSE50OGJGeTEwV3BxUldoWVpuaFI2a2dndFRjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInM3Mm1tV1FIUC9VenA3aml0NHdEQmozNVhYcFVtditwZTZkZHpSV2g2a0l6NklNRXdSNVFQWldwODI0TWlqZThWMzNxU29nOE1TRkl3cytJOHZBK0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNabHlBNmxZUXEzYkNkZFU2VE1LVWY3aXZrV1NJVVpHdTdqRW1iNmI1d2traC9KN3ZPOWFQZndDdWlneHR5bU41VDU5d1J0M2NaZkhXbXdTZUZiMkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MjA2NDA2NDE0ODoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjUwNDg4NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
