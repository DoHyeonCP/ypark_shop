from django.urls import path
from products.views.product import ProductListCreateAV, ProductRetrieveUpdateDestroyAV
from products.views.image import ImageUploadView
from products.views.product import ProductImageUploadAV, ProductListCreateAV, ProductRetrieveUpdateDestroyAV


app_name = 'products'

urlpatterns = [
    path('', ProductListCreateAV.as_view(), name = 'product_list_create'),
    path('<int:pk>/', ProductRetrieveUpdateDestroyAV.as_view(), name = 'product_update_destory'),
    path('upload/', ProductImageUploadAV.as_view(), name='product_image_upload')
]
