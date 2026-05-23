# Hướng dẫn nhập liệu — Tech Engineering

Mẫu CV kỹ thuật (Software, DevOps, Cloud). Nội dung chính: **`src/data/resume.ts`**.

| Tuỳ chỉnh | File | Hướng dẫn |
|-----------|------|-----------|
| Nội dung CV | `src/data/resume.ts` | File này + `resume.md` (chi tiết) |
| Layout / theme / QR | `src/data/config.ts` | `config.md` |
| Ảnh đại diện | `src/avatar/config.ts` | `src/avatar/HUONG_DAN_ANH_DAI_DIEN.md` |
| Màu sắc | `src/color/theme.ts` | `src/color/HUONG_DAN_DOI_MAU.md` |
| Font | `src/font/config.ts` + `layout.tsx` | `src/font/HUONG_DAN_DOI_FONT.md` |

## Quy trình

1. Sửa `resume.ts` (và/hoặc `config.ts`, `avatar/config.ts`, `color/theme.ts`)
2. `npm run dev` → http://localhost:3000
3. `npm run build` → deploy

## Layout (`resume.meta.layout` hoặc `config.defaultLayout`)

- `two-column-modern`
- `single-column-ats`
- `compact-senior`

## Xuất file

- **In CV** — A4 (bản in không bị zoom ×2)
- **DOCX** — từ dữ liệu `resume.ts`

## Ngôn ngữ

`resume.meta.locale`: `"vi"` hoặc `"en"`.
