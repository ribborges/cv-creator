export default function Logo() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            id="Capa_1"
            width="1024"
            height="1024"
            fill="#000"
            version="1.1"
            viewBox="0 0 56.212 56.212"
        >
            <defs id="defs1">
                <linearGradient id="linearGradient3">
                    <stop id="stop3" offset="0" stopColor="#7e22ce" stopOpacity="1" />
                    <stop id="stop4" offset="1" stopColor="#be185d" stopOpacity="1" />
                </linearGradient>
                <linearGradient
                    xlinkHref="#linearGradient3"
                    id="linearGradient4"
                    x1="-25.082"
                    x2="-3.275"
                    y1="11.475"
                    y2="33.282"
                    gradientUnits="userSpaceOnUse"
                />
                <filter
                    id="filter2"
                    width="2.475"
                    height="2.196"
                    x="-0.61"
                    y="-0.495"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood
                        id="feFlood1"
                        floodColor="#000"
                        floodOpacity="0.6"
                        result="flood"
                    />
                    <feGaussianBlur
                        id="feGaussianBlur1"
                        in="SourceGraphic"
                        result="blur"
                        stdDeviation="5"
                    />
                    <feOffset
                        id="feOffset1"
                        dx="5"
                        dy="5"
                        in="blur"
                        result="offset"
                    />
                    <feComposite
                        id="feComposite1"
                        in="flood"
                        in2="offset"
                        operator="in"
                        result="comp1"
                    />
                    <feComposite
                        id="feComposite2"
                        in="SourceGraphic"
                        in2="comp1"
                        operator="over"
                        result="comp2"
                    />
                </filter>
            </defs>
            <path
                id="rect1"
                fill="currentColor"
                fillOpacity="1"
                strokeWidth="0.876"
                d="M-36.552.338a5.9 5.9 0 0 0-5.911 5.911v51.777a5.9 5.9 0 0 0 5.91 5.911h44.58a5.9 5.9 0 0 0 5.912-5.911V6.249A5.9 5.9 0 0 0 8.028.34zm5.28 38.328h34.02a2.565 2.565 0 0 1 2.57 2.57 2.565 2.565 0 0 1-2.57 2.571h-34.02a2.565 2.565 0 0 1-2.571-2.57 2.565 2.565 0 0 1 2.57-2.571m0 10.421h34.02a2.565 2.565 0 0 1 2.57 2.571 2.565 2.565 0 0 1-2.57 2.571h-34.02a2.565 2.565 0 0 1-2.571-2.57 2.565 2.565 0 0 1 2.57-2.572"
                transform="matrix(.81862 0 0 .81862 39.782 1.798)"
            />
            <path
                id="path1-3"
                fill="url(#linearGradient4)"
                strokeWidth="1.495"
                d="M-23.978 25.525c-.628-1.635 1.421-3.17 3.17-3.17h1.109a7.33 7.33 0 0 1-1.909-4.938 7.372 7.372 0 0 1 14.744.001c0 1.901-.727 3.63-1.912 4.937h1.06c1.751 0 3.797 1.535 3.17 3.17l-2.051 5.348c-1.748 4.557-13.582 4.557-15.33 0z"
                filter="url(#filter2)"
                transform="matrix(.81862 0 0 .81862 39.782 1.798)"
            />
        </svg>
    );
}