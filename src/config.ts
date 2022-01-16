export default {
  "git.ignoreMissingGitWarning": true,
  "git.enableSmartCommit": true,
  "extensions.ignoreRecommendations": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDelete": false,
  "languageStylus.useSeparator": false,
  "typescript.updateImportsOnFileMove.enabled": "never",
  "cSpell.diagnosticLevel": "Hint",
  // 配置语言的文件关联，如: `"*.extension": "html"`，这些关联的优先级高于已安装语言的默认关联
  "files.associations": {
    "*.json": "jsonc",
    ".eslintrc": "jsonc",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "workbench.quickOpen.preserveInput": true,
  "workbench.startupEditor": "newUntitledFile",
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  // "terminal.integrated.rendererType": "dom",
  "diffEditor.ignoreTrimWhitespace": true,
  // 此项已弃用，配置默认 shell 的新推荐方法是在 `#terminal.integrated.profiles.osx#` 中创建一个终端配置文件，并将其配置文件名称设置为 `#terminal.integrated.defaultProfile.osx#` 中的默认值。此操作当前将优先于新的配置文件设置，但将来会发生更改。
  // "terminal.integrated.shell.osx": "/bin/zsh",
  // 以像素为单位控制字号
  "editor.fontSize": 16,
  // 控制字体系列
  "editor.fontFamily": "Menlo, Monaco, 'Courier New', monospace",
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.rulers": [
    200
  ],
  // 控制折行方式，可以选择：
  //  - off：禁用折行
  //  - on：根据视区宽度折行
  //  - wordWrapColumn：在 editor.wordWrapColumn 处换行
  //  - bounded：在视区宽度和 editor.wordWrapColumn 两者的较小者处换行
  "editor.wordWrap": "on",
  "editor.codeActionsOnSave": {
    // 如果不想自动保存，请将这个值设置为 false，然后使用 Command + Shift + L 手动格式化
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "typescriptreact",
    "vue",
    "html"
  ],
  // vetur 只处理 html 和 stylus 的格式化，其他的一律交给 eslint
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "none",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.postcss": "none",
  "vetur.format.defaultFormatter.scss": "none",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.ts": "none",
  "vetur.validation.interpolation": false,
  // 是否插入冒号
  "stylusSupremacy.insertColons": false,
  // 是否插入分号
  "stylusSupremacy.insertSemicolons": false,
  // 是否插入大括号
  "stylusSupremacy.insertBraces": false,
  // import 之后是否换行
  "stylusSupremacy.insertNewLineAroundImports": true,
  // 两个选择器中是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": true,
  // 修改默认值
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 200,
      // auto：不换行展示
      // force：属性换行，最后一个尖括号不自动换行对齐
      // force-aligned：属性强制对齐到标签后面去
      // force-expand-multiline：两个及以上属性换行展示
      "wrap_attributes": "auto",
      "end_with_newline": true
    }
  },
  "minapp-vscode.disableAutoConfig": true,
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[html]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "alias-skip.mappings": {
    "@": "/src"
  },
  "window.zoomLevel": 0,
  "cSpell.enableFiletypes": [
    "!javascript",
    "vue"
  ],
  "settingsSync.ignoredExtensions": [
    "wytxer.ak-snippets"
  ],
  "editor.quickSuggestions": {
    "strings": true
  }
};
