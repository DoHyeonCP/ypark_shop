from django.db import models

from common.models import TimestampBaseModel
from common.utils import rename_image_file_to_uuid


class Product(TimestampBaseModel):
    title = models.CharField(db_index=True, max_length=30, help_text='상품 이름')
    price = models.DecimalField(db_index=True, max_digits=10, decimal_places=2, help_text='상품 가격')
    stock = models.IntegerField(help_text='재고')
    image = models.ImageField(null=True, blank=True, upload_to=rename_image_file_to_uuid, help_text='상품 이미지')
    

    class Meta:
        ordering = ['modified_at', ]