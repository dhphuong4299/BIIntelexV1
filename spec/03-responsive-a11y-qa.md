# Intelex Spec — Responsive, accessibility và QA

## Kích thước cần kiểm tra

- Desktop: 1920, 1440, 1366.
- Tablet: 1024, 768.
- Mobile: 430, 390, 375.

## Responsive bắt buộc

- Không có horizontal overflow ở bất kỳ route nào.
- Grid phải co giãn hoặc xếp lại, không ép ba cột workspace trên mobile.
- Lab workspace dùng tab, drawer hoặc bottom sheet khi màn hình hẹp.
- Menu mobile mở/đóng được và khóa scroll hợp lý.
- Ảnh giữ đúng tỷ lệ; text không chồng hoặc bị cắt.
- Bảng, filter và dữ liệu dài có phương án cuộn hoặc thu gọn rõ ràng.
- Infographic có layout riêng cho mobile nếu bố cục desktop không đọc được.

## Accessibility

- Dùng semantic HTML và heading hierarchy đúng.
- Mỗi ảnh nội dung có `alt`; ảnh trang trí có alt rỗng phù hợp.
- Link và button có tên dễ hiểu, focus state nhìn thấy được.
- Không truyền đạt status chỉ bằng màu; dùng text hoặc icon bổ sung.
- Form có label, trạng thái lỗi và hướng sửa.
- Tương tác chính dùng được bằng bàn phím.
- Tôn trọng `prefers-reduced-motion`.
- Contrast của body text, CTA và status phải đọc được trên nền tương ứng.

## QA sau thay đổi

- Mở route bị ảnh hưởng ở desktop, tablet và mobile.
- Kiểm tra console không có error mới.
- Kiểm tra logo, ảnh, icon, font và link tải đúng.
- Kiểm tra CTA, menu, filter, search và trạng thái rỗng/lỗi.
- Đối chiếu nội dung với nguồn, đặc biệt là status và roadmap.
- Kiểm tra không đổi ngoài phạm vi file đã dự kiến.

Nếu không có browser automation, ghi rõ phần chưa thể xác minh thay vì đánh dấu
đã hoàn tất.
