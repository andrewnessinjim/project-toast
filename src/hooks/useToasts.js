import React from "react";

function useToasts() {
    const [toasts, setToasts] = React.useState([
        { id: "1", variant: "notice", message: "Sample notice" },
        { id: "2", variant: "warning", message: "Sample warning" }
    ]);
    
    function deleteToast(toastId){
        let nextToasts = [...toasts];
        nextToasts = nextToasts.filter(toast => toast.id !== toastId)
        setToasts(nextToasts);
    }

    function addToast(toast) {
        let nextToasts = [...toasts];
        nextToasts.push({
            id: crypto.randomUUID(),
            variant: toast.variant,
            message: toast.message
        });
        setToasts(nextToasts);
    }

    function getToasts() {
        return toasts;
    }

    return {deleteToast, addToast, getToasts};
}

export default useToasts;