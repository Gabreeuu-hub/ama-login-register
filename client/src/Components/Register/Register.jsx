import React, { useState } from "react";
import "./Register.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

// Import dos assets
import video from "../../LoginAssets/video.mp4";
import logo from "../../LoginAssets/logo.png";

// Import dos icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
  // UseState para segurar inputs

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  // OnClick faz com que o usuario consiga entrar

  const createUser = (e) => {
    e.preventDefault()
    // Precisaremos de um Axios para criar uma API que se conecte ao servidor
    // Use npm install axios
    Axios.post("http://localhost:3002/register", {
      // Crie uma variável para enviar ao servidor através da rota
      Email: email,
      UserName: userName,
      Password: password,
    }).then(() => {
      console.log("Usuario foi criado!");
      navigateTo('/')

      setEmail('')
      setUserName('')
      setPassword('')
    });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Na AMA</h2>
            <p>Cada gota faz diferença</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Já tem uma conta?</span>
            <Link to={"/"}>
              <button className="btn">Entrar</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Nos deixe conhecer você!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Digite o seu email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="username">Nome</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Digite o seu nome completo"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>


            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Registro</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Esqueceu sua senha? <a href="">Clique aqui!</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
