# Generated by Django 3.2.10 on 2024-01-07 07:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_alter_productsize_count'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='stock',
        ),
    ]
