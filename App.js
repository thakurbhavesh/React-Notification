// App.js
import React from "react";

function App() {
  // Request notification permission
  const requestPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          alert("Permission granted! You can now receive notifications.");
        } else if (permission === "denied") {
          alert("Permission denied! Notifications won't work.");
        }
      });
    } else {
      alert("Your browser does not support notifications.");
    }
  };

  // Trigger a notification
  const showNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("Hello from React!", {
        body: "This is a browser notification triggered by React.",
        icon: "https://via.placeholder.com/128", // Optional icon
      });
    } else {
      alert("Please allow notifications first.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Browser Notifications</h1>
      <button onClick={requestPermission}>Request Permission</button>
      <button onClick={showNotification} style={{ marginLeft: "10px" }}>
        Show Notification
      </button>
    </div>
  );
}

export default App;
