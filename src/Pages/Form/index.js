import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  EMAIL_VALIDATION,
  MASK_PHONE,
  PHONE_VALIDATION,
} from '../../Utils/regex';

import './styles.css';

export default function Index() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    zipCode: '',
  });

  function addError(field, message) {
    setErrors({ ...errors, [field]: message });
  }
  function delError(field) {
    let tmp = errors;
    delete tmp[field];
    setErrors({ ...tmp });
  }

  function handleValueName(name) {
    if (name.length < 3 || name.length > 40) {
      addError('name', 'Nome deve conter entre 3 a 40 caracteres');
    } else {
      delError('name');
    }
    setName(name);
  }

  function handleValueLastName(lastName) {
    if (lastName.length < 4 || lastName.length > 20) {
      addError('lastName', 'Sobrenome deve conter entre 4 a 20 caracteres');
    } else {
      delError('lastName');
    }
    setLastName(lastName);
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

  function handlePhone(phone) {
    phone = phone.replace(MASK_PHONE.br, '($1) $2-$3');
    if (phone.length < 8 || phone.length > 15) {
      addError('phone', 'Telefone deve ser valido.');
    } else if (!new RegExp(PHONE_VALIDATION.br).test(phone)) {
      addError('phone', 'Telefone deve ser valido');
    } else {
      delError('phone');
    }
    setPhone(phone);
  }

  function handleValueCep(zipCode) {
    if (zipCode.length < 8) {
      addError('zipCode', 'Cep deve ser valido.');
    } else {
      delError('zipCode');
    }
    setZipCode(zipCode);
  }

  return (
    <section>
      <div className="boxForm">
        <form action="" id="formulario" method="POST">
          <legend>Faça seu Cadastro</legend>
          <div className="input-group">
            <label for="nome">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleValueName(e.target.value)}
              placeholder="Insira seu nome"
            />

            {errors.name && <small className="ErrorStyle">{errors.name}</small>}
          </div>
          <div className="input-group">
            <label for="sobrenome">Sobrenome:</label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => handleValueLastName(e.target.value)}
              placeholder="Insira seu sobrenome"
            />
            {errors.lastName && (
              <small className="ErrorStyle">{errors.lastName}</small>
            )}
          </div>
          <div className="input-group">
            <label for="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
              placeholder="Insira seu e-mail"
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
              placeholder="Insira a senha"
            />
            {errors.password && (
              <small className="ErrorStyle">{errors.password}</small>
            )}
          </div>
          <div className="colunas">
            <div className="input-group">
              <label for="telefone">Telefone:</label>
              <span className="form-group-text"></span>
              <input
                type="text"
                id="phone"
                MASK_PHONE="(5456456456)"
                value={phone}
                maxLength={11}
                onChange={(e) => handlePhone(e.target.value)}
                placeholder="(99)99999-9999"
              />
              {errors.phone && (
                <small className="ErrorStyle">{errors.phone}</small>
              )}
            </div>
            <div className="input-group">
              <label for="cep">CEP:</label>
              <input
                type="text"
                id="zipCode"
                maxlength="10"
                value={zipCode}
                onChange={(e) => handleValueCep(e.target.value)}
                placeholder="Insira seu CEP"
              />
              {errors.zipCode && (
                <small className="ErrorStyle">{errors.zipCode}</small>
              )}
            </div>
          </div>
          <div className="colunas">
            <div className="input-group">
              <label for="sexo">Sexo:</label>
              <select name="sexo" id="gender">
                <option value="">Selecione...</option>
                <option value="m">Masculino</option>
                <option value="f">Feminino</option>
                <option value="x">Não informar</option>
              </select>
            </div>
            <div className="input-group ">
              <label for="newsletter">Newsletter</label>
              <div className="positionCheckBox">
                <input type="checkbox" id="newsletter" />
                <small>Desejo receber novidades</small>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="botao">
              Enviar
            </button>
          </div>
        </form>
        <Link to="/" exact>
          <button className="nextPageButtonForm">
            Voltar para Página anterior
          </button>
        </Link>
      </div>
    </section>
  );
}
