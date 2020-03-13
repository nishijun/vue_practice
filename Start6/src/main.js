import Vue from 'vue'
import App from './App.vue'

// Vue.filter('to-lowercase', function(value) {
//     return value.toLowerCase();
// });
Vue.filter('count', function(value) {
    return value.length;
});

Vue.mixin({
  data() {
    return {
      guitars: ['Fender', 'Gibson', 'Ibanez', 'Epiphone', 'SimonPatrick'],
      filterText: ''
    }
  },
  computed: {
    filteredGuitars() {
      return this.guitars.filter(element => {
        return element.match(this.filterText)
      })
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
