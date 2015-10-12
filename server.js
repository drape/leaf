var koa = require('koa');
var path = require('path');
var render = require('koa-ejs');

var app = koa();

var filters = {
  format: function (time) {
    return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
  }
};

render(app, {
	root: path.join(__dirname, 'view'),
	layout: 'template',
	viewExt: 'html',
	cache: false,
	debut: true,
	filters: filters
});

app.use(function *() {
	yield this.render('user');
});

app.listen(3000);
console.log('Running on port 3000');
