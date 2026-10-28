# Intelex Spec — Nhận diện và bố cục

## Định vị

INTELEX là R&D & Innovation Hub cho hệ sinh thái THL ONE, theo triết lý
`NoSE — Not Only Software Engineering`. Website phải tạo cảm giác thực tế,
đáng tin, hiện đại, có chiều sâu công nghệ và học qua vận hành.

Không trình bày Intelex như công ty phần mềm phổ thông, SaaS template, portfolio
hoặc brochure tĩnh.

## Token bắt buộc

Nguồn chính: `src/assets/css/tokens.css`.

| Nhóm | Token hiện hành |
|---|---|
| Chữ/nền tối | `--ink` |
| Accent thương hiệu | `--gold`, `--gold-pale` |
| Nền sáng | `--ivory`, `--surface` |
| Phân tách | `--border`, `--muted` |
| Công nghệ/dữ liệu | `--tech-blue`, `--signal-teal`, `--violet` |
| Trạng thái lỗi | `--danger` |
| Hình học | `--radius-sm`, `--radius-md`, `--radius-lg` |
| Khung | `--container`, `--header-height` |

Không hard-code màu mới khi token hiện có đáp ứng được yêu cầu. Gold là accent,
không dùng cho đoạn chữ nhỏ trên nền sáng nếu thiếu tương phản.

## Bố cục

- Marketing page: nhiều khoảng thở, phân cấp heading rõ, nội dung dễ quét.
- Lab workspace: ưu tiên vùng thao tác, mật độ thông tin và trạng thái.
- Khung nội dung chuẩn dùng `--container`, không tạo nhiều max-width tùy ý.
- Header và footer phải nhất quán giữa các route.
- Card, panel, button và trạng thái dùng component class hiện có trước khi tạo
  class mới.
- Không dùng gradient, shadow, blur hoặc animation để che vấn đề nội dung.

## Component và file CSS

- Token dùng trong `tokens.css`.
- Reset, typography, focus và motion dùng trong `base.css`.
- Header, footer, button, card, pill dùng trong `components.css`.
- Bố cục theo trang dùng trong `pages.css`.
- Workspace đặc thù dùng trong `workspace.css`.

Không đưa style trang vào inline nếu có thể đặt tại file CSS đúng lớp. Không
nhân bản một component chỉ vì khác nội dung.

## Logo và hình ảnh

- Giữ nguyên asset logo chính thức; không vẽ lại logo bằng text trong bản cuối.
- Ảnh phải có tỷ lệ, `alt` và nguồn sử dụng rõ ràng.
- Không dùng generic AI artwork nếu không phục vụ nội dung thật.
- Asset tham khảo không đồng nghĩa với quyền sao chép, iframe hoặc phân phối.
