# Generated by Django 3.2.10 on 2024-01-03 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_product_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='size',
            field=models.CharField(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large'), ('XL', 'Extra Large'), ('FREE', 'Free')], default='M', help_text='상품 사이즈', max_length=4),
        ),
    ]
