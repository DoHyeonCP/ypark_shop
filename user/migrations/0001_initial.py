# Generated by Django 3.2.10 on 2023-12-21 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('username', models.CharField(blank=True, help_text='유저 이름', max_length=20, null=True)),
                ('email', models.EmailField(help_text='유저 이메일', max_length=254, unique=True)),
                ('phone', models.CharField(help_text='연락가능한 번호', max_length=20)),
                ('password', models.CharField(max_length=128)),
                ('address', models.CharField(max_length=100)),
                ('postCode', models.CharField(max_length=100)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
