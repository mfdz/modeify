var fs = require('fs')



var View = require('../view')({
  category: 'style-guide',
  template: fs.readFileSync(__dirname + '/template.html'),
  title: 'Style Guide'
})

module.exports = function (ctx, next) {
  ctx.view = new View()
  next()
}
