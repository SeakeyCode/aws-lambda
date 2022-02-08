
https://docs.aws.amazon.com/lambda/latest/dg/nodejs-package.html

下载：https://awscli.amazonaws.com/AWSCLIV2-2.0.30.pkg

快速设置: `aws configure`

```
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-west-2
Default output format [None]: json
```

https://github.com/claudiajs/claudia/tree/master/docs

`npm install claudia -g`

1. 生成包裹Express的代码 

`claudia generate-serverless-express-proxy --express-module app`

2. 上传到 AWS Lambda 

`claudia create --handler lambda.handler --deploy-proxy-api --region us-west-1 --name test`

3. 更新代码

`claudia update`

4. 本地测试

`claudia test-lambda`
