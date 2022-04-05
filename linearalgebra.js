class Linearalgebra{
    transpose(a){
        let c; 
    
        if(a instanceof Vector){    
            c= new Vector(a.dim);
            c.cols=c.rows
            c.rows=c.cols
    
            for(let i= 1; i<=c.dim;i++){
                c.set(i, a.get(i)) ; 
            }
    
        }
        else if(a instanceof Matrix){
                c= new Matrix(a.cols, a.rows)
    
            for(let i= 1; i<=c.rows;i++){
                for(let j=1; j<= c.cols; j++){
                    c.set(i,j, a.get(j,i))
                }
            }
        }
        else{
            throw new Error("O paramentro deve ser um objeto da classe  Vector  ou da classe Matrix.");
        }  
        return c;   
        }
}