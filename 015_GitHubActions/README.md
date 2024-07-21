# GitHubActions 検証メモ

利用するツール
https://github.com/nektos/act

- ディレクトリ作成

```sh
mkdir -p .github/workflows
```

- ymlファイル作成

015_GitHubActions/.github/workflows/sample.yml

## act 実行

- 確認

```sh
act -l --container-architecture linux/arm64
```

- ALL

```sh
act --container-architecture linux/arm64 -W .github/workflows/sample.yml
```


- Secret

あらかじめ`.secrets`ファイルを作成しておく

```txt
SLACK_WEBHOOK_URL="https://hooks.slack.com/services/XXXXXXXXXXXXXXXXXXXXXXX"
```

```sh
act --container-architecture linux/arm64 -W .github/workflows/sample.yml --secret-file .secrets
```

- jobのみ

```sh
act -j job-matrix --container-architecture linux/arm64 
```

- 出力

```log
〉act -j job-matrix --container-architecture linux/arm64
INFO[0000] Using docker host 'unix:///var/run/docker.sock', and daemon socket 'unix:///var/run/docker.sock'
[test-matrix/job-matrix-2] 🚀  Start image=catthehacker/ubuntu:act-latest
[test-matrix/job-matrix-1] 🚀  Start image=catthehacker/ubuntu:act-latest
[test-matrix/job-matrix-3] 🚀  Start image=catthehacker/ubuntu:act-latest
[test-matrix/job-matrix-1]   🐳  docker pull image=catthehacker/ubuntu:act-latest platform=linux/arm64 username= forcePull=true
[test-matrix/job-matrix-2]   🐳  docker pull image=catthehacker/ubuntu:act-latest platform=linux/arm64 username= forcePull=true
[test-matrix/job-matrix-3]   🐳  docker pull image=catthehacker/ubuntu:act-latest platform=linux/arm64 username= forcePull=true
[test-matrix/job-matrix-2]   🐳  docker create image=catthehacker/ubuntu:act-latest platform=linux/arm64 entrypoint=["tail" "-f" "/dev/null"] cmd=[] network="host"
[test-matrix/job-matrix-3]   🐳  docker create image=catthehacker/ubuntu:act-latest platform=linux/arm64 entrypoint=["tail" "-f" "/dev/null"] cmd=[] network="host"
[test-matrix/job-matrix-1]   🐳  docker create image=catthehacker/ubuntu:act-latest platform=linux/arm64 entrypoint=["tail" "-f" "/dev/null"] cmd=[] network="host"
[test-matrix/job-matrix-2]   🐳  docker run image=catthehacker/ubuntu:act-latest platform=linux/arm64 entrypoint=["tail" "-f" "/dev/null"] cmd=[] network="host"
[test-matrix/job-matrix-3]   🐳  docker run image=catthehacker/ubuntu:act-latest platform=linux/arm64 entrypoint=["tail" "-f" "/dev/null"] cmd=[] network="host"
[test-matrix/job-matrix-1]   🐳  docker run image=catthehacker/ubuntu:act-latest platform=linux/arm64 entrypoint=["tail" "-f" "/dev/null"] cmd=[] network="host"
[test-matrix/job-matrix-1] 🧪  Matrix: map[TARGET_LAMBDA_FUNCTION_NAMES:testlambda]
[test-matrix/job-matrix-2] 🧪  Matrix: map[TARGET_LAMBDA_FUNCTION_NAMES:test2lambda]
[test-matrix/job-matrix-3] 🧪  Matrix: map[TARGET_LAMBDA_FUNCTION_NAMES:test3lambda]
[test-matrix/job-matrix-2] ⭐ Run Main echo test2lambda
echo "aws lambda list-versions-by-function --function-name test2lambda --query 'Versions[-1].Version' --output text"
[test-matrix/job-matrix-1] ⭐ Run Main echo testlambda
echo "aws lambda list-versions-by-function --function-name testlambda --query 'Versions[-1].Version' --output text"
[test-matrix/job-matrix-3] ⭐ Run Main echo test3lambda
echo "aws lambda list-versions-by-function --function-name test3lambda --query 'Versions[-1].Version' --output text"
[test-matrix/job-matrix-2]   🐳  docker exec cmd=[bash --noprofile --norc -e -o pipefail /var/run/act/workflow/0] user= workdir=
[test-matrix/job-matrix-3]   🐳  docker exec cmd=[bash --noprofile --norc -e -o pipefail /var/run/act/workflow/0] user= workdir=
[test-matrix/job-matrix-1]   🐳  docker exec cmd=[bash --noprofile --norc -e -o pipefail /var/run/act/workflow/0] user= workdir=
| test2lambda
| aws lambda list-versions-by-function --function-name test2lambda --query 'Versions[-1].Version' --output text
| testlambda
| aws lambda list-versions-by-function --function-name testlambda --query 'Versions[-1].Version' --output text
| test3lambda
| aws lambda list-versions-by-function --function-name test3lambda --query 'Versions[-1].Version' --output text
[test-matrix/job-matrix-2]   ✅  Success - Main echo test2lambda
echo "aws lambda list-versions-by-function --function-name test2lambda --query 'Versions[-1].Version' --output text"
[test-matrix/job-matrix-3]   ✅  Success - Main echo test3lambda
echo "aws lambda list-versions-by-function --function-name test3lambda --query 'Versions[-1].Version' --output text"
[test-matrix/job-matrix-1]   ✅  Success - Main echo testlambda
echo "aws lambda list-versions-by-function --function-name testlambda --query 'Versions[-1].Version' --output text"
[test-matrix/job-matrix-2] Cleaning up container for job job-matrix
[test-matrix/job-matrix-3] Cleaning up container for job job-matrix
[test-matrix/job-matrix-1] Cleaning up container for job job-matrix
[test-matrix/job-matrix-3] 🏁  Job succeeded
[test-matrix/job-matrix-2] 🏁  Job succeeded
[test-matrix/job-matrix-1] 🏁  Job succeeded
```
