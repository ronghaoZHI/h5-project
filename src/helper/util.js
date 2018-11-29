import AWS from 'aws-sdk'

export const config = {
  urlPrefix: 'https://ss.bscstorage.com/h5-project/',
  key: {
    accessKeyId: '',
    secretAccessKey: ''
  },
  awsHost: '',
  region: '',
  s3ForcePathStyle: true
}

export const configAws = ({
  key,
  timeout,
  host = config.awsHost,
  s3ForcePathStyle,
  region = config.region
}) => {
  AWS.config.update({
    accessKeyId: key.accessKeyId || '',
    secretAccessKey: key.secretAccessKey || ''
  })
  AWS.config.region = region
  AWS.config.httpOptions = {
    timeout: timeout
  }
  AWS.config.endpoint = host
  AWS.config.s3ForcePathStyle = s3ForcePathStyle
}

export const getS3 = async ({
  key,
  timeout,
  host,
  region,
  s3ForcePathStyle
} = {}) => {
  configAws({
    key,
    timeout,
    host,
    s3ForcePathStyle,
    region
  })
  return new AWS.S3()
}

export const handler = async (method, key, timeout = 10000, params = '', host, region, s3ForcePathStyle = config.s3ForcePathStyle) => {
  try {
    const s3 = await getS3({
      key,
      timeout,
      host,
      region,
      s3ForcePathStyle
    })
    return new Promise((resolve, reject) =>
      s3[method](params, (error, data) => {
        return error ? reject(error) : resolve(data)
      })
    )
  } catch (error) {
    return Promise.reject(error)
  }
}
