from django.shortcuts import render
from .models import Event

def home(request):
    return render(request, 'core/index.html')

def about(request):
    return render(request, 'core/about.html')

def events(request):
    all_events = Event.objects.order_by('date')
    return render(request, 'core/events.html')

def contact(request):
    return render(request, 'core/contact.html')

def gallery(request):
    return render(request, 'core/gallery.html')

def sponsors(request):
    return render(request, 'core/sponsors.html')
