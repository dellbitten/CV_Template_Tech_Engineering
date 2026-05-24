# Hướng dẫn nhập liệu — Tech Engineering

Mẫu CV kỹ thuật (Software, DevOps, Cloud, Data). Nội dung chính: **`src/data/resume.ts`**.

| Tuỳ chỉnh | File | Hướng dẫn |
|-----------|------|-----------|
| Nội dung CV | `src/data/resume.ts` | File này + `resume.md` (chi tiết) |
| Layout / theme / QR | `src/data/config.ts` | `config.md` |
| Ảnh đại diện | `src/avatar/config.ts` | `src/avatar/HUONG_DAN_ANH_DAI_DIEN.md` |
| Màu sắc | `src/color/theme.ts` | `src/color/HUONG_DAN_DOI_MAU.md` |
| Font | `src/font/config.ts` + `layout.tsx` | `src/font/HUONG_DAN_DOI_FONT.md` |

## Layout chuẩn ngành kỹ thuật

| Layout | Phù hợp | Cấu trúc |
|--------|---------|----------|
| `two-column-modern` | Dev full-stack, DevOps | Sidebar: liên hệ, skills (proficiency), certs · Main: summary, experience, projects, open-source |
| `single-column-ats` | Ứng tuyển qua ATS, HR screen | Một cột, thứ tự chuẩn, không sidebar |
| `compact-senior` | Tech lead / architect 10+ năm | Header gọn, nhiều kinh nghiệm, ít trang trí |

Chọn layout trong `resume.meta.layout` hoặc `config.defaultLayout`.

## Quy trình chỉnh sửa

1. Sửa `resume.ts` (và/hoặc `config.ts`, `avatar/config.ts`, `color/theme.ts`).
2. Lưu file và làm mới trình duyệt trên trang xem CV.
3. Kiểm tra bản in (Ctrl+P) và xuất DOCX nếu cần gửi file.

## Xuất file

- **In CV** — khổ A4, bản in scale 1:1 (không bị zoom ×2 như màn hình).
- **DOCX** — xuất từ dữ liệu `resume.ts`, phù hợp gửi email / upload portal.

## Ngôn ngữ

`resume.meta.locale`: `"vi"` hoặc `"en"`.

## Chi tiết từng trường

Xem thêm **`resume.md`** và **`resume.schema.md`** trong cùng thư mục `src/data/`.
