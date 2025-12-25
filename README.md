# 个人网站使用指南

## 快速开始

直接用浏览器打开 `index.html` 即可预览网站。

```
双击打开: index.html
```

---

## 文件结构

```
personal-website/
├── index.html      # 主页面（修改内容在这里）
├── css/
│   └── style.css   # 样式文件（修改颜色、字体等）
├── js/
│   └── main.js     # 交互效果（打字机、动画等）
└── assets/         # 存放图片的文件夹
```

---

## 如何自定义

### 1. 修改个人信息

打开 `index.html`，搜索并替换以下内容：

| 位置 | 当前内容 | 改成 |
|------|----------|------|
| 标题 | `Jiahui Zhu \| Researcher` | 你的名字和职位 |
| 导航logo | `JZ` | 你的名字缩写 |
| Hero区域 | `Jiahui Zhu` | 你的名字 |
| 邮箱 | `hello@example.com` | 你的邮箱 |

### 2. 修改社交链接

在 `index.html` 中找到 `social-link`，把 `href="#"` 改成你的真实链接：

```html
<a href="https://github.com/你的用户名" class="social-link">
```

### 3. 添加头像

1. 把你的照片放到 `assets/` 文件夹
2. 在 `index.html` 中找到 `image-placeholder`
3. 替换成：

```html
<img src="assets/你的照片.jpg" alt="个人照片" class="about-photo">
```

4. 在 `css/style.css` 中添加：

```css
.about-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-lg);
}
```

### 4. 修改项目展示

在 `index.html` 中找到 `project-card`，修改：

- `project-title`: 项目名称
- `project-description`: 项目描述
- `tag`: 技术标签
- `project-link href`: 项目链接

### 5. 修改博客文章

找到 `blog-card`，修改：

- `blog-date`: 日期
- `blog-category`: 分类
- `blog-title`: 标题
- `blog-excerpt`: 摘要
- `blog-link href`: 文章链接

### 6. 修改主题颜色

打开 `css/style.css`，修改顶部的颜色变量：

```css
:root {
    --accent: #a855f7;        /* 主色调（紫色） */
    --accent-light: #c084fc;  /* 浅色调 */
    --accent-dark: #7c3aed;   /* 深色调 */
}
```

其他颜色推荐：
- 蓝色系: `#3b82f6`
- 绿色系: `#10b981`
- 粉色系: `#ec4899`
- 橙色系: `#f97316`

### 7. 修改打字机文字

打开 `js/main.js`，找到：

```javascript
const words = ['Developer', 'Creator', 'Innovator', 'Problem Solver', 'Builder'];
```

改成你想要的词语，比如：

```javascript
const words = ['研究员', '开发者', '创造者', '探索者'];
```

---

## 网站功能

| 功能 | 说明 |
|------|------|
| 深色/浅色切换 | 点击导航栏右侧的月亮/太阳图标 |
| 自定义光标 | 桌面端有跟随鼠标的酷炫光标效果 |
| 滚动动画 | 向下滚动时，内容会渐入显示 |
| 打字机效果 | Hero区域的职位会自动切换 |
| 悬浮效果 | 项目卡片、按钮等有交互反馈 |
| 响应式设计 | 自动适配手机、平板、电脑 |

---

## 部署上线

### 方案一：GitHub Pages（免费）

1. 在 GitHub 创建仓库，名称为 `你的用户名.github.io`
2. 上传所有文件
3. 在仓库 Settings → Pages 中启用
4. 访问 `https://你的用户名.github.io`

### 方案二：Vercel（免费）

1. 注册 [vercel.com](https://vercel.com)
2. 导入 GitHub 仓库或直接拖拽文件夹上传
3. 自动获得 `.vercel.app` 域名

### 方案三：Netlify（免费）

1. 注册 [netlify.com](https://netlify.com)
2. 拖拽 `personal-website` 文件夹到网页
3. 自动获得 `.netlify.app` 域名

---

## 常见问题

**Q: 字体加载慢？**
A: 网站使用 Google Fonts，如果加载慢可以下载字体文件到本地。

**Q: 如何添加更多项目？**
A: 复制一个 `<article class="project-card">...</article>` 块，修改内容即可。

**Q: 如何改成中文界面？**
A: 直接在 `index.html` 中把英文改成中文。

---

## 技术栈

- HTML5 语义化标签
- CSS3 自定义属性 + Flexbox + Grid
- 原生 JavaScript（无框架依赖）
- Google Fonts（Space Grotesk + Inter）

---

祝你的网站大获成功！有问题随时调整。
