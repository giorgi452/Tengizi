export default function jerkOff(client) {
  let num = 0;

  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content === '!chamokvra') {
      const sentMessage = await message.channel.send(`თენგიზმა ჩამოკრა ${num}\n ჩამოაკვრევინე კიდევ`);
      await sentMessage.react('➕'); // Bot reacts to the message with a thumbs-up
    }
  });

  client.on('messageReactionAdd', async (reaction, user) => {
    // Ensure the bot is aware of the message
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (error) {
        return;
      }
    }
    if (reaction.emoji.name === '➕') {
      num++
      if (num >= 15) {
        await reaction.message.edit('თენგიზი გულის შეტევამ იმსხვერპლა (ნძრევა ზედმეტი მოუვიდა)');
        num = 0;
        return;
      }
      await reaction.message.edit(`თენგიზმა ჩამოკრა ${num}\n ჩამოაკვრევინე კიდევ`);
    }
  });
}
