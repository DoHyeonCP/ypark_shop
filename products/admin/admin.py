from django.contrib import admin
from ..models import Product
# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_dispalay = ('id', 'title', 'price', 'image', 'created_at', 'modified_at',)
    fields = ('id', 'title', 'price', 'image', 'created_at', 'modified_at',)
    readonly_fields = ('id', 'created_at', 'modified_at')