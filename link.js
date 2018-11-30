const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '!!';

client.on('ready', () => {
   client.user.setGame("!!Lhelp");
}); 


client.on('message', msg => {
  if (msg.content === '!!Lhelp') {
    msg.reply('لقد تم إرسال الأوامر في الخاص :envelope_with_arrow: اذا لم تصلك رساله قم بإلغاء خظر الرسائل وجرب مره اخري');
  }
});
//--------------------------------
client.on('message', msg => {
  if (msg.content === '!!help') {
    msg.author.send(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
                        
رابط -----> رابط مؤقت                      
link ----> limte invite
رابط ابدى -----> رابط غير مؤقت
invite unlimte ----- > unlimte invite
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●  
    
    `);
  }
});

client.on('message', msg => {
  if (msg.content === 'رابط ابدى') {
    msg.reply('Check Your DM :envelope_with_arrow:');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'رابط ابدى') {
  msg.author.send('https://discord.gg/6frKqQa')
  }
});

client.on('message', msg => {
  if (msg.content === 'invite unlimte') {
    msg.reply('Check Your DM :envelope_with_arrow:');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'invite unlimte') {
  msg.author.send('https://discord.gg/6frKqQa')
  }
});

client.on('message', message => {
    if (message.content.startsWith("link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}] the invite
---------------------
-the invite is only 100 uses
---------------------
-the invite only 24 hours
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.login(process.env.BOT_TOKEN);
