/* export class Ingrediants {
  public name: string;
  public desc: string;

  constructor(name:string, desc:string){
    this.name = name;
    this.desc = desc;
  }
  // note: this is long method, we could define 'public' variable name, while on constractor as well
} */

export class Ingrediants {
  constructor(public name:string, public amount:string){}
}
