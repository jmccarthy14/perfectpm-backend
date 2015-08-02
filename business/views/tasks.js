
module.exports = function (req, res) {
	console.log('doc id you want is' + req.query.uuid);
    res.send('no tasks!');
};
