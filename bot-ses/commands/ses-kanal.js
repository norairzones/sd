const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let sesli = args[0]
if (!sesli) return message.reply("1114512859041378335")
message.reply("Başarıyla veritabanına ses kanal idsini kaydettim.")
db.set(`sesli_${message.guild.id}`, sesli)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "sesli-kanal"
};
