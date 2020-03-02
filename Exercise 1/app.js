(() => {
'use strict';

new Vue({
  el: '#exercise',
  data: {
    name: 'Junya',
    age: 26,
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F77%2FGoogle_Images_2015_logo.svg%2F1200px-Google_Images_2015_logo.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_Images&tbnid=7fEVakcJUgrsmM&vet=12ahUKEwi57aLI2frnAhUiHKYKHQeyAu0QMygAegUIARCLAg..i&docid=qfPPp-mRFi6Y6M&w=1200&h=412&q=google%20image&ved=2ahUKEwi57aLI2frnAhUiHKYKHQeyAu0QMygAegUIARCLAg'
  },
  methods: {
    ageMultiplied: function() {
      return this.age * 3;
    },
    mathRandom: function() {
      return Math.random();
    }
  }
});
})();
