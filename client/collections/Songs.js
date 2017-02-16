// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // GET song data from Parse when initialized
    $.ajax({
      url: config.server,
      type: 'GET',
      success: function(data) {
        this.set(data.results);
      }.bind(this),
      error: function(data){
        console.error('Failed to Load Song Data:');
      }
    });
  }

});
