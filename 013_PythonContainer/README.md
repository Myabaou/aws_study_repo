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
```

```sh
docker run -v $(pwd):/app -w /app python:3.11 python helloworld.py
```

```sh
docker run -v $(pwd):/app -w /app python:3.11 python helloworld.py
```

