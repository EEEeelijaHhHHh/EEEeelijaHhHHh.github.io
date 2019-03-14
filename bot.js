const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'robotdolboeb1448',
    password: 'xhib4gf3yluiblznw1gavoudqk5kbt'
  },
  channels: [
  'Hyomushka'
  ]
};

const target = 'Hyomushka';

// Create a client with our options
const client = new tmi.client(opts);

// Connect to Twitch:
client.connect();

// Bot connected
client.on("connected", (address, port) => {
  console.log(`* Connected to ${address}:${port}`);

  client.say(target, 'Залетел на подрубочку PEPEGA');
});

// User join
client.on("join", (channel, username, self) => {
  console.log(`Bot greets with >>> ${username}`);

  client.say(target, `Я ждал тебя, ${username} KappaPride`);
});

// User left
client.on("part", (channel, username, self) => {
  console.log(`* ${username} has left.`);
  if (username === 'MisterCart') return;
  client.say(target, `Голубок ${username} сбежал со стрима BabyRage`);
});

// Handle chat
client.on("message", (channel, userstate, message, self) => {
  // Don't listen to my own messages..
  if (self) return;

  // Remove whitespace from chat message
  const commandName = message.trim();

  console.log(`* ${commandName}`);

  if (userstate.username === 'moobot') {
    client.say(target, 'Moobot, ПОШЕЛ В ПИЗДУ! ТЕПЕРЬ Я ЗДЕСЬ БОТ! MrDestructoid');
  }

  switch (commandName) {
    case 'боты':
      client.say(target, 'MrDestructoid MrDestructoid MrDestructoid');
      client.say(target, '+ в чат ');
      client.say(target, 'MrDestructoid MrDestructoid MrDestructoid');
    break;
    case 'rihard':
      client.say(target, 'WHY');
      client.say(target, 'ARE');
      client.say(target, 'YOU');
      client.say(target, 'FLAIMING?');
    break;
    case 'peepoclown':
      client.say(target, 'PEEPO');
      client.say(target, 'CLOWN');
  }
});