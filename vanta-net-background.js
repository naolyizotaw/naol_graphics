(function (global) {
  function initVantaNetBackground(target, options) {
    var element = typeof target === 'string' ? document.querySelector(target) : target

    if (!element) {
      throw new Error('[Vanta NET] Target element was not found')
    }

    if (!global.VANTA || typeof global.VANTA.NET !== 'function') {
      throw new Error('[Vanta NET] Load Three.js and vanta.net.min.js before this script')
    }

    var settings = Object.assign(
      {
        el: element,
        THREE: global.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x0056c4,
        backgroundColor: 0xf7f9fb,
        backgroundAlpha: 1,
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true
      },
      options || {}
    )

    return global.VANTA.NET(settings)
  }

  global.initVantaNetBackground = initVantaNetBackground
})(window)
