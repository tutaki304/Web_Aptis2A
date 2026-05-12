import type { Course, Testimonial, FAQItem, Feature } from "@/types";

export const FEATURES: Feature[] = [
  {
    icon: "🎯",
    title: "Luyện đề sát thực tế",
    description: "Đề thi bám sát format APTIS chính thức của British Council.",
  },
  {
    icon: "📊",
    title: "Phân tích điểm yếu",
    description: "Hệ thống tự động phân tích và chỉ ra kỹ năng cần cải thiện.",
  },
  {
    icon: "🤖",
    title: "Chấm bài AI",
    description: "Writing & Speaking được chấm tự động với phản hồi chi tiết.",
  },
  {
    icon: "📱",
    title: "Học mọi lúc mọi nơi",
    description: "Giao diện tối ưu trên cả mobile và desktop.",
  },
];

export const COURSES: Course[] = [
  {
    id: "aptis-general",
    title: "APTIS General",
    description: "Luyện thi toàn diện 4 kỹ năng: Nghe, Nói, Đọc, Viết.",
    level: "Intermediate",
    duration: "3 tháng",
    price: 990000,
    badge: "Phổ biến nhất",
  },
  {
    id: "aptis-advanced",
    title: "APTIS Advanced",
    description: "Nâng cao dành cho mục tiêu C1/C2 CEFR.",
    level: "Advanced",
    duration: "3 tháng",
    price: 1290000,
  },
  {
    id: "aptis-core",
    title: "APTIS Core Grammar",
    description: "Củng cố ngữ pháp và từ vựng nền tảng.",
    level: "Beginner",
    duration: "1 tháng",
    price: 490000,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Nguyễn Thị Lan",
    score: "B2",
    content: "Nhờ luyện tập trên OnThiAPTIS mình đã đạt B2 sau 2 tháng. Đề thi rất sát với thực tế!",
  },
  {
    id: "2",
    name: "Trần Minh Khoa",
    score: "C1",
    content: "Tính năng chấm Writing bằng AI giúp mình tiết kiệm rất nhiều thời gian chờ feedback.",
  },
  {
    id: "3",
    name: "Lê Thị Hoa",
    score: "B1",
    content: "Giao diện dễ dùng, giải thích đáp án rõ ràng. Rất phù hợp cho người mới bắt đầu.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "APTIS là gì?",
    answer:
      "APTIS là bài thi tiếng Anh do British Council phát triển, được công nhận rộng rãi tại Việt Nam cho mục đích tuyển dụng và thăng tiến trong cơ quan nhà nước.",
  },
  {
    question: "Tôi cần học bao lâu để đạt B2?",
    answer:
      "Tuỳ trình độ xuất phát, thông thường học viên cần 2–3 tháng luyện tập đều đặn 1–2 giờ/ngày để đạt B2.",
  },
  {
    question: "Có hỗ trợ refund không?",
    answer: "Chúng tôi hoàn tiền 100% trong 7 ngày đầu nếu bạn không hài lòng với khoá học.",
  },
  {
    question: "Truy cập khoá học trong bao lâu?",
    answer: "Bạn có truy cập trọn đời sau khi mua khoá học, bao gồm mọi cập nhật đề mới trong tương lai.",
  },
];
