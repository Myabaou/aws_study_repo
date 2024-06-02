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
docker build -t my-python:web -f web_Dockerfile .
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
