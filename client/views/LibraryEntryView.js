// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  className: 'song media',

  template: _.template('<div class="object artwork"><img src="<%= artwork_url %>"></div><div class="body"><div class="title"><%= title %></div><div class="artist"><%= artist %></div>'),

  events: {
    'click': function() {
      // queue clicked songs
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
