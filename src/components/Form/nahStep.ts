const nahStep = (
  element: HTMLElement,
  m: number,
  x: number,
  nahStepTimeOut: undefined | number
) => {
  if (nahStepTimeOut) clearTimeout(nahStepTimeOut)

  const l = (1 / (Math.pow(x, 1.25) / 20 + 0.5) - 0.05) * Math.sin(x / 2)

  element.style.left = m + l * 25 + 'px'

  x++

  if (x < 82) {
    nahStepTimeOut = setTimeout(nahStep, 10, element, m, x, nahStepTimeOut)
  } else {
    element.style.left = m + 'px'
  }
}

export default nahStep
