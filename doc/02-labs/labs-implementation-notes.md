# Labs Hub — Layout & Implementation Notes

## Thành phần

- `LabIndexPage`: hero, search, tabs, directory.
- `LabManifest`: JSON/TS cho mỗi Lab: id, slug, title, category[], audiences[], status, offlineStatus, engineVersion, coverAsset, description, route, dataset IDs.
- `SearchIndex`: client-side search tên + từ khóa không dấu và có dấu (normalize Unicode) và URL query.
- `FilterBar`: multi-category/one-category, mobile horizontal scroll, `Clear filters`.
- `LabCard`: status thật, thông tin ngắn, CTA đúng trạng thái.

## Tương tác

- Filter và search chạy thực sự 100% client-side, không cần API.
- URL phải đồng bộ: `/labs/?category=ai&query=neural` và back/forward browser.
- Không lọc ẩn card rồi bỏ DOM mà quên thông báo số kết quả cho screen-reader.
- Cho phép danh mục tăng từ 6 tới hàng trăm Lab mà không làm trang tải chậm; có thể lazy image, pagination và search index cache.

## Desktop/mobile

- >=1200: 3 cột cards; Tablet: 2 cột; mobile: 1 cột.
- Search đặt trên đầu, filter chip cuộn ngang, tiêu đề gọn.
- Mọi hình cover 4:3 hoặc 16:10, lấy từ UI thực tế khi có; tránh stock AI gây hiểu sai.

## Offline

- Shell Labs cache theo version; manifest có thể được cache.
- Mỗi Lab có gói asset riêng để chủ động tải/làm sạch; hiển thị MB đã lưu, trạng thái và khả năng xóa cache.
- `offlineReady` không tính theo nhãn tĩnh, mà từ việc cache đã kiểm chứng đầy đủ và smoke test offline.

## Nghiệm thu

- [ ] Dùng được search bằng cả từ khóa không dấu.
- [ ] Filter + reset + URL sync hoạt động.
- [ ] Card ý tưởng không được hiện “Mở Lab”.
- [ ] Không hứa offline với Lab thiếu model/WASM hoặc cần backend.
- [ ] Hỗ trợ 360px mobile, tab bàn phím và trạng thái focus rõ ràng.
