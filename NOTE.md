# 資料夾結構

### components -> 根據 pages 與 type 區分 folder，最外層為 global。

### constants -> 將設定檔與文案等變數統一做管理，避免 Hard Code。

### hoc -> 可能會淘汰掉

### hooks -> React Hooks

### layouts -> Web Layout

### locales -> i18n locales

### page -> Web Pages

### plugin -> 第三方套件的入口，做為介面來實現依賴反轉，當需要替換套件時比較方便。

### store -> React Redux

### styles -> Web Styles

### types -> TypeScript

### utils -> 封裝好的複用邏輯，可依賴第三方或自己撰寫的。

// ----------------------------------------------------------------

# 命名規則

### index.tsx, index.ts -> 小駝峰

### tsx, ts -> 大駝峰

### 多語系的 locals 與 constants 根據頁面分割檔案 (Home.ts / Home.json)

// ----------------------------------------------------------------

# z-index

### Navbar -> z-index: 30

### First Loading / Page Transition -> z-index: 50

// ----------------------------------------------------------------

// TODO Font 字型優化
// TODO locals 文案優化
// TODO 用 Web Worker 優化粒子文字的效能
// TODO 日文履歷表 數據化結果有一行有錯（多餘的）

// NOTE Navbar 避免不必要的 re-render (React.memo, useCallback, useMemo)
// NOTE 滑鼠的偵測，到每一個可以互動的位置都要切換成對應的樣式 (3D Model, Card, Particles Text...)
// NOTE 模組化封裝 | 重構與優化
// NOTE 單元測試
// NOTE 開始寫 API 後記得用 router.prefetch()
// NOTE 每一個 Lazy Render 的空 div 改寫成霧面的骨架模板

// ----------------------------------------------------------------

// INTERVIEW 深入瞭解 React Render 原理
// INTERVIEW 深入瞭解 Next.js (為什麼需要？可以解決什麼？每一種 Render 方式的使用時機與優缺點)

// ----------------------------------------------------------------

// NOTE 熟讀 i18next 相關文件，使用更適合的 locals 撰寫方式，研究 SSG 作法。(看怎麼在 constants 翻譯...)
// NOTE 背景使用 Mouse Hover Animation (https://www.youtube.com/watch?v=B3TkdFoHxiU)
// NOTE Page Transition Loading 做兩種 (已經 Pre-fetch, 尚未 Pre-fetch)

// NOTE 1. 文章列表頁面 | 資料用 API SSG 時產出 | 可複用 Portfolio Card | 無線滾動 | LazyLoading | 視圖內 Dom 渲染
// NOTE 2. 單一文章頁面 (Next.js 課程教的)
// NOTE 3. Portfolio 頁面的 煙火背景特效 (https://creativecoding.in/2021/09/16/p5-js-creativecoding%E8%8A%B1%E7%81%AB%E5%A4%A7%E6%9C%83/)
// NOTE 4. Portfolio 頁面的 Card (展示網站畫面｜使用技術｜撰寫動機｜特色介紹)
