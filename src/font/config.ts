/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH FONT — chỉnh tại file này
 *  Hướng dẫn: src/font/HUONG_DAN_DOI_FONT.md
 * ═══════════════════════════════════════════════════════════════
 */

export const fonts = {
  sans: {
    family: "Inter",
    variable: "--font-inter",
  },
  mono: {
    family: "JetBrains Mono",
    variable: "--font-jetbrains",
  },
} as const;

export function getFontCssBlock(theme = fonts): string {
  return [
    ":root {",
    `  --font-sans: var(${theme.sans.variable}), ui-sans-serif, system-ui, sans-serif;`,
    `  --font-mono: var(${theme.mono.variable}), ui-monospace, monospace;`,
    "}",
  ].join("\n");
}
