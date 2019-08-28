---
path: "/frontend/monorepo"
date: "2018-03-05"
title: "monorepoという開発スタイル: Lerna導入編"
tags: ["gatsby", "react"]
excerpt: "SampleExcerpt"
---

React開発をしていると異なるリパッケージ間でコンポーネントを共通利用したいと考えることがあります。  
解決方法はいくつか方法があるのですが、自分が開発してみて今のところ一番良さそうだったはmonorepoという開発手法を紹介します。  
今回はmonorepoを実現するLernaのインストールまで紹介。

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

### Lernaについて

Lernaはmonorepoを実現し、管理するツール。Lernaの発音は「レルナ」らしい。  
以下は公式サイト。  
<https://github.com/lerna/lerna>

## Lernaのインストール

npmパッケージLernaはグローバルでもローカルでも好きな方にインストールして大丈夫です。  
チーム開発をする場合はローカルインストールし、lockファイルも管理すれば同じバージョンを利用できて良いかと思います。
今回の記事ではグローバルインストールした場合のコマンド例を記載していきます。

なおコマンド例ではyarnを使っていますが、npmでも問題ありません。npmコマンドは省略します。

    // グローバルにインストールする場合
    // lernaの実行コマンドは `lerna --version` となる。
    $ yarn global add lerna

    // ローカルにインストール
    // lernaの実行コマンドは `yarn lerna --version` となる
    $ yarn add lerna

lernaをインストールできたら、`$ lerna init` を実行すると以下のようなmonorepoのディレクトリ構成を作成されます。

    test
    ├── lerna.json
    ├── package.json
    └── packages

このあとは `packages` 以下にさらにアプリケーションやライブラリのディレクトリを作成していくことになります。  
次回のエントリーでは以降の構築作業を紹介していきます。
