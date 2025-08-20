#admin.py
from django.contrib import admin
from django.utils.html import format_html
from .models import Event
from .models import Officer
from .models import Photo


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ("id", "thumb_preview", "title", "is_published", "sort_order", "created_at")
    list_editable = ("is_published", "sort_order")
    search_fields = ("title",)
    ordering = ("sort_order", "-created_at")

    def thumb_preview(self, obj):
        # show the generated thumbnail or fallback
        try:
            url = obj.thumb.url if obj.thumb else obj.image.url
        except Exception:
            return "-"
        return format_html('<img src="{}" style="height:48px;object-fit:cover;border-radius:6px;">', url)
    thumb_preview.short_description = "Preview"


admin.site.register(Event)
@admin.register(Officer)
class OfficerAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'group')
    list_filer = ('group')

    