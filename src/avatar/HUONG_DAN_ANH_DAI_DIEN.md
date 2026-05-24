# Hướng dẫn ảnh đại diện

Ưu tiên cấu hình tại **[`config.ts`](./config.ts)**. Nếu `src` trống, CV dùng `personal.avatar` trong `resume.ts`.

## Thêm ảnh

1. Đặt ảnh trong `public/` (vd: `public/avatar.jpg`).
2. Mở `src/avatar/config.ts`:

```ts
enabled: true,
src: "/avatar.jpg",
alt: "Alex Nguyen",
```

3. Lưu file và làm mới trình duyệt.

## Không dùng ảnh

```ts
src: "",
```

Và để `personal.avatar: ""` trong `resume.ts` → hiện **2 chữ cái đầu** tên trong khung gradient.

## Tuỳ chọn

| Trường | Ý nghĩa |
|--------|---------|
| `enabled` | `false` = không hiện ảnh (chữ cái đầu) |
| `objectFit` | `cover` hoặc `contain` |
| `hideInPrint` | `true` = ẩn khi in PDF |

## Khuyến nghị

- Vuông ≥ 400×400 px, WebP/JPG, nền trung tính.
- Layout `two-column-modern`: ảnh ở **sidebar trái**, bo góc.
- Layout `single-column-ats`: ảnh ẩn trên mobile, hiện nhỏ bên header desktop.

## Vị trí theo layout

| Layout | Vị trí ảnh |
|--------|------------|
| `two-column-modern` | Sidebar, trên liên hệ |
| `single-column-ats` | Header (desktop), ẩn trên ATS mobile |
| `compact-senior` | Header gọn, cạnh tên |
