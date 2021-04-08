const { createLogger, format, transports } = require('winston');
const { combine, colorize, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`);

module.exports = createLogger({
  format: combine(
    colorize(),
    timestamp(),
    myFormat,
  ),
  transports: [new transports.Console()],
});
