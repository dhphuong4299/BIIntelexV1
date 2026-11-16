# ĐỀ XUẤT TÍNH NĂNG GIÁO DỤC – INTELEX

> Trạng thái: **Bản ý tưởng để duyệt (Draft)**  
> Phạm vi: **Chỉ mô tả yêu cầu, chưa viết code hoặc chỉnh sửa website**  
> Tham khảo: [Danh mục NobleProg](https://www.nobleprog.com.vn/khoa-hoc-search-engines) · [Chi tiết khóa OpenSearch](https://www.nobleprog.com.vn/cc/opensearchscale)

## 1. Mục tiêu

Tạo khu vực **Giáo Dục** độc lập trên website Intelex, giúp khách truy cập khám phá chương trình đào tạo, xem nội dung từng khóa và gửi yêu cầu tư vấn/đăng ký. Kế thừa **mô hình thông tin** của NobleProg nhưng sử dụng giao diện, nội dung và bản sắc riêng của Intelex, không sao chép nguyên mẫu.

## 2. Header & điều hướng

Thứ tự menu cấp cao (giữ nguyên các trang hiện có, chỉ sắp xếp và thêm mục mới):

`Khám Phá → Labs → Dự Án → Cộng Đồng → Giáo Dục → Về Intelex`

- **Giáo Dục** là menu cấp 1, ngang hàng các mục còn lại.
- Bấm **Giáo Dục** vào trang tổng quan/danh mục khóa học.
- Từ danh sách, bấm tên khóa học hoặc **Xem chi tiết** để mở trang riêng của khóa đó.
- Hiển thị trạng thái menu đang xem, breadcrumb và điều hướng quay lại danh mục.

## 3. Sitemap đề xuất

```text
/
├── kham-pha/                  (hiện có)
├── labs/                      (hiện có)
├── du-an/                     (hiện có)
├── cong-dong/                 (hiện có)
├── giao-duc/                  (MỚI: tổng quan & danh mục)
│   ├── ?category=ai-ml        (lọc danh mục, không bắt buộc trang riêng)
│   ├── ?category=data         (lọc danh mục)
│   └── khoa-hoc/
│       └── [slug]/            (MỚI: chi tiết từng khóa học)
└── ve-intelex/                (hiện có)
```

> Đường dẫn là phương án định hướng; sẽ điều chỉnh theo router/kiến trúc thực tế sau khi duyệt.

## 4. Trang Giáo Dục – `/giao-duc/`

### 4.1. Bố cục từ trên xuống

| Khu vực | Thành phần | Mục đích |
|---|---|---|
| Hero | Tiêu đề “Giáo Dục tại Intelex”, mô tả ngắn, CTA “Khám phá khóa học” | Giới thiệu chương trình đào tạo |
| Tổng quan | 3–4 điểm nổi bật: học theo dự án, thực hành, chuyên gia, ứng dụng doanh nghiệp | Truyền tải lợi ích |
| Danh mục | Các nhóm chủ đề dạng chip/tab: AI & ML, Data & BI, Software Engineering, Cloud & DevOps, Cybersecurity… | Phân loại khóa học |
| Tìm & lọc | Ô tìm kiếm tên khóa học; bộ lọc chủ đề, cấp độ, hình thức | Tìm khóa học phù hợp |
| Danh sách khóa học | Grid card desktop, danh sách/card trên mobile; tiêu đề, tóm tắt, cấp độ, thời lượng, hình thức và CTA | Khám phá và chuyển tới chi tiết |
| CTA cuối trang | “Cần chương trình đào tạo cho doanh nghiệp?” + “Yêu cầu tư vấn” | Thu hút khách hàng B2B |

### 4.2. Một thẻ khóa học (course card)

- Tên khóa học (ví dụ: **OpenSearch: Tìm kiếm và phân tích dữ liệu quy mô lớn**).
- Nhóm lĩnh vực, nhãn cấp độ (Cơ bản / Trung cấp / Nâng cao).
- Mô tả 2–3 dòng, thời lượng dự kiến, hình thức đào tạo.
- Nút **Xem chi tiết** mở `/giao-duc/khoa-hoc/opensearch-quy-mo-lon/`.
- Giá và lịch mở lớp **chỉ hiển thị khi Intelex cung cấp dữ liệu chính thức**; không tự lấy giá NobleProg làm giá Intelex.

### 4.3. Hành vi

- Lọc và tìm kiếm cập nhật danh sách khóa học, có trạng thái không tìm thấy.
- Có thể dùng phân trang hoặc “Xem thêm” khi số khóa học lớn.
- Giữ kết quả lọc khi quay từ trang chi tiết về danh mục (ưu tiên URL query).
- Dữ liệu khóa học được chuẩn hóa để bổ sung nội dung mới thuận tiện.

## 5. Trang chi tiết khóa học – `/giao-duc/khoa-hoc/[slug]/`

Bố cục học hỏi cách trình bày thông tin của trang OpenSearch NobleProg, được giản lược cho trải nghiệm Intelex.

### 5.1. Khu vực chính

1. **Breadcrumb:** Trang chủ / Giáo Dục / Tên khóa học.
2. **Hero khóa học:** tên, mô tả giá trị, danh mục, cấp độ, thời lượng, hình thức và nút **Đăng ký tư vấn**.
3. **Giới thiệu:** khóa học giải quyết vấn đề gì, ứng dụng trong công việc/doanh nghiệp.
4. **Kết quả đầu ra:** người học có thể làm gì sau khi hoàn thành.
5. **Đối tượng phù hợp:** Dev, Data Engineer, DevOps, quản lý kỹ thuật… tùy khóa.
6. **Điều kiện tiên quyết:** kiến thức và công cụ cần có trước khóa học.
7. **Đề cương chi tiết:** theo module/buổi; dùng accordion để xem nội dung.
8. **Phương pháp đào tạo:** lý thuyết, bài tập, thực hành Labs, bài toán thực tế.
9. **Thông tin tổ chức:** thời lượng, online/offline/in-house, lịch khai giảng nếu có.
10. **Liên hệ/đăng ký:** form quan tâm và yêu cầu tư vấn.
11. **Khóa học liên quan:** 3–4 khóa cùng chủ đề để khám phá tiếp.

### 5.2. Form yêu cầu tư vấn (giai đoạn đầu)

Trường đề xuất: Họ tên*, Email*, Số điện thoại*, Tên công ty (tùy chọn), Khóa học (điền sẵn), Hình thức mong muốn, Nội dung cần tư vấn, Đồng ý chính sách riêng tư*. 

- Có kiểm tra dữ liệu bắt buộc, thông báo thành công/thất bại rõ ràng.
- **Không tích hợp thanh toán hoặc xác nhận giữ chỗ ở giai đoạn đầu.**
- Nơi lưu/gửi thông tin (email, CRM hoặc API) **chưa quyết định**, cần thống nhất trước khi triển khai chức năng thực.

## 6. Dữ liệu mẫu để dựng giao diện (không phải khóa học đã công bố)

| Khóa học đề xuất | Lĩnh vực | Cấp độ | Thời lượng |
|---|---|---|---|
| Nhập môn AI & Machine Learning | AI & ML | Cơ bản | Chờ xác nhận |
| Phân tích dữ liệu với Python | Data & BI | Cơ bản | Chờ xác nhận |
| Xây dựng Dashboard doanh nghiệp | Data & BI | Trung cấp | Chờ xác nhận |
| OpenSearch quy mô lớn | Search & Data | Nâng cao | Chờ xác nhận |
| Phát triển Web API thực tiễn | Software Engineering | Trung cấp | Chờ xác nhận |
| Docker & CI/CD căn bản | Cloud & DevOps | Cơ bản | Chờ xác nhận |

Các tên trên chỉ là **placeholder minh họa**. Nội dung đào tạo, giảng viên, thời lượng, giá và lịch học phải được Intelex duyệt trước khi công khai.

## 7. Phong cách UI/UX

- Dùng **design system sẵn có của Intelex**: header, footer, typography, màu sắc, nút, khoảng cách, hover và responsive.
- Hướng thể hiện: chuyên nghiệp, hiện đại, dễ đọc, phù hợp đào tạo công nghệ và khách hàng doanh nghiệp.
- Desktop: danh sách 3 cột (nếu đủ chỗ); tablet: 2 cột; mobile: 1 cột.
- Trang chi tiết desktop: nội dung chính + sidebar thông tin/CTA; mobile: xếp dọc, CTA dễ tiếp cận.
- Có trạng thái loading, rỗng, lỗi; hỗ trợ bàn phím, nhãn form và độ tương phản hợp lý.
- Không sao chép nguyên văn nội dung, ảnh, bảng giá hay nhận diện NobleProg.

## 8. Hành trình người dùng

```text
Header > Giáo Dục
  > xem danh mục / tìm kiếm / lọc
  > bấm khóa học
  > đọc mục tiêu, đề cương, yêu cầu, thời lượng
  > gửi yêu cầu tư vấn
  > nhận thông báo đã gửi (khi có tích hợp xử lý form)
```

Liên kết **Labs** (nếu khóa có bài thực hành liên quan) và **Dự Án** (nếu có case study phù hợp) nhằm thể hiện hệ sinh thái Intelex.

## 9. Phạm vi triển khai theo giai đoạn

**Giai đoạn 1 – giao diện và nội dung:** cập nhật Header; trang danh mục; trang chi tiết động theo slug; bộ lọc/tìm kiếm cơ bản; dữ liệu mẫu; responsive; form giao diện hoặc liên hệ theo cơ chế website hiện có.

**Giai đoạn 2 – vận hành thực:** quản trị khóa học/CMS, quản lý lead, gửi email/CRM, lịch lớp, giảng viên, địa điểm, SEO chi tiết.

**Giai đoạn 3 – chỉ khi có nhu cầu:** tài khoản học viên, học trực tuyến/LMS, thanh toán, quản lý tiến độ và chứng chỉ.

## 10. Tiêu chí nghiệm thu ý tưởng (chưa code)

- [ ] Header đúng 6 mục và đúng thứ tự yêu cầu.
- [ ] Giáo Dục là trang cấp cao riêng, không đặt dưới Labs hay Dự Án.
- [ ] Có trang danh sách khóa học theo tinh thần NobleProg.
- [ ] Mỗi khóa học có URL chi tiết riêng với đề cương và CTA.
- [ ] Thiết kế đồng bộ Intelex trên desktop và mobile.
- [ ] Không tự giả định giá, lịch, giảng viên hoặc cam kết chứng chỉ.
- [ ] Chưa tiến hành chỉnh sửa code khi chưa được xác nhận.

## 11. Các điểm cần chủ dự án xác nhận

1. **Phạm vi chủ đề:** chỉ AI/Data/Software/Cloud hay mở rộng thêm đào tạo doanh nghiệp khác?
2. **Mục tiêu chuyển đổi:** ưu tiên “Yêu cầu tư vấn” hay “Đăng ký khóa học” ngay từ đầu?
3. **Dữ liệu đầu vào:** Intelex đã có danh sách khóa học và giáo trình thực tế chưa?
4. **Công bố lịch/giá:** ẩn trong bản đầu hay có thông tin thực tế để hiển thị?
5. **Vận hành form:** gửi về email nào, CRM nào hay chỉ dựng giao diện trước?

---

**Kết luận:** Đề xuất tạo một **catalog khóa đào tạo + trang chi tiết từng khóa**, mô phỏng logic khám phá của NobleProg, nhưng mang bản sắc Intelex. Tài liệu này dùng để duyệt phạm vi trước khi viết spec triển khai và code.
