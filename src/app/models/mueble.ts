export class mueble{
    constructor(public idmuebles: number, public nombre: string, public coleccion: string, public tipo: string, public descripcion: string, public medidas: string, public croquis: string, public imgUrl1: string, public imgUrl2: string, public imgUrl3: string, public imgUrl4: string, public imgUrl5: string,){
        this.idmuebles = idmuebles
        this.nombre = nombre
        this.coleccion = coleccion
        this.tipo = tipo
        this.descripcion = descripcion
        this.medidas = medidas
        this.croquis= croquis
        this.imgUrl1 = imgUrl1
        this.imgUrl2 = imgUrl2
        this.imgUrl3 = imgUrl3
        this.imgUrl4 = imgUrl4
        this.imgUrl5 = imgUrl5
    }
}