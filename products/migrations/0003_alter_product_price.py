# Generated by Django 3.2.10 on 2023-12-29 12:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20231229_2131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(db_index=True, decimal_places=2, help_text='상품 가격', max_digits=10),
        ),
    ]
