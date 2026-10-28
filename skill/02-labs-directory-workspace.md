# Skill — Labs Directory và Workspace

## Mục tiêu

Duy trì catalog Virtual Labs và shell workspace để người dùng khám phá, lọc,
mở và thao tác với các Lab một cách trung thực.

## Phạm vi file

- Catalog: `src/labs/index.html`, `src/assets/js/labs-data.js`,
  `src/assets/js/lab-directory.js`.
- Workspace: `src/labs/playground.html`, `src/labs/circuit-lab.html`,
  `src/assets/css/workspace.css` và JS liên quan.
- Nguồn ưu tiên: `lab-idea.md`, `src/content/labs-catalog.md`,
  `doc/02-labs/` và `doc/06-lab-workspace/`.

## Quy tắc catalog

- Dùng đúng 17 nhóm Lab và priority đã được quy định.
- Mỗi card nêu rõ title, category, mô tả, status và hành động hợp lệ.
- Search và filter phải có empty state dễ hiểu.
- Không gắn `Runnable` khi chưa có interaction quan sát được.
- Không gắn `Offline ready` nếu chưa kiểm thử cache toàn bộ dependency.
- Preview phải phân biệt với công cụ đã chạy được.

## Quy tắc workspace

- Ưu tiên vùng làm việc, toolbar, inspector/result và trạng thái.
- Nêu rõ dữ liệu là thật, mô phỏng hay minh họa.
- Export/import chỉ hiện khi có xử lý thực tế.
- Desktop có thể dùng nhiều panel; mobile dùng tab, drawer hoặc bottom sheet.
- Không nén ba cột desktop vào mobile.
- Giữ thông báo lỗi, rỗng, loading và thành công có thể đọc bằng text.

## Kiểm chứng

Thử thao tác chính bằng chuột và bàn phím, kiểm tra trạng thái rỗng/lỗi, link
quay lại catalog, responsive và console trước khi đổi status của Lab.
