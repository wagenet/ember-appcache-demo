import Ember from 'ember';

const { computed } = Ember;

export default Ember.Service.extend({

  memory: null,

  setMemory: function() {
    this.set('memory', {});
  }.on('init'),

  scrollTarget: computed(function() {
    return Ember.$(document);
  }),

  remember(key) {
    console.log('remembering', key, this.get('scrollTarget').scrollTop());
    this.get('memory')[key] = this.get('scrollTarget').scrollTop();
  },

  restore(key) {
    console.log('restoring', key, this.get('memory')[key]);
    this.get('scrollTarget').scrollTop(this.get('memory')[key] || 0);
  }

});
