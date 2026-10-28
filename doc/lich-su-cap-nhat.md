# INTELEX — Lịch sử cập nhật

> Tài liệu này là lịch sử được tổng hợp từ mã nguồn hiện tại, các file tài liệu trong `doc/` và trường ngày trong dữ liệu. Repository hiện không có thư mục `.git` ở bản làm việc này, vì vậy không thể khẳng định đây là lịch sử commit đầy đủ.

### 2026-10-28 — Data Explorer: nhập dữ liệu an toàn v2

- Khôi phục việc nhập dữ liệu **chỉ trong Data Explorer**, không thay đổi giao diện hay thêm bộ nhập file cho Chart Studio.
- Tách lõi xử lý dữ liệu thành `src/assets/js/data-core.js` để giảm rủi ro ảnh hưởng các Lab khác.
- Hỗ trợ CSV, TSV, XLSX và XLS; Excel nhiều sheet cho phép chọn trang tính cần đọc.
- Đọc toàn bộ cột, giữ ô trống đúng vị trí, xử lý dấu nháy kép/dấu phân cách trong CSV và tự đặt tên an toàn cho cột trống hoặc trùng tên.
- Nhận diện văn bản, số, tiền tệ, phần trăm, ngày và giá trị đúng/sai; hiển thị profiling theo từng cột.
- Chart Studio chỉ nhận tối đa 18 giá trị từ cột số mà người dùng chọn trong Data Explorer; giao diện Chart Studio không thay đổi.
- Bổ sung kiểm thử Node cho parser: CSV dấu phẩy/chấm phẩy/tab, nội dung có dấu nháy và xuống dòng, ô trống, số định dạng Việt Nam, tiền tệ, phần trăm, ngày, boolean và ma trận dữ liệu Excel.
- Kiểm tra cú pháp JavaScript, `git diff --check` và khả năng truy cập thư viện SheetJS từ CDN trước khi tích hợp.

### 2026-10-28 — Rollback Data Workspace

- Theo xác nhận của người dùng, đã gỡ các chức năng nhập CSV/XLSX và Data Workspace của Giai đoạn 1–3.
- Khôi phục Data Explorer về nhập CSV theo logic ban đầu.
- Khôi phục Database Lab về nhập CSV vào bảng đang chọn.
- Khôi phục Chart Studio về dữ liệu mẫu và dữ liệu số truyền qua luồng cũ.
- Xóa lớp `data-import.js`, các script liên quan và giao diện preview/IndexedDB/export mới.
- Giữ lại các mục mô tả Giai đoạn 1–3 trong tài liệu để tham chiếu lịch sử; chúng không đại diện cho chức năng đang chạy.

## Mốc hiện tại

- Ngày rà soát tài liệu: **28/10/2026**.
- Công nghệ: HTML5, CSS3, Vanilla JavaScript.
- Kiến trúc: website tĩnh, dữ liệu manifest chạy ở client-side.
- Dữ liệu project trong `src/assets/js/projects-data.js` đang ghi `updatedAt: 2026-10-14` cho IN-01 đến IN-06.

## Các giai đoạn đã thể hiện trong mã nguồn

### 2026-10-28 — Giai đoạn 1 MVP: nhập CSV/XLSX cho Data Labs

- Thêm `src/assets/js/data-import.js` làm lớp nhập dữ liệu dùng chung.
- Hỗ trợ đọc CSV và XLSX cục bộ trong trình duyệt.
- Hỗ trợ chọn sheet đối với file XLSX có nhiều sheet.
- Thêm chuẩn dataset gồm tên file, sheet, columns và rows.
- Thêm bộ nhập dữ liệu vào Data Explorer, Database Lab và Chart Studio.
- Data Explorer có thể dùng cột chữ đầu tiên và cột số đầu tiên để tiếp tục phân tích.
- Database Lab có thể nạp dataset vào bảng đang chọn và chạy các truy vấn SELECT hiện có.
- Chart Studio có thể chọn cột số và cập nhật dữ liệu cho biểu đồ.
- Bổ sung lưu dataset hoạt động trong `localStorage`.
- Kiểm tra cú pháp bằng `node --check` cho các file JavaScript đã thay đổi.
- Giới hạn hiện tại: chưa xử lý đầy đủ công thức, macro, pivot table, quan hệ nhiều sheet và dataset lớn.

### 2026-10-28 — Giai đoạn 2: phân tích nâng cao

- Mở rộng Data Explorer để chọn cột số dùng làm chỉ số phân tích.
- Bổ sung hàm tổng hợp dataset theo trục X, cột số, nhóm và phương thức tổng hợp.
- Chart Studio hỗ trợ chọn trục X, cột Y, nhóm dữ liệu và SUM/AVG/COUNT/MIN/MAX.
- Nhãn biểu đồ được lấy từ các nhóm dữ liệu thực tế.
- Database Lab hỗ trợ nạp toàn bộ sheet của một file XLSX thành nhiều bảng.
- Schema Explorer và Query Builder cập nhật theo các bảng được nhập.
- Tên bảng từ sheet được chuẩn hóa và xử lý trùng tên.
- Bổ sung cảnh báo rõ hơn về những phần chưa thuộc phạm vi: IndexedDB, preview chỉnh sửa, JOIN theo khóa trực quan, Web Worker và export kết quả.
- Kiểm tra cú pháp lại bằng `node --check` cho `data-import.js` và `lab-playground.js`.

### 2026-10-28 — Giai đoạn 3: hoàn thiện lõi Data Workspace

- Bổ sung Dataset Manager dùng IndexedDB, có fallback về `localStorage` khi trình duyệt không hỗ trợ.
- Cho phép lưu nhiều dataset, xem danh sách dataset gần đây, mở lại và xóa dataset.
- Thêm preview dữ liệu trước khi xác nhận dùng trong Lab.
- Thêm nút xác nhận dataset và xác nhận toàn bộ sheet trước khi đưa dữ liệu vào workspace.
- Giới hạn file nhập ở mức 25 MB để tránh làm treo giao diện ngoài phạm vi kiểm thử.
- Bổ sung trạng thái chờ xác nhận, lỗi nhập file và thông tin dataset đang xử lý.
- Chart Studio có thể xuất CSV, SVG, PNG và project JSON.
- Project JSON giữ layout biểu đồ và thông tin nguồn dataset.
- Escape dữ liệu preview trước khi render vào HTML và không thực thi macro/mã nhúng từ file Excel.
- Kiểm tra cú pháp JavaScript và kiểm thử hàm tổng hợp dữ liệu bằng dataset mẫu trong Node.
- Phần chưa hoàn thiện: Web Worker cho file lớn, đổi kiểu cột trực quan, query history đầy đủ, quan hệ JOIN bằng UI và lưu toàn bộ project giữa các Lab.

### 1. Nền tảng website và hệ thống điều hướng

- Xây dựng header/footer dùng chung.
- Hoàn thiện các khu vực chính: Khám phá, Labs, Dự án, Cộng đồng và Về Intelex.
- Dùng logo, icon, hình ảnh và CSS cục bộ trong `src/assets`.
- Bổ sung responsive layout cho desktop, tablet và mobile.
- Thêm trạng thái active cho menu và menu mobile.

### 2. Trang chủ theo hướng “Learn by doing”

- Chuyển trang chủ thành điểm vào trải nghiệm công nghệ.
- Thêm hero với CTA tới Labs và Dự án.
- Thêm bốn lối vào theo nhu cầu sử dụng.
- Thêm demo biểu đồ nhỏ cho phép đổi dataset và kiểu biểu đồ.
- Thêm khu vực giới thiệu bốn lĩnh vực AI, Data & BI, IoT & Smart Systems và Automation.

### 3. Xây dựng Labs Hub

- Tạo manifest cho danh mục Labs trong `labs-data.js`.
- Bổ sung card hiển thị trạng thái, ưu tiên, đối tượng, ví dụ mẫu và offline status.
- Bổ sung tìm kiếm client-side, chuẩn hóa tiếng Việt không dấu và filter theo lĩnh vực.
- Đồng bộ query `category`/`query` với URL.
- Bổ sung empty state và nút xóa bộ lọc.
- Mở rộng danh mục lên 12 Lab hiện có trong mã nguồn.

### 4. Xây dựng hệ thống Lab Playground

- Tạo một shell workspace dùng chung cho các Lab.
- Bổ sung nút đặt lại Lab và trạng thái thao tác.
- Phân nhánh engine theo từng loại Lab trong `lab-playground.js`.
- Bổ sung xử lý dữ liệu cục bộ, nhập CSV và chuyển dữ liệu giữa Data Explorer/Database Lab với Chart Studio.

### 5. Bổ sung các Lab dữ liệu và giáo dục

- Data Explorer: profiling, filter, insight và nhập CSV.
- Chart Studio: canvas biểu đồ, inspector, chỉnh dữ liệu/màu/kích thước.
- Database Lab: schema mẫu, SQL chỉ đọc, query builder, CSV và bài luyện SQL.
- Quiz Studio: bộ câu hỏi mẫu, nhập CSV/JSON, đánh dấu, tính giờ, chấm điểm và giải thích.

### 6. Bổ sung các Lab mô phỏng và lập trình

- Algorithm Lab: mô phỏng thuật toán/cấu trúc dữ liệu theo bước.
- Web Development: editor HTML/CSS/JS, preview sandbox, console, lưu cục bộ và xuất HTML.
- AI & Machine Learning: điều chỉnh tham số và xem kết quả phân loại minh họa.
- Physics & Engineering: mô phỏng tham số vật lý.
- Industrial Automation: mô phỏng luật điều khiển và actuator.
- 3D & CAD: workspace mô hình kỹ thuật.

### 7. Bổ sung Smart Farm Simulator

- Mô phỏng digital twin nhà kính thủy canh cục bộ.
- Thêm khu vực canh tác, cảm biến, bể nước, bơm, quạt và chế độ tự động.
- Thêm tiến thời gian, telemetry, cảnh báo, sự cố giả lập và kịch bản what-if.
- Ghi rõ sandbox không điều khiển thiết bị thật.

### 8. Bổ sung Circuit & Logic Lab chuyên biệt

- Tạo trang `src/labs/circuit-lab.html` với giao diện editor riêng.
- Thêm palette cổng logic và linh kiện số.
- Thêm canvas nối mạch, thay đổi input và mô phỏng output.
- Thêm truth table, waveform, inspector, Auto test, zoom, grid và Fit canvas.
- Thêm Undo/Redo, lưu cục bộ và xuất JSON.

### 9. Trang Dự án và nội dung R&D

- Hợp nhất định hướng Technology/Innovation vào trang Dự án.
- Chuẩn hóa sáu mã sáng kiến IN-01 đến IN-06.
- Thêm filter theo AI, Data, IoT và Automation.
- Bổ sung trường trạng thái, minh chứng và Lab liên quan.
- Giữ các sáng kiến ở trạng thái “Hướng nghiên cứu / Chưa xác minh” khi chưa có bằng chứng public.

### 10. Trang Cộng đồng và Về Intelex

- Tách các nội dung học tập/tài nguyên khỏi trang Dự án.
- Thêm bộ lọc theo sinh viên, giảng viên, người đi làm và mentor.
- Thêm danh mục tài nguyên đang biên soạn.
- Đưa IN-07, IN-08 và IN-10 về nhóm chương trình cộng đồng.
- Bổ sung trang Về Intelex, triết lý NoSE, bốn lĩnh vực và khu vực liên hệ `#contact`.

## Trạng thái hiện tại cần lưu ý

- Các chức năng tương tác chính đã có mã JavaScript tương ứng trong `src/assets/js`.
- Các Lab hiện được manifest ghi là `Có thể dùng`, nhưng offline chưa được xác thực đầy đủ.
- Các project IN-01 đến IN-06 chưa có minh chứng public trong dữ liệu hiện tại.
- Tài nguyên cộng đồng hiện ở trạng thái `Đang biên soạn` và chưa có link tải.
- Chương trình IN-07, IN-08 và IN-10 chưa có lịch hoặc link đăng ký đã xác minh.
- Chưa có backend, tài khoản, cơ sở dữ liệu server, analytics, tracking hoặc cơ chế đồng bộ dữ liệu người dùng.

## Quy ước cho các lần cập nhật tiếp theo

Khi cập nhật website, nên ghi thêm một mục mới ở đầu phần này theo mẫu:

```md
### YYYY-MM-DD — Tên bản cập nhật

- Thay đổi chính.
- Chức năng mới hoặc chức năng đã sửa.
- File/route liên quan.
- Ghi chú kiểm thử và giới hạn còn lại.
```

Mỗi lần thay đổi trạng thái Lab, project hoặc chương trình cộng đồng cần cập nhật đồng thời dữ liệu manifest và tài liệu này để tránh mô tả sai chức năng đang chạy.
