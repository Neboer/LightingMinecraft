const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "灵动Minecraft文档库",
  base: "/doc/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    logo: "/lightingMCreverse.png",
    lastUpdated: false,
    navbar: true,
    displayAllHeaders: true,
    search: false,
    nav: [
      {
        text: "灵动主站",
        link: "https://minecraft.neboer.site/",
        target: "_self",
      },
    ],
    sidebar: {
      "/": [
        {
          title: "导言",
          collapsable: false,
          children: ["", "TermsOfService"],
        },
        {
          title: "帮助",
          collapsable: false,
          children: ["LoginHelp", "FriendSystem", "TeleportSystem"],
        },
        {
          title: "日志",
          collapsable: false,
          children: ["History"],
        },
        {
          title: "文件留档",
          collapsable: false,
          children: ["Announcement2022002"],
        },
      ],
    },
    sidebarDepth: 1,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
