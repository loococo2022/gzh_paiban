const DEFAULT_MARKDOWN = `# 公众号排版工作台示例

好的排版不是装饰，而是把阅读的节奏、停顿和重点，重新交还给读者。你可以把任何一篇 Markdown 文本贴进来，快速切换模板，再把排好版的富文本直接粘贴到公众号后台。

## 为什么这类工具对公众号有用

1. 标准 Markdown 更适合写作者先把内容写清楚。
2. 模板化排版能显著减少重复劳动。
3. 复制富文本可以缩短从写作到发布的链路。

> 真正舒服的公众号版式，通常满足三件事：标题层级清楚、正文呼吸感足够、重点信息一眼能扫到。

## 一篇文章的推荐结构

- 开头先交代观点或结论。
- 中段用案例、数据或拆解支撑观点。
- 每个二级标题只解决一个问题。
- 结尾给读者一个明确动作。

## 数据看板示例

| 指标 | 当前 | 下周目标 |
| --- | ---: | ---: |
| 打开率 | 18.7% | 21.0% |
| 完读率 | 41.3% | 48.0% |
| 分享率 | 3.2% | 4.5% |

## 示例代码块

\`\`\`text
标题一句话说明价值
导语两段交代背景和结论
正文三小节分层推进
结尾一句话引导互动
\`\`\`

### 结尾建议

如果你要发的是长文，优先选“森系长文”“纸感复古”或“杂志黑金”；如果是商业洞察、热点解读或案例复盘，可以试试“商务简报”“科技洞察”“热点快评”。
`;

const THEMES = [
  {
    id: "forest-longform",
    name: "森系长文",
    tag: "长文叙事",
    note: "适合人物、品牌故事、深度观点，留白充足，阅读压力小。",
    swatch: "linear-gradient(135deg, #2f7a5e, #c7dec6)",
    palette: {
      page: "#f3f7f3",
      surface: "#ffffff",
      text: "#23352d",
      muted: "#5c6b64",
      border: "#d4e3d7",
      accent: "#2f7a5e",
      accentLight: "#edf7f1",
      accentDeep: "#244f3f",
      accentContrast: "#ffffff",
      quoteBg: "#f6fbf7",
      quoteBorder: "#6b9f82",
      inlineCodeBg: "#edf7f1",
      inlineCodeText: "#1f5d48",
      codeBg: "#21362c",
      codeText: "#edf6f0",
      tableHeadBg: "#2f7a5e",
      tableHeadText: "#ffffff",
      tableRowBg: "#f7fbf8",
      imageBg: "#f8fcf9"
    }
  },
  {
    id: "new-chinese",
    name: "国风朱砂",
    tag: "新中式",
    note: "适合文化、读书、品牌美学内容，颜色收敛但辨识度高。",
    swatch: "linear-gradient(135deg, #8f2b24, #ead6c9)",
    palette: {
      page: "#faf5f0",
      surface: "#fffdf9",
      text: "#3c2b28",
      muted: "#7a5d58",
      border: "#ead8d0",
      accent: "#8f2b24",
      accentLight: "#f8eeea",
      accentDeep: "#6f1c17",
      accentContrast: "#ffffff",
      quoteBg: "#fcf6f3",
      quoteBorder: "#b45f56",
      inlineCodeBg: "#fbf0ec",
      inlineCodeText: "#7e2721",
      codeBg: "#351714",
      codeText: "#f9eeeb",
      tableHeadBg: "#8f2b24",
      tableHeadText: "#ffffff",
      tableRowBg: "#fdf8f6",
      imageBg: "#fcf5f1"
    }
  },
  {
    id: "magazine-black-gold",
    name: "杂志黑金",
    tag: "封面感",
    note: "适合人物专访、品牌大片、审美专题，视觉冲击更强。",
    swatch: "linear-gradient(135deg, #111111, #d7b36a)",
    palette: {
      page: "#f6f2e9",
      surface: "#fffdf7",
      text: "#221c16",
      muted: "#6d6358",
      border: "#eadcc2",
      accent: "#1e1b18",
      accentLight: "#f4ebd7",
      accentDeep: "#111111",
      accentContrast: "#e1bc71",
      quoteBg: "#faf5ea",
      quoteBorder: "#d6b06e",
      inlineCodeBg: "#f4ead3",
      inlineCodeText: "#463015",
      codeBg: "#14110e",
      codeText: "#f8eed8",
      tableHeadBg: "#1e1b18",
      tableHeadText: "#e6c27b",
      tableRowBg: "#fffaf0",
      imageBg: "#fbf6ec"
    }
  },
  {
    id: "tech-insight",
    name: "科技洞察",
    tag: "理性解读",
    note: "适合产品发布、行业观察、AI 话题，层级锋利、信息感强。",
    swatch: "linear-gradient(135deg, #0f172a, #3b82f6)",
    palette: {
      page: "#edf5ff",
      surface: "#ffffff",
      text: "#1d2838",
      muted: "#5a6980",
      border: "#d6e6ff",
      accent: "#2563eb",
      accentLight: "#edf4ff",
      accentDeep: "#0f172a",
      accentContrast: "#ffffff",
      quoteBg: "#f5f9ff",
      quoteBorder: "#5a8cf0",
      inlineCodeBg: "#eef4ff",
      inlineCodeText: "#1f4fd0",
      codeBg: "#101828",
      codeText: "#e6f0ff",
      tableHeadBg: "#2563eb",
      tableHeadText: "#ffffff",
      tableRowBg: "#f8fbff",
      imageBg: "#f3f8ff"
    }
  },
  {
    id: "cream-lifestyle",
    name: "奶油日常",
    tag: "生活方式",
    note: "适合个人成长、情绪内容、生活方式和女性向账号。",
    swatch: "linear-gradient(135deg, #f6d3b5, #c67f5a)",
    palette: {
      page: "#fff8f2",
      surface: "#fffdfb",
      text: "#5b4337",
      muted: "#8a7163",
      border: "#f1ddd1",
      accent: "#c67f5a",
      accentLight: "#fff2e9",
      accentDeep: "#8d5539",
      accentContrast: "#ffffff",
      quoteBg: "#fff8f4",
      quoteBorder: "#d9a07f",
      inlineCodeBg: "#fff0e5",
      inlineCodeText: "#9a5f40",
      codeBg: "#614331",
      codeText: "#fff4ed",
      tableHeadBg: "#c67f5a",
      tableHeadText: "#ffffff",
      tableRowBg: "#fffbf7",
      imageBg: "#fff8f3"
    }
  },
  {
    id: "business-brief",
    name: "商务简报",
    tag: "专业克制",
    note: "适合案例复盘、商业分析、公司快报，结构清晰不花哨。",
    swatch: "linear-gradient(135deg, #19324a, #8fb3c9)",
    palette: {
      page: "#f3f7fb",
      surface: "#ffffff",
      text: "#253443",
      muted: "#617283",
      border: "#dce5ed",
      accent: "#19324a",
      accentLight: "#eef3f7",
      accentDeep: "#102435",
      accentContrast: "#ffffff",
      quoteBg: "#f7fafc",
      quoteBorder: "#6f8ca2",
      inlineCodeBg: "#edf3f7",
      inlineCodeText: "#1b3852",
      codeBg: "#142434",
      codeText: "#edf4fa",
      tableHeadBg: "#19324a",
      tableHeadText: "#ffffff",
      tableRowBg: "#f9fbfd",
      imageBg: "#f6f9fb"
    }
  },
  {
    id: "retro-paper",
    name: "纸感复古",
    tag: "旧刊笔记",
    note: "适合书评、历史、人文和长图文，视觉有旧纸张的温度。",
    swatch: "linear-gradient(135deg, #8a6945, #efe0bf)",
    palette: {
      page: "#f6efe1",
      surface: "#fffaf0",
      text: "#49392c",
      muted: "#7e6a58",
      border: "#e3d2b2",
      accent: "#8a6945",
      accentLight: "#fcf4e4",
      accentDeep: "#62492f",
      accentContrast: "#ffffff",
      quoteBg: "#fdf6eb",
      quoteBorder: "#b9966b",
      inlineCodeBg: "#f6ebd5",
      inlineCodeText: "#6b5035",
      codeBg: "#443324",
      codeText: "#f7edd8",
      tableHeadBg: "#8a6945",
      tableHeadText: "#ffffff",
      tableRowBg: "#fffbf3",
      imageBg: "#fef8ed"
    }
  },
  {
    id: "sunrise-note",
    name: "晨光清单",
    tag: "干净轻快",
    note: "适合方法论、效率、个人 IP 日更，明快但不刺眼。",
    swatch: "linear-gradient(135deg, #ffb85c, #ffe9c9)",
    palette: {
      page: "#fff9ef",
      surface: "#fffdf8",
      text: "#59442a",
      muted: "#876f52",
      border: "#f1dfbf",
      accent: "#e48a24",
      accentLight: "#fff5e3",
      accentDeep: "#b56811",
      accentContrast: "#ffffff",
      quoteBg: "#fff8eb",
      quoteBorder: "#efaf57",
      inlineCodeBg: "#fff1d9",
      inlineCodeText: "#b46510",
      codeBg: "#66411a",
      codeText: "#fff4df",
      tableHeadBg: "#e48a24",
      tableHeadText: "#ffffff",
      tableRowBg: "#fffcf5",
      imageBg: "#fff8ec"
    }
  },
  {
    id: "study-note",
    name: "知识卡片",
    tag: "课程笔记",
    note: "适合教育培训、知识博主、系列连载，重点标记很稳。",
    swatch: "linear-gradient(135deg, #3557a5, #c6d5ff)",
    palette: {
      page: "#f2f5ff",
      surface: "#ffffff",
      text: "#283560",
      muted: "#66739a",
      border: "#dbe2ff",
      accent: "#3557a5",
      accentLight: "#eef2ff",
      accentDeep: "#233b75",
      accentContrast: "#ffffff",
      quoteBg: "#f6f8ff",
      quoteBorder: "#6f89cf",
      inlineCodeBg: "#edf1ff",
      inlineCodeText: "#3656a6",
      codeBg: "#24386e",
      codeText: "#edf2ff",
      tableHeadBg: "#3557a5",
      tableHeadText: "#ffffff",
      tableRowBg: "#fafbff",
      imageBg: "#f5f7ff"
    }
  },
  {
    id: "hot-comment",
    name: "热点快评",
    tag: "强情绪",
    note: "适合热点评论、观点输出、事件解构，节奏更紧凑、醒目。",
    swatch: "linear-gradient(135deg, #9e1f25, #ffd4d8)",
    palette: {
      page: "#fff4f4",
      surface: "#fffdfd",
      text: "#3f2124",
      muted: "#866164",
      border: "#f2d6d9",
      accent: "#b4202a",
      accentLight: "#fff0f1",
      accentDeep: "#7c131a",
      accentContrast: "#ffffff",
      quoteBg: "#fff6f6",
      quoteBorder: "#dd767d",
      inlineCodeBg: "#ffecee",
      inlineCodeText: "#9c1f28",
      codeBg: "#411619",
      codeText: "#fff0f2",
      tableHeadBg: "#b4202a",
      tableHeadText: "#ffffff",
      tableRowBg: "#fffafb",
      imageBg: "#fff5f6"
    }
  }
];

const state = {
  themeId: THEMES[0].id,
  fontSize: 16,
  lineHeight: 1.9,
  contentPadding: 24,
  renderedBlocks: []
};

const elements = {
  markdownInput: document.getElementById("markdown-input"),
  templateList: document.getElementById("template-list"),
  previewContent: document.getElementById("preview-content"),
  htmlOutput: document.getElementById("html-output"),
  activeTemplateName: document.getElementById("active-template-name"),
  activeTemplateNote: document.getElementById("active-template-note"),
  statusBar: document.getElementById("status-bar"),
  fontSize: document.getElementById("font-size"),
  lineHeight: document.getElementById("line-height"),
  contentPadding: document.getElementById("content-padding"),
  fontSizeValue: document.getElementById("font-size-value"),
  lineHeightValue: document.getElementById("line-height-value"),
  contentPaddingValue: document.getElementById("content-padding-value"),
  loadDemo: document.getElementById("load-demo"),
  clearInput: document.getElementById("clear-input"),
  randomTemplate: document.getElementById("random-template"),
  copyRich: document.getElementById("copy-rich"),
  copyHtml: document.getElementById("copy-html"),
  downloadHtml: document.getElementById("download-html"),
  scrollTopButton: document.getElementById("scroll-top-button")
};

function getActiveMarkdown() {
  const rawMarkdown = elements.markdownInput.value;
  return rawMarkdown.trim() ? rawMarkdown : DEFAULT_MARKDOWN;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function camelToKebab(value) {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function styleText(styleMap) {
  return Object.entries(styleMap)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `${camelToKebab(key)}:${value}`)
    .join(";");
}

function sanitizeUrl(url) {
  const trimmed = url.trim();
  if (!trimmed) {
    return "";
  }

  if (/^javascript:/i.test(trimmed)) {
    return "";
  }

  return escapeHtml(trimmed);
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableDivider(line) {
  const normalized = line.trim();
  if (!normalized.includes("|")) {
    return false;
  }

  return normalized
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .every((part) => /^:?-{3,}:?$/.test(part.trim()));
}

function isListLine(line) {
  return /^(\s*)([-*+]|\d+\.)\s+/.test(line);
}

function isBlockStarter(line, nextLine = "") {
  const trimmed = line.trim();
  if (!trimmed) {
    return true;
  }

  return (
    /^```/.test(trimmed) ||
    /^#{1,6}\s/.test(trimmed) ||
    /^>\s?/.test(trimmed) ||
    /^([-*_]){3,}$/.test(trimmed) ||
    /^!\[[^\]]*\]\(([^)]+)\)\s*$/.test(trimmed) ||
    isListLine(line) ||
    (trimmed.includes("|") && isTableDivider(nextLine))
  );
}

function parseMarkdown(markdown) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const blocks = [];
  let index = 0;
  const addBlock = (block, startLine, endLine) => {
    blocks.push({
      ...block,
      startLine,
      endLine
    });
  };

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (/^```/.test(trimmed)) {
      const startLine = index;
      const language = trimmed.slice(3).trim();
      const buffer = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index].trim())) {
        buffer.push(lines[index]);
        index += 1;
      }
      const endLine = index < lines.length ? index : lines.length - 1;
      if (index < lines.length) {
        index += 1;
      }
      addBlock({ type: "code", language, content: buffer.join("\n") }, startLine, endLine);
      continue;
    }

    if (/^#{1,6}\s/.test(trimmed)) {
      const match = trimmed.match(/^(#{1,6})\s+(.*)$/);
      addBlock(
        {
          type: "heading",
          level: match[1].length,
          text: match[2].trim()
        },
        index,
        index
      );
      index += 1;
      continue;
    }

    if (/^([-*_]){3,}$/.test(trimmed)) {
      addBlock({ type: "hr" }, index, index);
      index += 1;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const startLine = index;
      const quoteLines = [];
      while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
        quoteLines.push(lines[index].replace(/^>\s?/, "").trim());
        index += 1;
      }
      addBlock(
        {
          type: "blockquote",
          text: quoteLines.join("\n")
        },
        startLine,
        index - 1
      );
      continue;
    }

    if (/^!\[[^\]]*\]\(([^)]+)\)\s*$/.test(trimmed)) {
      const match = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
      addBlock(
        {
          type: "image",
          alt: match[1].trim(),
          url: match[2].trim()
        },
        index,
        index
      );
      index += 1;
      continue;
    }

    if (trimmed.includes("|") && isTableDivider(lines[index + 1] || "")) {
      const startLine = index;
      const headers = splitTableRow(lines[index]);
      const rows = [];
      index += 2;

      while (index < lines.length && lines[index].trim().includes("|")) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }

      addBlock(
        {
          type: "table",
          headers,
          rows
        },
        startLine,
        index - 1
      );
      continue;
    }

    if (isListLine(line)) {
      const startLine = index;
      const ordered = /^\s*\d+\.\s+/.test(line);
      const items = [];
      while (index < lines.length && isListLine(lines[index])) {
        const current = lines[index];
        items.push(current.replace(/^\s*([-*+]|\d+\.)\s+/, "").trim());
        index += 1;
      }
      addBlock(
        {
          type: ordered ? "orderedList" : "unorderedList",
          items
        },
        startLine,
        index - 1
      );
      continue;
    }

    const startLine = index;
    const paragraphLines = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !isBlockStarter(lines[index], lines[index + 1] || "")
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    if (paragraphLines.length) {
      addBlock(
        {
          type: "paragraph",
          text: paragraphLines.join(" ")
        },
        startLine,
        index - 1
      );
      continue;
    }

    index += 1;
  }

  return blocks;
}

function renderInline(text, theme) {
  const codeTokens = [];
  let output = text;

  output = output.replace(/`([^`]+)`/g, (_, codeText) => {
    const token = `%%INLINECODE${codeTokens.length}%%`;
    codeTokens.push(
      `<code style="${styleText({
        display: "inline-block",
        padding: "2px 6px",
        margin: "0 2px",
        borderRadius: "6px",
        background: theme.palette.inlineCodeBg,
        color: theme.palette.inlineCodeText,
        fontSize: "0.92em",
        fontFamily: "Menlo, Consolas, monospace"
      })}">${escapeHtml(codeText)}</code>`
    );
    return token;
  });

  output = escapeHtml(output);

  output = output.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label, url) =>
      `<a href="${sanitizeUrl(url)}" style="${styleText({
        color: theme.palette.accent,
        textDecoration: "none",
        borderBottom: `1px solid ${theme.palette.accent}`,
        paddingBottom: "1px"
      })}" target="_blank" rel="noopener noreferrer">${label}</a>`
  );

  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  output = output.replace(/_([^_]+)_/g, "<em>$1</em>");
  output = output.replace(/~~([^~]+)~~/g, "<s>$1</s>");

  codeTokens.forEach((tokenValue, tokenIndex) => {
    output = output.replace(`%%INLINECODE${tokenIndex}%%`, tokenValue);
  });

  return output;
}

function renderHeading(block, theme) {
  if (block.level === 1) {
    return `<section style="${styleText({
      margin: "0 0 24px",
      padding: "22px 20px 18px",
      borderRadius: "22px",
      background: theme.palette.accent,
      color: theme.palette.accentContrast,
      boxShadow: `0 12px 24px ${hexToRgba(theme.palette.accentDeep, 0.16)}`
    })}">
      <h1 style="${styleText({
        margin: "0",
        fontSize: "30px",
        lineHeight: "1.35",
        fontWeight: "800",
        letterSpacing: "0.01em"
      })}">${renderInline(block.text, theme)}</h1>
    </section>`;
  }

  if (block.level === 2) {
    return `<section style="${styleText({
      margin: "34px 0 18px"
    })}">
      <h2 style="${styleText({
        margin: "0",
        padding: "10px 14px 10px 16px",
        borderLeft: `4px solid ${theme.palette.accent}`,
        borderRadius: "0 14px 14px 0",
        background: theme.palette.accentLight,
        color: theme.palette.accentDeep,
        fontSize: "22px",
        lineHeight: "1.45",
        fontWeight: "800"
      })}">${renderInline(block.text, theme)}</h2>
    </section>`;
  }

  return `<h3 style="${styleText({
    display: "inline-block",
    margin: "20px 0 14px",
    padding: "7px 12px",
    borderRadius: "999px",
    background: theme.palette.accentLight,
    color: theme.palette.accentDeep,
    fontSize: "17px",
    lineHeight: "1.45",
    fontWeight: "700"
  })}">${renderInline(block.text, theme)}</h3>`;
}

function renderParagraph(block, theme, settings, isLead = false) {
  return `<p style="${styleText({
    margin: isLead ? "0 0 18px" : "0 0 16px",
    color: theme.palette.text,
    fontSize: `${isLead ? settings.fontSize + 1 : settings.fontSize}px`,
    lineHeight: settings.lineHeight,
    letterSpacing: "0.01em"
  })}">${renderInline(block.text, theme)}</p>`;
}

function renderBlockquote(block, theme, settings) {
  return `<section style="${styleText({
    margin: "20px 0",
    padding: "16px 18px",
    borderRadius: "18px",
    borderLeft: `4px solid ${theme.palette.quoteBorder}`,
    background: theme.palette.quoteBg
  })}">
    <p style="${styleText({
      margin: "0",
      color: theme.palette.text,
      fontSize: `${settings.fontSize}px`,
      lineHeight: settings.lineHeight
    })}">${renderInline(block.text, theme).replace(/\n/g, "<br>")}</p>
  </section>`;
}

function renderList(block, theme, settings) {
  const itemsHtml = block.items
    .map((item, itemIndex) => {
      const marker = block.type === "orderedList" ? itemIndex + 1 : "•";
      const markerStyle =
        block.type === "orderedList"
          ? {
              flex: "0 0 28px",
              width: "28px",
              height: "28px",
              borderRadius: "999px",
              background: theme.palette.accent,
              color: theme.palette.accentContrast,
              fontSize: "13px",
              fontWeight: "800",
              textAlign: "center",
              lineHeight: "28px"
            }
          : {
              flex: "0 0 8px",
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: theme.palette.accent,
              marginTop: "11px"
            };

      return `<li style="${styleText({
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        margin: "0 0 12px"
      })}">
        <span style="${styleText(markerStyle)}">${block.type === "orderedList" ? marker : ""}</span>
        <div style="${styleText({
          flex: "1",
          color: theme.palette.text,
          fontSize: `${settings.fontSize}px`,
          lineHeight: settings.lineHeight
        })}">${renderInline(item, theme)}</div>
      </li>`;
    })
    .join("");

  return `<${block.type === "orderedList" ? "ol" : "ul"} style="${styleText({
    margin: "0 0 18px",
    padding: "0",
    listStyle: "none"
  })}">
    ${itemsHtml}
  </${block.type === "orderedList" ? "ol" : "ul"}>`;
}

function renderCode(block, theme) {
  const languageBadge = block.language
    ? `<p style="${styleText({
        margin: "0 0 10px",
        color: hexToRgba(theme.palette.codeText, 0.8),
        fontSize: "12px",
        fontWeight: "700",
        letterSpacing: "0.1em",
        textTransform: "uppercase"
      })}">${escapeHtml(block.language)}</p>`
    : "";

  return `<section style="${styleText({
    margin: "22px 0",
    padding: "18px",
    borderRadius: "20px",
    background: theme.palette.codeBg,
    overflowX: "auto"
  })}">
    ${languageBadge}
    <pre style="${styleText({
      margin: "0",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      color: theme.palette.codeText,
      fontSize: "14px",
      lineHeight: "1.75",
      fontFamily: "Menlo, Consolas, monospace"
    })}"><code>${escapeHtml(block.content)}</code></pre>
  </section>`;
}

function renderHr(theme) {
  return `<div style="${styleText({
    margin: "26px auto",
    width: "88px",
    borderTop: `2px solid ${theme.palette.border}`
  })}"></div>`;
}

function renderImage(block, theme) {
  const url = sanitizeUrl(block.url);
  if (!url) {
    return "";
  }

  const caption = block.alt
    ? `<figcaption style="${styleText({
        marginTop: "10px",
        color: theme.palette.muted,
        fontSize: "13px",
        lineHeight: "1.7",
        textAlign: "center"
      })}">${escapeHtml(block.alt)}</figcaption>`
    : "";

  return `<figure style="${styleText({
    margin: "24px 0",
    padding: "12px",
    borderRadius: "22px",
    background: theme.palette.imageBg,
    border: `1px solid ${theme.palette.border}`
  })}">
    <img src="${url}" alt="${escapeHtml(block.alt || "")}" style="${styleText({
      display: "block",
      width: "100%",
      borderRadius: "16px"
    })}" />
    ${caption}
  </figure>`;
}

function renderTable(block, theme, settings) {
  const headHtml = block.headers
    .map(
      (cell) => `<th style="${styleText({
        padding: "12px 10px",
        border: `1px solid ${theme.palette.tableHeadBg}`,
        background: theme.palette.tableHeadBg,
        color: theme.palette.tableHeadText,
        fontSize: "14px",
        lineHeight: "1.5",
        fontWeight: "700",
        textAlign: "left"
      })}">${renderInline(cell, theme)}</th>`
    )
    .join("");

  const rowHtml = block.rows
    .map((row, rowIndex) => {
      const background = rowIndex % 2 === 0 ? theme.palette.tableRowBg : theme.palette.surface;
      return `<tr>${row
        .map(
          (cell) => `<td style="${styleText({
            padding: "11px 10px",
            border: `1px solid ${theme.palette.border}`,
            background,
            color: theme.palette.text,
            fontSize: `${settings.fontSize - 1}px`,
            lineHeight: "1.7",
            verticalAlign: "top"
          })}">${renderInline(cell, theme)}</td>`
        )
        .join("")}</tr>`;
    })
    .join("");

  return `<div style="${styleText({
    margin: "22px 0",
    overflowX: "auto",
    borderRadius: "18px",
    border: `1px solid ${theme.palette.border}`
  })}">
    <table style="${styleText({
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "320px"
    })}">
      <thead><tr>${headHtml}</tr></thead>
      <tbody>${rowHtml}</tbody>
    </table>
  </div>`;
}

function wrapRenderedBlock(html, block, index) {
  if (!html) {
    return "";
  }

  return `<section data-block-index="${index}" data-source-start="${block.startLine}" data-source-end="${block.endLine}" style="${styleText({
    margin: "0",
    padding: "0"
  })}">${html}</section>`;
}

function renderArticle(blocks, theme, settings) {
  let leadPending = true;
  const renderedBlocks = [];

  const contentHtml = blocks
    .map((block) => {
      let blockHtml = "";

      if (block.type === "heading") {
        if (block.level === 1) {
          leadPending = true;
        } else {
          leadPending = false;
        }
        blockHtml = renderHeading(block, theme);
      } else if (block.type === "paragraph") {
        blockHtml = renderParagraph(block, theme, settings, leadPending);
        leadPending = false;
      } else {
        leadPending = false;

        if (block.type === "blockquote") {
          blockHtml = renderBlockquote(block, theme, settings);
        } else if (block.type === "unorderedList" || block.type === "orderedList") {
          blockHtml = renderList(block, theme, settings);
        } else if (block.type === "code") {
          blockHtml = renderCode(block, theme);
        } else if (block.type === "hr") {
          blockHtml = renderHr(theme);
        } else if (block.type === "image") {
          blockHtml = renderImage(block, theme);
        } else if (block.type === "table") {
          blockHtml = renderTable(block, theme, settings);
        }
      }

      if (!blockHtml) {
        return "";
      }

      const renderedIndex = renderedBlocks.push(block) - 1;
      return wrapRenderedBlock(blockHtml, block, renderedIndex);
    })
    .join("");

  return {
    html: `<section style="${styleText({
      width: "100%",
      boxSizing: "border-box",
      padding: `${settings.contentPadding}px`,
      background: theme.palette.surface,
      color: theme.palette.text,
      overflowX: "hidden"
    })}">
    <article style="${styleText({
      margin: "0 auto",
      padding: "0",
      width: "100%",
      maxWidth: "100%",
      boxSizing: "border-box",
      fontFamily: "Helvetica Neue, PingFang SC, Microsoft YaHei, sans-serif",
      overflowWrap: "break-word",
      wordBreak: "break-word",
      background: theme.palette.surface
    })}">
      ${contentHtml}
    </article>
  </section>`,
    renderedBlocks
  };
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function getTheme() {
  return THEMES.find((theme) => theme.id === state.themeId) || THEMES[0];
}

function autoResizeTextarea() {
  const textarea = elements.markdownInput;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function updateScrollTopButton() {
  elements.scrollTopButton.classList.toggle("is-visible", window.scrollY > 280);
}

function scrollToPageTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateControls() {
  elements.fontSizeValue.textContent = `${state.fontSize}px`;
  elements.lineHeightValue.textContent = state.lineHeight.toFixed(1);
  elements.contentPaddingValue.textContent = `${state.contentPadding}px`;
}

function renderTemplatePicker() {
  elements.templateList.innerHTML = THEMES.map(
    (theme) => `<button class="template-card ${theme.id === state.themeId ? "is-active" : ""}" data-theme-id="${theme.id}">
      <span class="template-card-swatch" style="background:${theme.swatch}"></span>
      <span class="template-card-name">${theme.name}</span>
      <span class="template-tag">${theme.tag}</span>
    </button>`
  ).join("");
}

function renderPreview() {
  const markdown = getActiveMarkdown();
  const theme = getTheme();
  const blocks = parseMarkdown(markdown);
  const article = renderArticle(blocks, theme, state);

  autoResizeTextarea();
  elements.previewContent.style.background = theme.palette.page;
  elements.previewContent.innerHTML = article.html;
  elements.htmlOutput.textContent = article.html;
  elements.activeTemplateName.textContent = theme.name;
  elements.activeTemplateNote.textContent = theme.note;
  state.renderedBlocks = article.renderedBlocks;
  renderTemplatePicker();
  updateScrollTopButton();
}

function setStatus(message) {
  elements.statusBar.textContent = message;
}

async function copyRichText() {
  const html = elements.previewContent.innerHTML;
  const text = elements.previewContent.innerText;

  if (navigator.clipboard && window.ClipboardItem && navigator.clipboard.write) {
    try {
      const item = new ClipboardItem({
        "text/html": new Blob([html], { type: "text/html" }),
        "text/plain": new Blob([text], { type: "text/plain" })
      });
      await navigator.clipboard.write([item]);
      setStatus("已复制富文本。现在可以直接粘贴到公众号后台。");
      return;
    } catch (error) {
      // 降级走 execCommand 方案。
    }
  }

  const holder = document.createElement("div");
  holder.innerHTML = html;
  holder.contentEditable = "true";
  holder.style.position = "fixed";
  holder.style.left = "-9999px";
  holder.style.top = "0";
  holder.style.opacity = "0";
  document.body.appendChild(holder);

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(holder);
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    const success = document.execCommand("copy");
    setStatus(
      success
        ? "已复制富文本。现在可以直接粘贴到公众号后台。"
        : "浏览器没有完成富文本复制，请改用“复制 HTML 源码”。"
    );
  } finally {
    selection.removeAllRanges();
    holder.remove();
  }
}

async function copyHtmlSource() {
  const html = elements.htmlOutput.textContent;
  try {
    await navigator.clipboard.writeText(html);
    setStatus("已复制 HTML 源码。你可以按需再做二次处理。");
  } catch (error) {
    setStatus("复制 HTML 源码失败，请检查浏览器剪贴板权限。");
  }
}

function createFullHtmlDocument(fragment, theme) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${theme.name} - 公众号排版导出</title>
    <style>
      body {
        margin: 0;
        padding: 24px;
        background: ${theme.palette.page};
      }
      .wechat-export {
        max-width: 760px;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="wechat-export">
      ${fragment}
    </div>
  </body>
</html>`;
}

function downloadHtml() {
  const theme = getTheme();
  const html = createFullHtmlDocument(elements.previewContent.innerHTML, theme);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${theme.name}-公众号排版.html`;
  link.click();
  URL.revokeObjectURL(url);
  setStatus("已导出 HTML 文件。");
}

function bindEvents() {
  elements.markdownInput.addEventListener("input", renderPreview);

  elements.fontSize.addEventListener("input", (event) => {
    state.fontSize = Number(event.target.value);
    updateControls();
    renderPreview();
  });

  elements.lineHeight.addEventListener("input", (event) => {
    state.lineHeight = Number(event.target.value) / 10;
    updateControls();
    renderPreview();
  });

  elements.contentPadding.addEventListener("input", (event) => {
    state.contentPadding = Number(event.target.value);
    updateControls();
    renderPreview();
  });

  elements.templateList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-id]");
    if (!button) {
      return;
    }
    state.themeId = button.dataset.themeId;
    renderPreview();
  });

  elements.loadDemo.addEventListener("click", () => {
    elements.markdownInput.value = DEFAULT_MARKDOWN;
    renderPreview();
    setStatus("已载入示例内容，你可以直接修改。");
  });

  elements.clearInput.addEventListener("click", () => {
    elements.markdownInput.value = "";
    renderPreview();
    setStatus("输入区已清空。");
  });

  elements.randomTemplate.addEventListener("click", () => {
    const nextTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    state.themeId = nextTheme.id;
    renderPreview();
    setStatus(`已切换到“${nextTheme.name}”。`);
  });

  elements.copyRich.addEventListener("click", copyRichText);
  elements.copyHtml.addEventListener("click", copyHtmlSource);
  elements.downloadHtml.addEventListener("click", downloadHtml);
  elements.scrollTopButton.addEventListener("click", scrollToPageTop);
  window.addEventListener("scroll", updateScrollTopButton, { passive: true });
  window.addEventListener("resize", autoResizeTextarea);
}

function init() {
  elements.markdownInput.value = DEFAULT_MARKDOWN;
  elements.fontSize.value = String(state.fontSize);
  elements.lineHeight.value = String(state.lineHeight * 10);
  elements.contentPadding.value = String(state.contentPadding);
  updateControls();
  renderTemplatePicker();
  bindEvents();
  renderPreview();
}

init();
