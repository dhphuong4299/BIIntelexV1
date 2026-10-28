# Intelex Skills — Danh mục

Các skill dưới đây mô tả những năng lực đã được áp dụng cho dự án Intelex.
Chúng là hướng dẫn thực thi, không thay thế các luật trong `../spec/`.

## Skill hiện có

| Skill | Dùng khi | Nguồn chính |
|---|---|---|
| `static-page-implementation` | Sửa HTML/CSS/JS của trang tĩnh | `src/`, `AGENTS.md` |
| `labs-directory-workspace` | Sửa catalog Lab hoặc workspace | `lab-idea.md`, `src/labs/` |
| `content-migration-assets` | Chuyển nội dung, route hoặc asset | `content-migration.md`, `src/content/` |

## Quy trình áp dụng

1. Đọc toàn bộ file `spec/` liên quan.
2. Chọn skill khớp với phạm vi thay đổi.
3. Đối chiếu tài liệu trang trong `doc/` và source hiện tại.
4. Thực hiện thay đổi nhỏ, giữ cấu trúc component chung.
5. Chạy kiểm tra trong `spec/03-responsive-a11y-qa.md`.
6. Báo cáo file đã đổi, kiểm chứng đã chạy và phần còn thiếu.

## Giới hạn chung

- Skill không được thêm framework, backend, database hoặc dependency ngoài.
- Skill không được tự xác nhận claim thương hiệu hay trạng thái Lab.
- Skill không được đổi logo, sitemap hoặc token đã duyệt.
- Nếu cần quyết định thương hiệu, nội dung hoặc sản phẩm chưa có nguồn, ghi
  `Cần xác nhận` và dừng phần đó.
