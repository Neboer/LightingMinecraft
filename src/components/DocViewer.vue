<script setup>
import { onMounted, ref, watch } from "vue";
import MarkdownIt from "markdown-it";
import container from "markdown-it-container";

const props = defineProps({
  docName: String,
});

const renderedContent = ref("");
const md = new MarkdownIt();

// 自定义 info 块
md.use(container, "info", {
  render(tokens, idx) {
    const token = tokens[idx];
    if (token.nesting === 1) {
      return `<div class="admonition admonition-info">\n`;
    } else {
      return `</div>\n`;
    }
  },
});

// 自定义 warning 块
md.use(container, "warning", {
  render(tokens, idx) {
    const token = tokens[idx];
    if (token.nesting === 1) {
      return `<div class="admonition admonition-warning">\n`;
    } else {
      return `</div>\n`;
    }
  },
});

// 动态加载文档内容
const loadDocument = async () => {
  try {
    // 使用动态导入
    const content = await import(`@/docs/${props.docName}.md?raw`);
    renderedContent.value = md.render(content.default);
  } catch (error) {
    renderedContent.value = `<div class="error">文档未找到: ${props.docName}</div>`;
  }
};

// 监听文档名称变化
watch(() => props.docName, loadDocument);

// 初始加载
onMounted(loadDocument);
</script>

<template>
  <div class="markdown-content" v-html="renderedContent" />
</template>

<style scoped>
.markdown-content {
  line-height: 1.6;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
}

.markdown-content :deep(h1) {
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.markdown-content :deep(h2) {
  margin-top: 30px;
}

.markdown-content :deep(pre) {
  background: #f8f8f8;
  padding: 15px;
  border-radius: 4px;
  overflow: auto;
}

.markdown-content :deep(.admonition) {
  margin: 1em 0;
  padding: 1em;
  border-radius: 4px;
  position: relative;
  line-height: 1.5;
}

.markdown-content :deep(.admonition-info) {
  background-color: #f0faff;
  border-left: 4px solid #2196f3;
}

.markdown-content :deep(.admonition-warning) {
  background-color: #fffde7;
  border-left: 4px solid #ffb300;
}

.markdown-content :deep(code) {
  background: #f8f8f8;
  padding: 2px 5px;
  border-radius: 3px;
}

.markdown-content :deep(a) {
  color: #007bff;
  text-decoration: none;
}

.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.error {
  color: #e53935;
  padding: 20px;
  background: #ffebee;
  border-radius: 4px;
}
</style>
