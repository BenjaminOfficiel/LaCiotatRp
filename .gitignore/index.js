const Discord = require("discord.js");
const Bot = new Discord.Client();
const ytdl = require("ytdl-core")
var prefix = "/";




Bot.on('ready', function() {
    console.log("Bot reveille")
	Bot.on('ready', function() {
		console.log("Bot reveille")
		Bot.user.setActivity("La Ciotat : Role Play ", {type: 'WATCHING'})
	}); 
})




Bot.login("NzQ4NDkwMjgyNDk1OTAxNzU4.X0eL5Q.__Q6MdcBGDYfq0MQiZdhzVwfAXs");

Bot.on('message', message => {
    if (message.content.startsWith( prefix + 'help')) {
     message.delete()
     
 
        const monembed = new Discord.MessageEmbed()
	   .setDescription("_**・𝐿𝑎𝐶𝑖𝑜𝑡𝑎𝑡 𝑅𝑃 ・**_")
	   .setColor("RANDOM")
	   .addField("__𝐹𝑢𝑛__", "▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅")
	   .addField("__𝑀𝑢𝑠𝑖𝑐__", "▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅")
	   .addField("__𝑀𝑜𝑑𝑒́𝑟𝑎𝑡𝑖𝑜𝑛 __", "▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅")
	   .setImage('https://cdn.discordapp.com/attachments/608711483265908761/740688658893373511/image0.gif')
	   .addField("__𝑃𝑟𝑜𝑡𝑒𝑐𝑡𝑖𝑜𝑛__", "▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅")
	   .setFooter('𝐷𝑒𝑣 𝐵𝑦 | 𝑅𝑎𝑦𝑎𝑛 | 𝐵𝑒𝑛𝑗𝑎𝑚𝑎𝑖𝑛 ', 'https://www.onlygraphicdesign.com/wp-content/uploads/2017/08/gif-collection-tomas-brundson.gif');
	   message.channel.send(monembed);
    }

    if (message.content.startsWith( prefix + 'info')) {
        message.delete()

        const monembed = new Discord.MessageEmbed()
			  .setColor("RANDOM")
			  .setDescription("__**𝑅𝑎𝑦𝑎𝑛 | 𝐵𝑒𝑛𝑗𝑎𝑚𝑖𝑛 𝑀𝑒𝑠 𝐶𝑟𝑒́𝑎𝑡𝑒𝑢𝑟𝑠**__")
			  .setFooter('')
			  message.channel.send(monembed);
    }
  
    if(message.content.startsWith(prefix + "lc")) {
		message.delete()
	  
		const monembed = new Discord.MessageEmbed()
		  .setColor("#00fff0")
		  .setDescription(":zap: __**𝐿𝑎𝐶𝑖𝑜𝑡𝑎𝑡:𝑅𝑜𝑙𝑒𝑃𝑙𝑎𝑦 𝐵𝑒𝑠𝑡 𝑆𝑒𝑟𝑣𝑒𝑢𝑟 **__ :zap: ")
		  .setImage("https://cdn.discordapp.com/attachments/736955309112688670/746672970356883476/unknown.png")
		  .setTimestamp()
		  .setThumbnail('https://cdn.discordapp.com/attachments/654375848710766622/742430842583908463/RobloxScreenShot20200810_191401484.png')
		  .setFooter("𝐷𝑒𝑣 𝐵𝑦 𝐷𝑖𝑚 / 𝐽𝑢𝑙𝑖𝑒𝑛 ","https://cdn.discordapp.com/emojis/630520950521069587.png?v=1")
		  message.channel.send(monembed);
	  } 
  

     if (message.content.startsWith( prefix + 'clear')) {
   
            message.delete();
                if(message.member.hasPermission("SPEAK")){
        
                    let args = message.content.trim().split(/ +/g);
        
                    if(args[1]){
                        if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){
        
                            message.channel.bulkDelete(args[1])
                           
                            
                        }
                        else{
                            message.channel.send(`Vous devez indiquer une valeur entre 1 et 99 !`)
                        }
                        
                    }
                    else{
                        message.channel.send(`Veuillez indiquer une valeur au dessus de 0 !`)
                    }
        
                
        
                
                }    
        
            }
   
    }

		
 );

 Bot.on('message', message => {
    if (message.content.startsWith( prefix +"play")) {
		if(message.member.voice.channel){
			message.member.voice.channel.join().then(connection => {
                message.reply("_**Music lancé Profite bien sur Notre Serveur : LaCiotat:RolePlay .  **_")
            	let args = message.content.split(" ");
				
				let dispatcher = connection.play(ytdl(args[1], {qualtiy: "highestaudio"}));

				dispatcher.on("finish", () =>{
                    dispatcher.destroy();
                    connection.disconnect();
                });

                dispatcher.on("error", err =>{
                    console.log("_**erreur de dispatcher : **_" + err)
                })
			}).catch(err => {
				message.reply("_**Met un lien bg pour ecouté de la music , Rayan et Benjamain dev encore sur moi**_")
			})

		}
		else {
			message.reply("_**Vous etes pas connecté en vocal .**_")
        }

        }})
       
