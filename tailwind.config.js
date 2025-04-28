import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        custom: {
          css: {
            "--tw-prose-body": theme("colors.gray.200"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-lead": theme("colors.gray.300"),
            "--tw-prose-links": theme("colors.blue.400"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-counters": theme("colors.gray.400"),
            "--tw-prose-bullets": theme("colors.gray.600"),
            "--tw-prose-hr": theme("colors.gray.700"),
            "--tw-prose-quotes": theme("colors.gray.200"),
            "--tw-prose-quote-borders": theme("colors.gray.700"),
            "--tw-prose-captions": theme("colors.gray.500"),
            "--tw-prose-code": theme("colors.green.400"),
            "--tw-prose-pre-code": theme("colors.gray.100"),
            "--tw-prose-pre-bg": theme("colors.gray.900"),
            "--tw-prose-th-borders": theme("colors.gray.600"),
            "--tw-prose-td-borders": theme("colors.gray.700"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
