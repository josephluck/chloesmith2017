export function getNextImageScrollPos(): number | null {
  const container = document.querySelector('.js-scroll-container')
  const navBar = document.querySelector('.js-nav-bar')
  const images = document.querySelectorAll('.js-image')
  if (!container) {
    return null
  }
  const currentScrollPos = container.scrollLeft + navBar.clientWidth
  const nextImage = ([] as any).find.call(images, image => {
    return image.offsetLeft > currentScrollPos
  })
  if (nextImage) {
    return nextImage.offsetLeft - navBar.clientWidth
  } else {
    return null
  }
}

export function smoothHorizontalScroll({
  container,
  target,
  duration = 400,
}) {
  const tween = function (start, end, duration, easing) {
    const delta = end - start
    let startTime
    if (window.performance && window.performance.now) {
      startTime = performance.now()
    } else if (Date.now) {
      startTime = Date.now()
    } else {
      startTime = new Date().getTime()
    }
    const tweenLoop = function (time?: number) {
      const t = (!time ? 0 : time - startTime)
      const factor = easing(null, t, 0, 1, duration)
      container.scrollLeft = start + delta * factor
      if (t < duration && container.scrollLeft !== end) {
        window.requestAnimationFrame(tweenLoop)
      }
    }
    tweenLoop()
  }

  tween(container.scrollLeft, target, duration, ease)
  window.setTimeout(() => {
    container.scrollLeft = target
  }, duration + 100)
}

export function scrollListener(e) {
  const isVertical = e.deltaY !== 0

  if (isVertical) {
    const scrollContainer = document.querySelector('.js-scroll-container')
    const scrollContainerScrollWidth = scrollContainer.scrollWidth
    const windowWidth = window.innerWidth
    if (scrollContainerScrollWidth > windowWidth) {
      const nextScrollPos = scrollContainer.scrollLeft - (e.deltaY * 2)
      scrollContainer.scrollLeft = nextScrollPos
      e.preventDefault()
    }
  }
}

function ease(x, t, b, c, d) {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t + b
  } else {
    return -c / 2 * ((--t) * (t - 2) - 1) + b
  }
}
