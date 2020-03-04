Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});

let vm1 = new Vue({
    data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
vm1.$mount('#app1');

vm1.$refs.heading.innerText = 'something else';
setTimeout(() => {
  vm1.title = 'Changed by timer';
}, 3000);

let vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange() {
      vm1.title = 'Changed!';
    }
  }
});

let vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);
