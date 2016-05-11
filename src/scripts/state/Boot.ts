module OPENSets.State {
  export class Boot extends Phaser.State {
    preload() {
      this.load.image('preload-bar', 'assets/images/preloader.gif');
      //Load images
      this.load.image('chair', 'assets/images/chair.png');
      this.load.image('chicken', 'assets/images/chicken.png');
      this.load.image('cloud', 'assets/images/cloud.png');
      this.load.image('egg', 'assets/images/egg.png');
      this.load.image('fawn', 'assets/images/fawn.png');
      this.load.image('fork', 'assets/images/fork.png');
      this.load.image('iron', 'assets/images/iron.png');
      this.load.image('key', 'assets/images/key.png');
      this.load.image('knife', 'assets/images/knife.png');
      this.load.image('lock', 'assets/images/lock.png');
      this.load.image('paint-brush', 'assets/images/paint-brush.png');
      this.load.image('paint-pallet', 'assets/images/paint-pallet.png');
      this.load.image('pan', 'assets/images/pan.png');
      this.load.image('pencil', 'assets/images/pencil.png');
      this.load.image('pencil-sharpener', 'assets/images/pencil-sharpener.png');
      this.load.image('shoes', 'assets/images/lock.png');
      this.load.image('soap', 'assets/images/soap.png');
      this.load.image('table', 'assets/images/table.png');
      this.load.image('tap', 'assets/images/tap.png');
      this.load.image('teeth', 'assets/images/teeth.png');
      this.load.image('toothbrush', 'assets/images/toothbrush.png');
      this.load.image('umbrella', 'assets/images/umbrella.png');
      this.load.image('washing-mashine', 'assets/images/washing-mashine.png');
      this.load.image('backpack', 'assets/images/backpack.png');
      this.load.image('sets-logo', 'assets/images/sets-logo.png');
      this.load.image('play-button', 'assets/images/play-button.png');

      //Load animations
      //this.load.image('happy-animation-atlas', 'assets/animations/happy-animation.atlas');
      this.load.image('happy-animation', 'assets/animations/happy-animation.png');
      this.load.image('happy-animation2', 'assets/animations/happy-animation2.png');
      this.load.image('happy-animation3', 'assets/animations/happy-animation3.png');
      this.load.image('happy-animation4', 'assets/animations/happy-animation4.png');
      this.load.image('happy-animation5', 'assets/animations/happy-animation5.png');

      //Load sounds
      this.load.audio('audio-transition', 'assets/sounds/audio-transition.wav');
      this.load.audio('audio-right-option', 'assets/sounds/audio-right-option.mp3');
      this.load.audio('audio-wrong-option', 'assets/sounds/audio-wrong-option.wav');
    }

    create() {
      this.game.stage.backgroundColor = 0xFFFFFF;

      this.input.maxPointers = 1;
      this.stage.disableVisibilityChange = true;

      this.game.state.start('preload');
    }
  }
}
