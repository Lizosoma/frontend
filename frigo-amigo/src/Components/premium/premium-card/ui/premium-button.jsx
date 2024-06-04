import React from 'react';
import styles from './premium-button.module.css';
import cart from '../../../../assets/Pictures/premium-cart.svg';
import cartline from '../../../../assets/Pictures/premium-cartline.svg';

const PremiumButton = ({ cost }) => {
  return (
    <button className={styles.button}>
      {cost}
      <img className={styles.line} src={cartline} alt="line" />
      <img className={styles.cart} src={cart} alt="cart" />
    </button>
  );
};

export default PremiumButton;
