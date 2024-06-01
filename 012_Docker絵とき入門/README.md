# Docker絵とき入門

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