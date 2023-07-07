# LocalStack

```sh
mkdir localstack-test
cd localstack-test
touch docker-compose.yml
```

```sh
npm install @aws-sdk/client-s3
npm install --save-dev @types/node
npm install --save-dev @types/jest
npm install --save-dev @types/mocha
```


### LocalStack起動

```sh
cd localstack-test
docker compose up -d
```

```sh
curl -L http://localhost:4566/health
```
→ JSONデータが返ってくればOK

## localstackコマンドのインストール

```sh
brew install localstack
```

- Localstack起動
```sh
localstack start -d
```

- Status確認
```sh
localstack status  
```

- Service一覧
```sh
localstack status services
```

- LocalStack停止
```sh
localstack stop
```


## Config設定 初回のみ

```sh
aws configure --profile localstack
```

```
AWS Access Key ID [None]: dummy
AWS Secret Access Key [None]: dummy
Default region name [None]: ap-northeast-1
Default output format [None]: json
```

- Bucket作成
```sh
aws s3 mb s3://test-bucket --endpoint-url=http://localhost:4566
```

- awslocalインストール
```sh
pip3 install awscli-local
```

- awslocal S3 list

```sh
awslocal s3 ls
```
