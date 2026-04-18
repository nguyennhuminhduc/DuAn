import { useEffect, useRef } from 'react'

export default function MomentumChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    const A = [2, 4, 6, 3, 5, 8, 6, 4, 7, 9, 5, 3, 6, 8, 7, 5, 4, 6, 9, 8, 7, 6, 5, 4, 3, 5, 7, 8, 6, 4]
    const M = [5, 3, 4, 6, 4, 3, 5, 7, 4, 3, 6, 8, 5, 3, 4, 6, 5, 4, 3, 4, 5, 4, 3, 5, 6, 4, 5, 3, 4, 5]
    const mx = Math.max(...A, ...M)
    const H = 28

    const chart = chartRef.current
    chart.innerHTML = ''

    A.forEach((a, i) => {
      const col = document.createElement('div')
      col.className = 'chart-col'
      const aH = Math.round((a / mx) * H)
      const mH = Math.round((M[i] / mx) * H)
      col.innerHTML = `
        <div style="flex:1;display:flex;align-items:flex-end">
          <div class="bar-a" style="width:100%;height:${aH}px"></div>
        </div>
        <div class="bar-gap"></div>
        <div style="flex:1;display:flex;align-items:flex-start">
          <div class="bar-m" style="width:100%;height:${mH}px"></div>
        </div>
      `
      chart.appendChild(col)
    })
  }, [])

  return (
    <div className="card">
      <div className="momentum-wrap">
        <div className="momentum-top">
          <span className="momentum-label">Attack Momentum</span>
          <span className="momentum-link">Add to website ∨</span>
        </div>
        <div className="chart-canvas" id="chart" ref={chartRef}></div>
        <div className="chart-labels">
          <span>🔴 Arsenal</span>
          <span>AS Monaco 🔴</span>
        </div>
      </div>
    </div>
  )
}