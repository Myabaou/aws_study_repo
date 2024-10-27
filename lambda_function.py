def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': 'Hello from Lambda!'
    }

if __name__ == "__main__":
    # テスト用のイベントとコンテキストを定義
    test_event = {}
    test_context = {}

    # Lambda 関数を呼び出して結果を表示
    result = lambda_handler(test_event, test_context)
    print(result)