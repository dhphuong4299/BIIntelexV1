# About & Contact — Layout & Implementation Notes

## Bố cục

- Hero một đoạn; nếu dùng ảnh tổ chức phải là ảnh chính thức Intelex cung cấp.
- NoSE có ba nguyên tắc, tránh lặp toàn bộ trang Technology cũ.
- Contact là khối nổi bật ngay cuối trang, không cần trang Contact riêng ở V1.
- Một footer thống nhất toàn website.

## Interaction

- Chủ đề liên hệ có thể tạo `mailto:` đã encode subject/body. Nếu dùng form, phải có backend thực hoặc tích hợp dịch vụ email có thông báo đúng trạng thái; V1 ưu tiên `mailto:`.
- `#contact` phải là anchor thật, 301 từ `/contact.html` tới `/about/#contact` (kiểm tra môi trường deploy và browser).
- Dùng `rel="noopener noreferrer"` cho external link có target blank.

## Desktop/mobile

- Hero desktop 2 cột (copy + sơ đồ NoSE), mobile 1 cột.
- Contact panel không đòi nhập thông tin cá nhân trên website.

## Nghiệm thu

- [ ] Logo dùng asset gốc; không tự chế emblem.
- [ ] Email thực `intelex.support@gmail.com` hoạt động với mailto.
- [ ] Không lặp bài luận chiến lược, không có hứa hẹn chưa kiểm chứng.
- [ ] Old about/contact links redirect ổn, SEO canonical cập nhật.
