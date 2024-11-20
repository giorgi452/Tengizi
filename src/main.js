import { REST, Client, GatewayIntentBits, Routes, EmbedBuilder } from 'discord.js';
import jerkOff from './commands/jerkoff.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

const TOKEN = "MTMwODA4MzI2NTc5NzYxOTgzNA.G6MrNi._Uyfg0nf4gV8PmE_Gddix-3WH9oTJuLvnkaLmw";
const CLIENT_ID = "1308083265797619834";

const commands = [
  {
    name: 'ping',
    description: 'Mopinge Tengizi da Mogpongavs'
  },
  {
    name: 'tengizirasshvreba',
    description: 'Ras Shvreba Tengizi?'
  },
  {
    name: "info",
    description: "Vin aris tengizi"
  }
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(CLIENT_ID), // Use `Routes.applicationCommands(clientId)` for global
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, user } = interaction;

  if (commandName === 'ping') {
    await interaction.reply(`Pong <@${user.id}>`);
  }
  else if (commandName === "tengizirasshvreba") {
    const tengiziAndzrevs = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle('რას შვრება თენგიზი?')
      .setDescription('და აბაზანაში \n და აბაზანაში \n თენგიზი ანძრევს \n თენგიზი ჩუკნის')
      .setThumbnail('https://img.freepik.com/premium-photo/man-hand-with-fresh-sweet-corn-isolated-white-background_167862-1073.jpg?w=360') // Thumbnail image
    await interaction.reply({ embeds: [tengiziAndzrevs] });
  } else if (commandName === "info") {
    const chukenologiTengizi = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle('ჩუკენოლოგი თენგიზი')
      .setDescription('გამარჯობა, მე ვარ ჩუკენოლოგი თენგიზი. მე შემიძლია დაგეხმარო/გიხმარო (არავინ არ მაძლევს 😭) ხო კიდე ჩამოკვრა შემიძლია შეგიძლია ჩამომაფანდურებინო თუ !chamokvra-ს დაწერ')
      .setThumbnail('https://my.gtu.ge/user/uploads/photo/GTU-2019-73cc58f47d0e27053f60175e05608666.jpg') // Thumbnail image
    await interaction.reply({ embeds: [chukenologiTengizi] });
  }
});

jerkOff(client);

client.login(TOKEN);
