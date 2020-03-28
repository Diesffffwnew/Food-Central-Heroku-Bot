const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjkyNDQyMDAwNTQ0MjM1NjYx.Xnzkeg.6a5o9P4L7DKD12Bi1ov1BpejuB0';
bot.login(process.env.BOT_TOKEN);
const PREFIX = 'fc';
bot.on('message', message=>{
let args = message.content.substring(PREFIX.length).split(" ");

switch(args[0]){
    case 'ping':
        message.reply(':ping_pong: Pong!:ping_pong:')
        break;
        case 'help':
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Food Central')
            .setAuthor('DiesRoblox#3660')
            .setDescription('Here are the commands for Food Central')
            .addFields(
                { name: 'Commands:', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'fchelp', value: 'Some value here', inline: true },
                { name: 'fcapply', value: 'Some value here', inline: true },
            )
            .setTimestamp('Last Updated -> 28/3/20')
            .setFooter('Food Central');
        
        message.reply(exampleEmbed);
        break;
        case 'version':
        message.reply('Version 0.0.5')
        break;
        case 'purge':
        if (!args[1]) return message.reply('Please specify how much messages you want to be deleted!')
        message.channel.bulkDelete(args[1]);
        break;
        case 'order':
        if (!args[1]) return message.reply('Please specify what you would like to order! (Max 3 items!)')
        if (args[1]) return message.reply('... Sending order please wait....')
        break;
            case 'prefix':
            message.reply('The server prefix is... ' + PREFIX)      
            break;   
        case 'apply':
        message.reply('This command is coming soon...')
        break;
        case 'appeal':
            message.reply('This is coming soon!') 
            break;
            case 'blacklist':
                message.reply('Beep Boop Beeep Beep')
            break;











    }})
