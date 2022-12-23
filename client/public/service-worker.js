this.addEventListener('activate', function (event) {
  console.log('Service Worker Activated');
});

this.addEventListener('push', async function (event) {
  console.log('Notification will be displayed here');
});
