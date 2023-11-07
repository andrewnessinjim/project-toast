import React from 'react';
import useToasts from '../../hooks/useToasts';

export const ToastsContext = React.createContext();

function ToastProvider({children}) {
  const toastsOps = useToasts();

  return (
    <ToastsContext.Provider value={toastsOps}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
