// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: {
          name: "Nunito",
          weights: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
          ],
        },
        display: "Limelight",
      },
    }),
  ],
  theme: {
    colors: {
      primary: "#7F824D",
      secondary: "#F49E10",
      tertiary: "#854D5D",
    },
  },
});
