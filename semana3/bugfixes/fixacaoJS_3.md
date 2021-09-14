````
function calculaNota(ex, p1, p2) {
  const mediaPonderada = (ex * 1 + p1 * 2 + p2 * 3) / (1 + 2 + 3)
  if (mediaPonderada >= 9) {
  return "A"
  } else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
    return "B"
  } else if (mediaPonderada < 7.5 && mediaPonderada >= 6) {
  return "C"
  } else if (mediaPonderada < 6) {
  return "D"
  }
}
`````