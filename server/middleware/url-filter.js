/**
 * 如果URL中p7参数有问题导致访问出问题，需要把p7参数处理后再重新请求
 */

// Url Filter Middleware
module.exports = (req, res, next) => {
  try {
    decodeURI(req.url)
    next()
  } catch (e) {
    const match = req.url.match('p7=([^&]*)')

    if (match.length > 1) {
      const url = req.url.replace(
        /(p7=)([^&]*)/gi,
        `p7=${match[1].replace(/%/g, '')}`
      )

      res.writeHead(302, { Location: `/zykfc${url}` })
      res.end()
    }
  }
}
