const playModule = require('./play.js');
const { VoiceConnectionStatus } = require('@discordjs/voice');
module.exports = {
  name: 'resufefffffffffffffffffffgdfgdfbnvcbme',
  description: 'Resume the paused music playback',
  execute: (message, args) => {
    const currentConnection = playModule.getCurrentConnection();
    if (currentConnection && currentConnection.state.status === VoiceConnectionStatus.Ready) {
      playModule.resume();
    } else {
      message.reply('❌ The bot is not currently playing any music.');
    }
  },
};
