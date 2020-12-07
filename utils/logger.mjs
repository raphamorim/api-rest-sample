import winston from 'winston'

const myFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.colorize(),
  winston.format.printf(
    (mess) => `[${mess.timestamp}] ${mess.level}: ${mess.message}`
  )
)

export const error = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: myFormat,
      level: 'error',
      colorize: true,
    }),
  ],
})

export const warn = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: myFormat,
      level: 'warn',
      colorize: true,
    }),
  ],
})

export const info = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: myFormat,
      level: 'info',
      colorize: true,
    }),
    new winston.transports.File({
      filename: 'noframenet.log',
      level: 'debug',
      colorize: true,
    }),
  ],
})

export const verbose = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: myFormat,
      level: 'verbose',
      colorize: true,
    }),
    new winston.transports.File({
      filename: 'noframenet.log',
      level: 'verbose',
      colorize: true,
    }),
  ],
})

export const debug = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: myFormat,
      level: 'debug',
      colorize: true,
    }),
    new winston.transports.File({
      filename: 'noframenet.log',
      level: 'silly',
      colorize: true,
    }),
  ],
})

export default {
  error: (log) => error.error(log),
  warn: (log) => warn.warn(log),
  verbose: (log) => verbose.verbose(log),
  info: (log) => info.info(log),
  debug: (log) => debug.debug(log),
}
