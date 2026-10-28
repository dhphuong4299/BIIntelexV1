# Projects & Technology — Layout & Implementation Notes

## Cấu trúc

- Hero typography đơn giản, không dùng ảnh nền viễn tưởng.
- Bốn capability cards hoặc 4 hàng nếu cần mô tả dài.
- Directory IN-01…IN-06, filter AI/Data/IoT/Automation.
- Detail mỗi sáng kiến mở trang/anchor riêng khi đủ tài liệu; chưa có minh chứng thì chỉ có summary trung thực.
- Mối quan hệ `Project → Lab` dùng object link tách biệt; không gán Lab vào R&D sai sự thật.

## Data model

`{id, name, domains, problem, scope, evidence[], verifiedStatus, relatedLabIds[], updatedAt}`.

Các trạng thái không giả định sẵn: `concept`, `research`, `prototype`, `pilot`, `released` phải được người phụ trách xác nhận bằng bằng chứng.

## Interaction

- Filter dự án theo domain chạy client-side, URL sync.
- Link vào Lab liên quan chỉ xuất hiện khi Lab tồn tại và URL đã publish.
- Evidence viewer hiển thị ảnh thử nghiệm thực, caption nguồn, ngày; tránh fake client logos.

## Responsive

- Desktop 4 capability cards → Tablet 2 → Mobile 1; project directory thành vertical rows, tránh bảng nhiều cột.

## Offline

- Nội dung và biểu đồ giản lược có thể cache; media/video dự án không bắt buộc offline. CTA ngoại vi phải ghi rõ nếu cần mạng.

## Nghiệm thu

- [ ] Đúng sáu ID IN-01…IN-06 và đúng tên sáng kiến.
- [ ] Không có IN-07/08/09/10 trong R&D catalogue.
- [ ] Trạng thái được xác minh; chưa rõ phải viết `Hướng nghiên cứu/Chưa xác minh`.
- [ ] Không dùng roadmap làm bằng chứng sản phẩm phát hành.
