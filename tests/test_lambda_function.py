import unittest
import boto3
from moto import mock_lambda

class TestLambdaFunction(unittest.TestCase):

    @mock_lambda
    def test_lambda_handler(self):
        # モックのLambdaクライアントを作成
        client = boto3.client('lambda', region_name='ap-northeast-1')

        # テスト用のLambda関数を作成
        client.create_function(
            FunctionName='test_lambda',
            Runtime='python3.8',
            Role='arn:aws:iam::123456789012:role/service-role/test-role',
            Handler='lambda_function.lambda_handler',
            Code={'ZipFile': b'fileb://path_to_your_lambda_function.zip'},
        )

        # Lambda関数を呼び出し
        response = client.invoke(
            FunctionName='test_lambda',
            Payload=b'{"key": "value"}',
        )

        # レスポンスの検証
        self.assertEqual(response['StatusCode'], 200)
        self.assertIn('Payload', response)

if __name__ == '__main__':
    unittest.main()