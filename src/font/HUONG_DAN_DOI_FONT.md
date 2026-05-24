# Hướng dẫn đổi font

| Vai trò | Mặc định | File |
|---------|----------|------|
| Sans | Inter | `config.ts` → `fonts.sans` |
| Mono | JetBrains Mono | `config.ts` → `fonts.mono` |

Font tải qua **next/font** trong `src/app/layout.tsx`.

## Đổi font sans

1. Sửa `family` và `variable` trong `src/font/config.ts`.
2. Đổi import `next/font/google` trong `layout.tsx` (vd: `Roboto` → `Roboto({ variable: fonts.sans.variable })`).
3. Lưu file và làm mới trình duyệt.

## Dùng ở đâu

- **Sans** — body, mô tả
- **Mono** — chức danh kỹ thuật (`font-mono` trên title), skill tags

## Gợi ý cho CV kỹ thuật

- Sans: Inter, IBM Plex Sans, Source Sans 3 — dễ đọc trên màn hình và in.
- Mono: JetBrains Mono, Fira Code — nhấn mạnh stack / title, không dùng cho toàn bộ CV.
