global.SALT_KEY = '123456789-abc';
global.EMAIL_TMPL = 'Olá <strong>{0}</strong>!, seja bem vindo ao Node Store do @wendreof';

var arquivo = require('./wendreo')

module.exports = {
    connectionString: `mongodb+srv://${arquivo}@wendreof-omnob.azure.mongodb.net/test`,
    sendgridKey: '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',
    containerConnectionString: 'TDB',
}