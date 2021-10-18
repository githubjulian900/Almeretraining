/** @format */

const Command = require("../Structures/Command")

const Discord = require("discord.js");

module.exports = new Command( (client, message) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "training"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("training")
		.setColor("Green")
		.setAuthor(member.user.tag)
		.setTimestamp()
		.addFields({

name: "Training",
value: `In de maak mien jongen`,
inline: true

		}),


	channel.send({ embeds: [embed] });
});
