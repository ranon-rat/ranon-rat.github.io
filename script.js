function windowResized(){
    resizeCanvas(windowWidth,windowHeight)

}
function setup() {
    let canvas=createCanvas(windowWidth,windowHeight)
    canvas.position(0,0)
    canvas.style("z-index","-1")
}
    const color = (i) => (0.05*i, float(frameCount)/255)*255;
function draw() {
    noFill()
    beginShape()
    for(let i =0;i<width;i++){
        let m =noise(0.02*i,float(frameCount)/500)*height
        let r=color(i),g=color(i),b=color(i);
        stroke(r,0,b,25)
        curveVertex(i,m)                              
    }
    endShape()
}