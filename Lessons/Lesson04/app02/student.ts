export class student{
    id:number
    private name!:string;
    #gpa: number= 0.0;

    constructor(name: string,gpa: number){
             this.name=name;
             this.#gpa=gpa;
    }

    getName(){
        return this.name;
    }

    setNmae(name:string){this.name=name;}

    get gpa(){
        return this.#gpa;
    }

    set gpa(gpa){
          this.#gpa=gpa;
    }
}


