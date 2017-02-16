// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

    tagName: 'div',

    className: 'song',

    template: _.template('<div class="song-title"><%= title %></div><div class="song-artist"><%= artist %></div>'),

    events: {
      'click': function() {
        // dequeue clicked songs
        this.model.dequeue();
      }
    },

    render: function() {
      return this.$el.html(this.template(this.model.attributes));
    }

});
