from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill

class Event(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} ({self.date})"
    
    
class Officer(models.Model):
    GROUP_CHOICES = [
        ("Advisor", "Advisor"),
        ('Executive', 'Executive'),
        ('General', 'General')
    ]

    name = models.CharField(max_length=100)
    role = models.CharField(max_length=50, blank=True)
    group =models.CharField(max_length=50, choices=GROUP_CHOICES)
    photo = models.ImageField(upload_to='officers_photos/')

    def __str__(self):
        return f"{self.name} - {self.role}"
    

class Photo(models.Model):
    title = models.CharField(max_length=200, blank=True)
    image = models.ImageField(upload_to='photos/%Y/%m/')
    # auto-generated (on first access) 250x150 thumbnail
    thumb = ImageSpecField(
        source='image',
        processors=[ResizeToFill(250, 150)],
        format='JPEG',
        options={'quality': 75},
    )
    is_published = models.BooleanField(default=True)
    sort_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("sort_order", "-created_at")