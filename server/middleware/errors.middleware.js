function ErrorsMiddleware(exception, request, response, next) {
  console.log('logging exception : ', exception)
  const { status } = exception
  const { message } = exception
  const errors = exception.errors || null

  response.status(status).send({
    status,
    message,
    errors,
  })
}

module.exports = ErrorsMiddleware
