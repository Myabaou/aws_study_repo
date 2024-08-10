# GO

## Build

```sh
go build -v .
```

## Run

```sh
go run main.go
```

---

## ２章

### GOプロジェクトの準備

```sh
go mod init github.com/Myabaou/cicdhandson
```

- 出力

```log
go: creating new go.mod: module github.com/Myabaou/cicdhandson
go: to add module requirements and sums:
 go mod tidy
```

```sh
go get github.com/gin-gonic/gin@v1.9.1
```

- 出力

```log
go: downloading github.com/gin-gonic/gin v1.9.1
go: downloading github.com/gin-contrib/sse v0.1.0
go: downloading github.com/mattn/go-isatty v0.0.19
go: downloading golang.org/x/net v0.10.0
go: downloading github.com/go-playground/validator/v10 v10.14.0
go: downloading github.com/pelletier/go-toml/v2 v2.0.8
go: downloading github.com/ugorji/go/codec v1.2.11
go: downloading google.golang.org/protobuf v1.30.0
go: downloading gopkg.in/yaml.v3 v3.0.1
go: downloading github.com/bytedance/sonic v1.9.1
go: downloading github.com/goccy/go-json v0.10.2
go: downloading github.com/json-iterator/go v1.1.12
go: downloading golang.org/x/sys v0.8.0
go: downloading github.com/gabriel-vasile/mimetype v1.4.2
go: downloading github.com/go-playground/universal-translator v0.18.1
go: downloading github.com/leodido/go-urn v1.2.4
go: downloading golang.org/x/crypto v0.9.0
go: downloading golang.org/x/text v0.9.0
go: downloading github.com/go-playground/locales v0.14.1
go: downloading github.com/chenzhuoyu/base64x v0.0.0-20221115062448-fe3a3abad311
go: downloading golang.org/x/arch v0.3.0
go: downloading github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd
go: downloading github.com/modern-go/reflect2 v1.0.2
go: downloading github.com/twitchyliquid64/golang-asm v0.15.1
go: downloading github.com/klauspost/cpuid/v2 v2.2.4

```



