# Hướng dẫn đổi màu

Màu CV và giao diện web lấy từ **[`theme.ts`](./theme.ts)** (`light` / `dark`).

## Cách đổi

1. Mở `src/color/theme.ts`.
2. Sửa hex trong `light` (giao diện sáng) và/hoặc `dark`.
3. Lưu → `npm run dev`.

`layout.tsx` inject biến `--cv-*` — không cần sửa từng component.

## Nhóm biến chính

| Biến | Vai trò |
|------|---------|
| `cvAccent` | Link, tiêu đề phụ, highlight |
| `cvBg` / `cvFg` | Nền & chữ CV |
| `cvMuted` | Chữ phụ |
| `cvBorder` | Viền, lưới nền |
| `cvSurface` | Nền trang web |
| `cvPrint*` | Màu khi in (luôn nền sáng) |

## Palette Tailwind (`@theme` trong globals.css)

Màu `graphite-*`, `electric-*`, `emerald-*` dùng cho accent trang trí — chỉnh trong `globals.css` nếu cần đổi gradient/ glow.

## In PDF

Bật **In nền** khi xuất PDF để giữ sidebar tối (layout dark).
