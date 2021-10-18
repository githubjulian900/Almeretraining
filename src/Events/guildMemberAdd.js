/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event('guildMemberAdd', (client, member) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "welkom"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("Member Joint")
		.setColor("Green")
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.setTimestamp()
		.addFields({

name: "Welkom in:",
value: "Amstelveen V1",
inline: true

		}),


	channel.send({ embeds: [embed] });
});
