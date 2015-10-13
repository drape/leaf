exports.index = function(req, res) {
	res.render('default', {
		title: 'Leaf',
		header1: 'Welcome, welcome to Project Leaf'
	});
}
