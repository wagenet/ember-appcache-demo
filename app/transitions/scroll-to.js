import Ember from 'ember';
import isBrowser from "liquid-fire/is-browser";

export default function(selector, options) {
  if (isBrowser()) {
    if (!options) {  options = {}; }

    let target = delete options.target;
    target = target || '';
    options = Ember.merge({ duration: 500 }, options);

    Ember.$(target).scrollTo(selector, options);
  }
}
