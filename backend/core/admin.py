#admin.py
from django.contrib import admin

from .models import Event
from .models import Officer

admin.site.register(Event)
@admin.register(Officer)
class OfficerAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'group')
    list_filer = ('group')