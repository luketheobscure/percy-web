import Ember from 'ember';

export default Ember.Component.extend({
  build: null,
  classes: null,

  click: function() {
    this.send('navigateToBuild');
  },
  classNames: [
    'BuildCard',
    'container',
  ],
  classNameBindings: [
    'classes',
  ],
  actions: {
    navigateToBuild: function() {
      this.sendAction('navigateToBuild', this.get('build'));
    },
  },
});
