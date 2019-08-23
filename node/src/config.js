global.SALT_KEY = '123456789-abc';
global.EMAIL_TMPL = '<strong>{0}</strong>';
var arquivo = require('./wendreo')

module.exports = {
    connectionString: `mongodb+srv://${arquivo}@wendreof-omnob.azure.mongodb.net/test`,
    sendgridKey: 'TDB',
    containerConnectionString: 'TDB',
}