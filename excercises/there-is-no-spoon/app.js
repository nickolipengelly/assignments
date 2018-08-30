
var pen= { 
    color: "Green",
    price: 5, 
    isRed: false, 
    write: function (){
        console.log("I'm a" + this.color + "pen that costs $" + this.price)
    }
}

var fan= {
    color: "white", 
    isLoud: false, 
    isShiny: false,
    write: function(){
        console.log("This fan is" + this.color)
    }
}

var door= {
    color: "white", 
    hasHandle: false, 
    height: 7,
    write: function(){
        console.log("This door is" + this.height + "feet tall, and is" + this.color)
    }

}

var projectorScreen= {
    color: "white",
    mountedOnWall: true, 
    width: 12, 
    wrtie: function(){
        console.log("The screen for class is" + this.width + "feet wide")
    }

}

var macBook={
    year: "2015", 
    screenSize: 15,
    ram: 16,
    write: function (){
        console.log ("The Macbook is from" + this.year + "and has" + this.ram + "gb of ram")
    }

}
var coffee={
    withCream: false,
    size: "large",
    color: "black",
    store: "Campos",
    cost: 4.5,
    write: function(){
        console.log ("This coffee is from" + this.store + "and cost me" + this.cost + ", this is way too much for a bad cup of coffe")
    }
}
var wall ={
    material: "brick",
    howMany: "lots",
    color: "brick red",
    write: function(){
        console.log ("The wall in class is made" +this.howMany + this.material + "and is made of" + this.howMany + " of bricks")
    }

}
