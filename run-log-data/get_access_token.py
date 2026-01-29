import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

client_id = os.getenv('CLIENT_ID')
client_secret = os.getenv('CLIENT_SECRET')
refresh_token = os.getenv('REFRESH_TOKEN')

# Request to obtain the access token
response = requests.post(
    'https://www.strava.com/api/v3/oauth/token',
    data={
        'client_id': client_id,
        'client_secret': client_secret,
        'refresh_token': refresh_token,
        'grant_type': 'refresh_token'
    }
)

# Check if the request was successful
if response.status_code == 200:
    access_token = response.json().get('access_token')
    print(f'Access Token: {access_token}')
else:
    print(f'Failed to obtain access token: {response.status_code}')
    print(response.text)
