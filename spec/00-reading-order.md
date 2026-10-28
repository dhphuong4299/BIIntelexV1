# Intelex Spec — Thứ tự đọc và nguyên tắc áp dụng

## Mục đích

Đây là lớp quy tắc nền. Agent hoặc người chỉnh sửa giao diện phải đọc các file
trong `spec/` trước khi áp dụng bất kỳ skill nào trong `skill/`.

## Thứ tự đọc bắt buộc

1. `spec/00-reading-order.md` — phạm vi và thứ tự áp dụng.
2. `spec/01-brand-layout.md` — nhận diện, lưới, token và bố cục.
3. `spec/02-content-data.md` — nguồn nội dung, trạng thái và tính trung thực.
4. `spec/03-responsive-a11y-qa.md` — responsive, accessibility và kiểm thử.
5. `spec/04-change-safety.md` — kiểm soát thay đổi trước khi sửa code.
6. File skill liên quan trực tiếp đến tác vụ.
7. Tài liệu trang trong `doc/` và source code thực tế.

## Nguồn sự thật

- Quy tắc chung: `AGENTS.md`.
- Quy tắc Intelex và nội dung thương hiệu: `AGENTS_INTELEX.md`.
- Token và component: `design-system.md`, `src/assets/css/`.
- Nội dung công khai: `src/content/` và các file `doc/` tương ứng.
- Hành vi đã triển khai: HTML, CSS và JS trong `src/`.

## Thứ tự ưu tiên khi có mâu thuẫn

1. Yêu cầu trực tiếp đã được phê duyệt cho tác vụ.
2. Quy tắc an toàn và trung thực nội dung trong `spec/`.
3. `AGENTS.md` và `AGENTS_INTELEX.md`.
4. Tài liệu đặc tả trang.
5. Code hiện tại và đề xuất của skill.

Nếu hai tài liệu nguồn không thống nhất, ghi `Cần xác nhận` và không tự chọn
một phiên bản để đưa lên website công khai.

## Luật không được phá vỡ

- Không đổi sitemap, logo, palette hoặc định vị nếu chưa được duyệt.
- Không biến website thành SaaS landing page, dashboard hoặc cyberpunk site.
- Không thêm framework, backend, database, build step hay dependency mới nếu
  chưa có yêu cầu rõ ràng.
- Không xóa asset hoặc thay đổi hành vi hiện có chỉ để làm nhanh hơn.
- Mỗi file Markdown trong `spec/` và `skill/` phải giữ dưới 200 dòng.

## Cách dùng nhanh

Trước khi sửa: xác định trang, component, asset và nguồn nội dung bị ảnh hưởng.
Sau khi sửa: chạy checklist trong `spec/04-change-safety.md` và QA trong
`spec/03-responsive-a11y-qa.md`.
