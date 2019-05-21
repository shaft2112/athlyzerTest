import Controller from '@ember/controller';

export default Controller.extend({
  src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
    controls: true,

    actions: {
      canplay() {
        console.log('video ready');
      },

      ended() {
      	console.log('video ended');
      },

      pause() {
      	console.log('video is paused');
      },

      playing() {
        console.log('video is playing');
      }
    }
  });
