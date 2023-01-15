export const $ = (s) => document.querySelector(s)

export const after = (t, c) => {
  if (t < 1000) t *= 1000
  setTimeout(c, t)
}
