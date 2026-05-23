# Hướng dẫn ảnh đại diện

Ưu tiên cấu hình tại **[`config.ts`](./config.ts)**. Nếu `src` trống, CV dùng `personal.avatar` trong `resume.ts`.

## Thêm ảnh

1. Đặt ảnh trong `public/` (vd: `public/avatar.jpg`).
2. `src/avatar/config.ts`:

```ts
enabled: true,
src: "/avatar.jpg",
alt: "Alex Nguyen",
```

## Không dùng ảnh

```ts
src: "",
```

Và để `personal.avatar: ""` trong `resume.ts` → hiện **2 chữ cái đầu** tên.

## Tuỳ chọn

| Trường | Ý nghĩa |
|--------|---------|
| `enabled` | `false` = không hiện ảnh (chữ cái đầu) |
| `hideInPrint` | `true` = ẩn khi in PDF |

Khuyến nghị: vuông ≥ 200×200 px, WebP/JPG.
