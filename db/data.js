const data = {
    listadoUsuario : [
        {
            id:1,
            email:' manu@cilfone.com',
            username: 'manuelcilfone',
            foto:'/img/FotoPerfil/hombre1.jpeg',
            password:1234,
            nacimiento: '1999-1-5',
            posteos:10,
            seguidores:80,
            seguidos:90,
            dni: 418181
        },
        {
            id:2,
            email:' manu@cilfone.com',
            username: 'felipecifre',
            foto:'/img/FotoPerfil/hombre2.jpeg',
            password:1234,
            nacimiento: '1999-1-5',
            posteos:6,
            seguidores:40,
            seguidos:100,
            dni: 11111
        },
        {
            id:3,
            email:' manu@cilfone.com',
            username: 'juanalucini',
            foto:'/img/FotoPerfil/mujer1.jpeg',
            password:1234,
            nacimiento: '1999-1-5',
            posteos:8,
            seguidores:200,
            seguidos:240,
            dni: 22222
        },
        {
            id:4,
            email:' manu@cilfone.com',
            username: 'carolina11',
            foto:'/img/FotoPerfil/mujer2.jpeg',
            password:1234,
            nacimiento: '1999-1-5',
            posteos:8,
            seguidores:200,
            seguidos:240,
            dni: 33333
        },
        {
            id:5,
            email:' manu@cilfone.com',
            username: 'solchioccarelli',
            foto:'/img/FotoPerfil/mujer3.jpeg',
            password:1234,
            nacimiento: '1999-1-5',
            posteos:4,
            seguidores:200,
            seguidos:240,
            dni: 44444
        },
        {
            id:5,
            email:' manu@cilfone.com',
            username: 'solchioccarelli',
            foto:'/img/FotoPerfil/mujer3.jpeg',
            password:1234,
            nacimiento: '1999-1-5',
            posteos:4,
            seguidores:200,
            seguidos:240,
            dni: 12344
        }
    ],
    
    listadoPosteos : [
        { 
            PostId: 1,
            foto: '/img/FotoProductos/mujer/foto1.jpeg',
            texto: 'Anillos hombre',
            dni: 44444,
        },
        {
            PostId: 2,
            dni: 33333,
            foto: '/img/FotoProductos/mujer/foto1.jpeg',
            texto: 'Temporada Verano 2023, coming soon...',
        },
        {
            PostId:3,
            dni: 12344,
            foto: '/img/FotoProductos/mujer/foto2.jpeg',
            texto: 'Las nuevas tendencias', 
        },
        {
            PostId:4,
            dni:22222,
            foto: '/img/FotoProductos/mujer/foto3.jpeg',
            texto: 'Nuevos Anillos para la coleccion 2023', 
        },
        {
            PostId:5,
            dni:418181,
            foto: '/img/FotoProductos/hombre/foto10.jpeg',
            texto: 'Las mejores joyas para hombres', 
        },
        {
            PostId:6,
            dni:44444,
            foto: '/img/FotoProductos/hombre/foto11.jpeg',
            texto: 'Summer Colection', 
        },
    ],


    listadoComentarios : [
        {
            id: 1,
            PostId: 1,
            dni:44444,
            comentario: "Que lindo!",
        },
        {
            id: 2,
            PostId: 1,
            dni:418181,
            comentario: "Que hermoso!",
        },
        {
            id: 3,
            PostId: 1,
            dni:11111,
            comentario: "Buenisimo!",
        },
        {
            id: 4,
            PostId: 1,
            dni:22222,
            comentario: "Genial!",
        }
    ]
}


module.exports = data