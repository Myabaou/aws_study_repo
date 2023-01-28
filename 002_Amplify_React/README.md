# Amplifyハンズオン

https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/


## 新しいReactアプリケーションを作成する。
```sh
npx create-react-app amplifyapp
cd amplifyapp
npm start
```


## ルートディレクトリ指定
monorepoを接続しますか？の箇所で
ルートディレクトリを指定することでカスタマイズ可

## DockerでのAmplify開発環境

- Build
```sh
docker compose build
```

- UP
```sh
docker compose up
```



## Amplify ClIインストール


```sh
npm install -g @aws-amplify/cli
```

- permission denied, mkdir '/root/.amplify/bin'のエラーが発生する場合
```sh
npm install -g @aws-amplify/cli --unsafe-perm=true
```

- バージョン確認
```sh
amplify -v
```

- Amplify CLI設定
```sh
amplify configure
```


