/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        color: {
            darkT: "#222222",
            grayT: "#A0A0A0",
            borderGrayC: "#E5E5E5",
            bg: "FFFEF5",
        },
        extend: {
            backgroundImage: {
                gradientMain: "linear-gradient(90deg, #FFDF00 0%, #FDCC0D 100%)",
                gradientMain2: "linear-gradient(90deg, #FDCC0D 0%, #FF9529 100%)",
                gradientImg:
                    "linear-gradient(180deg, rgba(255, 223, 0, 0.10) 10%, rgba(242, 139, 15, 0.70) 70%, #FFF 100%), url(<path-to-image>) lightgray 50% / cover no-repeat",
            },
            boxShadow: {
                bx01: ' 0px 6px 36px 0px rgba(40, 35, 0, 0.05)',
            },
        },
    },
    plugins: [],
};
