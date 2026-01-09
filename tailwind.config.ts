import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // ✅ 다크모드 완전 OFF (시스템 설정 무시)
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
