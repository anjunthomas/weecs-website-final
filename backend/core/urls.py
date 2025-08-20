from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  
    path('about/', views.about, name='about'),
    path('events/', views.events, name='events'),
    path('gallery/', views.gallery, name='gallery'),
    path('api/gallery/', views.gallery_items, name='gallery-items'),
    path('sponsorship/', views.sponsorship, name='sponsorship'),
    path('calendar-snippet/', views.calendar_snippet, name='calendar-snippet'),
    path('api/events/', views.get_events, name='get_events'),
    path('officers/', views.officers_view, name='officers'),
    path('links/', views.links_view, name='links'),
]

