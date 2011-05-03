// add an extenion to "on"
hi5 = {};

hi5.on = function(event, handler, opts) {
    switch(event) {
        case 'location':
            navigator.geolocation.watchPosition(function(position) {
                    handler.call(window, {status:'success', position:position})
                }, function(e) {
                    handler.call(window, {status:'error', status:e.status, message:e.message})
                }, opts);
            break;
        case 'motion':
            break;
        case 'orientation':
            break;
        case 'direction':
            break;
    }
};

hi5.location = function() {
	var args = [].slice.call(arguments)
	,   opts = typeof args[0] === 'function' ? {} : args[0]
	,   hdlr = typeof args[0] === 'function' ? args[0] : args[1]
	navigator.geolocation.getCurrentPosition(
		function(position) {
			hdlr.call(window, {status:'success', position:position})
		}, function(e) {
			hdlr.call(window, {status:'error', status:e.status, message:e.message})
		}, opts);
}

