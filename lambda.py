import os
import boto3
import json

ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
runtime = boto3.client('runtime.sagemaker')

def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))
    
    data = event['queryStringParameters']['data']
    print(data)
    
    response = runtime.invoke_endpoint(
        EndpointName=ENDPOINT_NAME,
        ContentType='text/csv',
        Body=data
    )
    
    print(response)
    
    result = json.loads(response['Body'].read().decode())
    
    return ("This is the pricing prediction:", result)

