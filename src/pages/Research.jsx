import React from 'react';
import styles from '../styles/Research.module.css';

const Research = () => (
  <div className={styles.formPage}>
    <h2>Atribuir Pesquisa</h2>
    <form className={styles.form}>
      <input type="date" placeholder="Data" />
      <input type="time" placeholder="Hora Inicial" />
      <input type="time" placeholder="Hora Final" />
      <input type="text" placeholder="Latitude Inicial" />
      <input type="text" placeholder="Latitude Final" />
      <select><option>Ensolarado</option><option>Nublado</option><option>Chuvoso</option></select>
      <select><option>Norte</option><option>Sul</option></select>
      <input type="number" placeholder="Temperatura do Ar" />
      <input type="number" placeholder="Temperatura da Superfície" />
      <select><option>Fraco</option><option>Moderado</option><option>Forte</option></select>
      <input type="number" placeholder="Temp. Água 3m" />
      <input type="number" placeholder="Temp. Água 5m" />
      <select><option>Acropora</option><option>Montipora</option></select>
      <select><option>Sim</option><option>Não</option><option>Em partes</option></select>
      <select><option>Sim</option><option>Não</option></select>
      <input type="text" placeholder="Se sim, qual doença?" />
      <select><option>Sim</option><option>Não</option></select>
      <button type="submit">Enviar</button>
    </form>
  </div>
);

export default Research;