# react

Reactのmonorepoプロジェクト。  
Gatsbyでの静的サイトは下記のURLで公開しています。  
<https://compassionate-beaver-d0f8ee.netlify.com/>

npmクライアントはyarnを利用しています。

# Setup

## Lerna

Lernaのグローバルインストールが必要です。  
ない場合は下記のコマンドでインストールしてください。  

    $ yarn global add lerna

## Gatsby

Gatsbyのグローバルインストールが必要です。  
ない場合は下記のコマンドでインストールしてください。

    $ yarn global add gatsby

# Usage

## リポジトリのセットアップ

下記コマンドでmonorepoのセットアップを行います。  
packages以下の依存パッケージインストールやシンボリックリンク解決を行います。

    $ lerna bootstrap 

## packages/static (Gatsby静的サイト)

Gatsbyによるポートフォリオ、ブログサイトの静的サイト。  
以下は `packages/static` のディレクトリで実行できるコマンド紹介です。

### 開発サーバの起動

Gatsbyの静的サイトの開発サーバを起動します。  

    $ gatsby develop

起動後は下記のURLでブラウザからアクセス可能です。  
<http://localhost:8000>

GraphQLの動作確認は下記のURLになります。  
<http://localhost:8000/___graphql>

### GitHubPageへのデプロイ

下記のコマンドでリモートリポジトリの「gh-pages」ブランチにGatsbyの静的ビルド結果をデプロイします。

    $ yarn deploy

## packages/common

React、Reduxの共通ファイルパッケージ。  
masterブランチのStorybookは下記のURLで公開しています。  
<https://keen-rosalind-4c9a2b.netlify.com>

以下は `packages/common` ディレクトリで実行できるコマンド紹介です。

### Storybook起動

ReactコンポーネントのStorybookを起動します。

    $ yarn storybook

起動後は下記のURLでローカルサーバにアクセスできます。  

<http://localhost:6006/>
