# Docker絵とき入門学習記録

## Image一覧確認

```sh
docker image ls
```

- 利用していないイメージを一括削除
未使用のイメージ全て削除

```sh
docker system prune -a
```

## Postgresのコンテナ起動

```sh
docker build -t postgres-test .
```

```sh
docker run -p 5432:5432 --rm --detach --name db postgres-test
```

## 起動中のDockerコンテナを削除

```sh
docker stop db
```

## 起動中のDockerfileにログイン

```sh
docker container exec --interactive --tty db bash
```

## postgressqlログイン

```sh
docker container exec --interactive --tty db psql --host 127.0.0.1 --port 5432 --username postgres --dbname postgres
```

---

## Posrgres SQL

```sql
SELECT datname FROM pg_database;
```

---

## Python WEB

- Build

```sh
docker build -t my-python:web -f web/Dockerfile .
```

- 起動

```sh
docker container run \
  --name web \
  --rm \
  --detach \
  --publish 8000:8000 \
  my-python:web
```

- アクセス確認

```sh
curl http://localhost:8000
```

- 停止

```sh
docker container stop web
```

- 削除

```sh
docker container rm -f web
```

---

## 21章

### ボリューム作成

```sh
docker volume create --name my-volume
```

- ボリューム確認

```sh
docker volume ls
```

- ボリューム削除

```sh
docker volume rm my-volume
```

### MYSQLコンテナにボリュームをマウント

```sh
docker volume create --name mysql-volume
```

- 確認

```sh
docker container run --rm mysql:8.2 cat /etc/my.cnf
```

- ボリュームをマウントしてMYSQLコンテナを起動

```sh
docker container run \
  --name mysql_db \
  --rm \
  --detach \
  --publish 3306:3306 \
  --env MYSQL_ROOT_PASSWORD=secret \
  --env MYSQL_DATABASE=sample \
  --mount type=volume,source=mysql-volume,destination=/var/lib/mysql \
  mysql:8.2
```

- mysqlにログイン

```sh
docker container exec --interactive --tty mysql_db \
mysql --user=root --password=secret sample
```

### データ作成

- ユーザテーブル作成

```sql
create table user (id int, name varchar(32));
```

- ユーザ作成

```sql
insert into user (id,name) values (1,'John Doe');
```

```sql
insert into user (id,name) values (2,'Jane Doe');
```

- 確認

```sql
select * from user;
```

### 確認

- mysql_db コンテナ停止

```sh
docker container stop mysql_db
```

- 同じボリュームでマウントしてdb2を起動

```sh
docker container run \
  --name mysql_db2 \
  --rm \
  --detach \
  --publish 3306:3306 \
  --env MYSQL_ROOT_PASSWORD=secret \
  --env MYSQL_DATABASE=sample \
  --mount type=volume,source=mysql-volume,destination=/var/lib/mysql \
  mysql:8.2
```

- mysqlにログイン

```sh
docker container exec --interactive --tty mysql_db2 \
mysql --user=root --password=secret sample
```

## 22章 バインドマウントの利用

- Rubyファイルの作成

```hello.rb
puts "hello from host-machine."
```

- Rubyコンテナを起動

```sh
docker container run \
  --name ruby \
  --rm \
  --interactive \
  --tty \
  --mount type=bind,source="$(pwd)",target=/my-work \
  ruby:3.2 \
  bash
```

- コンテナ上でRubyファイルを実行

```sh
ruby /my-work/hello.rb
```

- コンテナ上でファイルを削除

```sh
rm /my-work/hello.rb
```

結果ローカルからもファイルが消えている。

---

## 23章 PHPコンテナからMYSQLコンテナの通信する

### 23.1 ネットワークの作成

- ネットワークの作成

```sh
docker network create my-network
```

- ネットワーク一覧確認

```sh
docker network ls
```

- Build

```sh
docker compose build
```

- 疎通確認

```sh
docker container run my-php:ping ping  -c 3 -t 1 localhost
```

### 23.2 コンテナ起動時にネットワークに接続する

- Build

```sh
docker compose build
```

- Up

```sh
docker compose up -d
```

- MYSQLに接続してデータ作成

```sh
docker compose exec db mysql --host=127.0.0.1 --port=3306 --user=root --password=secret sample
```

```sql
create table user (id int, name varchar(32));
```

- ユーザ作成

```sql
insert into user (id,name) values (1,'John Doe');
```

```sql
insert into user (id,name) values (2,'Jane Doe');
```

- 確認

```sql
select * from user;
```

- PHPコンテナからMYSQLコンテナに接続できるか確認

```sh
docker container run --network my-network --rm my-php:ping ping -c 3 -t 1 db
```

- PHPコンテナPHP実行

```sh
docker container run \
--rm \
--mount type=bind,source="$(pwd)",target=/my-work \
--network my-network \
my-php:pdo_mysql \
php /my-work/main.php 
```

- my-networkの状態を確認

```sh
docker network inspect my-network
```

### 23.2 デフォルトブリッジネットワークを使用したコンテナ通信

- calledコンテナを起動

```sh
docker container run --rm --name called --detach nginx:1.25
```

- calledコンテナのIPアドレス確認

```sh
docker container inspect called
```

- calledコンテナにping

```sh
docker container run \
--name calling \
--rm \
my-php:ping ping -c 3 -t 1 172.17.0.3
```

- --linkオプションを使用してコンテナを接続

```sh
docker container run \
--name calling \
--rm \
--link called:web-server \
my-php:ping \
ping -c 3 -t 1 web-server
```

- callingの環境変数を確認する

```sh
docker container run \
--name calling \
--rm \
--interactive \
--tty \
--link called:web-server my-php:ping \
bash
```

```bash
env | sort | grep WEB_SERVER_ENV_
```

--

## 25章必要なイメージを準備する

### 25.1 ディレクトリの作成

```sh
mkdir -p work/docker/app
mkdir -p work/docker/db
mkdir -p work/docker/mail
mkdir -p work/src
```

### 25.4 Appイメージを準備する

- ビルドインWEBサーバをお試し起動

```sh
docker run --rm --publish 8000:8000 php:8.2 php --server 0.0.0.0:8000
```

- PHPコマンドのパスを確認

```sh
docker run --rm php:8.2 which php
```

- DockerfileからAppイメージをビルド

```sh
docker image build --tag work-app:0.1.0 docker/app
```

## 25.5 章まとめ

- Appコンテナの起動確認

```sh
docker container run \
--name app \
--rm \
--detach \
--publish 8000:8000 \
work-app:0.1.0 \
/usr/local/bin/php --server 0.0.0.0:8000 --docroot /
```

- DBコンテナの起動確認

```sh
docker container run \
--name db \
--rm \
--detach \
--env MYSQL_ROOT_PASSWORD=secret \
--env MYSQL_USER=app \
--env MYSQL_PASSWORD=pass1234 \
--env MYSQL_DATABASE=sample \
--env TZ=Asia/Tokyo \
--publish 3306:3306 \
mysql:8.2
```

- mysqlにログイン

```sh
docker container exec --interactive --tty db \
mysql --user=app --password=pass1234 sample
```

- Mailコンテナ起動確認

```sh
docker container run \
--name mail \
--rm \
--detach \
--env TZ=Asia/Tokyo \
--publish 8025:8025 \
axllent/mailpit:v1.10.1
```

## 26章 コンテナ以外のリソースを準備する

### 26.1 Appコンテナを整理する

- index.phpを作成

- ネットワークの作成

```sh
docker network create work-network
```

### ２６．２　DBコンテナを整理する

- DBコンテナ用のボリューム作成

```sh
docker volume create --name work-db-volume
```

### 26.3 Mailコンテナを整理する

- Mailコンテナ用のボリューム作成

```sh
docker volume create --name work-mail-volume
```

## 27章　コンテナの起動

### 27.1 App,DB,Mailコンテナを起動

> [!WARNING]
> Appコンテナが起動中だと失敗する可能性があるので起動してたら停止する

- 停止コマンド

```sh
docker container stop app
```

- Appコンテナの起動

```sh
docker container run \
--name app \
--rm \
--detach \
--network work-network \
--mount type=bind,source="$(pwd)"/src,target=/my-work \
--publish 8000:8000 \
work-app:0.1.0 \
/usr/local/bin/php --server 0.0.0.0:8000 --docroot /my-work
```

- DBコンテナの起動

```sh
docker container run \
--name db \
--rm \
--detach \
--network work-network \
--mount type=volume,source=work-db-volume,target=/var/lib/mysql \
--mount type=bind,source="$(pwd)"/docker/db/init,target=/docker-entrypoint-initdb.d \
--env MYSQL_ROOT_PASSWORD=secret \
--env MYSQL_USER=app \
--env MYSQL_PASSWORD=pass1234 \
--env MYSQL_DATABASE=sample \
--env TZ=Asia/Tokyo \
--publish 3306:3306 \
mysql:8.2
```

- Mailコンテナの起動

```sh
docker container run \
--name mail \
--rm \
--detach \
--network work-network \
--mount type=volume,source=work-mail-volume,target=/data \
--env TZ=Asia/Tokyo \
--env MP_DATA_FILE=/data/mailpit.db \
--publish 8025:8025 \
axllent/mailpit:v1.10.1
```

### 27.2 無座ウザを確認

- エラー

```log

Warning: Unknown: Failed to open stream: Invalid argument in Unknown on line 0

Fatal error: Failed opening required '/' (include_path='.:/usr/local/lib/php') in Unknown on line 0
```

Docker上で実行しても同じ事象

```sh
root@8f8adf3688b7:/# curl http://localhost:8000
<br />
<b>Warning</b>:  Unknown: Failed to open stream: No such file or directory in <b>Unknown</b> on line <b>0</b><br />
<br />
<b>Fatal error</b>:  Failed opening required '/' (include_path='.:/usr/local/lib/php') in <b>Unknown</b> on line <b>0</b><br />
```

→ `docroot` で指定していたパスが誤っていた。　my-workに加えて`/`を追加してしまっていたため

## 28章　Docker Composeの利用

### 28.3 Dcoker Composeの基本操作

- 今まで起動したコンテナを停止

```sh
docker container stop app mail db
```

- 全てのコンテナを起動する

```sh
docker compose up --detach --build
```

- 起動確認

```sh
docker compose ps
```

- 起動中コンテナでコマンドを実行する

```sh
docker compose exec app bash
```

- 全てのコンテナを停止する

```sh
docker compose down
```

- 全てのコンテナとイメージとボリュームを削除する

```sh
docker compose down --rmi all --volumes
```

## 30章　プロジェクトでDockerを使う

### 30.1 環境変数でcompose.ymlの値をパラメータ化する

書き換えを確認する


```sh
docker compose convert
```