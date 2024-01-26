from .base import *

Debug = False

ALLOWED_HOSTS = ['*']

STATIC_ROOT = '/app/static/'
STATICFILES_DIRS = []

MEDIA_ROOT = '/app/media/'

CORS_ALLOW_ALL_ORIGINS = False # 개발용, 실제 배포시 보안을 위해 수정 필요
CORS_ALLOWED_ORIGINS = [
    "https://www.yparkw.com",    # 실제 배포된 React 앱의 도메인
    "https://211.45.167.63:3000",
]
CORS_ALLOW_CREDENTIALS = True # 쿠키와 함꼐 요청을 보낼 수있도록
