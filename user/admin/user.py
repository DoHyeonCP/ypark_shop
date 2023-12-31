from django.contrib import admin

from user.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('pk', 'email',)
    fields = ('pk', 'email', 'password',)
    readonly_fields = ('pk',)