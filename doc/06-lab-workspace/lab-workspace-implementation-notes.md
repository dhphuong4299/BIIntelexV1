# Lab Workspace Template — Implementation Notes

## Kiến trúc đề xuất

**Workspace shell** độc lập với nội dung marketing: Toolbar (top), Component Palette (left), Canvas/Simulator (center), Inspector (right), Results Panel (bottom). Các panel có thể thu gọn, resize và lưu preference local.

`LabPlugin` đề xuất:

```ts
interface LabManifest {
  id: string;
  slug: string;
  title: string;
  category: string[];
  status: 'concept' | 'development' | 'preview' | 'running';
  offlineAssets: string[];
  version: string;
}
interface LabPlugin<Project, Result> {
  createDefaultProject(): Project;
  validate(project: Project): string[];
  simulate(project: Project, options?: object): Promise<Result>;
  serialize(project: Project): string;
  deserialize(input: string): Project;
  exportResult(result: Result, format: string): Promise<Blob>;
}
```

## Digital logic engine MVP

- Node types `INPUT`, `AND`, `OR`, `NOT`, `XOR`, `OUTPUT` và wire directed edges.
- Logic evaluation deterministic; tránh infinite loop bằng topo sort hoặc giới hạn cycles (sequential circuits là phase riêng).
- Undo/redo theo command stack; import/export dự án versioned JSON.
- Waveform lấy từ mô phỏng logic thật, không dùng dữ liệu ngẫu nhiên.
- Editor có pointer drag, snap-to-grid, pan/zoom; phải có keyboard support cơ bản.

## Responsive

- Desktop >=1280: 3 panel + bottom results.
- Tablet: palette thành drawer; inspector thành tab/drawer.
- Mobile: single canvas + tabs `Linh kiện`, `Canvas`, `Thuộc tính`, `Kết quả`; touch targets >=44px; canvas zoom và pan hai ngón.
- Tải nặng: thực thi mô phỏng trong Web Worker khi có lợi, tắt animation không cần thiết khi prefers-reduced-motion.

## Offline/Security

- Toàn bộ assets cần thiết cache theo version; save project IndexedDB/OPFS; export/import JSON để giữ dữ liệu lâu dài.
- Không phụ thuộc CDN hay socket/IoT server cho digital logic cơ bản.
- Không chạy mã JS tùy ý trong main page context; nếu Lab khác cần coding thì sandbox cẩn thận.

## Nghiệm thu

- [ ] AND: (0,0)→0, (0,1)→0, (1,0)→0, (1,1)→1.
- [ ] A=1 B=0 hiển thị LED OFF; mô phỏng/truth-table/waveform nhất quán.
- [ ] Undo/redo, save/load và export/import chạy offline.
- [ ] UI đủ dùng cho desktop và mobile; có thao tác không dùng kéo thả.
- [ ] Chỉ đánh dấu offlineReady khi tắt mạng vẫn mở lại và chạy được ví dụ mẫu.
