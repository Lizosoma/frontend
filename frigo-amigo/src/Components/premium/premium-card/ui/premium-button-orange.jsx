import React from 'react';
import styles from './premium-button-orange.module.css';
import cart from '../../../../assets/Pictures/premium-cart-orange.svg';
import cartline from '../../../../assets/Pictures/premium-cartline-orange.svg';

const PremiumButtonOrange = ({ cost }) => {
  return (
    <button className={styles.button}>
      {cost}
      <img className={styles.line} src={cartline} alt="line" />
      <img className={styles.cart} src={cart} alt="cart" />
    </button>
  );
};

export default PremiumButtonOrange;
