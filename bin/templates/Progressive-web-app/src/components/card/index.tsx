import React from 'react';
import internal from 'stream';
import { CardDataModel } from '../../generic/models/card-data.model';
import styles from './card.module.css';



export const CardComponent = (props: CardDataModel) => {
  return (
    <a href={props.link} className={styles.card}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.desc}</p>
    </a>
  );
}