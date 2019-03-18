---
path: "/frontend/monorepo"
date: "2018-03-05"
title: "monorepoという開発スタイル"
tags: ["gatsby", "react"]
excerpt: "SampleExcerpt"
---

Reactで開発をしていると異なるリポジトリ間でコンポーネントを共通利用したいと考えることがあります。

    import { Link, withPrefix } from "gatsby";
    for (let i = 0; i < 10; i++) {
        hogehoge();
    }
