const data = {
    listadoUsuario : [
     {
        username: 'manuelcilfone'
        foto:'./img/FotoPerfil/hombre1.jpeg',
        email: 'manucilfone@hotmail.com',
        password:'1234',
        fecha: '2001-1-5',
        dni: '42385967',
        posteos:10,
        seguidores:80,
        seguidos:90
    },
    {
        username: 'felipecifre'
        foto:'./img/FotoPerfil/hombre2.jpeg',
        email: 'felipecifre@hotmail.com',
        password:'15u5u4i',
        fecha: '2005-1-5',
        dni: '42385967',
        posteos:6,
        seguidores:40,
        seguidos:100
    },
    {
        username: 'juanalucini'
        foto:'./img/FotoPerfil/mujer1.jpeg',
        email: 'juanilucini@hotmail.com',
        password:'984838',
        fecha: '1999-1-5',
        dni: '42385967',
        posteos:8,
        seguidores:200,
        seguidos:240
    },
    {
        username: 'carolina11'
        foto:'./img/FotoPerfil/mujer2.jpeg',
        email: 'carolina@hotmail.com',
        password:'984838',
        fecha: '1999-1-5',
        dni: '42385967',
        posteos:8,
        seguidores:200,
        seguidos:240
    },
    {
        username: 'solchioccarelli'
        foto:'./img/FotoPerfil/mujer3.jpeg',
        email: 'solcito@hotmail.com',
        password:'984838',
        fecha: '1999-1-5',
        dni: '42385967',
        posteos:8,
        seguidores:200,
        seguidos:240
    },

    ],
    
    listadoPosteos : [
        {
            id: 1,
            foto: 'https://www.gallerygang.com.ar/productos/aros-aura-oro/',
            foto: './imagenes/imagen.png',
            texto: 'foto random',
        },
        {
            id: 2,
            foto: 'https://www.gallerygang.com.ar/productos/aros-aura-oro/',
            texto: 'foto random 1', 
        },
        {
            id: 3,
            foto: 'https://www.gallerygang.com.ar/productos/aros-aura-oro/',
            texto: 'foto random 2', 
        },
        {
            id: 4,
            foto: 'https://www.gallerygang.com.ar/productos/aros-aura-oro/',
            texto: 'foto random 3', 
        },
    ],


    listadoComentarios : [
        {
            id: 1,
            comentario: "Mi primer comentario",
            idPosteo: 1
        }
    ]
}


module.exports = data