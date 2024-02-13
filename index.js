const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true }); //Cria QR code
});

client.on('ready', () => {
    console.log('Client is ready!'); // Somente avisa que esta funcinando
});

client.on('message', async (message) => {
	if (message.body === '!ping') {
		await message.reply('pong');
	}
}); //Observando as mensagens do WPP
// Se eu escrever "Ping", ele responderar "Pong"


client.initialize();
