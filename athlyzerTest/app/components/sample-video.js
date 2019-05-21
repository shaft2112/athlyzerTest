import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  actions: {
    play() {
      //Write all Players in one Object
      var player = videojs.getPlayers();
      //iterate over the object to extract the player and call the videojs method on it
      for(var id in player){
        player[id].play();
        break;
      }

      this.player.play();
      return true;
    },
    pause() {
      var player = videojs.getPlayers();
      for(var id in player){
        player[id].pause();
        break;
      }
    },
    seek: function(user){
      //read userinput and place it in the right videojs method
      var uinput = this.get('input');
      var player = videojs.getPlayers();
      for(var id in player){
        player[id].currentTime(uinput);
        break;
      }
    }
  }
});
