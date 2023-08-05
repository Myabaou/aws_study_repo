# Development

CDK,terraform,cdk for terraform を実行できる環境をプロビジョニングする。

## Finchインストール

https://github.com/runfinch/finch


```sh
brew install --cask finch
```


- 初回起動
```sh
finch vm init
```
起動　6~7分ぐらい時間がかかる。


- 開始
```sh
finch vm start
```

- 終了
```sh
finch vm stop
```


- 状態確認
```sh
finch vm status
```

---

# Terraform, AWS Vault, AWS CDK, and CDKTF Docker Compose

このリポジトリは、Terraform、AWS Vault、AWS CDK、および CDKTF を含む Docker イメージを作成し、それらを使用してインフラストラクチャを管理するための Docker Compose ファイルを提供します。

## 使い方

1. Docker と Docker Compose がインストールされていることを確認してください。

2. リポジトリをクローンします：

    ```bash
    git clone <このリポジトリのURL>
    cd <クローンしたリポジトリのディレクトリ>
    ```

3. Docker Compose を使用してサービスを起動します：

    ```bash
    finch compose up -d
    ```

4. Docker コンテナに接続します：

    ```bash
    finch compose exec dev bash
    ```

5. コンテナ内で、通常通りに Terraform、AWS Vault、AWS CDK、または CDKTF コマンドを実行できます。例えば：

    ```bash
    aws-vault exec aws-sample -- terraform plan
    ```

## 注意事項

- この Docker Compose ファイルは、各ツールの最新バージョンのイメージを使用します。特定のバージョンを使用する必要がある場合は、Dockerfileを編集してください。

- AWSの認証情報は、ホストマシンの`~/.aws`ディレクトリからコンテナにマウントされます。したがって、ホストマシン上でAWS SSOを使用して認証情報を設定した場合、それらの認証情報はコンテナ内から直接利用できます。

- この設定では、作業ディレクトリはホストマシンの現在のディレクトリ（`docker-compose.yml` ファイルがある場所）と同期されます。したがって、ホストマシン上で作成したファイルはコンテナからアクセス可能です。
