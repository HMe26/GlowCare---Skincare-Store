/* --- Code to disable Inspect, Source, and Copy functions --- */
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
});

document.addEventListener('keydown', function(e) {
    // Disable F12 key
    if (e.key === 'F12') {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }
    // Disable Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert("Developer tools are disabled.");
    }
    // Disable Ctrl+U (Windows/Linux) or Cmd+U (Mac)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        alert("Viewing source code is disabled.");
    }
    // Disable Ctrl+C (Windows/Linux) or Cmd+C (Mac) for copying
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        alert("Copying content is disabled.");
    }
});