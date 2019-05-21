import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

  actions: {
    play() {
      //Alle (einen...) Player auf der Seite in ein Objekt schreiben
      var player = videojs.getPlayers();
      for(var id in player){
        player[id].play();
        break;
      }

      this.player.play();
      return true;
    },
    pause() {
      //Alle (einen...) Player auf der Seite in ein Objekt schreiben
      var player = videojs.getPlayers();
      //Über alle (einen...) Player iterieren um diese(n) anzuhalten
      for(var id in player){
        player[id].pause();
        break;
      }
    },
    seek: function(user){
      //userinput lesen und speichern
      var uinput = this.get('input');
      //Alle (einen...) Player auf der Seite in ein Objekt schreiben
      var player = videojs.getPlayers();
      //Über alle (einen...) Player iterieren um in diesen(/m) zu springen
      for(var id in player){
        player[id].currentTime(uinput);
        break;
      }
    }
  }
});
