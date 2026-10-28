# Lab Workspace Template — Nội dung trang mẫu

- **Route chuẩn:** `/labs/[slug]/`
- **Mẫu minh họa trong PNG:** `Circuit & Logic Lab` (Digital Electronics)
- **Trạng thái:** thiết kế ý tưởng, chưa triển khai engine.
- **Mục tiêu:** dành phần lớn màn hình để thao tác mô phỏng thay vì mô tả công ty.

## W01 — Header

**Breadcrumb:** `Labs / Điện tử số / Circuit & Logic Lab`.

**Tên Lab:** Circuit & Logic Lab.

**Lead ngắn:** Lắp cổng logic, đặt tín hiệu đầu vào và quan sát kết quả ngay trên trình duyệt.

Các nút chức năng khi triển khai: `Chạy/Tạm dừng`, `Hoàn tác`, `Lưu`, `Xuất`, `Mở ví dụ`, `Hướng dẫn`, `Offline status`.

## W02 — Palette linh kiện (panel trái)

- Inputs A, B; Clock; AND/OR/NOT/XOR; LED; Probe; Wire.
- Có thể kéo từ palette vào canvas, click để chọn và chỉnh properties.
- Keyboard-only có phương án thêm node qua nút `Thêm`, không bắt buộc kéo thả.

## W03 — Canvas trung tâm

**Ví dụ mẫu:** `A AND B → Y`.

**Trạng thái minh họa:** A = 1, B = 0, Y = 0. LED đầu ra **tắt**.

**Chú thích:** `Thay đổi A hoặc B để kiểm tra bảng chân trị AND.`

**Ghi chú học tập:** `Y = A ∧ B`; bảng chân trị có bốn dòng.

## W04 — Inspector (phải)

Tên linh kiện, loại gate, số ngõ vào, giá trị tín hiệu, tần số/tốc độ mô phỏng (nếu có), trạng thái lỗi đấu nối.

## W05 — Kết quả & bài tập

- Waveform/timing diagram A, B, Y.
- Bảng chân trị sinh tự động từ sơ đồ.
- Một challenge: `Lắp XOR chỉ từ NAND` (phần mở rộng).
- Export JSON project và PNG/SVG canvas.

## W06 — Giới thiệu ngắn

Lab là môi trường mô phỏng phục vụ học tập, **không phải thiết bị đo thực địa**. Mọi hình ảnh và tín hiệu ở PNG là phác họa.

## UX microcopy

- Không có mạng: `Lab đã tải đủ, bạn có thể tiếp tục thực hành.` (chỉ khi offlineReady).
- Project chưa lưu: `Bạn có thay đổi chưa lưu.`
- Lỗi kết nối chân: `Đường nối này tạo chu trình không hợp lệ cho mô phỏng hiện tại.`
- Xuất kết quả: `Tệp đã được tạo trên máy của bạn.` (chỉ sau khi trình duyệt tạo file thành công).
