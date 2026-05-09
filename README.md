# 爱问答助手 · AiAsk Helper

> 多平台在线学习答题辅助 Tampermonkey 用户脚本 — **自动构建产物分发仓库**。

## 安装

点击下方链接,Tampermonkey / Violentmonkey / Greasemonkey 会自动识别为安装/更新链接:

### 👉 [aiask.user.js（最新版本，自动跟随更新）](https://github.com/aiaskhelper/ai-ask-helper-dist/releases/latest/download/aiask.user.js)

特定历史版本请到 [Releases](../../releases) 列表下载对应 `aiask{版本}.user.js`。

## 主要能力

- **自动答题**：本地缓存 → 公共题库 → AI 检索（按配置顺序回退）
- **本地题库**：按题目哈希缓存,支持预览、编辑、导入导出
- **官方题库**：模糊搜题(登录后能力更完整)
- **AI 搜题**：支持流式输出与题型提示词
- **悬浮面板**：直接在目标页面操作,支持自定义快捷键

## 支持平台

脚本覆盖多个国内主流在线学习与考试平台。完整列表请在安装后查看 Tampermonkey 中脚本头部的 `@match` 字段,或在脚本设置页查看。

## 关于本仓库

- 此仓库**只托管自动构建的 `.user.js` 产物**,不包含源代码
- 每个 Release 由 GitHub Actions 在上游发布新版本时自动构建并上传
- 历史版本永久保留在 Releases 列表中

## 反馈

如遇使用问题或有建议,请通过 [Issues](../../issues) 反馈。

## 免责声明

本脚本仅用于学习与技术研究。使用者需自行承担使用本脚本可能产生的任何后果,并应遵守目标平台的服务条款与相关法律法规。
