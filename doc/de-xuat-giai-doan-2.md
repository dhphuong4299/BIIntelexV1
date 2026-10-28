# Đề xuất giai đoạn 2 — Data Workspace

## Mục tiêu

Biến chức năng nhập file MVP thành một workspace dữ liệu thống nhất, cho phép người dùng làm sạch, quản lý nhiều bảng và sử dụng cùng dataset trong Data Explorer, Database Lab và Chart Studio.

## Ưu tiên 1: quản lý dataset

- Dùng IndexedDB thay cho chỉ `localStorage` khi dataset lớn.
- Cho phép đặt tên dataset.
- Hiển thị danh sách dataset gần đây.
- Xóa, thay thế và mở lại dataset.
- Lưu cấu hình xử lý riêng với dữ liệu gốc.

## Ưu tiên 2: kiểm tra và làm sạch dữ liệu

- Xem số ô trống theo từng cột.
- Đổi kiểu dữ liệu thủ công.
- Đổi tên cột và chuẩn hóa tên cột.
- Loại bỏ dòng trống hoặc dòng lỗi theo lựa chọn người dùng.
- Xử lý ngày tháng và số theo locale Việt Nam.
- Cho phép chọn dòng tiêu đề thay vì luôn dùng dòng đầu tiên.
- Hiển thị preview trước khi xác nhận nhập.

## Ưu tiên 3: nhiều sheet và nhiều bảng

- Nhập nhiều sheet trong cùng một file XLSX.
- Đặt tên bảng theo tên sheet.
- Hiển thị quan hệ giữa các bảng.
- Cho phép chọn khóa để JOIN.
- Cho phép đưa nhiều bảng từ Data Workspace sang Database Lab.

## Ưu tiên 4: Chart Studio theo dataset tổng quát

- Chọn cột trục X, trục Y và cột nhóm.
- Chọn phép tổng hợp SUM, AVG, COUNT, MIN và MAX.
- Tạo biểu đồ trực tiếp từ kết quả Database Lab.
- Lưu cấu hình biểu đồ cùng dataset.
- Xuất PNG, SVG và CSV kết quả.

## Ưu tiên 5: hiệu năng và an toàn

- Đưa việc đọc và chuẩn hóa file lớn sang Web Worker.
- Giới hạn kích thước file và số dòng có thông báo rõ ràng.
- Không chạy macro hoặc mã nhúng trong file Excel.
- Escape dữ liệu trước khi render vào HTML.
- Kiểm thử file lỗi, file thiếu sheet, file có dữ liệu rỗng và file có ký tự tiếng Việt.

## Tiêu chí hoàn thành giai đoạn 2

- Một file XLSX có nhiều sheet có thể trở thành nhiều bảng trong Database Lab.
- Người dùng có thể xem preview và sửa kiểu dữ liệu trước khi xác nhận.
- Data Explorer và Chart Studio làm việc với cột do người dùng chọn, không phụ thuộc vị trí cột.
- Dataset vẫn mở được sau khi tải lại trang.
- File lớn không làm treo giao diện trong các trường hợp kiểm thử đã định nghĩa.
