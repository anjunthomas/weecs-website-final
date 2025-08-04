from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} ({self.date})"
    
    
class Officer(models.Model):
    GROUP_CHOICES = [
        ('Executive', 'Executive'),
        ('General', 'General')
    ]

    name = models.CharField(max_length=100)
    role = models.CharField(max_length=50, blank=True)
    group =models.CharField(max_length=50, choices=GROUP_CHOICES)
    photo = models.ImageField(upload_to='officers_photos/')

    def __str__(self):
        return f"{self.name} - {self.role}"