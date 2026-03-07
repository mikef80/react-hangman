export const disableDevTools = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  document.addEventListener('keydown', (e) => {
    // F12
    if (e.key === 'F12') e.preventDefault()
    
    // Ctrl+Shift+I (Chrome, Edge)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") e.preventDefault();

    // Ctrl+Shift+J (Chrome console)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") e.preventDefault();

    // Ctrl+Shift+C (inspect element)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") e.preventDefault();

    // Ctrl+U (view source)
    if (e.ctrlKey && e.key.toLowerCase() === "u") e.preventDefault();
  })
};
