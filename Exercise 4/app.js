new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    }
  },
  computed: {
    couple() {
      return {
        backgroundColor: 'blue',
        color: 'green'
      };
    }
  },
  methods: {
    startEffect() {
      let vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight
        vm.effectClasses.shrink = !vm.effectClasses.shrink
      }, 1000);
    }
  }
});
