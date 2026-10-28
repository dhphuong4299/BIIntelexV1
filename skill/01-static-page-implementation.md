# Skill — Static Page Implementation

## Mục tiêu

Triển khai và bảo trì website Intelex bằng HTML5, CSS3 và Vanilla JavaScript,
giữ cấu trúc nhẹ, dễ đọc và không phụ thuộc build step.

## Cách áp dụng

1. Xác định route và vai trò trang trong `AGENTS.md`.
2. Tái sử dụng header, footer, button, card và status class hiện có.
3. Sửa token trong `src/assets/css/tokens.css` chỉ khi thật sự cần.
4. Đặt style đúng lớp CSS: nền tảng, component, page hoặc workspace.
5. Đặt hành vi trong file JS phù hợp, tránh inline script.
6. Kiểm tra link, asset, focus, responsive và console.

## Mẫu cấu trúc

- `src/*.html` hoặc `src/[route]/index.html`: markup trang.
- `src/assets/css/`: token, base, component, page, workspace.
- `src/assets/js/`: dữ liệu và behavior theo domain.
- `src/content/`: nội dung nguồn được kiểm soát.

## Quy tắc triển khai

- Semantic HTML trước khi thêm CSS.
- Giữ `aria-current`, label, alt và heading hierarchy.
- Không copy một component thành nhiều biến thể nếu modifier class đủ dùng.
- Tách dữ liệu khỏi template khi catalog hoặc danh sách có thể thay đổi.
- Không thêm tương tác giả; nếu chưa chạy được phải dùng status trung thực.
- Dùng CSS custom properties hiện hành thay vì màu hard-code lặp lại.

## Definition of done

- Trang mở được từ route dự kiến.
- Không overflow ở các viewport quy định.
- CTA và internal link hoạt động.
- Không có console error mới.
- Nội dung và status đã đối chiếu nguồn.
- Không thêm dependency ngoài phạm vi.
