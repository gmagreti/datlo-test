export function getColor(population: number) {
  if (population > 2000) return '#28F505'
  if (population > 1000) return '#00EB33'
  if (population > 800) return '#7DF570'
  if (population > 700) return '#2BE03B'
  if (population > 600) return '#22E08F'
  if (population > 500) return '#70E09E'
  if (population > 300) return '#53E080'
  if (population > 200) return '#83E0B2'
  if (population > 100) return '#98E0BD'
  return '#A8E0C7'
}
