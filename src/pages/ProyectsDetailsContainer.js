import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Proyecto from '../components/Proyecto/index'
import { Link } from 'react-router-dom'

const proyectos = [
    {
        id: 0,
        variant: 'dark',
        titulo: 'Commerce',
        title: 'Commerce',
        video: <iframe className='video' title='Commerce explanation' width="683" height="323"  src="https://www.youtube.com/embed/OVFu8yVu39U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowfullscreen></iframe>,
        imgSrc: ["img/Commerce/commerce1.jpg", "img/Commerce/commercelisting.jpg", "img/Commerce/commerceownproduct.jpg", "img/Commerce/commerce_createnewlisting.jpg", "img/Commerce/commercecategories.jpg", "img/Commerce/commercelogin.jpg", "img/Commerce/commerceregister.jpg"],
        texto: <div><p> Este proyecto fue realizado en Python mediante la plataforma de Django y untilizando SQL como base de datos.</p>
        <p>Al ser un proyecto de pagina web dinamica no puede mostrarse en github, sin embargo quiero mostrar al menos como se ve la pagina, explicar sus funcionalidades con un video (el mismo está en ingles ya que lo realicé para el curso </p>
        <p>de Harvard) y dejarles un <a href = "https://github.com/tomasp92/commerce-CS50/tree/master/commerce">Link al codigo</a> con el objetivo de que lo puedan ver.</p> <br /><p>En este proyecto realice una pagina web en el cual un usuario debía poder logearse publicar subastas o realizar ofertas a subastas que otras personas realizaron.</p>
        <p>También el usuario debía poder filtrar los productos por categorias, y, en caso de que esten logueados poder poner productos en su lista de deseados (watchlist), o quitarlos si el producto ya esta en la misma</p>
        <p> Fue realizado en el marco de un curso de programación web con python y javascript en Harvard</p></div>,
        text: <div> <p> This project was written in Python using the Django framework and SQL as a database. </p>
        <p> Being a dynamic web page project it cannot be shown in github, however I want to show at least the page, and explain its functionalities with a video. Also you can see the  <a href = "https://github.com/tomasp92/commerce-CS50/tree/master/commerce"> written code </a>. </p> <br /> <p> In this project I created a web page in which a user is able to log in to publish auctions or make offers to auctions that other people published.</p>
        <p> The user should also be able to filter the products by categories, and, if they are logged in, to put products on their wish list (watchlist), or remove them if the product is already on it </p>
        <p> It was done in a web programming course with python and javascript at Harvard</p> </div>
    },
    {
        id: 1,
        titulo: 'Mail',
        title: 'Mail',
        video: <iframe title='Mail explanation' width="683px" height="430px" src="https://www.youtube.com/embed/xjemMc8fgWs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='video'></iframe>,
        variant: 'dark',
        imgSrc: ["img/Mail/mailsinbox.jpg", "img/Mail/mailcompose.jpg", "img/Mail/mailrecived.jpg ", "img/Mail/mailarchived.jpg ", "img/Mail/maillogin.jpg", "img/Mail/mailsent.jpg"],
        texto: <div><p> Este proyecto fue realizado en Python mediante el framework de Django y untilizando SQL como base de datos.</p><p>Tammbién se utilizó Java Script para el front end. Al ser un proyecto de pagina web dinamica no puede mostrarse en github, sin embargo quiero mostrar al menos como se ve la pagina, explicar sus funcionalidades con un video (el mismo está en ingles ya que lo realicé para el curso de Harvard) y dejarles un <a href = "https://github.com/tomasp92/mail-CS50/tree/master/mail">Link al codigo</a> con el objetivo de que lo puedan ver.</p><br /><p>En este proyecto realice una pagina web en la cual un usuario debía poder logearse y enviar y recibir mails.</p><p>Tambien archivar los mismos y que al leerlos cambien de color quedando diferenciados los leidos y los no leidos. Para eso fue necesario utilizar API para enviar y recibir información.</p><p>Fue realizado en el marco de un curso de programación web con python y javascript en Harvard. </p></div>,
        text: <div> <p> This project was written in Python using the Django framework and SQL as a database. </p> <p> Java Script was also used for the front end. As it is a dynamic web page project, it cannot be shown on github, however I want to show at least how the page looks, explain its functionalities with a video and leave you a <a href = "https://github.com/tomasp92/mail-CS50/tree/master/mail"> Link to the code </a> so that you can see it. </p> <br / > <p> In this project I created a web page in which a user is able to log in and send and receive emails. </p> <p> Also archive them and when they where red change color, leaving those read and those not differentiated. For this, it was necessary to use an API to send and receive information. </p> <p> It was done in a web programming course with python and javascript at Harvard. </p> </div>
    },
    {
        id: 2,
        titulo: 'Mario',
        title: 'Mario',
        variant: false,
        imgSrc: ["img/Mario/mariobros.png", "img/Mario/mariocaratula.jpg", "img/Mario/marioescaleras.jpg"],
        texto: <div><p> Este proyecto fue realizado en C. Consiste en un programa que permite diujar las escaleras de mario con simbolos numerales.</p><p> El programa pregunta cuantos escalones quiere imprimir el usuario y ante la respuesta los imprime</p>
        <p>Dejo un <a href="https://github.com/tomasp92/Proyectos-porfolio/tree/master/Mario" target="_blank" rel="noreferrer">Link al codigo</a> con el objetivo de que lo puedan ver. Y una imagen con el codigo debajo</p><p>  Este proyecto fue realizado en el marco de un curso de CS50 introduction to computer science en Harvard.</p><br /><img  src="img/Mario/mariocodigo.jpg" alt='code' /> <br /></div>,
        text: <div><p>This project was carried out in C. It consists of a program that allows mario's stairs to be drawn with numeral symbols.</p><p> It was done in a web programming course with python and javascript at Harvard.</p><p> The program asks how many steps the user wants to print and printes the amount requested by the user</p><p>I leave a <a href="https://github.com/tomasp92/Proyectos-porfolio/tree/master/Mario" target="_blank" rel="noreferrer"> Link to the code </a> with the objective that those interested in it can see it. And an image with the code below </p><p> It was done in a CS50 introduction to computer science course at Harvard. </p><br /><img src = "img/Mario/mariocodigo.jpg" alt = 'code' /> <br /> </div>
    }
]

const ProyectsDetailsContainer = ({ ingles }) =>{
    const params = useParams()
    const [proyecto, setProyecto] = useState(false)
    useEffect(() => {
        if(params.titulo){
            const proyectoEncontrado = proyectos.find(element => element.titulo === params.titulo)
            setProyecto(proyectoEncontrado)
        }
    }, [params])

    return(
        <div>
            <Link className='link' to='/'>{ ingles? 'Back to porfolio' : 'Volver al portfolio' }</Link>
            <div >
                <h1 className='SectionTitle'>{ ingles? 'Proyects Porfolio' : 'Portfolio de proyectos' }</h1>
            </div>
            <div className="proyectos">
                <Proyecto ingles={ingles} proyecto={proyecto} />
            </div>
        </div>
    )
}

export default ProyectsDetailsContainer
