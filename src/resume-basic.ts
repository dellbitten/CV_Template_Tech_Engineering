import type {
  Education,
  Experience,
  Language,
  SkillCategory,
} from "@/lib/schema/resume";

/**
 * RESUME BASIC — Võ Hoàng Hải Nghĩa (ZakShinn)
 * Hướng dẫn: src/huongdan.md
 */

export const BASIC_SECTION_ORDER = [
  "summary",
  "skills",
  "experience",
  "education",
  "languages",
] as const;

export const resumeBasic = {
  personal: {
    fullName: "Nguyễn Thanh Phong",
    alias: "ThanhPhongg",
    title:
      "Senior System Administrator · DevOps Engineer · Lead Developer",
    avatar: "",
    contact: {
      email: "thanhphongg280609@gmail.com",
      phone: "084.326.1116",
      birthDate: "28/06/2009",
      location: "Việt Nam · Phường Long An Tỉnh Tây Ninh",
      linkedin: "",
      github: "https://github.com/dellbitten",
      portfolio: "",
      blog: "",
      stackoverflow: "",
      facebook:
        "https://www.facebook.com/phong.nguyen.436992?mibextid=wwXIfr&rdid=MHVcbj6TaJ29Bv0O&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EqFtQWMsf%2F%3Fmibextid%3DwwXIfr",
      zalo: "https://zalo.me/0843261116",
    },
  },

  summary:
    "",

  skills: [
    {
      id: "system-network",
      label: "",
      skills: [
        { name: "", proficiency: "expert" as const },
        { name: "", proficiency: "expert" as const },
        { name: "", proficiency: "expert" as const },
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "advanced" as const },
      ],
    },
    {
      id: "development",
      label: "Phát triển & Tự động hóa",
      skills: [
        { name: "", proficiency: "expert" as const },
        { name: "", proficiency: "expert" as const },
        { name: "", proficiency: "expert" as const },
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "advanced" as const },
        { name: "Git / Github", proficiency: "advanced" as const },
      ],
    },
    {
      id: "devops-tools",
      label: "DevOps & Công cụ",
      skills: [
        { name: "", proficiency: "advanced" as const },
        { name: "Vercel", proficiency: "advanced" as const },
        { name: "", proficiency: "intermediate" as const },
        { name: "", proficiency: "advanced" as const },
      ],
    },
  ] satisfies SkillCategory[],

  experience: [
    {
      id: "",
      company: "",
      position: "",
      location: "",
      startDate: "",
      current: true,
      stack: [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      responsibilities: [
        "",
        "",
      ],
      achievements: [
        "",
        "",
        "",
      ],
    },
    {
      id: "",
      company: "",
      position: "",
      location: "",
      startDate: "",
      current: true,
      stack: ["CNTT", ""],
      achievements: [
        "",
        "",
      ],
    },
    {
      id: "",
      company: "",
      position: "",
      location: "",
      startDate: "",
      current: true,
      stack: [
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      achievements: [
        "",
        "",
        "",
      ],
    },
  ] satisfies Experience[],

    education: [
    {
      id: "edu-thpt",
      university: "Trung Cấp Công nghệ & Du Lịch",
      degree: "Trường ngành",
      graduationYear: "2024-2026",
    },
    {
      id: "edu-thcs",
      university: "THCS Trần Phú ",
      degree: "Trung học cơ sở",
      graduationYear: "2020-2024",
    },
    {
      id: "edu-tieu-hoc",
      university: "Trường Tiểu học Nguyễn Trung Trực",
      degree: "Tiểu học",
      graduationYear: "2015-2020",
    },
  ] satisfies Education[],

  languages: [
    { name: "Tiếng Việt", level: "Bản ngữ" },
    { name: "Tiếng Anh", level: "Đọc tài liệu kỹ thuật" },
  ] satisfies Language[],
};

export type ResumeBasic = typeof resumeBasic;
