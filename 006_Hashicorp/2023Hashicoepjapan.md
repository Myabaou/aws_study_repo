# HashiCorp Japan Tech Update - HashiDays 2023 Recap

https://events.hashicorp.com/jp/techupdate/20230707


## Vault Update

Vault with kubernetes

HCP Vault Secrets Bata

シークレットを格納するだけ？？

Integrationというのがあって

AWS SercretManagerとSyncできる。

最初からSercretManagerで格納しておけばいいのでは？
現時点ではAWS secret Managerのみしか対応していないが
今後GitHubActionsにも対応するようになる。

Vaultサーバを立ち上げるまでは。。みたいなユースケースにマッチするかもしれない。

## Terraform Update

### Config-Driven import
import ブロックとconfig-out フラグを組み合わせることで利用できる機能

手作業で作成したリソース管理する場合、importコマンドを実行する。

まとめてimport できるというのがメリット

### Explorer for workspace(beta)
Terraformの利用状況を可視化する機能

### No code Probisioning 

予め登録したterraform モジュールを登録
登録したモジュールに対してワークスペースを
新規で作成し、プロビジョニングを実行可能

本体のHCLを触ることなく

### Dynamic Provider Credentials

Terraform CloudでOIDCを用いた動的シークレっt呪録

---

## Money Forward with Terraform Cloud OPA

OPA導入の理由

### SecurityGroup障害
Rule数の上限を超えてApply
SG削除→SG再作成が正常な動き
再作成がクォータ上限によって失敗
→ クォータ上限にかかっていないことを確認してからApplyしようね。

### RDS障害

マイナーバージョンアップグレードをtrue
→ Terraform でengine_versionに差分が発生
差分状態でApplyするとダウングレード
→ インスタンス削除→ 再作成
データ不整合で再作成に失敗

インスタンスが不在となり、障害。

削除保護とengine_versionをignore

### インフラコスト
インフラコストを使っているか把握できないため、コスト意識が薄れていく。


書き方を制限したい。
制限に違反している場合Applyしない。

- 一時的なポリシー解除が難しい
- OPA設定がコード化されておらず、Adminが更新する必要がある、
- Policyに対するテストが組み込めていない。


### OPAの導入の苦労した点
エラー表示が地医学、詳細の説明が残せない。

OPAを導入したきっかけは「恐怖」
少しでもTerraformの運用で恐怖を感じだことがあればpolicyの導入を検討してみる。

発表されたもの以外でpolicyの制御を考えているものありますか？
→ Route53もサービス側に権限委譲することを検討している。

OPAの施策に対するSREメンバーによる反応はどうか？
→ そこまでいいものではない。全サービスに手作業で設定する必要があるので。
