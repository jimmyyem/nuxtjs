
class AxiosError extends Error {
  constructor(message = '您的网络不太好, 请刷新页面重试吧', code = 10010) {
    super(message)
    this.code = code
    this.name = 'AxiosError'
  }
}

export default ({ $axios, query }) => {
  // Add default params
  const params = {}

  // Add default params
  $axios.interceptors.request.use((request) => {
    // params
    if (JSON.stringify(params) !== '{}') {
      request.params = _.extend(request.params, params)
    }

    // post format data
    if (request.method === 'post') {
      request.data = qs.stringify(request.data)
    }
    return request
  })

  // The error code to handle
  $axios.interceptors.response.use(
      (response) => {
        const res = response.data
        if (_.isNumber(res.code) && res.code !== 0) {
          return Promise.reject(
              new AxiosError(res.msg, res.code) // return code msg
          )
        }

        return response
      },
      () => Promise.reject(new AxiosError())
  )

  // Reset get
  $axios.get = (url, params = {}) => {
    return $axios({ method: 'get', url, params })
  }
}
