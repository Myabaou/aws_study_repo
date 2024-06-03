# Pythonを複数バージョンで実行できるようにする

- Build

```sh
docker compose build
```

- up

```sh
docker compose up -d
```

```sh
docker container exec --interactive --tty py310 python --version
```

```sh
docker container exec --interactive --tty py311 python --version
```

- Hello Worldファイル作成

```helloworld.py
print("Hello, World!")

import platform

print("Python version:", platform.python_version())

```

```sh
docker run -v $(pwd):/app -w /app python:3.11 python helloworld.py
```

```sh
docker run -v $(pwd):/app -w /app python:3.11 python helloworld.py
```

## エイリアス登録

コマンドが長いのでエイリアス登録しておく

- ~/.zshrc

```sh
# python For Docker

alias python310='docker run -v $(pwd):/app -w /app python:3.10 python'
alias python311='docker run -v $(pwd):/app -w /app python:3.11 python'
```

- 実行例

```sh
python310 helloworld.py
Hello, World!
Python version: 3.10.14
```
