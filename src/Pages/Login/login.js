import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { DiApple } from 'react-icons/di';
import { EMAIL_VALIDATION } from '../../Utils/regex';
import { MdOutlineDeveloperMode } from 'react-icons/md';

import './styles.css';

export default function Login() {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [values, setValues] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    setValues(true);
    console.log(email, password);
  }

  function addError(field, message) {
    setErrors({ ...errors, [field]: message });
  }
  function delError(field) {
    let tmp = errors;
    delete tmp[field];
    setErrors({ ...tmp });
  }

  function handleEmail(email) {
    if (email.length < 6 || email.length > 64) {
      addError('email', 'E-mail deve conter 6 a 30 caracteres');
    } else if (!new RegExp(EMAIL_VALIDATION).test(email)) {
      addError('email', 'Este e-mail não é valido');
    } else {
      delError('email');
    }

    setEmail(email);
  }

  function handlePassword(password) {
    if (password.length < 6 || password.length > 32) {
      addError('password', 'Senha deve conter 6 a 20 caracteres');
    } else {
      delError('password');
    }

    setPassword(password);
  }

  return (
    <section>
      <div className="boxForm ">
        <form action="" className="login" method="POST">
          <legend>Login</legend>
          <div className="positionButtonSocial">
            <button className="buttonSocialLogin googleIcon" type="button">
              <FcGoogle size={20} />
              <p>Continue com o Google</p>
            </button>
            <button className="buttonSocialLogin" type="button">
              <DiApple size={20} />
              <p>Continue com a Apple</p>
            </button>
          </div>
          <div className="input-group">
            <label for="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
            />

            {errors.email && (
              <small className="ErrorStyle">{errors.email}</small>
            )}
          </div>
          <div className="input-group">
            <label for="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
              placeholder="Insira sua senha"
            />
            {errors.password && (
              <small className="ErrorStyle">{errors.password}</small>
            )}
            <small>
              <p>Esqueceu a senha?</p>
            </small>
          </div>
          <div className="positionButton">
            <button type="button" className="botao" onClick={handleSubmit}>
              Entrar
            </button>
          </div>
        </form>
        <Link to="/form" exact>
          <button className="nextPageButtonLogin">
            Ir para proxima Página
          </button>
        </Link>
        <p className="Developer">
          <MdOutlineDeveloperMode size={20} color="white" />
          Desenvolvido por
          <a href="https://linktr.ee/CarolinaCedro"> Carolina Cedro</a>
        </p>
      </div>
    </section>
  );
}
