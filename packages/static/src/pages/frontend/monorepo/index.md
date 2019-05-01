---
path: "/frontend/monorepo"
date: "2018-03-05"
title: "monorepoという開発スタイル"
tags: ["gatsby", "react"]
excerpt: "SampleExcerpt"
---

React開発をしていると異なるリパッケージ間でコンポーネントを共通利用したいと考えることがあります。  
解決方法はいくつか方法があるのですが、自分が開発してみて今のところ一番良さそうだったはmonorepoという開発手法を紹介。

## はじめに：実現したいこと

以下のnpmパッケージが存在するとして、両方のproductから `commmon-components` を利用したい。  
またproductからは `common-components` の最新状態を利用したい。

-   productA
-   productB
-   common-components

## monorepoとLerna

monorepoは名前の通り、上記のような構成を単一のリポジトリにしてみようというパッケージ構成。  
具体的には下記のようなディレクトリ構成を作って相対パスや、パッケージのシンボリックリンクで連携すればいい。  
各パッケージには `package.json` がある。

    root
     - packages
       - productA
         - package.json
       - productB
         - package.json
       - common-components
         - package.json

パッケージのシンボリックリンクは `yarn link` や `npm link` を使えばうまく動くが手動作業が面倒ではある。  
手動でやることも可能だが細かい面倒を見てくれる `Lerna` というナイスなツールがある。
