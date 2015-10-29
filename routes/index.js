exports.index = function(req, res) {
	res.render('default', {
		title: 'Dennis Malmin',
		header1: 'Velkommen!'
	});
}
