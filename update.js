const fs = require('fs');

const journey = {
  works: {
    'gltf-gpu-compressed-texture': '一个 GPU 压缩纹理降级的 GLTF 扩展，及其 CLI 生成工具',
    'gltf-merge': '一个用于 多个 gltf 依赖资源合并的工具，适用于换材质换网格，不同组合按需下载的场景',
    'wxmp-tensorflow': '微信小程序下运行最新TensorFlow的解决方案',
    'three-platformize': '一个让 THREE 平台化的项目，目前已适配微信、淘宝、字节小程序',
    'compressed-model-diff': '模型压缩后效果对比工具',
    'hdr-prefilter-texture': '导出PMREMGenerator生成的纹理',
    'three-sprite-player': '小程序Threejs的分块序列图播放工具，含cli工具生成分块序列图',
    'pc-transition': 'preact transition component build with hooks',
    'pc-swiper': 'preact-swiper build with rxjs',
    'pc-pcm-wave': 'preact pcm wave effect component support real time state change',
    'vc-keep-alive': '修改了keepAlive的缓存机制, 可以像APP那样前进刷新, 返回销毁',
    'vue-swipe-directive': 'vue swipe事件的实现, 特点是lock机制, 轻松实现和滚动互斥关系',
    'vc-popup': '一个行为标准的vue popup组件集',
    'vc-swipe-cell': '一个模仿SwipeCellKit的vue组件',
    'postcss-pxtocssvar': 'plugin convert px to calc(var(--base)).',
    'hap-types': '快应用接口定义文档转的d.ts定义包',
    'webpack-alias-sync-plugin': '把webpack alias配置同步到jsconfig.json 和 tsconfig.json',
    app_container: {
      desc: 'a little little framework 一个简单的SPA框架, 按照自己对SPA的交互理解制作~',
      href: 'https://github.com/HZ-WeiBao/app_container',
    },
  },
  study: {
    'study-log-webglfundamentals': '',
    'study-log-threejsfundamentals': '',
  },
  tools: {
    awebp: 'animated webp 小工具，主要用于透明视频生成透明webp',
    'windows-env-cli': '一个 windows 全局环境变量设置工具',
    'move-to-types': '私有@types包小工具, 通过复制的方式',
    'change-color': 'a color format switcher extension for vs code',
    keyboard: '把之前的my_keyboard优化了代码, 方便转到不同的MCU, 这次用的是STM32F103C8T6',
    my_keyboard: '我的DIY键盘MCU主控程序, 组合键支持达到正常使用~ Arduino键盘',
    jwweb_resource: '青果教务系统 虚拟机磁盘分享~ (已破解安装) ',
    'wechat-emoji': '微信6.5.10聊天的表情包切图 截图提取 带透明 含表情顺序文件',
  },
  games: {
    SchulteGrid: '舒尔特方格-安卓',
    shuertefangge: '舒尔特方格-Web',
    mineSweeper: '扫雷',
    EggSweeper: '一个扫雷改造为回忆录的东西',
  },
  demos: {
    'iframe-worker-demo': '利用OOPIF，实现把iframe当worker用',
    'three-platformize-demo-wechat-game': 'three-platformize 微信小游戏 DEMO',
    'three-platformize-demo-byte': 'three-platformize 字节小程序 DEMO',
    'three-platformize-plugin-wechat': 'three-platformize 微信小程序插件',
    'tfjs-treeshaking-test': 'tfjs treeshaking custom module test',
    'three-platformize-demo': 'three-platformize测试用例',
    'three-platformize-demo-wechat': 'three-platformize 微信小程序DEMO',
    'three-platformize-demo-taobao': 'three-platformize 淘宝小程序DEMO',
    'simple-screen-share-webrtc': '简单的屏幕共享, 简单解决虚拟机win共享宿主linux屏幕',
    simpleMusic: '网易云音乐高仿, 安卓大作业, 用于理解安卓组件实现, 还有资源管理方式',
    event: '一个过渡抽象过于灵活的手势识别库(半成品)',
    'emmet-template-engine': '一个简单的Emmet-Template-Engine, 前端模版引擎',
    form_system: '问卷星类似的表单系统简单模仿, 支持表单编辑, 自动保存(用于学习PHP, 原生)',
    'deepkolos.github.io': '远古时代的博客',
  },
};

const tables = Object.keys(journey)
  .map(type => {
    return Object.keys(journey[type]).reduce(
      (acc, name) => {
        const isCfg = typeof journey[type][name] === 'object';
        const desc = isCfg ? journey[type][name].desc : journey[type][name];
        const href = isCfg ? journey[type][name].href : `https://github.com/deepkolos/${name}`;
        return (
          acc +
          '|' +
          [
            `[${name}](${href})`,
            desc,
            `<img alt="Stars" src="https://img.shields.io/github/stars/deepkolos/${name}?style=flat&labelColor=373f51&color=4FC08D" />`,
            `<img alt="Stars" src="https://img.shields.io/github/forks/deepkolos/${name}?style=flat&labelColor=373f51&color=4FC08D" />`,
          ].join('|') +
          '|\r\n'
        );
      },
      `
### ${type[0].toUpperCase() + type.slice(1)}

|📦 Projects|📃 Description|⭐ Stars|📚 Forks|
|-----------|--------------|---------|--------|
`,
    );
  })
  .join('\n');

// fs.writeFileSync('./journey.md', tables);
const tpl = fs.readFileSync('./README-TPL.md', { encoding: 'utf8' });
fs.writeFileSync('./README.md', tpl.replace('<!-- journey -->', tables));
