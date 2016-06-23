module OPENSets.Models {
  export class AnimationModel {
    public name: string;
    public frames: number[];
    public frameRate: number;

    constructor(public animation: Models.AnimationModel) { }
  }
}
