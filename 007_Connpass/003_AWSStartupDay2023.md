# AWS StartUp Day 2023

## Compass
https://aws-startup-community.connpass.com/event/289498/

## AWS AppConfig で低リスク・低ストレスなロールアウトを実現した話

### AWS AppConfig とは
- アプリケーションの設定を管理するサービス
- アプリケーションの設定を変更する際に、ロールアウトの管理を行うことができる
- ロールアウトの管理により、低リスク・低ストレスなロールアウトを実現することができる

### ロールアウトの管理
- ロールアウトの管理には、AWS AppConfig が提供する以下の機能を利用する
  - 環境
  - アプリケーション
  - 環境のバージョン
  - アプリケーションの設定
  - デプロイメント戦略
  - デプロイメント
  - デプロイメントのバージョン

### ロールアウトの管理の流れ
1. 環境を作成する
2. アプリケーションを作成する
3. 環境のバージョンを作成する
4. アプリケーションの設定を作成する
5. デプロイメント戦略を作成する
6. デプロイメントを作成する
7. デプロイメントのバージョンを作成する


---

## 交通の最適化で強化学習を使い始めた話

### 交通の最適化とは
- 交通の最適化とは、交通の流れを最適化すること
- 交通の流れを最適化することで、交通の流れを円滑にすることができる
- 交通の流れを円滑にすることで、交通事故の発生を減らすことができる
- 交通の流れを円滑にすることで、交通の流れを円滑にすることができる

### 交通の最適化の方法
- 交通の最適化の方法は、交通の流れを最適化すること
- 交通の流れを最適化することで、交通の流れを円滑にすることができる

### 性能はでるのか？

### AWS SageMaker 使ってみた
M2 Macより4〜５倍早い
手軽に利用できる。

### まとめ
学習は非常に時間がかかるので、GPU必須。AWS SageMakerを使うと手軽に利用できる。


---

## 技術的負債を抱えながらそれでも生きていく

### スタートアップとは
- スタートアップとは、新しいことを始めること

### 技術的負債とは
- 技術的負債とは、技術的な負債のこと
- マーチンファウラーが提唱した概念
  - マーチンファウラーとは、アジャイルソフトウェア開発の提唱者

- コードを書く時はベストをつくせ
- コードを雑に書くのは技術的負債ではない






--
## 開発を加速するマイクロサービスデプロイ: EKS + Flux

--

## AWS月額利用料を$137,000→$87,000に削減して信頼性に投資した話	

VPC Endpointでコストを削減した話
コンテナイメージのpull が大量に走るので。
ECR PublicからPullするサイドカーコンテナが残っていることもあるので留意
NAT Gatewayのコストを削減した話
　通信量が下がったことを確認

### WAFのログ配信先の変更

CloudwatchからS3に変更

### Grabitonへの移行

### 余分なECS/Auroraインスタンスが起動しないように
早すぎないスケールアウトを行う

最終的に$60,000の削減に成功

コスト削減した結果で何を行ったか。

データストアのスケールアップ

SecurityHub


AWS Configの料金が高騰したことがあった。
ECSのTaskの起動停止を記録していたことで高額になった。
→特定イベントを除外することができる。


GuradDutyを有効化

脅威を検知していないのは良いのか悪いのか。

### まとめ
ボトルネックから潰す
簿トスネックを放置すると効果ゼロ
まずは作戦をねるところから



---
## AWSコスト削減ハンズオン

AWS Compute Optimizer有効化　Done.

Global view

Application Auto ScalingでECSの停止再会ができる。
→ GUIはないのでCDKやAPI　Terraformで設定できる。






--

## スタートアップでこそCDKが活きた〜生産性を向上できた5つの理由〜

--

## CTO までのキャリアと転職活動における考え方の変化

IPOをする予定なのか。


---

