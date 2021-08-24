/**
 * nuxt.js记录访问日志
 * @type {winston}
 */

// Log Middleware
const winston = require('winston')
const Syslog = require('winston-syslog').Syslog

// winston format
const { combine, printf } = winston.format
const sysLogFormat = printf(({ message }) => message)

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: combine(sysLogFormat),
  transports: [
    new Syslog({
      host: '192.168.7.103',
      port: 12301,
      localhost: require('os')
        .hostname()
        .toLowerCase(),
      facility: 'user',
      app_name: 'nginx'
    })
  ]
})

module.exports = (req, res, next) => {
  // timestamp
  const timestamp = new Date()
  const status = res.statusCode
  const host = req.headers.host
  const request = req.originalUrl
  const httpReferrer = req.ctx.request.header.referer || ''
  const userAgent = req.headers['user-agent']
  const xForwardedFor = req.headers['x-forwarded-for'] || ''
  const remoteAddr = req.connection.remoteAddress

  logger.info(
    `{"remote_addr": "${remoteAddr}", "timestamp": "${timestamp}", "status": ${status}, "request": "${req.method} ${request} HTTP/${req.httpVersion}", ` +
      `"host": "${host}", "http_version": "HTTP/${req.httpVersion}", "request_method": "${req.method}", "http_referrer": "${httpReferrer}", ` +
      `"http_x_forwarded_for": "${xForwardedFor}", "http_user_agent": "${userAgent}"}`
  )

  next()
}
