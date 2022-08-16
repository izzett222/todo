import styled from 'styled-components'

export const Loader = styled.div`
display: inline-block;
    width: 18px;
    padding: 3px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #25b09b;
    --_m: 
        conic-gradient(#0000 10%,#000),
        linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: s3 1s infinite linear;
    }
    @keyframes s3 {to{transform: rotate(1turn)}
` 

export const FullscreenLoader = styled.div`
    width: 100px;
    aspect-ratio: 1;
    height: fit-content;
    display: grid;
    &::before,
    &::after {    
        content:"";
        grid-area: 1/1;
        --c: radial-gradient(farthest-side,#25b09b 92%,#0000);
        background: 
            var(--c) 50%  0, 
            var(--c) 50%  100%, 
            var(--c) 100% 50%, 
            var(--c) 0    50%;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        animation: s2 1s infinite;
    }
    &::before {
        margin: 4px;
        filter: hue-rotate(45deg);
        background-size: 8px 8px;
        animation-timing-function: linear
    }

    @keyframes s2{ 
    100%{transform: rotate(.5turn)}}
`