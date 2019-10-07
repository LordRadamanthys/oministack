import React from 'react';
import './App.css';
import api from './service/api';

import logo from './assets/logo.svg';
function App() {
  const [email, setEmail] = React.useState()

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await api.post('/sessions', { email })
    const _id = response.data
    console.log(_id)
  }


  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <p> Ofereça <strong>spots</strong>  para programadores e encontre talentos para sua empresa</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input type="email"
            id="email"
            placeholder="seu melhor email"
            value={email}
            onChange={event => setEmail(event.target.value)} />

          <button className="btn" id="btn" type="submit">Enviar</button>
        </form>
      </div>
    </div>


  );
}

export default App;
