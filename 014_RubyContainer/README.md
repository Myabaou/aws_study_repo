# Ruby をDockerで使い分け

# Ruby For Docker

```sh
docker run --rm -v $(pwd):/app -w /app ruby:2.7 ruby helloworld.rb
```

```sh
docker run --rm -v $(pwd):/app -w /app ruby:3.0 ruby helloworld.rb
```

```sh
docker run --rm -v $(pwd):/app -w /app ruby:3.1 ruby helloworld.rb
```

```sh
docker run --rm -v $(pwd):/app -w /app ruby:3.2 ruby helloworld.rb
```

## Ruby on Rails For Docker

- Build

```sh
docker compose build
```

- 単体実行

```sh
docker run --rm -v $(pwd):/app -w /app rubyrails:3.1 ruby helloworld.rb
```

- zshrcに追加

```sh
# Ruby on Rails for Docker
alias rails7rb31='docker run --rm -v $(pwd):/app -w /app rubyrails:3.1 rails'
alias rails7rb32='docker run --rm -v $(pwd):/app -w /app rubyrails:3.2 rails'
alias rails7rb33='docker run --rm -v $(pwd):/app -w /app rubyrails:3.3 rails'
```

- 読み込み

```sh
source ~/.zshrc
```
