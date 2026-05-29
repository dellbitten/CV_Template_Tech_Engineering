import type { LayoutType } from "@/lib/schema/resume";

/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH — src/config.ts
 *  Hướng dẫn: src/huongdan.md
 * ═══════════════════════════════════════════════════════════════
 *
 *  BẬT/TẮT GÌ Ở ĐÂU?
 *  ─────────────────
 *  • UI trang web (nút, nền, export, QR): `configAdvanced.features` + vài cờ bên dưới.
 *  • Nội dung CV (Summary, Experience, Projects…): KHÔNG có cờ trong file này.
 *    → Sửa `resume-basic.ts` / `resume-advanced.ts` (mảng rỗng / xoá dòng).
 *    → Section không còn dữ liệu tự ẩn khi build (`normalizeResume`).
 *
 *  BẢNG `features` — false = ẩn trên web (PDF/DOCX vẫn theo dữ liệu resume)
 *  ┌────────────────────┬──────────────────────────────────────────────┐
 *  │ techBackground     │ Nền grid + hiệu ứng công nghệ phía sau CV    │
 *  │ themeToggle        │ Nút đổi dark / light (header)                │
 *  │ localeToggle       │ Nút VI / EN (cần translationApi)             │
 *  │ layoutSwitcher     │ Nút đổi layout CV (header)                   │
 *  │ showQrCode         │ Khối QR trong header CV (+ qrContactEnabled) │
 *  │ exportPrint        │ Nút "In CV"                                    │
 *  │ exportPdf          │ Nút tải PDF                                    │
 *  │ exportDocx         │ Nút tải DOCX                                   │
 *  │ translationApi     │ Gọi API dịch + cho phép localeToggle           │
 *  │ blockGoogle        │ (dự kiến) chặn font/CSP/dịch qua Google       │
 *  └────────────────────┴──────────────────────────────────────────────┘
 *
 *  CÁC SECTION CV — ẩn bằng dữ liệu (không qua config.ts)
 *  summary | skills | experience | education | languages
 *  projects | certifications | opensource  → resume-advanced.ts
 */

/** Cấu hình cơ bản — SEO, layout mặc định, chặn index */
export const configBasic = {
  /** Tiêu đề tab trình duyệt */
  title: "Nguyễn Thanh Phong — CV | Wind",

  /** URL site (SEO, Open Graph) */
  siteUrl: "https://your-cv.vercel.app",

  /** Mô tả meta */
  description:
    "CV Võ Hoàng Hải Nghĩa (ZakShinn) — Senior System Administrator, DevOps, Lead Developer. MikroTik, Ubuntu, WireGuard, Next.js.",

  /** Layout CV: two-column-modern | single-column-ats | compact-senior */
  defaultLayout: "two-column-modern" as LayoutType,

  /** Giao diện: light | dark | system */
  defaultTheme: "dark" as "light" | "dark" | "system",

  /** Ngôn ngữ mặc định CV: vi | en */
  defaultLocale: "vi" as "vi" | "en",

  /**
   * Chặn Google/Bing index trang CV.
   * true = meta noindex + robots.txt Disallow + header X-Robots-Tag.
   * Đặt false nếu muốn CV xuất hiện trên tìm kiếm.
   */
  blockSearchIndexing: true,
} as const;

/**
 * Cấu hình nâng cao — zoom trình duyệt, tên file export, QR, `features`.
 * Chỉ ảnh hưởng trang web / meta / export UI; không xoá section trong resume.
 */
export const configAdvanced = {
  /** Phóng to CV trên trình duyệt (1 = 100%, 2 = 200%). In ấn luôn 100% */
  browserDisplayScale: 2,

  /** Tiền tố tên file khi tải PDF/DOCX (vd. CV_Ten.pdf) */
  exportFilenamePrefix: "CV",

  /**
   * Cho phép gắn QR liên hệ vào header CV.
   * Hiển thị thật cần cả hai: qrContactEnabled = true VÀ features.showQrCode = true.
   */
  qrContactEnabled: true,

  /**
   * Bật/tắt thành phần giao diện trang CV (true = hiện, false = ẩn).
   * Không điều khiển: Summary, Skills, Experience, Education, Languages,
   * Projects, Certifications, Open Source — xem resume-basic / resume-advanced.
   */
  features: {
    /** Bật/tắt nền grid + hiệu ứng công nghệ phía sau CV */
    techBackground: true,
    /** Bật/tắt nút đổi giao diện dark / light trên header */
    themeToggle: true,
    /** Bật/tắt nút đổi ngôn ngữ VI / EN trên header (cần translationApi) */
    localeToggle: true,
    /** Bật/tắt nút đổi layout CV trên header */
    layoutSwitcher: true,
    /** Bật/tắt khối QR liên hệ trong phần header CV (cần qrContactEnabled) */
    showQrCode: true,
    /** Bật/tắt nút "In CV" trong nhóm Export */
    exportPrint: true,
    /** Bật/tắt nút tải file PDF */
    exportPdf: true,
    /** Bật/tắt nút tải file DOCX */
    exportDocx: true,
    /** Bật/tắt API dịch `/api/translate` (MyMemory only, không Google/Lingva) */
    translationApi: true,
    /**
     * Bật/tắt chế độ chặn dịch vụ Google toàn cục:
     * - font hệ thống (không fonts.googleapis.com)
     * - CSP chặn domain Google
     * - dịch không qua Google Translate
     */
    blockGoogle: true,
  },
} as const;

/** Gộp cấu hình — dùng trong app */
export const appConfig = {
  ...configBasic,
  ...configAdvanced,
} as const;

export type AppConfig = typeof appConfig;
