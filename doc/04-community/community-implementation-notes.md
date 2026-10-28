# Community & Learning — Layout & Implementation Notes

## Layout

- Hero 1 đoạn ngắn, CTA Labs.
- Bốn audience paths với icon đơn giản và link filter.
- Tài nguyên hiển thị ở dạng list có loại file, ngôn ngữ, thời lượng, mức độ; chỉ publish khi asset có thật.
- Chương trình IN-07/08/10 trình bày như từng dòng độc lập, có trạng thái verified.
- CTA hợp tác ở cuối.

## Mô hình dữ liệu

`Resource {id, title, labId, type, language, size, url, publishedAt, verified}`.
`Program {id, title, description, status, date?, officialUrl?, verifiedBy?}`.

Không tạo số lượng thành viên, counters, leaderboard, testimonial hay agenda không có nguồn.

## Tương tác

- Audience selection lọc tài nguyên/danh mục Labs liên quan.
- Download phải trả đúng asset có checksum/version và có thể lưu offline nếu phù hợp.
- Chương trình chưa mở chỉ hiện `Tìm hiểu`, không có nút `Đăng ký`.

## Mobile + Offline

- Resource list thành single-column, bộ lọc dễ chạm.
- Các tài nguyên có quyền phân phối được cache riêng; hiển thị MB cần tải và bản quyền.

## Nghiệm thu

- [ ] Không có file download rỗng/đường dẫn 404.
- [ ] IN-07/08/10 không bị nhầm thành dự án sản phẩm.
- [ ] Không khẳng định lịch hoạt động chưa xác minh.
- [ ] Có liên kết đến Labs & Contact ở vị trí dễ tìm.
