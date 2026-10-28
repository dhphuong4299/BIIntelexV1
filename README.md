# Intelex Interactive Labs — Ideas v1

**Ngày soạn:** 14/10/2026  
**Tình trạng:** Bản website tĩnh có các trang giới thiệu và Lab thử nghiệm chạy trong trình duyệt; chưa triển khai hosting hoặc kiểm chứng offline.  
**Mục tiêu:** 30% giới thiệu thương hiệu/năng lực, 70% trải nghiệm công nghệ; ưu tiên JavaScript/WebAssembly chạy tại trình duyệt, offline sau khi tải đủ tài nguyên.

## Phạm vi bàn giao

- **06 bộ trang** × **03 file**: `[name]-idea.png` (wireframe desktop 1600×1210), `[name]-page-content.md` (nội dung công khai đề xuất), `[name]-implementation-notes.md` (thiết kế, luồng tương tác, responsive và nghiệm thu).
- **`lab-idea.md`**: tổng hợp 17 nhóm Virtual Lab và sáu repository nên nghiên cứu.
- **`src/labs/playground.html`**: workspace thử nghiệm dùng chung cho các Lab đã có tương tác.
- **`content-migration.md`**: gộp nội dung và chuyển hướng từ sáu URL cũ.
- **`design-system.md`**: palette, typography, component và bảo vệ nhận diện.

## Cấu trúc chính được đề xuất

| Trang | Thư mục | Route dự kiến | Vai trò |
|---|---|---|---|
| Home | `01-home` | `/` | Cổng khám phá, có demo thật |
| Labs | `02-labs` | `/labs/` | Search, lọc, khám phá 17 nhóm công cụ |
| Projects & Technology | `03-projects` | `/projects/` | Bốn năng lực + sáu sáng kiến R&D |
| Community & Learning | `04-community` | `/community/` | Học liệu, chương trình, kết nối |
| About & Contact | `05-about` | `/about/` | Giới thiệu ngắn + kênh liên hệ |
| Lab Workspace (template) | `06-lab-workspace` | `/labs/[slug]/` | Giao diện chuẩn cho lab độc lập |

**Lưu ý logo:** Trong wireframe chỉ có chữ **INTELEX** ở vùng nhận diện, **không phải một bản dựng lại logo chính thức**. Khi triển khai, bắt buộc thay bằng nguyên asset logo gốc của Intelex; không đổi đường nét, tỷ lệ hay màu sắc của logo. Không tải được asset gốc từ các trang công khai trong quá trình soạn bộ này.

**Lưu ý trạng thái:** Các thẻ Lab trong ảnh là đề xuất. Trong bản tĩnh hiện tại, chỉ các Lab có thao tác thực sự được gắn trạng thái “Có thể dùng”; dữ liệu và biểu đồ đều là dữ liệu minh họa. Không có Lab nào được gắn nhãn offline-ready.

## Thứ tự đọc đề nghị

1. `design-system.md` và `content-migration.md` để thống nhất nguyên tắc.
2. `[name]-idea.png` cùng `[name]-page-content.md` để duyệt từng trang.
3. `[name]-implementation-notes.md` làm đầu vào cho agent triển khai.
4. `lab-idea.md` để ưu tiên engine và xác minh giấy phép/tham chiếu.

## Nguồn nội dung công khai gốc

- https://intelex.asia/
- https://intelex.asia/about.html
- https://intelex.asia/technology.html
- https://intelex.asia/innovation.html
- https://intelex.asia/ecosystem.html
- https://intelex.asia/contact.html

Mọi hoạt động/dự án chỉ được công bố ở trạng thái đã xác minh bởi Intelex. Bản kế hoạch không tự xác nhận số lượng người dùng, doanh thu, tính năng đã triển khai, chương trình đang mở hay kết quả R&D.
