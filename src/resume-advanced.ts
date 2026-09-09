import type { Resume } from "@/lib/schema/resume";
import type { SkillCategory } from "@/lib/schema/resume";

/**
 * RESUME ADVANCED — Võ Hoàng Hải Nghĩa (ZakShinn)
 * Hướng dẫn: src/huongdan.md
 */

export const ADVANCED_SECTION_ORDER = [
  "projects",
  "certifications",
  "opensource",
] as const;

export const resumeAdvanced = {
  sectionOrderOverride: undefined as Resume["sectionOrder"] | undefined,

  skillsExtra: [
    {
      id: "",
      label: "",
      skills: [
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "advanced" as const },
      ],
    },
    {
      id: "",
      label: "",
      skills: [
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "intermediate" as const },
      ],
    },
    {
      id: "design",
      label: "Thiết kế đồ họa",
      skills: [
        { name: "Photoshop", proficiency: "advanced" as const },
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "intermediate" as const },
        { name: "", proficiency: "advanced" as const },
      ],
    },
    {
      id: "",
      label: "",
      skills: [
        { name: "", proficiency: "advanced" as const },
        { name: "", proficiency: "intermediate" as const },
      ],
    },
  ] satisfies SkillCategory[],

  projects: [
    {
      id: "",
      name: "",
      description:
        "",
      github: "",
      stack: ["", "", "", ""],
      architecture:
        "",
      achievements: [
        "",
        "",
      ],
      featured: true,
    },
    {
      id: "",
      name: "",
      description:
        "",
      github: "",
      stack: ["", "", "", ""],
      achievements: [
        "",
        "",
      ],
      featured: true,
    },
    {
      id: "",
      name: "",
      description: "",
      stack: [""],
      achievements: [
        "ị",
      ],
      featured: false,
    },
    {
      id: "",
      name: "",
      description: "",
      stack: [""],
      architecture:
        "",
      achievements: [
        "",
      ],
      featured: false,
    },
    {
      id: "",
      name: "r",
      description:
        "",
      stack: [""],
      achievements: [
        "",
        "",
      ],
      featured: true,
    },
  ],

  certifications: [
    {
      id: "",
      name: "",
      issuer:
        "",
      date: "",
    },
    {
      id: "",
      name: "",
      issuer: "",
    },
  ],

  openSource: {
    githubUsername: "dellbitten",
    repositories: [
      {
        name: "",
        description: "",
        url: "",
      },
      {
        name: "",
        description: "",
        url: "",
      },
    ],
    highlights: [
      "",
      "",
      "",
    ],
  },
};

export type ResumeAdvanced = typeof resumeAdvanced;
