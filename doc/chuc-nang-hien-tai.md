# INTELEX — Chức năng hiện tại

> **Trạng thái sau rollback:** Các chức năng nhập CSV/XLSX và Data Workspace ở Giai đoạn 1–3 đã được gỡ khỏi mã nguồn. Các mục 11–13 bên dưới được giữ lại như ghi chú lịch sử, không còn là chức năng đang hoạt động.

> Tài liệu này mô tả những gì đang có trong mã nguồn hiện tại của website. Nội dung được kiểm tra từ thư mục `src/`, đặc biệt là các file HTML và JavaScript. Những phần chỉ là định hướng hoặc chưa có dữ liệu thật được ghi rõ.

## 1. Tổng quan

INTELEX là website tĩnh dùng HTML, CSS và Vanilla JavaScript. Người dùng có thể:

- Khám phá các lĩnh vực công nghệ và đi nhanh tới Labs.
- Tìm kiếm, lọc và mở các Virtual Lab.
- Thực hành dữ liệu, biểu đồ, SQL, lập trình web, thuật toán, AI, IoT và mô phỏng.
- Xem các sáng kiến R&D của INTELEX.
- Xem tài nguyên học tập, chương trình cộng đồng và cách liên hệ.

Website không yêu cầu tài khoản, backend hay cơ sở dữ liệu để sử dụng các chức năng hiện có.

## 2. Điều hướng chung

Header chung xuất hiện trên các trang nội dung chính, gồm:

| Mục | Đường dẫn | Chức năng |
|---|---|---|
| Khám phá | `src/index.html` | Trang chủ và các lối vào nhanh |
| Labs | `src/labs/index.html` | Danh mục Virtual Labs |
| Dự án | `src/projects/index.html` | Công nghệ và sáng kiến R&D |
| Cộng đồng | `src/community/index.html` | Tài nguyên và chương trình học tập |
| Về Intelex | `src/about/index.html` | Giới thiệu, NoSE và liên hệ |

Trên màn hình nhỏ có nút mở/đóng menu. Link trang hiện tại được đánh dấu tự động. Footer có logo, thông tin liên hệ và link về khu vực liên hệ.

## 3. Trang chủ — Khám phá

File: `src/index.html`

- Hero giới thiệu định hướng “Technology · Learn by doing”.
- Hai CTA tới Labs và Dự án.
- Demo biểu đồ nhỏ ngay trong hero:
  - Chọn dataset `Tăng trưởng` hoặc `Chi phí`.
  - Chọn biểu đồ `Cột` hoặc `Đường`.
  - Biểu đồ được render lại bằng JavaScript, không phải ảnh tĩnh.
- Bốn lối vào theo nhu cầu:
  - Dữ liệu & biểu đồ.
  - Code & thuật toán.
  - Mạch điện & IoT.
  - Học tập & giảng dạy.
- Khu vực Featured Lab giới thiệu Data Explorer ở trạng thái “Đang phát triển”.
- Bốn lĩnh vực công nghệ: AI, Data & BI, IoT & Smart Systems, Automation.
- CTA dẫn tới các trang Dự án R&D và Cộng đồng.

Các link lối vào Labs truyền category qua URL, ví dụ `?category=data-bi`. Trang chủ không yêu cầu đăng nhập và không hiển thị số liệu hoặc thành tích chưa có minh chứng.

## 4. Labs Hub

File: `src/labs/index.html`

### Chức năng danh mục

- Hiển thị danh sách 12 Lab từ manifest `src/assets/js/labs-data.js`.
- Tìm kiếm theo tên, lĩnh vực, mô tả, đối tượng, ví dụ mẫu, trạng thái và từ khóa.
- Tìm kiếm không phân biệt hoa thường và hỗ trợ tiếng Việt có/không dấu.
- Lọc theo lĩnh vực:
  - Dữ liệu & BI.
  - Giáo dục.
  - Lập trình.
  - Điện tử & IoT.
  - AI & ML.
  - 3D & CAD.
  - Khoa học & Kỹ thuật.
- Hiển thị số lượng kết quả, trạng thái rỗng và nút xóa bộ lọc.
- Đồng bộ bộ lọc và từ khóa với URL bằng `category` và `query`; nút Back/Forward của trình duyệt hoạt động.
- Mỗi card hiển thị lĩnh vực, đối tượng, ví dụ mẫu, mức ưu tiên, trạng thái và tình trạng offline.

### Danh sách Lab hiện tại

| Lab | Chức năng chính | Trạng thái ghi trong manifest |
|---|---|---|
| Data Explorer | Nhập CSV, lọc dữ liệu, profiling, insight và chuyển dữ liệu sang Chart Studio | Có thể dùng |
| Chart Studio | Tạo và chỉnh sửa nhiều loại biểu đồ trên canvas | Có thể dùng |
| Quiz Studio | Làm quiz, nhập CSV/JSON câu hỏi, chấm điểm và xem giải thích | Có thể dùng |
| Algorithm Lab | Mô phỏng sorting, searching, graph, queue và tree | Có thể dùng |
| Circuit & Logic Lab | Xây mạch logic, chạy mô phỏng và kiểm tra bảng chân trị | Có thể dùng |
| Smart Farm Simulator | Mô phỏng nhà kính, cảm biến, thiết bị và kịch bản vận hành | Có thể dùng |
| AI & Machine Learning | Thử tham số mô hình, huấn luyện và xem phân loại minh họa | Có thể dùng |
| Web Development | Viết HTML/CSS/JavaScript và xem preview sandbox | Có thể dùng |
| Database Lab | Tạo bảng, nhập CSV, chạy SELECT/WHERE/GROUP BY/JOIN | Có thể dùng |
| Industrial Automation | Điều chỉnh giá trị cảm biến và quan sát đầu ra actuator | Có thể dùng |
| Physics & Engineering | Điều chỉnh tham số và xem kết quả mô phỏng vật lý | Có thể dùng |
| 3D & CAD | Tạo/quan sát khối mô hình và thông số hình học | Có thể dùng |

> “Có thể dùng” ở đây phản ánh trạng thái trong manifest hiện tại. Đây không đồng nghĩa với việc Lab đã được xác thực offline hoặc là sản phẩm thương mại.

## 5. Các workspace tương tác

Hầu hết workspace được nạp qua `src/assets/js/lab-playground.js`. Người dùng có nút `Đặt lại` để đưa workspace về trạng thái mẫu.

### Data Explorer

- Nạp dữ liệu mẫu.
- Nhập file CSV cục bộ, tự nhận diện các cột tháng, nhóm và chỉ số.
- Lọc theo tên nhóm và giá trị tối thiểu.
- Hiển thị số dòng, hồ sơ cột, min/max, trung bình, top nhóm và insight tự động.
- Hiển thị bảng dữ liệu sau lọc.
- Gửi các giá trị đã lọc sang Chart Studio qua `localStorage`.

### Chart Studio

- Thêm biểu đồ bằng nút hoặc kéo từ thư viện vào canvas.
- Hỗ trợ biểu đồ cột, đường, tròn, scatter, combo, candlestick, box plot và tree.
- Chọn biểu đồ để chỉnh loại, tiêu đề, màu, kích thước và dữ liệu.
- Kéo biểu đồ, thay đổi kích thước, xóa biểu đồ.
- Thêm mẫu, xóa toàn bộ canvas và thu gọn panel thư viện/thuộc tính.

### Quiz Studio

- Dùng bộ câu hỏi mẫu hoặc nhập file CSV/JSON.
- Chuyển câu, chọn đáp án, đánh dấu câu hỏi và đếm thời gian.
- Chấm điểm, hiển thị phần trăm và giải thích đáp án.
- Định dạng CSV đề xuất gồm câu hỏi, các lựa chọn, đáp án đúng và giải thích.

### Algorithm Lab

- Chọn loại thuật toán/cấu trúc dữ liệu.
- Chạy từng bước hoặc chạy toàn bộ mô phỏng.
- Quan sát trạng thái mảng, node/edge, hàng đợi hoặc cây.
- Có khu vực mô tả bước và thông tin độ phức tạp cho bài mô phỏng.

### Web Development

- Ba editor HTML, CSS và JavaScript.
- Chạy preview trong iframe sandbox.
- Chọn viewport Desktop, Tablet hoặc Mobile.
- Nhận log/lỗi runtime từ preview.
- Khôi phục mẫu, lưu project vào `localStorage` và tải HTML.
- Có bài thực hành Smart Farm Monitor/Profile Card và chấm theo các tiêu chí trong mã nguồn.

### Database Lab

- Xem schema mẫu gồm `orders`, `customers`, `products`.
- Tạo bảng trống và nhập dữ liệu CSV.
- Chạy truy vấn an toàn chỉ đọc; các lệnh thay đổi dữ liệu bị chặn.
- Có SQL Editor, Format, Query Builder và các câu lệnh mẫu.
- Hỗ trợ minh họa SELECT, WHERE, GROUP BY, ORDER BY, LIMIT và JOIN.
- Kiểm tra bài luyện SQL và chuyển cột số của kết quả sang Chart Studio.

### Smart Farm Simulator

- Mô phỏng nhà kính với các khu A, B, C.
- Chạy/tạm dừng mô phỏng theo ngày hoặc tiến từng ngày.
- Theo dõi nhiệt độ, độ ẩm, bể nước, sức khỏe cây và lịch sử telemetry.
- Bật/tắt bơm tưới, bơm cấp nước, quạt và chế độ tự động.
- Điều chỉnh ngưỡng tưới/nạp bể.
- Kích hoạt các sự cố giả lập: nắng nóng, mất điện, lỗi cảm biến.
- Chạy các kịch bản what-if: giảm nước, nắng nóng, mất điện.
- Dữ liệu được ghi rõ là dữ liệu mô phỏng cục bộ, không điều khiển thiết bị thật.

### AI, Physics, Industrial Automation và 3D/CAD

Các workspace này có điều khiển tham số, nút cập nhật mô phỏng và vùng kết quả trực quan. Kết quả hiện là mô phỏng cục bộ trong trình duyệt, dùng để học và thử nghiệm; không kết nối backend hoặc thiết bị ngoài.

### Circuit & Logic Lab

File riêng: `src/labs/circuit-lab.html` và `src/assets/js/workspace-circuit-demo.js`.

- Palette linh kiện gồm input, clock, probe, buffer, NOT, AND, OR, XOR, NAND, NOR, XNOR, LED, wire và node.
- Thêm node vào canvas, nối dây, chọn/xóa node hoặc dây.
- Bật/tắt input A và B để xem đầu ra.
- Chuyển chế độ Build/Simulate và chạy Auto test.
- Hiển thị công thức, trạng thái LED, waveform và bảng chân trị.
- Có Inspector hiển thị loại cổng, số input, giá trị và lỗi.
- Có Undo/Redo, bật/tắt grid, zoom, Fit canvas và hướng dẫn.
- Lưu canvas vào `localStorage`, xuất JSON và khôi phục ví dụ mẫu.

## 6. Trang Dự án

File: `src/projects/index.html`

- Trình bày bốn nhóm năng lực: AI, Data & BI, IoT & Smart Systems, Automation & SaaS.
- Hiển thị sáu sáng kiến IN-01 đến IN-06.
- Lọc theo AI, Data, IoT và Automation.
- Đồng bộ bộ lọc với URL `domain` và hỗ trợ Back/Forward.
- Mỗi sáng kiến hiển thị bài toán, vai trò nghiên cứu, trạng thái xác minh, minh chứng và Lab liên quan nếu có.
- Các project hiện đều ghi `Hướng nghiên cứu / Chưa xác minh` và chưa có minh chứng public trong dữ liệu hiện tại.

Các sáng kiến không được trình bày như sản phẩm đã phát hành hay triển khai thương mại.

## 7. Trang Cộng đồng

File: `src/community/index.html`

- Chọn lối vào theo đối tượng: tất cả, sinh viên, giảng viên, người đi làm và mentor.
- Lọc danh sách tài nguyên theo đối tượng bằng click hoặc bàn phím.
- Hiển thị loại tài nguyên, Lab liên quan, ngôn ngữ, thời lượng, mức độ và dung lượng.
- Tài nguyên chưa có URL hợp lệ sẽ hiển thị `Đang biên soạn`, không có nút tải giả.
- Hiển thị các chương trình IN-07 Academic Competition, IN-08 Internship Program và IN-10 Innovation Showcase.
- Các chương trình hiện ở trạng thái định hướng/chưa xác minh và không có nút đăng ký.

## 8. Trang Về Intelex và liên hệ

File: `src/about/index.html`

- Giới thiệu INTELEX là R&D & Innovation Hub gắn với hệ sinh thái THL ONE.
- Giải thích triết lý NoSE — Not Only Software Engineering.
- Trình bày các nguyên tắc: hiểu bài toán, thử nghiệm công nghệ và phát triển cùng nhau.
- Giới thiệu bốn lĩnh vực công nghệ và link tới trang Dự án.
- Có khu vực `#contact` để góp ý Lab, đề xuất R&D và hợp tác.
- Liên hệ công khai qua `mailto:intelex.support@gmail.com`.

File `src/contact.html` vẫn tồn tại nhưng trang điều hướng chính dùng `about/index.html#contact`.

## 9. Các hành vi dùng chung và giới hạn hiện tại

- Toàn bộ xử lý chính chạy client-side, không gọi API hoặc backend.
- Một số dữ liệu phiên làm việc dùng `localStorage`; xóa dữ liệu trình duyệt có thể làm mất project đã lưu.
- Chưa có đăng nhập, đăng ký, thanh toán, tài khoản người dùng, database server, analytics hoặc tracking.
- Chưa có xác nhận offline-ready hoàn chỉnh. Các card đều hiển thị cảnh báo/ghi chú riêng về offline.
- Website dùng asset cục bộ trong `src/assets`; font và thư viện ngoài không được xem là bằng chứng cho khả năng offline.
- Các chức năng nhập file và tải file phụ thuộc vào trình duyệt và quyền người dùng.

## 10. Các file nguồn quan trọng

- `src/assets/js/main.js`: menu, active navigation và hành vi dùng chung.
- `src/assets/js/labs-data.js`: manifest danh mục Labs.
- `src/assets/js/lab-directory.js`: search/filter Labs và đồng bộ URL.
- `src/assets/js/lab-playground.js`: phần lớn engine workspace.
- `src/assets/js/workspace-circuit-demo.js`: Circuit & Logic Lab.
- `src/assets/js/projects-data.js` và `project-directory.js`: dữ liệu/lọc dự án.
- `src/assets/js/community-data.js` và `community-directory.js`: tài nguyên/chương trình cộng đồng.
- `src/assets/js/home-demo.js`: demo biểu đồ trên trang chủ.

## 11. MVP nhập dữ liệu CSV/XLSX — Đã rollback

Đã triển khai MVP cho Data Explorer, Database Lab và Chart Studio.

### Chức năng đã có

- Chọn file `.csv` hoặc `.xlsx` từ máy người dùng.
- Đọc dữ liệu cục bộ trong trình duyệt, không upload lên server.
- Với XLSX có nhiều sheet, cho phép chọn sheet có dữ liệu.
- Tự nhận diện hàng đầu tiên làm tên cột.
- Tự nhận diện giá trị số cơ bản và giữ các giá trị còn lại dưới dạng text.
- Hiển thị tên file, sheet, số dòng và số cột sau khi nhập.
- Lưu dataset đang dùng vào `localStorage` để truyền giữa các Lab trong phiên làm việc.

### Data Explorer

- Nhận dataset tổng quát từ CSV/XLSX.
- Chọn cột chữ đầu tiên làm nhóm và cột số đầu tiên làm chỉ số cho các phân tích hiện tại.
- Tiếp tục hỗ trợ lọc nhóm, lọc ngưỡng giá trị, profiling và insight.
- Chuyển các giá trị đã lọc sang Chart Studio.

### Database Lab

- Nhập CSV/XLSX vào bảng đang chọn, mặc định là `orders`.
- Cập nhật schema và số dòng theo dataset mới.
- Cho phép truy vấn dữ liệu nhập bằng các lệnh SELECT đang được engine hỗ trợ.

### Chart Studio

- Nhập CSV/XLSX trực tiếp.
- Chọn cột số dùng làm dữ liệu biểu đồ.
- Cập nhật các biểu đồ đang có bằng dữ liệu mới.
- Giữ nguyên khả năng chọn loại biểu đồ, sửa màu, tiêu đề, kích thước và vị trí.

### Giới hạn của MVP

- Chỉ xử lý cấu trúc bảng cơ bản; chưa xử lý công thức Excel, macro VBA, pivot table hoặc merged cells theo ngữ nghĩa Excel.
- Chưa có chọn nhiều file hoặc liên kết nhiều sheet thành quan hệ tự động.
- Data Explorer vẫn dùng quy ước đơn giản: cột chữ đầu tiên là nhóm, cột số đầu tiên là chỉ số.
- Database Lab chỉ hỗ trợ tập SQL an toàn giới hạn và chưa phải SQL engine đầy đủ.
- Dataset lớn có thể làm trình duyệt chậm vì xử lý trên main thread.

## 12. Phân tích nâng cao — Đã rollback

### Data Explorer

- Có thể chọn cột số dùng làm chỉ số thay vì luôn lấy cột số đầu tiên.
- Tiếp tục tự chọn các cột chữ làm chiều thời gian/nhóm để tương thích với giao diện hiện tại.
- Dataset có nhiều cột số có thể được phân tích lần lượt bằng bộ chọn cột.

### Database Lab nhiều bảng

- Với XLSX nhiều sheet, có thể dùng `Nạp tất cả sheet`.
- Mỗi sheet được chuyển thành một bảng riêng trong Schema Explorer.
- Tên bảng được chuẩn hóa từ tên sheet và tự thêm hậu tố nếu bị trùng.
- Query Builder được cập nhật theo danh sách bảng mới.
- Có thể chạy các truy vấn SELECT hiện có trên bảng được nhập.

### Chart Studio theo dataset tổng quát

- Chọn cột trục X.
- Chọn cột số làm trục Y.
- Chọn cột nhóm tùy chọn.
- Chọn phép tổng hợp: Tổng, Trung bình, Đếm, Nhỏ nhất hoặc Lớn nhất.
- Nhãn biểu đồ được lấy từ dữ liệu đã nhóm thay vì chỉ hiển thị T1, T2, T3.
- Các biểu đồ đang có được cập nhật theo kết quả phân tích mới.

### Giới hạn còn lại sau Giai đoạn 2

- Chưa có preview chỉnh sửa dữ liệu trước khi xác nhận nhập.
- Chưa có đổi tên/đổi kiểu cột trực tiếp trong giao diện.
- Dataset và nhiều bảng vẫn chủ yếu nằm trong bộ nhớ phiên làm việc; `localStorage` chưa thay thế hoàn toàn bằng IndexedDB.
- Chưa có khóa quan hệ trực quan giữa các sheet để tạo JOIN tự động.
- Chưa có xuất CSV/PNG/SVG cho kết quả phân tích mới.

## 13. Workspace hoàn chỉnh — Đã rollback

### Dataset Manager

- Dataset sau khi xác nhận được lưu vào IndexedDB.
- Có fallback về `localStorage` nếu IndexedDB không khả dụng.
- Có thể xem dataset gần đây, mở lại dataset và xóa dataset đã lưu.
- Dataset được gán mã riêng và có thời điểm lưu.

### Import và preview

- File được preview trước khi đưa vào Lab.
- Có nút xác nhận dùng dataset.
- Với file nhiều sheet, có thể chọn xác nhận toàn bộ sheet trong Database Lab.
- Hiển thị file, sheet, số dòng, số cột và một phần dữ liệu mẫu.
- File lớn hơn 25 MB bị từ chối ở MVP hiện tại.

### Chart Studio export

- Xuất dữ liệu biểu đồ thành CSV.
- Xuất biểu đồ đang chọn thành SVG hoặc PNG.
- Xuất project JSON gồm layout biểu đồ và metadata dataset.
- Dữ liệu nguồn không bị gửi lên máy chủ.

### Giới hạn của Giai đoạn 3 hiện tại

- Chưa dùng Web Worker nên file lớn vẫn có thể ảnh hưởng main thread.
- Chưa có UI đổi kiểu cột, đổi tên cột và xử lý dòng lỗi trước preview.
- Chưa có lịch sử query đầy đủ hoặc UI cấu hình khóa JOIN.
- Project JSON hiện lưu layout và metadata, chưa đóng gói toàn bộ dataset thành một project có thể khôi phục hoàn chỉnh.
