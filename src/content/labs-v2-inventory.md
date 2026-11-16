# Inventory Labs v2

| Slug | Entry route | V1 implementation | V2 module | Migration status |
|---|---|---|---|---|
| `data-explorer` | `labs/data-explorer/index.html` | `dataExplorer()` trong `assets/js/lab-playground.js` | `labs/data-explorer/module.js` | Module v2 pilot, đã di chuyển logic |
| `chart-studio` | `labs/chart-studio/index.html` | `chartStudio()` trong `assets/js/lab-playground.js` | `labs/chart-studio/module.js` | Module v2 pilot, đã di chuyển logic |
| `quiz-studio` | `labs/quiz-studio/index.html` | `quizStudio()` trong `assets/js/lab-playground.js` | `labs/quiz-studio/module.js` | Module v2, đã di chuyển logic |
| `algorithm-lab` | `labs/algorithm-lab/index.html` | `algorithmLab()` trong `assets/js/lab-playground.js` | `labs/algorithm-lab/module.js` | Module v2, đã di chuyển logic |
| `circuit-logic-lab` | `labs/circuit-lab.html` | `workspace-circuit-demo.js` (đã chuyển) | `labs/circuit-logic-lab/module.js` | Module v2, đã di chuyển logic |
| `web-development` | `labs/web-development/index.html` | `webLab()` trong `assets/js/lab-playground.js` | `labs/web-development/module.js` | Module v2, đã di chuyển logic |
| `database-lab` | `labs/database-lab/index.html` | `databaseLab()` trong `assets/js/lab-playground.js` | `labs/database-lab/module.js` | Module v2, đã di chuyển logic |
| `cad-3d` | `labs/cad-3d/index.html` | `cadStudio()` trong `assets/js/lab-playground.js` | `labs/cad-3d/module.js` | Module v2, đã di chuyển logic |
| `physics-engineering` | `labs/physics-engineering/index.html` | `physicsLab()` trong `assets/js/lab-playground.js` | `labs/physics-engineering/module.js` | Module v2, đã di chuyển logic |
| `industrial-automation` | `labs/industrial-automation/index.html` | `industrialLab()` trong `assets/js/lab-playground.js` | `labs/industrial-automation/module.js` | Module v2, đã di chuyển logic |
| `ai-machine-learning` | `labs/ai-machine-learning/index.html` | `aiLab()` trong `assets/js/lab-playground.js` | `labs/ai-machine-learning/module.js` | Module v2, đã di chuyển logic |
| `smart-farm-simulator` | `labs/smart-farm-simulator/index.html` | `farmSimulator()` trong `assets/js/lab-playground.js` | `labs/smart-farm-simulator/module.js` | Module v2, đã di chuyển logic |

## Pattern áp dụng

Mỗi lab có một `module.js` riêng và đăng ký theo cùng contract:

```js
IntelexLabRuntime.register({
  slug: 'lab-slug',
  phase: 'module',
  mount: function (context) {
    return mountImplementation(context);
  }
});
```

Tất cả 12 lab hiện đã dùng `phase: module`. `lab-playground.js` chỉ còn là compatibility entrypoint để nạp shell, truyền dependency chung và mount module; logic riêng của từng lab nằm trong thư mục lab tương ứng.
