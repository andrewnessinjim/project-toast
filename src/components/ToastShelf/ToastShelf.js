import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, onAToastClose}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast variant={toast.variant} onClose={() => onAToastClose(toast.id)}>
              {toast.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
