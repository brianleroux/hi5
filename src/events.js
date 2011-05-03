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