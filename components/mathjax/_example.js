'use client'
import React from 'react'
import MathJax from 'mathjax'
import { useEffect } from 'react'

const MathJaxExample = () => {
    useEffect(() => {
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [
                    ['$', '$'],
                    ['\\(', '\\)'],
                ],
                processEscapes: true,
            },
            CommonHTML: { linebreaks: { automatic: true } },
            'HTML-CSS': { linebreaks: { automatic: true } },
            SVG: { linebreaks: { automatic: true } },
        })
    }, [])
    return (
        <div>
            <p>This is an inline math formula: $x^2 + y^2 = z^2$.</p>
            <p>
                This is a block math formula: \[
                {/* \int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2} */}
                \]
            </p>
        </div>
    )
}

export default MathJaxExample
