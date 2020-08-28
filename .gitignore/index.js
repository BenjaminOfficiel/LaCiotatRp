const Discord = require("discord.js");
const Bot = new Discord.Client();
const ytdl = require("ytdl-core")
const bdd = require('./bdd.json');
const fs = require("fs");
var prefix = "/";




Bot.on("ready", async () =>{
    console.log("Le Bot est allumé")
    console.log("Toutes Les Commandes Sont Fonctionnel")
    Bot.user.setStatus("online");
    setTimeout(() => {
        Bot.user.setActivity("・𝐿𝑎𝐶𝑖𝑜𝑡𝑎𝑡 𝑅𝑃 ・", {type: 'PLAYING'} );
    }, 100)
    
});




Bot.login(process.env.TOKEN);

Bot.on('message', message => {
    if (message.content.startsWith( prefix + 'help')) {
     message.delete()
     
 
        const monembed = new Discord.MessageEmbed()
	   .setTitle("▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅")
	   .setColor("RANDOM")
       .setAuthor("𝑀𝑢𝑠𝑖𝑐")
       .addField(" Pour mètre de la music : /play {lien Obligatoire sinon sa marche pas on bosse dessus hm}", ("▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅"))
       .addField("Pour dégagé le bot du vocal : /leave", ("▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅"))
       .addField(" Il y auras plusieurs commandes par la suite ...", ("▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅"))
       .setDescription("Voici notre bot discord : ")
	   .setImage('https://cdn.discordapp.com/attachments/742035953182441473/748860425109504010/Capture_decran_2020-08-28_a_13.03.39.png')
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
  
    if(message.content.startsWith( prefix+ 'warn')){
        message.delete() 
        if(message.member.hasPermission('KICK_MEMBERS')){
          
            if(!message.mentions.users.first())return;
            utilisateur = message.mentions.users.first().id

            if(bdd["warn"][utilisateur] == 6){
               
                delete bdd["warn"][utilisateur]
                message.guild.members.kick(utilisateur)
             }
            else{
                if(!bdd["warn"][utilisateur]){
                    bdd["warn"][utilisateur] = 1
                    Savebdd();
                    message.channel.send("L'utilisateur a obtenu(e) " + bdd["warn"][utilisateur] + " Avertissement !");
                }
                else{
                    bdd["warn"][utilisateur]++
                    Savebdd();
                    message.channel.send("L'utilisateur a obtenu(e) " + bdd["warn"][utilisateur] + " Avertissement !");
                }
            }
        }
    }

    if(message.content.startsWith( prefix + 'Warnings')){
        message.delete()
        if(message.member.hasPermission('KICK_MEMBERS')){
          
            if(!message.mentions.users.first())return;
            utilisateur = message.mentions.users.first().id

            if(bdd["warn"][utilisateur] == 6){
               
                delete bdd["warn"][utilisateur]
                message.guild.members.kick(utilisateur)
             }
            else{
                if(!bdd["warn"][utilisateur]){
                    bdd["warn"][utilisateur] + 0
                    Savebdd();
                    message.channel.send("L'utilisateur a " + bdd["warn"][utilisateur] + " Warn !");
                }
                else{
                    bdd["warn"][utilisateur]==
                    Savebdd();
                    message.channel.send("L'utilisateur a " + bdd["warn"][utilisateur] + " Warn !");
                }
            }
        }
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
                        if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 999){
        
                            message.channel.bulkDelete(args[1])
                           
                            
                        }
                        else{
                            message.channel.send(`Vous devez indiquer une valeur entre 1 et 999 !`)
                        }
                        
                    }
                    else{
                        message.channel.send(`Veuillez indiquer une valeur au dessus de 0 !`)
                    }
        
                
        
                
                }    
        
            }
   
    }

		
 );



 function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
            

    
};


 Bot.on('message', message => {
    if (message.content.startsWith( prefix +"play")) {
        message.delete()
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

        }
    
        if (message.content.startsWith( prefix + 'leave')) {
            message.delete()
            if(message.member.voice.channel){
                message.member.voice.channel.leave()
                message.reply("_**Le Bot vient de se déconnecter**_")

                
            }
        }

        if (message.content.startsWith( prefix + 'stop')) {
            message.delete()
            if(message.member.voice.channel){
                message.member.voice.channel.leave()
                message.reply("_**La Musique vient de s'arrêter !**_")
            }
        }
    
    })
       
