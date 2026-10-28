---
title: 组件示例
aliases: [组件示例测试]
categories: [示例分类, "示例 aaa $aaa$"]
navboxes: [代数拓扑]
---
<disambiguation>
关于其他含义，请参见[[示例|排版示例]]。
</disambiguation>

<tip>
日语译名的假名可逐字对应，也可以按词组标注。
</tip>

<problems>
- 这是一条演示问题提示，用于说明本页仍需改进的地方。
- @sec:names 缺少来源。
</problems>

这个页面演示顶部提示、正文内的人名标注、术语翻译和底部学科导航。
（，）（。）

## 人名标注 $a$ {@sec:names}

下面使用占位文字演示格式：示例人物 <person original="原文姓名" lang="ru" translit="拉丁转写" ipa="/…/" />。后文只写“示例人物”即可。
a's

## 术语翻译

译名可以写成简短字符串，也可以展开字段。术语数据块可放在正文任意位置，页面会统一把译名显示在学科导航下方。日语的注音可以逐字或按词组对应，正文里的数学公式 $H^n(X)$ 和百科链接 [[奇异上同调]] 仍使用原有写法。

单字注音写成 `埋<う>め込<こ>み`，假名保持原样；词组注音写成 `[位相]<いそう>`，明确指定需要注音的范围。

```markdown
Test [[test]] $a + b$

汉字123 汉字

## test {@abc}
```

[Test](/categories/示例分类) 「汉字」（汉字）《汉字》

123 （3）

$a$，$b$、$c$

| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Content 1  | Content 1    | Content 1   |
| Content 2  | Content 2    | Content 2   |
| Content 3  | Content 3    | Content 3   |

```terms
群:
  en: group
  fr: groupe :m
  de: Gruppe :f
  ja: 群<ぐん>
拓扑空间:
  en: topological space
  fr: espace topologique :m
  de:
    text: topologischer Raum
    gender: m
  ja: 位<い>相<そう>空<くう>間<かん>
  ko: 위상 공간
嵌入:
  en: embedding
  ja: 埋<う>め込<こ>み
拓扑:
  en: topology
  ja: '[位相]<いそう>'
```
