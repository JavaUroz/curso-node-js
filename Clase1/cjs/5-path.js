const path = require('path')
console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename('/tmp/javu-secret-files/passwords.txt')
console.log(base)

const extension = path.extname('image.jpg')
console.log(extension)

const fileName = path.basename('/tmp/javu-secret-files/passwords.txt', '.txt')
console.log(fileName)
