global.SALT_KEY = '123456789-abc';
global.EMAIL_TMPL = 'Olá <strong>{0}</strong>!, seja bem vindo ao Node Store do @wendreof';

var arquivo = require('./wendreo')

module.exports = {
    connectionString: `mongodb+srv://${arquivo}@wendreof-omnob.azure.mongodb.net/test`,
    sendgridKey: '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',
    containerConnectionString: 'DefaultEndpointsProtocol=https;AccountName=cursonodebalta;AccountKey=WRoXOcZW8MTiEf6HFmA72iP2x4V4/QsU2fScDQWg01asZ2GBEz6Des13HXB+D/UJiIB+MsQJUqduO0Rk0m+qog==;EndpointSuffix=core.windows.net',
}