from .base import *

Debug = False

ALLOWED_HOSTS = ['api.ipify.org', 'www.shadowserver.org', 'ip-api.com', 'google.com',
                 '211.45.167.63', 'yparkw.com', 'www.yparkw.com']

STATIC_ROOT = '/app/static/'
STATICFILES_DIRS = []

MEDIA_ROOT = '/app/media/'
MEDIA_URL = 'https://www.yparkw.com/media/'

CORS_ALLOW_ALL_ORIGINS = False # 개발용, 실제 배포시 보안을 위해 수정 필요
CORS_ALLOWED_ORIGINS = [
    "http://www.yparkw.com",
    "https://www.yparkw.com",    # 실제 배포된 React 앱의 도메인
    "http://211.45.167.63:3000",
    "https://211.45.167.63:3000",
]
CORS_ALLOW_CREDENTIALS = True # 쿠키와 함꼐 요청을 보낼 수있도록

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'yparkw',
        'USER': 'admin',
        'PASSWORD': 'qkr102998!!',
        'HOST': 'db',  # 혹은 도커 서비스 이름
        'PORT': 5432,
    }
}

SITE_ID = 1

IAMPORT_KEY = 'store-451d72a3-954f-477a-90ad-32ca43320cf4',
IAMPORT_SECRET = 'o2HcZRmup46s7kkhnNmYIH8QT3PVUzWMVwLc4Bdq4vYVj20Gr3YLyOoRlP06RrgbAKCwDjnkASJ1mmvi',
