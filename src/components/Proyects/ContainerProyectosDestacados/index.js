import Proyectos from './../Proyectos'
const proyectosDestacados= [
    {
        id: 0,
        variant: 'dark',
        titulo: <a class="nav-link" href="https://cryptovips.org/">Cryptovips</a>,
        title: <a class="nav-link" href="https://cryptovips.org/">Cryptovips</a>,
        imgSrc: ["img/cryptovips/home.bmp", "img/cryptovips/groups.bmp", "img/cryptovips/launching.bmp",   "img/cryptovips/mobile.bmp", "img/cryptovips/tokenomics.bmp", "img/cryptovips/vip_groups.bmp"],
        texto: <div><p> Implementación realizada con React y firebase, adaptación de un sitio web para presentar una web 3, se trabajo sobre muchos elementos que le faltaban al frontend para ser finalizado y se desarrollo la version mobile. Trabajado en  <a href="https://github.com/fcarbonelli/CryptoVips">github</a>.</p></div>,
        text: <div><p> Implementation carried out with React and firebase, adaptation of a website to present a web 3, work was done on many elements that were missing from the frontend to be finalized and the mobile version was developed. Worked on <a href="https://github.com/fcarbonelli/CryptoVips"> github </a>.</p></div>
    },
    {
        id: 1,
        variant: 'dark',
        titulo: <a class="nav-link" href="https://workhub.atexto.com/">Programa de referidos</a>,
        title: <a class="nav-link" href="https://workhub.atexto.com/">Referrals Program</a>,
        imgSrc: ["img/Atexto Referrals/referrals_main.jpg", "img/Atexto Referrals/referrals1.jpg", "img/Atexto Referrals/referrals2.jpg",   "img/Atexto Referrals/referrals3.jpg", "img/Atexto Referrals/referrals_modal.jpg"],
        texto: <div><p> Implementación realizada con React para el front y php para el back utilizando SQL como base de datos. Trabajado en  <a href="https://gitlab.com/tomaspalauatexto">gitlab</a>. Sin embargo el código es privado.</p><p>Fue realizado para la empresa en la que trabajo, en caso de querer interactuar con la pagina realizada el link es el siguiente: <a href="https://workhub.atexto.com/">workhub.atexto.com</a></p></div>,
        text: <div><p> Implementation made with React for the front-end and php for the back-end using SQL as the database. Worked on <a href="https://gitlab.com/tomaspalauatexto"> gitlab </a>, the code is not public. </ p > <p> It was made for the company where I work right now, if you want to interact with the page made, the link is the following: <a href="https://workhub.atexto.com/"> workhub.atexto. com </a> </p> </div>
    },
    {
        id: 2,
        titulo: <a class="nav-link" href="https://tomasp92.github.io/barbarmullermakeup/index.html">barbarmullermakeup</a>,
        title: <a class="nav-link" href="https://tomasp92.github.io/barbarmullermakeup/index.html">barbarmullermakeup</a>,
        variant: 'dark',
        imgSrc: ["img/barbaraMullerMakeup/Index1.png", "img/barbaraMullerMakeup/Index2.png", "img/barbaraMullerMakeup/Index3.png", "img/barbaraMullerMakeup/Index4.png", "img/barbaraMullerMakeup/productos.png", "img/barbaraMullerMakeup/producto.png", "img/barbaraMullerMakeup/carrito.png", "img/barbaraMullerMakeup/checkout.png"],
        texto: <div> <p>e-commerce.</p>
        <p> Proyecto realizado con HTML, CSS y javascript. Dejo aquí el <a href = "https://github.com/tomasp92/barbarmullermakeup">Link al codigo escrito</a></p>
        <p> Fue realizado como trabajo final de un curso de programación en Javascript en Coder House </p></div>,
        text: <div><p>e-commerce.</p>
        <p> Project made with HTML, CSS and javascript. I leave here the <a href = "https://github.com/tomasp92/barbarmullermakeup">Link to the written code</a></p>
        <p>It was done as the final project of a Javascript programming course at Coder House</p> </div>
    },
    {
        id: 3,
        titulo: <a class="nav-link" href="https://tomasp92.github.io/Proyectos-porfolio/">Blog Mensajes Encriptados</a>,
        title: <a class="nav-link" href="https://tomasp92.github.io/Proyectos-porfolio/">Encrypted Messages Blog</a>,
        variant: false,
        imgSrc: ["img/Homepage/Homepage1.jpg", "img/Homepage/Homepage2.jpg", "img/Homepage/Homepage3.jpg", "img/Homepage/Homepage4.jpg", "img/Homepage/Homepage5.jpg"],
        texto: <div><p>Pagina sobre mensajes encriptados con información y con la posibilidad de encriptar tus propios mensajes.</p><p> Proyecto realizado con HTML, CSS y javascript. Dejo aquí el <a href = "https://github.com/tomasp92/homepageEncryption/tree/master/docs">Link al codigo escrito</a></p><p>Fue realizado como trabajo final de un curso de inciación en la programación de Harvard</p></div>,
        text: <div><p>Page about encrypted messages with information and with the possibility of encrypting your own messages.</p><p> Project made with HTML, CSS and javascript. I leave here the <a href = "https://github.com/tomasp92/homepageEncryption/tree/master/docs">Link to the written code</a></p><p>It was done as the final project of an introductory course about programing in Harvard.</p></div>
    }
    
] 

const ContainerProyectosDestacados = ({ ingles }) => <Proyectos proyectos={ proyectosDestacados } ingles={ingles} />
  

export default ContainerProyectosDestacados