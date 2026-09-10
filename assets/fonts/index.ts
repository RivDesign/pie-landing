import localFont from "next/font/local";

export const modamFont = localFont({
  variable: "--font-modam",
  src: [
    {
      path: "../../assets/fonts/modam/ModamFaNum-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../assets/fonts/modam/ModamFaNum-Light.ttf",
      weight: "300",
    },
    {
      path: "../../assets/fonts/modam/ModamFaNum-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/modam/ModamFaNum-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../assets/fonts/modam/ModamFaNum-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../assets/fonts/modam/ModamFaNum-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../assets/fonts/modam/ModamFaNum-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../assets/fonts/modam/ModamFaNum-Black.ttf",
      weight: "900",
    },
  ],
  fallback: ["Arial"],
  adjustFontFallback: "Arial",
});
