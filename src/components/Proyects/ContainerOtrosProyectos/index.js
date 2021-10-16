import Proyectos from './../Proyectos'
import { Link } from 'react-router-dom'
const otrosProyectos= [
    {
        id: 0,
        variant: 'dark',
        titulo: <Link className='link' to='/Commerce'>Commerce</Link>,
        title: <Link className='link' to='/Commerce'>Commerce</Link>,
        imgSrc: ["img/Commerce/commerce1.jpg", "img/Commerce/commercelisting.jpg", "img/Commerce/commerceownproduct.jpg", "img/Commerce/commerce_createnewlisting.jpg", "img/Commerce/commercecategories.jpg", "img/Commerce/commercelogin.jpg", "img/Commerce/commerceregister.jpg"],
        texto: <div><p> Pagina web de subastas realizada en Python con Django, HTML, y CSS.</p><p>Fue realizado en el marco de un curso de programación web con python y javascript en Harvard</p></div>,
        text: <div> <p> Auction website made in Python with Django, HTML, and CSS.</p> <p> It was done in a web programming course with python and javascript at Harvard</p> </div>
    },
    {
        id: 1,
        titulo: <Link className='link' to='/Mail'>Mail</Link>,
        title: <Link className='link' to='/Mail'>Mail</Link>,
        variant: 'dark',
        imgSrc: ["img/Mail/mailsinbox.jpg", "img/Mail/mailcompose.jpg", "img/Mail/mailrecived.jpg ", "img/Mail/mailarchived.jpg ", "img/Mail/maillogin.jpg", "img/Mail/mailsent.jpg"],
        texto: <div><p>En este proyecto realizado en Python con Django, HTML CSS y javascript, cree una casilla de mails que puede enviar y recibir mails.</p><p> Fue realizado en el marco de un curso de programación web con python y javascript en Harvard</p></div>,
        text: <div><p>In this project made in Python cond Django, HTML CSS and javascript, I created a mail box that can send and receive mail.</p>
        <p> It was done in a web programming course with python and javascript at Harvard</p></div>
    },
    {
        id: 2,
        titulo: <Link className='link' to='/Mario'>Mario</Link>,
        title: <Link className='link' to='/Mario'>Mario</Link>,
        variant: false,
        imgSrc: ["img/Mario/mariobros.png", "img/Mario/mariocaratula.jpg", "img/Mario/marioescaleras.jpg"],
        texto: <div><p> Este proyecto fue realizado en C. Consiste en un programa que permite diujar las escaleras de mario con simbolos numerales</p><p>Este proyecto fue realizado en el marco de un curso de CS50 introduction to computer science en Harvard.</p></div>,
        text: <div><p>This project was carried out in C. It consists of a program that allows mario's stairs to be drawn with numeral symbols.</p><p> It was done in a web programming course with python and javascript at Harvard.</p></div>
    }
    
] 

const ContainerOtrosProyectos = ({ ingles }) => <Proyectos proyectos={ otrosProyectos } ingles={ingles} />
  

export default ContainerOtrosProyectos