<script setup>
import { ref } from "vue";
import docList from "@/docs/docs.json";
const markdownFiles = import.meta.glob("@/docs/*.md", {
  eager: true,
  as: "raw",
});

// 控制移动端菜单展开
const sidebarOpen = ref(false);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}

// eslint-disable-next-line no-unused-vars
function get_docs_list() {
  const docList = [];

  Object.keys(markdownFiles).forEach((path) => {
    const slug = path
      .split("/")
      .pop() // 获取文件名
      .replace(/\.md$/, ""); // 移除扩展名

    // 从文件内容中提取标题（假设第一行是#标题）
    const content = markdownFiles[path];
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : slug;

    docList.push({
      slug,
      title,
      path,
    });
  });

  console.log(docList);
  return docList;
}
</script>

<template>
  <div class="docs-container">
    <!-- 移动端菜单按钮 -->
    <button class="sidebar-toggle" @click="toggleSidebar" aria-label="切换菜单">
      <span v-if="!sidebarOpen">&#9776; 菜单</span>
      <span v-else>&#10005; 关闭</span>
    </button>

    <div
      class="sidebar"
      :class="{ open: sidebarOpen }"
      @click.self="sidebarOpen = false"
    >
      <h2>文档目录</h2>
      <ul>
        <li v-for="doc in docList" :key="doc.slug">
          <router-link :to="`/docs/${doc.slug}`" @click="sidebarOpen = false">
            {{ doc.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="content" :class="{ 'sidebar-open': sidebarOpen }">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.docs-container {
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* 菜单按钮样式 */
.sidebar-toggle {
  display: none;
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 1101;
  background: lightgreen;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px 14px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

/* 桌面端侧边栏 */
.sidebar {
  width: 250px;
  padding: 20px;
  border-right: 1px solid #eee;
  background: #f8f9fa;
  overflow-y: auto;
  flex: none;
  transition: transform 0.2s;
  z-index: 1100;
}

/* 桌面端内容区 */
.content {
  flex: 1;
  padding: 32px 40px;
  transition: filter 0.2s;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .docs-container {
    flex-direction: column;
  }
  .sidebar-toggle {
    display: block;
  }
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80vw;
    max-width: 320px;
    min-width: 200px;
    transform: translateX(-100%);
    transition: transform 0.2s;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
    border-right: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .content {
    flex: none;
    padding: 16px 8px;
    transition: filter 0.2s;
  }
  /* 展开菜单时内容虚化/不可交互 */
  .content.sidebar-open {
    filter: blur(2px) grayscale(0.2);
    pointer-events: none;
    user-select: none;
  }
}
</style>
