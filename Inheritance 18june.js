class Bikes{
    constructor(name,platform){
        this.name = name ;
        this.platform = platform; 

    }
    Intro(){
        console.log("the bike  " + this.name + ' is better than ' +this.platform )
    }
    static cc(){
        console.log("1000cc")
    }
}


class suzuki extends Bikes {
    constructor(name,platform){
        super(name,platform)
    }
    Intro1(){
        console.log("Suzuki " + this.name + ' is better '+ this.platform)
    }
}

class yamaha extends Bikes {
    constructor(name,platform,dirtbike){
        super(name,platform)
        this.dirtbike = dirtbike;
    }
    Intro2(){
        console.log(" Yamaha " + this.name + ' is a '+ this.platform + ' in class ' +this.dirtbike + ' dirtbike' )
    }
}

const a = new Bikes("BMW","HONDA");
a.Intro()
console.log(Bikes.cc())

const b = new suzuki("Suzuki busa","Suzuki blade")
b.Intro1()

const c = new yamaha("yamaha terero","2 wheeler",4)
c.Intro2()