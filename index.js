exports.handler = async function http(req) {

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: JSON.stringify({ image: `${process.env.BEGIN_STATIC_ORIGIN}/1.jpeg`})
  }
}
