# norih7.github.io

Reactのmonorepoプロジェクト。  
Gatsbyでの静的サイトは下記のURLで公開しています。  
<http://norih7.github.io>

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

## Gatsby静的サイト

`packages/static` のディレクトリで実行できるコマンドの紹介です。

### 開発サーバの起動

Gatsbyの静的サイトの開発サーバを起動します。  

    $ gatsby develop

起動後は下記のURLでブラウザからアクセス可能です。  
<http://localhost:8000>

GraphQLの動作確認は下記のURLになります。  
<http://localhost:8000/___graphql>

### GitHubPageへのデプロイ

    $ yarn deploy
