# Intelex Spec — Kiểm soát thay đổi

## Trước khi sửa

- Xác định route, component, JS, CSS, asset và tài liệu bị tác động.
- Đọc `spec/` liên quan và skill tương ứng.
- Kiểm tra code hiện tại trước khi tạo class, token hoặc file mới.
- Tìm dependency, link và selector đang dùng để tránh sửa lan.
- Xác định acceptance criteria và cách kiểm chứng.

## Trong khi sửa

- Ưu tiên chỉnh đúng lớp: token → base → component → page → workspace.
- Giữ nguyên API DOM, class và data attribute nếu không cần đổi.
- Giữ hành vi hiện có; thay đổi hành vi phải có lý do và kiểm thử.
- Không xóa asset, route hoặc nội dung cũ nếu chưa được yêu cầu.
- Không đưa dữ liệu chưa xác minh lên giao diện công khai.
- Mỗi file Markdown mới dưới 200 dòng.

## Sau khi sửa

- Chạy QA tại `spec/03-responsive-a11y-qa.md`.
- Kiểm tra diff để phát hiện thay đổi ngoài phạm vi.
- Kiểm tra các link đến file vừa tạo.
- Ghi lại phần chưa xác minh và rủi ro còn lại.
- Không tự publish, deploy hoặc commit.

## Khi skill xung đột với spec

Tạm dừng phần xung đột, giữ nguyên quy tắc nền và ghi `Cần xác nhận`. Skill
không được tự ý đổi sitemap, brand, stack, trạng thái dữ liệu hoặc bố cục đã
được quy định chỉ vì đó là cách triển khai thuận tiện hơn.
