import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import  { ToastsContext } from '../ToastProvider';

function ToastShelf() {
  const {toasts, dismissAllToasts} = React.useContext(ToastsContext);

  React.useEffect(() => {
    function dismissIfEsc(event) {
      if(event.code === "Escape"){
        dismissAllToasts();
      }
    }

    window.addEventListener("keydown", dismissIfEsc);

    return () => window.removeEventListener("keydown", dismissIfEsc);
  }, [dismissAllToasts]);

  return (
    <ol className={styles.wrapper}
    role="region"
    aria-live="polite"
    aria-label="Notification">
      {toasts.map(toast => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              id={toast.id}
              variant={toast.variant}>
                {toast.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
