class Lights {
    Xdimension
    Ydimension
    arrayCoord = []
    constructor(Xdimension,Ydimension){
        this.Xdimension = Xdimension;
        this.Ydimension = Ydimension;
    }
    countOn(){
        let countLight = 0
        this.arrayCoord.forEach(item => {
            if (item.light === true){
                countLight++
            };
        })
        console.log('countLight ',countLight)
        return countLight
    }
    modify(X1,Y1,X2,Y2,action){
        this.arrayCoord.forEach(item => {
            if (item.x >= X1 && item.x <= X2 
                && item.y >= Y1 && item.y <= Y2){
                    switch (action) {
                        case "turnOn" :
                            item.light = true;
                            break;
                        case "turnOff" :
                            item.light = false;
                            break;
                        case "toggle" :
                            item.light = true ? false : true ;
                            break;
                    }
                }
        })
        console.log(this.arrayCoord)
    }
    turnOn(X1,Y1,X2,Y2){
        this.modify(X1,Y1,X2,Y2,'turnOn')
        return this.countOn()
    }
    turnOff(X1,Y1,X2,Y2){
        this.modify(X1,Y1,X2,Y2,'turnOff')
        return this.countOn()
    }
    toggle(X1,Y1,X2,Y2){
        this.modify(X1,Y1,X2,Y2,'toggle')
        return this.countOn()
    }
    initArrayCoord(){
        this.arrayCoord = [];
        // this.arrayCoord = [1];
        for (let i=0;i<this.Xdimension;i++){
            for (let j=0 ; j<this.Ydimension ; j++){
                const obj = {
                    x : i,
                    y : j,
                    light : false
                }
                this.arrayCoord.push(obj)
            }
        }
        console.log(this.arrayCoord)
        return this.arrayCoord
    }
}

module.exports = Lights;
