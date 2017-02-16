// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  playing: false,
  // Triggering an event here will also trigger the event on the collection
  play: function() {
    this.set('playing', true);
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function() {
    this.set('playing', false);
    this.trigger('ended', this);
  }

});
