import Ember from 'ember';

const { get, computed } = Ember;

export default Ember.Mixin.create({

  // scrollMemory: Ember.inject.service(),

  // scrollMemoryInitialKey: computed(function() {
  //   return this.get('routeName')+'-initial';
  // }),

  // scrollMemoryKey(model) {
  //   return get(model, 'modelName') + '-' + get(model, 'id');
  // },

  // activate() {
  //   this._active = true;
  // },

  // beforeModel() {
  //   if (!this._active) {
  //     this.get('scrollMemory').remember(this.get('scrollMemoryInitialKey'));
  //   }
  // },

  // afterModel(model) {
  //   if (this._lastModel) {
  //     console.log('afterModel remember');
  //     this.get('scrollMemory').remember(this.scrollMemoryKey(this._lastModel));
  //   }

  //   this._lastModel = model;

  //   if (model) {
  //     console.log('afterModel restore');
  //     this.get('scrollMemory').restore(this.scrollMemoryKey(model));
  //   }
  // },

  // deactivate() {
  //   this._active = false;

  //   if (this._lastModel) {
  //     console.log('deactivate remember');
  //     this.get('scrollMemory').remember(this.scrollMemoryKey(this._lastModel));
  //     this._lastModel = null;
  //   }

  //   console.log('deactivate restore');
  //   this.get('scrollMemory').restore(this.get('scrollMemoryInitialKey'));
  // }

});