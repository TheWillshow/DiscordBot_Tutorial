const commando = require("discord.js-commando");
const discord = require("discord.js");

class InfoAboutMeCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "info",
      group: "simple",
      memberName: "info",
      description: "Learn a little more about me!"
    });
  }

  async run(message, args) {
    var myInfo = new discord.RichEmbed()
      .setTitle("All about MEEEEE!!")
      .addField("About Me", "Hello my name is Will.")
      .setColor(0xff0000)
      .setThumbnail(message.author.avatarURL)
      .setURL("http://google.com")
      .setFooter("Thanks for reading. I hope you learn a little about me :)");
    message.channel.sendEmbed(myInfo);
  }
}

module.exports = InfoAboutMeCommand;
