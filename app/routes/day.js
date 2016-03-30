import Ember from 'ember';
import ScrollMemory from 'ember-appcache-demo/mixins/scroll-memory';

export default Ember.Route.extend(ScrollMemory, {
  model({ dayId }) {
    return this.modelFor('application').find(day => day.id === dayId);
  },

  scrollMemoryKey(model) {
    return 'day-' + Ember.get(model, 'id');
  }
});
