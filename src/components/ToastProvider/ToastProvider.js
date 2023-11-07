import React from 'react';

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    { id: "1", variant: "notice", message: "Sample notice" },
    { id: "2", variant: "warning", message: "Sample warning" }
  ]);

  function dismissToast(toastId) {
    let nextToasts = [...toasts];
    nextToasts = nextToasts.filter(toast => toast.id !== toastId)
    setToasts(nextToasts);
  }

  function createToast(toast) {
    let nextToasts = [...toasts];
    nextToasts.push({
      id: crypto.randomUUID(),
      variant: toast.variant,
      message: toast.message
    });
    setToasts(nextToasts);
  }

  return (
    <ToastsContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
