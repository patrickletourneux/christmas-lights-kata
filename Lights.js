class Lights {
    Xdimension
    Ydimension
    arrayCoord = []
    constructor(Xdimension,Ydimension){
        this.Xdimension = Xdimension;
        this.Ydimension = Ydimension;
    }
    countOn(){
        return 0
    }
    initArrayCoord(){
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
    initialize(){
        this.arrayCoord = [];
    }
}

module.exports = Lights;
