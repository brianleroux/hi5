describe("events", function() {
    beforeEach(function() {
    });

    it('should be able to listen for changes to location', function() {
        var position = {coords:{
            latitude: 49,
            longitude: -121,
            accuracy: 1,
            altitude: 100,
            heading: 9,
            speed: 34,
            altitudeAccuracy: 1
        }, timestamp:1234};
        var error = {
            code: 0,
            message: 'failed'
        }
/*
        describe('when a location is not accessible', function() {
            var spy = spyOn(navigator.geolocation, 'watchPosition');
            spy.andCallFake(function(win, fail, params) {
                win.call(window, position);
            });
            var handler = jasmine.createSpy('handler');
            var params = {maxAge:1000, enableHighAccuracy:true, timeout:1000};

            hi5.on('location', handler, params);

            expect(handler).toHaveBeenCalledWith({status:'error'});
        });
*/
        //player.play(song);
        //expect(player.currentlyPlayingSong).toEqual(song);
    });
    
    describe('when a location is successfully accessed', function() {
        if ('should call the handler with a status of success', function() {
            var params = {maxAge:1000, enableHighAccuracy:true, timeout:1000};
            var evt = {status:'success', position:position, params:params};
            var spy = spyOn(navigator.geolocation, 'watchPosition');
            spy.andCallFake(function(win, fail, params) {
                // this is what the native geolocation watchPosition should do
                win.call(window, position);
            });
            var handler = jasmine.createSpy('handler');

            hi5.on('location', handler, params);

            expect(handler).toHaveBeenCalledWith(evt);
        });
    });
    
});
/*
  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });
});
*/