// MyButtonComponent.js
import React from 'react';

import styles from './MyButtonComponent.module.css';

export default ({ children }) => (
    <button className={styles.myButton}>{children}</button>
)