const winston = require('winston');
const { SeqTransport } = require('@datalust/winston-seq');

const logger = winston.createLogger({
transports: [
    new SeqTransport({
    serverUrl: "http://116.254.117.132:5341/",
    apiKey: "QDtZ47sSJ6XS4m245xY9",
    onError: (e => { console.error(e) }),
    })
]
});

exports.log = function(pnama = '',papi = '', prequest = '', presponse = '',pheader = ''){
    logger.info("Project {nama}, Api {api}, Request {request}, Response {response}, Header {header}",{
        nama: pnama, 
        api: papi,
        request: prequest,
        response: presponse,
        header: pheader
    });
}
