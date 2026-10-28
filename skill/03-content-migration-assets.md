# Skill — Content Migration và Asset Hygiene

## Mục tiêu

Chuyển nội dung từ tài liệu cũ sang sitemap Intelex hiện hành mà không làm mất
ngữ nghĩa, sai claim hoặc hỏng asset.

## Quy trình

1. Đọc `content-migration.md` và phần ownership trong `spec/02-content-data.md`.
2. Lập mapping nguồn cũ → route mới → section đích.
3. Đối chiếu với `src/content/` và tài liệu `doc/` của trang.
4. Đánh dấu nội dung thiếu nguồn là `Cần xác nhận`.
5. Cập nhật nội dung và link; giữ nguyên asset đang được tham chiếu.
6. Kiểm tra alt, tỷ lệ ảnh, path tương đối và trạng thái hiển thị.

## Mapping mặc định

- Home: gateway, highlights và đường dẫn khám phá.
- Labs: 17 nhóm Lab, catalog và workspace.
- Projects: capability và IN-01 đến IN-06.
- Community: học liệu, chương trình và kết nối.
- About: identity, NoSE, THL ONE và contact.

## Không được làm

- Không chuyển roadmap thành case study hoặc thành tích.
- Không thêm customer, partner, revenue, testimonial hoặc số liệu không có nguồn.
- Không đổi tên logo, crop sai asset, hoặc xóa ảnh đang dùng.
- Không dùng asset tham khảo như bằng chứng tính năng.
- Không tạo route mới chỉ để chứa nội dung chưa được duyệt.

## Definition of done

- Mapping nội dung có thể truy vết về nguồn.
- Không có claim suy đoán trên trang công khai.
- Link nội bộ và asset tải đúng.
- Các file liên quan được kiểm tra responsive và accessibility.
