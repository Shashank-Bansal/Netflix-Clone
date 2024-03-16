if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((res) => console.log("service worker registered"))
    .catch((err) => console.log("service worker not registered", err));
}
