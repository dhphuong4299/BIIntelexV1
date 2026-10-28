# Đề xuất giai đoạn 3 — Workspace hoàn chỉnh

> **Trạng thái:** Đề xuất đã lưu trữ. Các chức năng liên quan đã được rollback theo xác nhận ngày 28/10/2026 và hiện không còn chạy trong mã nguồn.

## Mục tiêu ban đầu

Biến các Lab dữ liệu thành workspace có vòng đời dữ liệu đầy đủ: nhập, kiểm tra, làm sạch, lưu, phân tích, trực quan hóa, truy vấn và xuất kết quả trong cùng một project.

## Các hạng mục đề xuất ban đầu

- Dataset Manager với IndexedDB.
- Quản lý nhiều dataset và nhiều phiên làm việc.
- Preview, đổi tên cột, đổi kiểu dữ liệu và làm sạch dữ liệu.
- Nhập nhiều sheet thành nhiều bảng.
- Cấu hình khóa JOIN và quan hệ giữa các bảng.
- Lưu query, filter, biểu đồ và project.
- Xuất PNG, SVG, CSV và project JSON.
- Web Worker cho file lớn.
- Cảnh báo dữ liệu chưa lưu và trạng thái workspace thống nhất.

## Ghi chú rollback

Các hạng mục trên đã từng được triển khai thử nghiệm trong các Giai đoạn 1–3 nhưng đã được gỡ khỏi ứng dụng vì luồng đọc file không ổn định. Data Explorer và Database Lab hiện quay về logic CSV ban đầu; Chart Studio quay về dữ liệu mẫu và luồng dữ liệu số cũ.
