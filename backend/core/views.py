from django.shortcuts import render
from .models import Event
from datetime import date
from calendar import Calendar
from django.template.loader import render_to_string
from django.http import HttpResponse

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

def calendar_snippet(request):
    today = date.today()
    year = int(request.GET.get("year", today.year))
    month = int(request.GET.get("month", today.month))

    events = Event.objects.filter(date__year=year, date__month=month)
    event_days = {e.date.day for e in events}
    cal = Calendar()
    month_days = list(cal.itermonthdays(year, month))

    context = {
        "year": year,
        "month": month,
        "month_name": date(year, month, 1).strftime("%B"),
        "month_days": month_days,
        "event_days": event_days,
    }
    return render(request, "core/calendar_snippet.html", context)