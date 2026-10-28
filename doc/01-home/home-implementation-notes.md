# Home — Layout & Implementation Notes

## Bố cục

1. Header chung: vị trí logo gốc, 5 menu, CTA `Khám phá Labs`.
2. Hero split 55/45: copy cực ngắn bên trái; khu demo tương tác có dữ liệu mẫu bên phải.
3. Bốn lối vào theo mục tiêu sử dụng, không lặp mô tả công nghệ.
4. Một featured live Lab; chỉ show action `Mở Lab` khi có khả năng chạy thực sự.
5. Bốn công nghệ (liên kết Projects) và một CTA cộng đồng ngắn; footer chung.

## Tương tác

- Hero demo: chuyển kiểu biểu đồ và dữ liệu mẫu; không cần upload ở Home; nút mở đầy đủ trong Lab.
- Category tile cập nhật query param của Labs và filter được hydrate từ URL.
- Menu và link hoạt động với bàn phím; không render button giả.

## Responsive

- Desktop >=1200: 2 cột hero, grid 4 category cards.
- Tablet 768–1199: hero 1 cột, category 2 cột.
- Mobile <768: hero 1 cột, CTA full-width hoặc 2 dòng, category 1–2 cột, demo giữ vùng tương tác đủ lớn.

## Offline & performance

- SSR/static shell nhanh; JS chỉ hydrate demo và các phần cần tương tác.
- Không load cả engine dữ liệu nặng ở Home; demo dùng bundle nhỏ hoặc lazy-load.
- Offline badge chỉ xuất hiện khi Service Worker xác nhận các asset cần thiết đã cache.

## Nghiệm thu

- [ ] Menu điều hướng tới đúng năm trang chính.
- [ ] CTA Home → Labs hoạt động; filter deep link hoạt động.
- [ ] Demo thay đổi đầu ra thật, không phải animation trang trí.
- [ ] Không có KPI thiếu nguồn, dự án giả hoặc status `Ready` không chứng minh được.
- [ ] Không dùng logo tự vẽ; dùng đúng asset logo được Intelex cung cấp.
