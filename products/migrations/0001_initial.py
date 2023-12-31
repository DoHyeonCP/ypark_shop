# Generated by Django 5.0 on 2023-12-10 11:04

import common.utils
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("modified_at", models.DateTimeField(auto_now=True)),
                (
                    "title",
                    models.CharField(db_index=True, help_text="상품 이름", max_length=30),
                ),
                (
                    "price",
                    models.DecimalField(
                        db_index=True,
                        decimal_places=2,
                        help_text="상품 가격",
                        max_digits=10,
                    ),
                ),
                (
                    "image",
                    models.ImageField(
                        blank=True,
                        help_text="상품 이미지",
                        null=True,
                        upload_to=common.utils.rename_image_file_to_uuid,
                    ),
                ),
            ],
            options={
                "ordering": ["modified_at"],
            },
        ),
    ]
