import Component from '@ember/component';

export default Component.extend({
  actions: {
    share(){
    //open up share diaglogue with the Athlyzer Page  
    FB.ui({
  method: 'share',
  href: 'https://www.facebook.com/Athlyzer/',
  hashtag: '#Athlyzer',
  quote: 'One Click share. This is the finale of my coding-challenge.'
}, function(response){});
    }
  }
});
