/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH ẢNH ĐẠI DIỆN — chỉnh tại file này
 *  Hướng dẫn: src/avatar/HUONG_DAN_ANH_DAI_DIEN.md
 * ═══════════════════════════════════════════════════════════════
 */

export type AvatarObjectFit = "cover" | "contain";

export interface AvatarConfig {
  enabled: boolean;
  /** Đường dẫn từ `public/` hoặc URL — ưu tiên hơn `personal.avatar` trong resume.ts */
  src: string;
  alt: string;
  objectFit: AvatarObjectFit;
  hideInPrint: boolean;
}

export const avatarConfig: AvatarConfig = {
  enabled: true,
  src: "",
  alt: "",
  objectFit: "cover",
  hideInPrint: false,
};

/** URL ảnh hiển thị — config.ts ưu tiên, sau đó fallback từ resume */
export function resolveAvatarSrc(resumeAvatar?: string): string {
  if (avatarConfig.enabled && avatarConfig.src) {
    return avatarConfig.src;
  }
  return resumeAvatar?.trim() ?? "";
}
