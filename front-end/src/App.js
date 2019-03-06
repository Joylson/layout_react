import React, { Component } from 'react';
import './App.css';
import Facebook from './Image/facebook.png';
import Instagram from './Image/instagram.png';

import Navbar from './Components/Navbar';
import Card from './Components/Card'

const menu = [
  { 'name': 'Home', 'link': '#hello' },
  { 'name': 'Sobre', 'link': '#sobre' },
  { 'name': 'Curriculo', 'link': '#curriculo' }
]

class App extends Component {
  render() {
    return (
      <div >
        <Navbar menu={menu} styleNav={{ backgroundColor: 'rgba(227, 242, 253, 0.5)', lineHeight: '60px' }} />
        <div className="row hello" id="hello">
          <div className="text" >
            <p>Joylson Tavares Miranda</p>
            <hr style={{ backgroundColor: 'white', padding: '2px' }} />
            <Card img={'https://instagram.frao1-1.fna.fbcdn.net/vp/f8781fe97d685ae90987366a136f5406/5D084B60/t51.2885-15/e35/31694757_2028227764086952_8296011807928090624_n.jpg?_nc_ht=instagram.frao1-1.fna.fbcdn.net'} 
            name={'Joylson'} email={'joylsont@gmail.com'} link={'https://www.instagram.com/joylsonmiranda'} />
          </div>
        </div>
        <div className="row aling-tex about" id="sobre">
          <h2>Sobre</h2>
          <p>Com 20 anos cursando Analise e desenvolvimento de sistema na Fatec Dr. Thomas Novelino.
            Possuo diploma tecnico de Informatica cursado na ETEC Dr. Júlio Cardoso maior conhecimento
            em backend e grande interesse e em Data Science. Atuamente trabalhando na empressa Eddydate
            com desenvolvimento em Java.</p>
        </div>
        <div className="corriculo" id="curriculo">
          <div className="row">
            <div className="col-md-6 aling-tex">
              <h2>Java</h2>
              <p>Spring, JSF, JPA, JSP, Hibernate, GWT, Servelet, JWT, Maven. </p>
            </div>
            <div className="col-md-6 aling-tex">
              <h2>PHP</h2>
              <p>Laravel, Wordpress.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 aling-tex">
              <h2>Java Script</h2>
              <p>React , React Native, Angular, Jquery, Node.</p>
            </div>
            <div className="col-md-6 aling-tex">
              <h2>C#</h2>
              <p>Asp.net MVC, Asp.net Api, Entity framawork.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 aling-tex">
              <h2>Python</h2>
              <p>Django</p>
            </div>
            <div className="col-md-6 aling-tex">
              <h2>Outros</h2>
              <p>CSS, HTML, Bootstrap, Materialize, Git, Mercurial.</p>
            </div>
          </div>
        </div>
        <div className="rodape">
          <div className="row">
            <a href="https://www.facebook.com/joylsontavares.miranda" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="img" style={{ width: '60px', height: '60px', borderRadius: '30px', margin : '0 10px'}} />
            </a>
            <a href="https://www.instagram.com/joylsonmiranda" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="img" style={{ width: '60px', height: '60px', borderRadius: '30px' }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
