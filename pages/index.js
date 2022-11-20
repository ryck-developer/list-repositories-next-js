import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/luiz-henrique-chaves/repos')
      .then((response) => response.json())
      .then((data) => {
        const repositoriesNames = data.map((item) => item);
        setRepositories(repositoriesNames);
      });
  }, []);

  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <h3>Github</h3>
        <p>
          <mark className={styles.subtitulogit}>@luiz-henrique-chaves</mark>
        </p>
        <ul>
          {repositories.map((repo) => (
            <li key={repo}>{repo.name}</li>
          ))}
        </ul>
      </div>
      <div className={[styles.column, styles.perfil].join(' ')}>Perfil</div>
    </div>
  );
}
