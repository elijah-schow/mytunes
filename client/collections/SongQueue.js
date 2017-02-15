// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {

    // when as song is added
    this.on('add', function () {
      // play it only if it is the only song in the queue
      if( this.length === 1 ) {
        this.playFirst();
      }
      // do nothing if it is not the only song in the queue
    }, this);

    // when a song ends
    this.on('ended', function() {
      // remove the song from the queue
      this.remove(this.at(0));
      // play the first song in the queue if there are any songs left
      if(this.length > 0) {
        this.playFirst();
      }
      // do nothing if there are no songs left in the queue
    });

    // when as song is dequeued
    this.on('dequeue', function() {
      // remove the song
      this.remove(this.at(0));
    });

  },
  playFirst : function (event) {
    // play the first song in the queue
    this.at(0).play();
  }
});
