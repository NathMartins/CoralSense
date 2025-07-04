import React from 'react';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

const corais = [
  { nome: 'Coral-Cérebro', status: 'Em risco' },
  { nome: 'Coral-Elkhorn', status: 'Criticamente ameaçado' },
  { nome: 'Coral-Azul', status: 'Estável' }
];

const Home = () => (
  <div className={styles.container}>
    <h2>Corais em Destaque</h2>
    <div className={styles.cardList}>
      {corais.map((coral, index) => (
        <Card key={index} nome={coral.nome} status={coral.status} />
      ))}
    </div>
  </div>
);

export default Home;