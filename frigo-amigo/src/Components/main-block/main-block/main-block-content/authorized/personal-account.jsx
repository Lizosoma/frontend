import React, { useState } from 'react';
import Users from './users/users';
import styles from './personal-account.module.css';
import Settings from './settings/settings';

const PersonalAccount = () => {
  const [isSettings, setIsSettings] = useState(false);

  return (
    <>
      <button
        className={!isSettings ? styles.settings : `${styles.settings} ${styles.turned}`}
        onClick={() => setIsSettings(!isSettings)}
      ></button>
      {!isSettings && <Users />}
      {isSettings && <Settings />}
    </>
  );
};

export default PersonalAccount;
