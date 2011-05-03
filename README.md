	  ___ ___ .__ .________
	 /   |   \|__||   ____/
	/    ~    \  ||____  \ 
	\    Y    /  |/       \
	 \___|_  /|__/______  /
		   \/           \/ 
===

A sane API for draft W3C device APIs. A higher level HTML5!

Design by committee sometimes results in suboptimal creations. The hi5
library wraps browser device APIs to be terse and consistent with the
social conventions common in JavaScript libraries.  

Examples
---

Cleaner Geolocation

	// subscribe to navigator.geolocation.watchPosition
	hi5.on('location', function(e) {
		alert(e);
	})

	// subscribe once...
	hi5.location(function(e) {
	
	})

	// subscribe once w/ options
	hi5.location({enableHighAccuracy:true}, function(e) {
	
	})

Roadmap
---

- devicemotion
- deviceorientation
- audio
- file
