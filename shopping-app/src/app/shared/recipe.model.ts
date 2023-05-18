/* export class Recipe{
  public name: string;
  public description: string;
  public imgUrl: string;

  constructor(name: string, desc: string, imgUrl: string){
    this.name = name;
    this.description = desc;
    this.imgUrl = imgUrl;
  }

  // note: this is long method, we could define 'public' variable name, while on constractor as well
} */

export class Recipe{
  constructor(public name: string, public desc: string, public imgUrl: string){}
}
