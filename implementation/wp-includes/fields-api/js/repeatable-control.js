(function() {
  var RepeaterView, TextControlModel, TextControlView;

  TextControlModel = Backbone.Model.extend({
    defaults: function() {
      return {
        type: 'text',
        value: '',
        input_id: "field-general-example_my_1_repeater_field_" + this.cid,
        input_name: "general-example_my_1_repeater_field_" + this.cid
      };
    }
  });

  TextControlView = Backbone.View.extend({
    templateID: 'fields-control-text-content',
    template: function(data) {
      return wp.template(this.templateID)(data);
    },
    render: function() {
      return this.template(this.model.toJSON());
    }
  });

  RepeaterView = Backbone.View.extend({
    el: '.fields-control-repeater',
    events: {
      'click .add-field': 'addField'
    },
    addField: function(event) {
      var newField;
      event.preventDefault();
      newField = new TextControlView({
        model: new TextControlModel
      });
      return this.$el.append("<br/> " + (newField.render()));
    }
  });

  new RepeaterView;

}).call(this);
