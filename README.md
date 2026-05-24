# Tech Engineering CV Template

Template CV kỹ thuật — **trang chỉ xem CV**, giao diện tech hiện đại. Chỉnh nội dung trong `src/data/`.

## Layout theo ngành

| Layout | Phù hợp |
|--------|---------|
| `two-column-modern` | Software, DevOps, full-stack |
| `single-column-ats` | Ứng tuyển qua ATS |
| `compact-senior` | Tech lead / architect |

Cấu hình trong `src/data/config.ts` hoặc `resume.meta.layout`.

## Chỉnh CV

| File | Hướng dẫn |
|------|-----------|
| [`src/data/resume.ts`](src/data/resume.ts) | [resume.md](src/data/resume.md) |
| [`src/data/config.ts`](src/data/config.ts) | [config.md](src/data/config.md) |
| Tổng quan | [HUONG_DAN_NHAP_LIEU.md](src/data/HUONG_DAN_NHAP_LIEU.md) |

Sửa file → lưu → làm mới trình duyệt. Deploy production cần build và publish lại.

## Tính năng trang web

- 3 layout (cấu hình trong `config.ts` / `resume.meta`)
- Dark / light (nút header — chỉ đổi cách xem)
- CV phóng **2×** trên trình duyệt (`browserDisplayScale` trong `config.ts`)
- **In CV** (A4 scale 1:1) + tải **DOCX**

Không có editor trên web — chỉnh bằng code trong `src/`.

## Cấu trúc

```
src/data/              ← Dữ liệu CV + hướng dẫn .md
src/components/cv/     ← UI hiển thị
src/app/page.tsx       ← Trang xem CV
```

## License

MIT — [LICENSE](LICENSE)
