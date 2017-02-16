// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

    tagName: 'div',

    className: 'song media',

    template: _.template('<div class="object artwork"><img src="<%= artwork_url %>"></div><div class="body"><div class="title"><%= title %></div><div class="artist"><%= artist %></div>'),

    events: {
      'click': function() {
        // dequeue clicked songs
        this.model.dequeue();
      },
    },

    render: function() {
      if(this.model.get('playing')){
        this.$el.addClass('playing');
      }
      return this.$el.html(this.template(this.model.attributes));
    }

});
