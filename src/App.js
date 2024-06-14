
import './App.css';
import {useState} from 'react';
import { TfiAlignCenter } from "react-icons/tfi";
import css from './img/css.png';
import django from './img/django.png';
import flask from './img/flask.png';
import react from './img/react.png';
import html from './img/html.png';
import js from './img/js.png';
import python from './img/python.png';
import sql from './img/sql.png';
import port from './img/port.png';
import noor from'./img/Noormohamed-A.pdf';
import aboutpic from './img/aboutpic.jpg';
import wa from './img/wa.png';
import pro1 from './img/project1.png';
import pro2 from './img/project2.jpg';
import pro3 from './img/project3.jpg';
import logo from './img/1.png';
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";
import { ContactUs } from './ContactUs';


function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
      
      
    };
    const close=()=>{
        setIsOpen(!isOpen);
        
    }
  
  return (
    <div className="App">
      <header>
            
          <div id="logo">
           
            <img src={logo} style={{height:'65px',width:'65px' }} alt='ND'></img>
          </div>
          
          <div className="toggle"><h1>
            <TfiAlignCenter id="nav-btn" style={{ color: isOpen ? 'rgb(255, 28, 115)' : 'white' }} onClick={toggleNavbar}/>
            </h1>
           
            </div>
          <div id="nav-mob" style={{ display: isOpen ? 'block' : 'none' }}>
          <a href='#home' onClick={close}>Home</a>
            <a href='#about' onClick={close}>About</a>
            <a href='#skills'onClick={close}>Skills</a>
            <a href='#project'onClick={close}>Projects</a>
            <a href='#contact' onClick={close}>Contact</a>
          </div>
          <div id="nav">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#project'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </div>
          
          
    </header>
    <a  id="wa" href='https://wa.me/919445711831?text=hi!'><img src={wa} alt=''></img></a>
    <section id="home">
        <div className="container">
            
            <div className="content">
                <div className='name'>
                    <h3>WELCOME TO MY WORLD</h3>
                    <h1> Hi, I'm</h1> <h1 id="name">Noormohamed </h1>
                    <h3>a passionate Full-Stack Developer </h3>
                    <p>"Transforming ideas into digital reality; I am a Full-Stack Developer weaving innovation through code.<br></br> Let's build the future together, one line at a time. 💻✨"</p>
                </div>
                <div className='img-cnt'>
                    <img src={port} alt='welcome'></img>
                </div>
            </div>
        </div>
    </section>

 
    <section id="about">
        <div className="container-about">
            <div className='content-aboutimg'>
                <img src={aboutpic} alt=''></img>
            </div>
            <div class="content-about">

            <h1>AboutMe</h1>

            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I'm Noor Mohamed, a dedicated Full Stack Web Developer with a passion for crafting seamless and user-centric digital experiences. My journey into the world of web development began with a fascination for creating innovative solutions that blend both functionality and aesthetics. Armed with a solid foundation in front-end technologies such as HTML, CSS, and JavaScript, coupled with expertise in back-end development using frameworks like Django, I strive to bring ideas to life through clean, efficient, and scalable code.
            </p>
            <button>
            <a href={noor} download>Download CV</a>
            </button>
            </div>
        </div>
    </section>

    <section id="skills">
            
        <div className="container-skills">
        <h2>Skills</h2>
        <div className="content-skill">
            <ul>
                <li><img src={html} style={{height:'50px',width:'50px' }}alt=''></img><p>HTML5</p></li>
                <li><img src={css} style={{height:'50px',width:'50px' }}alt=''></img><p>CSS3</p></li>
                <li><img src={js} style={{height:'50px',width:'50px' }}alt=''></img><p>JavaScript</p></li>
                <li><img src={react} style={{height:'50px',width:'50px' }}alt=''></img><p>React.js</p></li>
                <li><img src={python} style={{height:'50px',width:'50px' }}alt=''></img><p>Python</p></li>
                <li><img src={sql} style={{height:'50px',width:'50px' }}alt=''></img><p>Mysql</p></li>
                <li><img src={django} style={{height:'50px',width:'50px' }}alt=''></img><p>Django</p></li>
                <li><img src={flask} style={{height:'50px',width:'50px' }}alt=''></img><p>Flask</p></li> 
               
            </ul>
        </div>
        </div>
    </section>

    <section id="project">
        <div className="container-project">
            <div id="title">
            <h2>Projects</h2>
            </div>
            <div id="projects">
                <div className='card'>
                    <div className='card-inner'>
                        <div className='card-front'>
                           
                            <img src={pro1} alt='qr based food ordering system'></img>
                            <p>QR Based food ordering system</p>
                        </div>
                        <div className='card-back'>
                            <p>This project work aims to propose a QR based smart
dinning system for simplify the restaurant functionalities
using smartphones.</p> <a href='https://github.com/Azard2026/qr-based-smart-dinning-system'>click to view</a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <div className='card-front'>
                           
                            <img src={pro2} alt='Online Book shop'></img>
                            <p>Online Book shop</p>
                        </div>
                        <div className='card-back'>
                            <p>This website is used for online bookstore website
where users can browse and purchase books.</p> <a href='https://bookapp-5ils.onrender.com/'>click to view</a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <div className='card-front'>
                           
                            <img src={pro3} alt='Company website'></img>
                            <p>Company website</p>
                        </div>
                        <div className='card-back'>
                            <p>This website is used for the client know about the
Company details and contact them.</p> <a href='https://tack-chan-tech.vercel.app/'>click to view</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div className="container-contact">
            <div className='contacts'>
            <h2>Contact Me</h2>
            <div id='socialmedia'>
                <a href='https://www.linkedin.com/in/noormohamed-a-ba315525a/' target='_blank' rel="noreferrer"><GrLinkedin />LinkedIn</a>
                <a href='mailto:noormohamedazar20@gmail.com' target='_blank' rel="noreferrer"><MdAttachEmail />noormohamedazar20@gmail.com</a>
                <a href='https://www.instagram.com/a_z_a_r_20?igsh=MWJuZWs5bGo2bmNmNw==' target='_blank' rel="noreferrer"><ImInstagram />a_z_a_r_20</a>          
            </div>
            
            </div>
            <div id='line'>
                
            </div>
            <div className="content">
                <ContactUs/>            
            </div>
        </div>
    </section>

    <footer>
        <div>
            <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
    </footer> 
  
  </div>
  );
}

export default App;
