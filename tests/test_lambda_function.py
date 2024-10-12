import unittest
import boto3
from moto import mock_lambda, mock_iam

class TestLambdaFunction(unittest.TestCase):

    @mock_lambda
    @mock_iam
    def test_lambda_handler(self):
        # モックのIAMクライアントを作成
        iam_client = boto3.client('iam', region_name='ap-northeast-1')

        # モックのIAMロールを作成
        role_name = 'test-role'
        assume_role_policy_document = {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "Service": "lambda.amazonaws.com"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
        role = iam_client.create_role(
            RoleName=role_name,
            AssumeRolePolicyDocument=json.dumps(assume_role_policy_document)
        )
        role_arn = role['Role']['Arn']

        # モックのLambdaクライアントを作成
        lambda_client = boto3.client('lambda', region_name='ap-northeast-1')

        # テスト用のLambda関数を作成
        lambda_client.create_function(
            FunctionName='test_lambda',
            Runtime='python3.8',
            Role=role_arn,  # モックのロールを使用
            Handler='lambda_function.lambda_handler',
            Code={'ZipFile': b'fileb://lambda_function.zip'},
        )

        # Lambda関数を呼び出し
        response = lambda_client.invoke(
            FunctionName='test_lambda',
            Payload=b'{"key": "value"}',
        )

        # レスポンスの検証
        self.assertEqual(response['StatusCode'], 200)
        self.assertIn('Payload', response)

if __name__ == '__main__':
    unittest.main()