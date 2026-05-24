import type { Resume } from "@/lib/schema/resume";
import { DEFAULT_SECTION_ORDER } from "@/lib/schema/resume";
import { appConfig } from "./config";

/**
 * Dữ liệu CV mặc định — Tech Engineering
 *
 * Chỉ nhập nội dung tiếng Việt — bấm EN trên toolbar để dịch tự động sang tiếng Anh.
 * Hướng dẫn: src/data/HUONG_DAN_NHAP_LIEU.md · resume.md
 */
export const defaultResume: Resume = {
  version: "1.0",
  meta: {
    layout: appConfig.defaultLayout,
    theme: appConfig.defaultTheme,
    locale: "vi",
  },
  personal: {
    fullName: "Nguyễn Minh Khôi",
    title: "Kỹ sư phần mềm cao cấp · Platform & Cloud",
    avatar: "",
    contact: {
      email: "minh.khoi@engineer.dev",
      phone: "+84 90 123 4567",
      location: "TP. Hồ Chí Minh, Việt Nam · Làm việc remote",
      linkedin: "https://linkedin.com/in/minhkhoi",
      github: "https://github.com/minhkhoi",
      portfolio: "https://minhkhoi.dev",
      blog: "https://minhkhoi.dev/blog",
      stackoverflow: "https://stackoverflow.com/users/minhkhoi",
    },
    qrEnabled: appConfig.qrContactEnabled,
  },
  summary:
    "Kỹ sư cao cấp với hơn 8 năm kinh nghiệm xây dựng hệ thống phân tán, nền tảng cloud-native và công cụ phát triển. Dẫn dắt team triển khai microservices xử lý hơn 10 triệu request/ngày, rút ngắn thời gian deploy 70% nhờ GitOps, giảm độ trễ API p99 từ 900ms xuống 120ms. Thành thạo Go, TypeScript, Kubernetes và Terraform; ưu tiên độ tin cậy, bảo mật và tác động đo lường được.",
  sectionOrder: [...DEFAULT_SECTION_ORDER],
  skills: [
    {
      id: "languages",
      label: "Ngôn ngữ lập trình",
      skills: [
        { name: "Go", proficiency: "expert" },
        { name: "Rust", proficiency: "advanced" },
        { name: "Python", proficiency: "expert" },
        { name: "TypeScript", proficiency: "expert" },
        { name: "Java", proficiency: "advanced" },
        { name: "C/C++", proficiency: "intermediate" },
        { name: "Bash", proficiency: "advanced" },
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      skills: [
        { name: "React", proficiency: "expert" },
        { name: "Next.js", proficiency: "expert" },
        { name: "Vue", proficiency: "advanced" },
        { name: "TailwindCSS", proficiency: "expert" },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      skills: [
        { name: "Node.js", proficiency: "expert" },
        { name: "FastAPI", proficiency: "expert" },
        { name: "Spring Boot", proficiency: "advanced" },
        { name: "gRPC", proficiency: "advanced" },
      ],
    },
    {
      id: "infrastructure",
      label: "Hạ tầng",
      skills: [
        { name: "Docker", proficiency: "expert" },
        { name: "Kubernetes", proficiency: "expert" },
        { name: "Terraform", proficiency: "expert" },
        { name: "Ansible", proficiency: "advanced" },
      ],
    },
    {
      id: "cloud",
      label: "Cloud",
      skills: [
        { name: "AWS", proficiency: "expert" },
        { name: "Azure", proficiency: "advanced" },
        { name: "GCP", proficiency: "advanced" },
        { name: "Cloudflare", proficiency: "advanced" },
      ],
    },
    {
      id: "databases",
      label: "Cơ sở dữ liệu",
      skills: [
        { name: "PostgreSQL", proficiency: "expert" },
        { name: "MySQL", proficiency: "advanced" },
        { name: "Redis", proficiency: "expert" },
        { name: "MongoDB", proficiency: "advanced" },
      ],
    },
    {
      id: "networking",
      label: "Mạng & Bảo mật",
      skills: [
        { name: "Linux", proficiency: "expert" },
        { name: "Nginx", proficiency: "expert" },
        { name: "WireGuard", proficiency: "advanced" },
        { name: "SIEM", proficiency: "intermediate" },
      ],
    },
    {
      id: "ai",
      label: "AI / ML",
      skills: [
        { name: "PyTorch", proficiency: "advanced" },
        { name: "Hugging Face", proficiency: "advanced" },
        { name: "LangChain", proficiency: "advanced" },
      ],
    },
  ],
  experience: [
    {
      id: "exp-1",
      company: "CloudScale Technologies",
      position: "Kỹ sư nền tảng cao cấp",
      location: "Remote",
      startDate: "2022-03",
      current: true,
      stack: ["Go", "Kubernetes", "Terraform", "AWS", "PostgreSQL", "gRPC"],
      responsibilities: [
        "Phụ trách độ tin cậy nền tảng cho SaaS đa tenant phục vụ hơn 500 khách hàng doanh nghiệp",
        "Thiết kế nền tảng phát triển nội bộ và bộ template golden-path",
      ],
      achievements: [
        "Thiết kế pipeline CI/CD giảm 45% lỗi triển khai",
        "Di chuyển monolith cũ lên Kubernetes; tăng tần suất release từ hàng tháng lên hàng ngày",
        "Xây microservices mở rộng xử lý hơn 10 triệu request/ngày với uptime 99,95%",
        "Tự động hoá hạ tầng bằng Terraform trên 3 region AWS",
        "Tối ưu độ trễ API từ p99 900ms xuống 120ms nhờ cache và tinh chỉnh truy vấn",
      ],
    },
    {
      id: "exp-2",
      company: "FinTech Global",
      position: "Kỹ sư phần mềm II",
      location: "Singapore",
      startDate: "2019-01",
      endDate: "2022-02",
      stack: ["Python", "FastAPI", "React", "Docker", "PostgreSQL"],
      achievements: [
        "Triển khai xử lý thanh toán event-driven với consumer idempotent",
        "Giảm MTTR sự cố 60% nhờ observability stack (Prometheus, Grafana, OpenTelemetry)",
        "Dẫn dắt củng cố bảo mật: OAuth2, mTLS và luân chuyển secret với HashiCorp Vault",
      ],
    },
    {
      id: "exp-3",
      company: "StartupLabs",
      position: "Lập trình viên Full Stack",
      location: "TP. Hồ Chí Minh",
      startDate: "2016-06",
      endDate: "2018-12",
      stack: ["Node.js", "Vue", "MongoDB", "AWS"],
      achievements: [
        "Đưa MVP lên production trong 12 tuần; tăng lên 50k MAU",
        "Triển khai kiểm thử tự động, nâng coverage từ 20% lên 75%",
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      name: "K8s GitOps Controller",
      description: "Operator Kubernetes mã nguồn mở cho triển khai khai báo",
      github: "https://github.com/minhkhoi/k8s-gitops-controller",
      stack: ["Go", "Kubernetes", "controller-runtime", "Prometheus"],
      architecture:
        "Vòng reconciliation với CRD; tích hợp webhook Argo CD và cảnh báo Slack",
      achievements: [
        "1,2k sao GitHub; được 3 công ty áp dụng production",
        "Rút thời gian phát hiện drift từ hàng giờ xuống dưới 2 phút",
      ],
      featured: true,
    },
    {
      id: "proj-2",
      name: "Observability Kit",
      description: "Bộ wrapper OpenTelemetry plug-and-play cho microservices",
      github: "https://github.com/minhkhoi/obs-kit",
      demo: "https://obs-kit.dev",
      stack: ["TypeScript", "Go", "OpenTelemetry", "Grafana"],
      achievements: [
        "Chuẩn hoá tracing trên hơn 40 dịch vụ",
        "Rút thời gian onboard dịch vụ mới từ 2 ngày xuống 2 giờ",
      ],
      featured: true,
    },
    {
      id: "proj-3",
      name: "LLM Pipeline Orchestrator",
      stack: ["Python", "FastAPI", "LangChain", "Redis", "PostgreSQL"],
      architecture: "Hàng đợi job bất đồng bộ với rate limiting và theo dõi chi phí theo tenant",
      achievements: ["Xử lý hơn 2 triệu job inference/tháng với worker autoscaling"],
      featured: false,
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      date: "2024-06",
      credentialId: "SAP-XXXX",
    },
    {
      id: "cert-2",
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      date: "2023-11",
    },
    {
      id: "cert-3",
      name: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023-03",
    },
  ],
  education: [
    {
      id: "edu-1",
      university: "Đại học Bách khoa TP. Hồ Chí Minh",
      degree: "Cử nhân Kỹ thuật",
      major: "Khoa học Máy tính",
      graduationYear: "2016",
      gpa: "3,7/4,0",
    },
  ],
  openSource: {
    githubUsername: "minhkhoi",
    stats: {
      repositories: 42,
      stars: 3200,
      contributions: 1800,
    },
    repositories: [
      {
        name: "k8s-gitops-controller",
        description: "Operator GitOps cho Kubernetes",
        url: "https://github.com/minhkhoi/k8s-gitops-controller",
        stars: 1200,
      },
      {
        name: "obs-kit",
        description: "Công cụ OpenTelemetry",
        url: "https://github.com/minhkhoi/obs-kit",
        stars: 890,
      },
    ],
    highlights: [
      "Maintainer 2 dự án liên quan CNCF với tổng hơn 2k sao",
      "Hơn 50 PR được merge vào công cụ hệ sinh thái Kubernetes upstream",
      "Diễn giả tại meetup K8s địa phương về platform engineering",
    ],
  },
  languages: [
    { name: "Tiếng Anh", level: "Thành thạo công việc" },
    { name: "Tiếng Việt", level: "Bản ngữ" },
    { name: "Tiếng Nhật", level: "Cơ bản (JLPT N4)" },
  ],
};

/** @deprecated Dùng defaultResume — giữ alias để tương thích */
export const sampleResume = defaultResume;
