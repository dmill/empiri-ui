class Ajax {
  request(options) {
    const xhr = new XMLHttpRequest()
    xhr.open(options.type, encodeURI(options.url))
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        if (xhr.responseText.length) {
          if (!options.success) {
            return
          }
          options.success(JSON.parse(xhr.responseText))
        } else {
          if (!options.success) {
            return
          }
          options.success(xhr.responseText)
        }
      }
      else {
        if (options.error) {
          options.error(xhr)
        } else {
          console.error('Ajax request failed.', xhr)
        }
      }
    }
    if (!options.file) {
      xhr.setRequestHeader('Content-Type', 'application/json')
    }
    this.beforeSend(xhr)
    xhr.send(options.data)
  }
}

export default new Ajax()
