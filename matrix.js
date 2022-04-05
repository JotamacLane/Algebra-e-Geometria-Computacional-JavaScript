class Matrix{

    constructor(rows,cols,elements){

        if ( rows == undefined || cols == undefined ){
            throw new Error("A quantidade de linhas e colunas precisam ser especificadas.")
        }

        if(rows < 0){
            throw new Error("Quantidades de linhas deve ser igual ou maior que zero.")
        }

        if(cols < 0){
            throw new Error("Quantidades de colunas deve ser igual ou maior que zero.")
        }

        this.rows= rows
        this.cols= cols

        if(elements==undefined){
            this.elements= []
            let size = rows*cols
            
            while(this.elements.length != size){
                this.elements.push(0)
            }
        }

        else{
            if(elements.length == rows * cols ){         
                this.elements = elements
            }
            else{
                throw new Error("Quantidade de elementos é maior que o tamanho da matriz.")
            }
        }
    }

    get(i,j){
        this.#validateMatrixIndex(i,j)
        return this.elements[this.#getIndex(i,j)]
    }

    set(i,j,value){
        this.#validateMatrixIndex(i,j)
        this.elements[this.#getIndex(i,j)]=value
    }

    #getIndex (i,j){
        return((j-1)+(i-1)*this.cols)
    }

    #validateMatrixIndex (i,j){
        if( i<=0 || i> this.rows){
            throw new Error(`O valor de i deve está entre 1 e ${this.rows}`)
        }

        if( j<=0 || j> this.cols){
            throw new Error (`O valor de j deve está entre 1 e ${this.cols}`)
        }
        return this.elements[(j-1)+(i-1)*this.cols]
    }
}