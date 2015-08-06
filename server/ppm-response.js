
var ppmResponseWrapper = function(response) {
	var ppmResponse = response;

	return function(err, results) {
		if(err) {
			console.log('Error response: ' + JSON.stringify(err));
			ppmResponse.status(400).send('{"error": ' + JSON.stringify(err) + '}');	
		} else {
			ppmResponse.send(JSON.stringify(results));
		}	
	}
}


module.exports = ppmResponseWrapper;
