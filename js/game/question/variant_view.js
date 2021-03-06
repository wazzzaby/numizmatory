Numizmatory.VariantView = Backbone.Marionette.ItemView.extend({
  tagName: "span",
  template: _.template("<button class='btn btn-info btn-large'><%= name %></button>"),
  events: {
    "click button": "submitAnswer"
  },
  submitAnswer: function() {
    this.model.trigger("variant:submit", { answer_id: this.model.id });
  }
});

Numizmatory.VariantsView = Backbone.Marionette.CollectionView.extend({
  itemView: Numizmatory.VariantView
});
