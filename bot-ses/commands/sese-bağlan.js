const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
const ses = "https://cdn.glitch.global/05ce598f-66dd-4745-bc4c-7f68111418fd/welcome-female-sci-fi-voice.mp3?v=1684527523946"
const { joinVoiceChannel, createAudioPlayer, createAudioResource} = require('@discordjs/voice');
exports.run = async (client, message, args) => {
let sesli = db.fetch(`sesli_${message.guild.id}`)
if (!sesli) return message.reply("Sesli Kanali Ayarlamamissin!")
let channel = sesli
setInterval(() => {
const connection = joinVoiceChannel({
   channelId: channel,
   guildId: message.guild.id,
   adapterCreator: message.guild.voiceAdapterCreator,
   selfDeaf: false
})

        const player = createAudioPlayer();
    const resource = createAudioResource(ses)

    player.play(resource);
    connection.subscribe(player);
}, 15000);
    message.reply("Bağlandım")
    
};
exports.conf = {
  aliases: []
};

exports.help = {
  name:"sese-bağlan"
};
