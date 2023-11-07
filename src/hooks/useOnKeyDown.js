import React from "react";

function useOnKeyDown(key, task) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === key) {
                task();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [key, task]);
}

export default useOnKeyDown;