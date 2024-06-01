# ベースとなるイメージを指定
FROM postgres:latest

# 環境変数を設定
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DB sample_db

# ポートを開放
EXPOSE 5432

# PostgreSQLサーバーを起動
CMD ["postgres"]
