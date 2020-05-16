
    exports.sum = (vect1,vect2) => {
        return  {x:vect1.x+vect2.x,y:vect1.y+vect2.y}
    }

    exports.sub = (vect1,vect2) =>{
        return  {x:vect1.x-vect2.x,y:vect1.y-vect2.y}
    }

    exports.scale = (vect, scaleFactor) => {
        return {x: vect.x*scaleFactor,y: vect.y*scaleFactor}
    }

    exports.dotProduct = (vect1,vect2) => {
        return (vect1.x*vect2.x)+(vect1.y*vect2.y)
    }