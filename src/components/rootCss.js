import React from 'react'
import { Global, css } from '@emotion/react'
import alpha from 'color-alpha'
import font from '../../static/font/anton.woff2'
import poppins from '../../static/font/poppins_400.woff2'

const Css = ({children}) => (
    <>
        <Global styles = {css`
            @font-face{
                font-family:anton;
                font-display: fallback;
                src:url(${font}) format("woff2");
            }
            @font-face{
                font-family:poppins;
                font-display: swap;
                src:url(${poppins}) format("woff2");
            }
            :root {
                --font-serif: serif;
                --font-sans-serif: poppins,sans-serif;
                }
            *, :after, :before {
                box-sizing: border-box;
            }
            @media (prefers-reduced-motion: no-preference){
                :root {
                    scroll-behavior: smooth;
                }
            }
            body {
                -webkit-font-smoothing: antialiased;
                font-family: var(--font-sans-serif);
                line-height: 1.6;
                color: ${color.dark};
            }
            a{
                color: inherit;
                text-decoration: none;
            }
            h1,h2,h3,h4 {
                font:inherit;
            }
            ul,h1,h2,h3,h4 {
                padding: 0;
            }
            body, p, ul, h1, h2, h3,h4 {
                margin: 0
            }
            input, label {
                outline: 0;
            }
            svg {
                fill: inherit
            }
            ::selection {
                background-color: ${color.dark};
                color: ${color.white};
            }
            ::-moz-selection {
                background-color: ${color.dark};
                color: ${color.white};
            }
        `}/>
        {children}
    </>
)

const dark = "#131313"
const white = "#fff"
export const color = {
    white : white,
    white90 : alpha(white,"90%"),
    dark : dark,
    dark80 : alpha(dark, "80%"),
    dark50 : alpha(dark, "50%"),
    dark40 : alpha(dark, "40%"),
    dark20 : alpha(dark,"20%"),
    yellow : "#FFD400",
    darkyellow : "#ffaa00"
}
const breakpoints = [576, 768, 992, 1200]
const breakpointsmax = [575, 767, 991, 1199]
export const mx = breakpointsmax.map(bp => `@media (max-width: ${bp}px)`)
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
export default Css