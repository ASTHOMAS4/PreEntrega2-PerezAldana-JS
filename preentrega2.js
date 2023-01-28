// VARIABLES
let nombreIng = prompt(`ingrese su nombre`)
let apellidoIng = prompt(`ingrese su apellido/s`)
let edadIng = parseInt(prompt(`ingrese su edad`)) 
let subMenuProds = true
// FUNCION CONSTRUCTORA

class producto {
    constructor (id, titulo, descripcion, precio){
        this.id = id,
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.precio = precio
    }
    mostrarInfoProducto(){
        console.log(`id = ${this.id} - ${this.titulo} - ${this.descripcion} VALOR = ${this.precio}`)
    }

    
}

// PRODUCTOS
const producto1 = new producto(1,`Cargador Morty`,`Cargador USB - microUSB`,200)
const producto2 = new producto(2,`Funko pickle Rick`,`FUNKOPOP EDICION COLECCIONISTA`,300)
const producto3 = new producto(3,`Llavero`,`En variaciones: RICK , MORTY , SR. PANTALONES DE POPO`,250)
const producto4 = new producto(4,`Caja de Meeseks`,`JUEGO DE CARTAS`,500)

// CATALOGO
const catalogo = []
catalogo.push(producto1, producto2, producto3, producto4)

// FUNCIONES USUARIO
const Usuario = {
    nombre:nombreIng,
    apellido:apellidoIng,
    edad: edadIng
}

function saludarUsuario(){
    alert(`Hola ${Usuario.nombre} ${Usuario.apellido}, bienvenido señorit@
            de ${Usuario.edad}, pase a comprar. `)
    console.log(`Hola ${Usuario.nombre} ${Usuario.apellido}, bienvenido señorit@
            de ${Usuario.edad}, pase a comprar. `)
}

function restringirAcceso(){
    alert(`mucho cuidado señotrit@ ${nombreIng} ${apellidoIng}, no 
    puedes comprar acá porque todavia no eres mayor de edad`)
}
function despedirUsuario(){
    alert(`sr/a ${Usuario.apellido} ${Usuario.nombre}, gracias por usar nuestro servicio, vueva pronto`)
}
function noOption (){
    alert("esa respuesta no es una opción, vuelva a intentar con sí o no")
}
function devolver(){
    alert(`ok, intente de nuevo`)
}

// FUNCIONES PARA EL MENU
// 1 VER PRODUCTOS
function mostrarCatalogo(array){
    console.log("Los productos disponibles son:")
    array.forEach((producto) => {
        console.log(producto.id, producto.titulo, producto.descripcion, producto.precio)
    });
    
}

// 2 Agregar Nuevo Producto
function aggProducto(array){
    let tituloNuevo = prompt("Ingrese el NOMBRE del producto nuevo")
    let descripcionNueva = prompt("Ingrese la DESCRIPCIÓN de" + tituloNuevo)
    let precioNuevo = parseInt(prompt("Ingrese el PRECIO de" + tituloNuevo))
        
    const productoNuevo = new producto(array.length+1, tituloNuevo, descripcionNueva, precioNuevo)
    console.log(productoNuevo)

    array.push(productoNuevo)
    mostrarCatalogo(array)

}

// 3 Borrar un producto del catalogo
function borrarProducto(array){
    console.log(`A partir del cátalogo, ingrese el ID del PRODUCTO que desea eliminar:`)
    for(let elemento of array) {
        console.log(`${elemento.id} - ${elemento.titulo}  ${elemento.descripcion} valor ${elemento.precio}`)
    };
    
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
    let arrayID = array.map(producto => producto.id)
    let indice = arrayID.indexOf(idEliminar)

    array.splice(indice,1)
    mostrarCatalogo(array)
}

// 4 Buscar producto por nombre
function buscarPorNombre(array){
    let productoBuscado = prompt("Ingrese el nombre del producto que desea buscar")
    let productoEncontrado = array.find(
    
        (producto) => producto.titulo.toLowerCase() == productoBuscado.toLowerCase() 
    )
    if(productoEncontrado == undefined){
        console.log(`${productoBuscado} no se encuentra en nuestro stock`)
    }else{
        console.log(productoEncontrado)
    }
}

// 5 FILTRAR POR SUB MENU

function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((param1, param2)=> param1.precio - param2.precio)
    mostrarCatalogo(menorMayor)
}

function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    mostrarCatalogo(mayorMenor)
    
}

function ordenarAlfabeticamenteTitulo(array){
        const ordenadoAlfabeticamente = [].concat(array)
        ordenadoAlfabeticamente.sort((a, b) => {
            if (a.titulo > b.titulo) {
              return 1
            }else if (a.titulo < b.titulo) {
              return -1
            }else{
              return 0  
            }
          })
          mostrarCatalogo(ordenadoAlfabeticamente)
}

//ordenar un menu para decidir de qué manera quiere ordenar:
function    filtrarPor(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de Menor a Mayor:
    2 - Ordenar de Mayor a Menor:
    3 - Ordenar Alfabeticamente por Nombre de Producto:`))
    switch(opcion){
        case 1:
            ordenarMenorMayor(array)
        break
        case 2:
            ordenarMayorMenor(array)
        break
        case 3:
            ordenarAlfabeticamenteTitulo(array)
        break
        default:
        console.log(`${opcion} no es válido para ordenar`)
        break
    }
}

// 6 - VER CARRITO - Seleccionar los productos (falta hacer que se agreguen a un array carrito[])
function subMenuProductos (){
    mostrarCatalogo(catalogo)

    do{
        let opciones = prompt(`Ingrese el numero de la opción deseada
        1 - ${producto1.titulo}
        2 - ${producto2.titulo}
        3 - ${producto3.titulo}
        4 - ${producto4.titulo}
        0 - Salir del ménu`)
        switch(opciones){
            case "1":
                let cant1 = parseInt(prompt(`ingrese el numero de 
                    unidades que desea llevar del ${producto1.titulo}`))
                if (cant1 >= 0){
                    let answer1 = prompt(`${Usuario.apellido}${Usuario.nombre}, usted quiere llevar ${cant1} unidades del ${producto1.titulo}
                    sí o no?`)
                
                    if(answer1 .toLowerCase() == "si"){
                        let subtotal1 = cant1 * producto1.precio
                        alert(`su precio total es de ${subtotal1} $`)
                        despedirUsuario()
                        subMenuProds = false;
                    }else if(answer1 .toLowerCase() == "no"){
                        devolver()
                    }else{
                        noOption ()
                    }  
                }else{
                    noOption ()
                }
                
                break;
            case "2":
                let cant2 = parseInt(prompt(`ingrese el numero de 
                    unidades que desea llevar del ${producto2.titulo}`))
                if (cant2 >= 0){
                    let answer2 = prompt(`${Usuario.apellido}${Usuario.nombre}, usted quiere llevar ${cant2} unidades del ${producto2.titulo}
                    sí o no?`)
                
                    if(answer2 .toLowerCase() == "si"){
                        let subtotal2 = cant2 * producto2.precio
                        alert(`su precio total es de ${subtotal2} $`)
                        despedirUsuario()
                        subMenuProds = false;
                    }else if(answer2 .toLowerCase() == "no"){
                        devolver()
                    }else{
                        noOption ()
                    }  
                }else{
                    noOption ()
                }
                break;
            case "3":
                let cant3 = parseInt(prompt(`ingrese el numero de 
                    unidades que desea llevar del ${producto3.titulo}`))
                if (cant3 >= 0){
                    let answer3 = prompt(`${Usuario.apellido}${Usuario.nombre}, usted quiere llevar ${cant3} unidades del ${producto3.titulo}
                    sí o no?`)
                
                    if(answer3 .toLowerCase() == "si"){
                        let subtotal3 = cant3 * producto3.precio
                        alert(`su precio total es de ${subtotal3} $`)
                        despedirUsuario()
                        subMenuProds = false;
                    }else if(answer3 .toLowerCase() == "no"){
                        devolver()
                    }else{
                        noOption ()
                    }  
                }else{
                    noOption ()
                }
                break;
            case "4":
                let cant4 = parseInt(prompt(`ingrese el numero de 
                    unidades que desea llevar del ${producto4.titulo}`))
                if (cant4 >= 0){
                    let answer4 = prompt(`${Usuario.apellido}${Usuario.nombre}, usted quiere llevar ${cant4} unidades del ${producto4.titulo}
                    sí o no?`)
                
                    if(answer4 .toLowerCase() == "si"){
                        let subtotal4 = cant4 * producto4.precio
                        alert(`su precio total es de ${subtotal4} $`)
                        despedirUsuario()
                        subMenuProds = false;
                    }else if(answer4 .toLowerCase() == "no"){
                        devolver()
                    }else{
                        noOption ()
                    }  
                }else{
                    noOption ()
                }
                break;
            case "0":
                alert("nos vemos pronto")
                subMenuProds = false
                break;
            default:
                alert(`por favor seleccione una de las opciones`)
                break;
        }
    }while(subMenuProds)
}



// 7 - Ir a pagar

// acceder a la tienda
function accesoTienda(){
    if(edadIng >= 18){
        saludarUsuario()
        menuTienda()
    }else{
        restringirAcceso()
    }
}

// MENU

function menuTienda(){
    let salirDelMenu = false
    do{
        salirDelMenu = preguntarOpcion(salirDelMenu)
    }while(!salirDelMenu)
} 

function preguntarOpcion (salir){
    let opcionIngresada = parseInt(prompt(`introduzca la opción que desee
            1 - VER PRODUCTOS
            2 - Agregar Nuevo Producto al Catalogo
            3 - Borrar un Producto del Catálogo
            4 - Buscar producto
            5 - FILTRAR POR
            6 - VER CARRITO
            7 - Ir a pagar
            0 - salir del menu`))

        switch(opcionIngresada){
            case 1:
                mostrarCatalogo(catalogo)
            break;
            case 2:
                aggProducto(catalogo)
            break;
            case 3:
                borrarProducto(catalogo)
            break;
            case 4:
                buscarPorNombre(catalogo)
            break;
            case 5:
                filtrarPor(catalogo)
            break;
            case 6:
                subMenuProductos ()
            break;
            case 7:
                // todavia no está funcionando el carrito
            break;
            case 0:
                alert(despedirUsuario())
                salirDelMenu = true
                return salirDelMenu
            break;
            default:
                alert("Ingrese una opción correcta")
            break;
        }
}

// CODIGO EJECUTANDO

accesoTienda()