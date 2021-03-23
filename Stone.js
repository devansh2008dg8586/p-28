class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=bodies.circle(x,y,width,height,options);
        this.image=loadImage("stoneImage.jpg");
        World.add(world,this.body);
    }
}



























