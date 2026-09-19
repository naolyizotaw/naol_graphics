document.addEventListener('DOMContentLoaded', function () {
  var networkEffect = initVantaNetBackground('#network-background')

  // Keep this available if another part of the app needs to destroy it.
  window.networkEffect = networkEffect
})
