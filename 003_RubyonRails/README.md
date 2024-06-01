# RubyonRails環境構築 MysqlVer

## 前提条件

- aws cliインストール済み
- Docker or Finchが使える状態

参考手順:https://mseeeen.msen.jp/rails-docker/

## Docker設定

```sh
mkdir docker-rails
cd docker-rails
```

- Build

```sh
docker compose build
```

- Rails Project　Create

```sh
docker compose run web rails new . --force --no-deps --database=mysql
```

- Database Create

```sh
docker compose run web rails db:create
```

- マイグレーション

```sh
docker compose run web rails db:migrate
```

---

## trouble shooting

### DockerBuild時にエラー

```
 => ERROR [ 2/10] RUN apt update -qq && apt install -y mysql-client                                                                                  8.1s
------
 > [ 2/10] RUN apt update -qq && apt install -y mysql-client:
#0 0.125 
#0 0.125 WARNING: apt does not have a stable CLI interface. Use with caution in scripts.
#0 0.125 
#0 7.636 5 packages can be upgraded. Run 'apt list --upgradable' to see them.
#0 7.640 
#0 7.640 WARNING: apt does not have a stable CLI interface. Use with caution in scripts.
#0 7.640 
#0 7.644 Reading package lists...
#0 7.873 Building dependency tree...
#0 7.944 Reading state information...
#0 7.952 Package mysql-client is not available, but is referred to by another package.
#0 7.952 This may mean that the package is missing, has been obsoleted, or
#0 7.952 is only available from another source
#0 7.952 
#0 7.996 E: Package 'mysql-client' has no installation candidate
------
failed to solve: executor failed running [/bin/sh -c apt update -qq && apt install -y mysql-client]: exit code: 100
```

→ エラーになった。。

記事によるとどうやら、mysql-client は、 mariadb-client に統合されちゃったみたいですね...

### DB Create時にエラー

```
Could not find sprockets-rails-3.4.2, mysql2-0.5.5, puma-5.6.5, importmap-rails-1.1.5, turbo-rails-1.3.2, stimulus-rails-1.2.1, jbuilder-2.11.5, bootsnap-1.16.0, debug-1.7.1, web-console-4.2.0, capybara-3.38.0, selenium-webdriver-4.8.0, webdrivers-5.2.0, sprockets-4.2.0, msgpack-1.6.0, irb-1.6.2, reline-0.3.2, bindex-0.8.1, addressable-2.8.1, regexp_parser-2.6.2, xpath-3.2.0, rubyzip-2.3.2, websocket-1.2.9, io-console-0.6.0, public_suffix-5.0.1 in locally installed gems
Run `bundle install` to install missing gems.
```

---

## Ruby on Rails For ECS

```sh
mkdir -p sample/nginx
cd sample
touch nginx/Dockerfile nginx/nginx.conf docker-compose.yml Dockerfile Gemfile Gemfile.lock
```

- Railsプロジェクト作成

```sh
docker compose run web rails new . --force --no-deps --database=mysql --skip-test --webpacker
```

- 再度ビルド

```sh
docker compose build
```

- データベース作成

```sh
docker compose run web rails db:create
```

### TODO APL Create

```sh
docker compose run web rails g scaffold todo content:text
docker compose run web rails db:migrate
```

→ http://localhost にアクセスしてTODOアプリが表示されていればOK

---

## AWS環境構築
