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

/** Ảnh đại diện + favicon — `public/avatar/anh_dai_dien.png` */
export const DEFAULT_AVATAR_SRC = "/avatar/anh_dai_dien.png";

export const avatarConfig: AvatarConfig = {
  enabled: true,
  src: DEFAULT_AVATAR_SRC,
  alt: "Ảnh đại diện — thay bằng ảnh của bạn",
  objectFit: "cover",
  hideInPrint: false,
};

/** URL ảnh hiển thị — config.ts → resume.ts → placeholder mẫu */
export function resolveAvatarSrc(resumeAvatar?: string): string {
  if (!avatarConfig.enabled) return "";
  if (avatarConfig.src.trim()) return avatarConfig.src;
  if (resumeAvatar?.trim()) return resumeAvatar.trim();
  return DEFAULT_AVATAR_SRC;
}
