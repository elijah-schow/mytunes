// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    // render when add or remove events fire from the song queue collection
    this.collection.on('add', this.render, this);
  },

  render: function() {
    // create SongQueueEntryViews for each queued song & render them
    this.collection.forEach(this.renderSong, this);
    return this.$el;
  },

  renderSong: function(song) {
    var songView = new SongQueueEntryView({model: song});
    this.$el.append(songView.render());
  }

});
