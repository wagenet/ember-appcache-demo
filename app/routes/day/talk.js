import Ember from 'ember';
import ScrollMemory from 'ember-appcache-demo/mixins/scroll-memory';

export default Ember.Route.extend(ScrollMemory, {
  model({talkId}) {
    let day = this.modelFor('day');
    return day.talks.findBy('id', talkId);
  },

  scrollMemoryKey(model) {
    return 'talk-' + Ember.get(model, 'id');
  }

});
