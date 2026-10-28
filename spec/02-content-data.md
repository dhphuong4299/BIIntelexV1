# Intelex Spec — Nội dung, dữ liệu và trạng thái

## Phân quyền nội dung

| Khu vực | Sở hữu nội dung |
|---|---|
| Home | Thông điệp gateway ngắn và lối vào khám phá |
| Labs | Catalog, category, status, offline readiness và tool |
| Projects | Năng lực công nghệ và IN-01 đến IN-06 |
| Community | Học liệu, chương trình, mentor, internship, showcase |
| About | Intelex, NoSE, THL ONE và contact |

Không lặp lại toàn bộ vision, roadmap, project hoặc community ở mọi trang.

## Quy tắc xác minh

- Không bịa khách hàng, đối tác, doanh thu, testimonial, số liệu hoặc thành tích.
- Không biến roadmap thành thành tích đã đạt.
- Công nghệ chưa có trong tài liệu nguồn phải ghi `Cần xác nhận`.
- Phân biệt rõ nội dung thật, minh họa, kế hoạch, prototype và kết quả đã đạt.
- AI là một năng lực quan trọng, không phải toàn bộ định vị Intelex.

## Trạng thái Lab

Chỉ dùng các nhãn sau và không được làm mờ ý nghĩa:

- `Idea`: concept, chưa có tương tác.
- `In development`: đang thiết kế hoặc triển khai.
- `Preview`: prototype có thể xem, chưa hoàn chỉnh.
- `Runnable`: thao tác chạy được trong browser.
- `Offline ready`: mọi JS, WASM, worker, font, model, dataset và asset cần
  thiết đã được cache và xác minh khi offline.

Không hiển thị `Open lab`, `Run`, `Download`, `Export` hoặc `Offline ready` nếu
chức năng chưa thực sự hoạt động. Dữ liệu minh họa phải được nhận diện phù hợp.

## Nội dung và CTA

- CTA phải dẫn đến route hoặc hành động tồn tại.
- Link nội bộ phải dùng đúng sitemap hiện hành.
- Không thêm Pricing, Checkout, Payment, Login/Register nếu chưa được duyệt.
- Nội dung thiếu dữ liệu không được lấp bằng suy đoán; để placeholder có nhãn.
- Thuật ngữ `INTELEX`, `NoSE`, `THL ONE`, `Lab`, `Project` phải nhất quán.

## Tài liệu liên quan

Đối chiếu `src/content/`, `content-migration.md`, `lab-idea.md` và file
`*-page-content.md` trước khi sửa text hoặc chuyển section giữa các trang.
