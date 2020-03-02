new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alert() {
            alert('Clicked!');
          },
          keyDown(event) {
            return this.value = event.target.value;
          }
        }
    });
