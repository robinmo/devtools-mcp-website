# Google DevFest Workshop - Chrome DevTools MCP Server Website

这是一个关于Google DevFest Workshop的官方网站，重点介绍Chrome DevTools MCP Server。

## 🌟 网站特性

- 极简设计风格，参考GitHub美学
- 响应式设计，支持所有设备
- 流畅的页面切换和动画效果
- 专业的内容展示和代码示例

## 📱 页面结构

1. **首页** - Workshop总体信息展示
2. **GDG & DevFest** - 开发者社区介绍
3. **DevTools MCP** - 技术主题深入介绍
4. **关于我** - 个人信息展示

## 🚀 部署到GitHub Pages

### 步骤1: 创建GitHub仓库

1. 访问 [GitHub](https://github.com) 并登录您的账户
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `devtools-mcp-website`
   - **Description**: "Google DevFest Workshop - Chrome DevTools MCP Server"
   - 选择 **Public**（GitHub Pages需要公开仓库）
   - 勾选 "Add a README file"
4. 点击 "Create repository"

### 步骤2: 推送代码

```bash
# 在终端中，导航到项目目录
cd /Users/robingao/Desktop/devtools-mcp-website

# 初始化git仓库（如果还没有）
git init

# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/devtools-mcp-website.git

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Google DevFest Workshop website"

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 步骤3: 配置GitHub Pages

1. 在GitHub仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages" 选项
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - Folder 选择 "/ (root)"
4. 点击 "Save"

### 步骤4: 等待部署完成

- GitHub Actions会自动运行部署流程
- 部署完成后，您的网站将在以下地址可用：
  `https://YOUR_USERNAME.github.io/devtools-mcp-website`

## 🛠️ 本地开发

```bash
# 启动本地服务器
python3 -m http.server 8000

# 访问 http://localhost:8000
```

## 📁 项目结构

```
devtools-mcp-website/
├── index.html              # 主页面文件
├── styles.css              # 样式文件
├── script.js               # JavaScript逻辑
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions部署配置
└── README.md              # 项目说明文档
```

## 🔧 自定义配置

如需修改内容，可以直接编辑以下文件：
- `index.html` - 页面内容和结构
- `styles.css` - 样式和布局
- `script.js` - 交互逻辑

## 📞 联系信息

- 邮箱：robin@gmail.com
- 职业：AI Coder
- 兴趣爱好：篮球

## 📄 许可证

MIT License - 自由使用和修改