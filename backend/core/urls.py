from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  
    path('about/', views.about, name='about'),
    path('events/', views.events, name='events'),
    path('contact/', views.contact, name='contact'),
    path('gallery/', views.gallery, name='gallery'),
    path('sponsors/', views.sponsors, name='sponsors'),
    path('constact/', views.contact, name='contact'),
    path('calendar-snippet/', views.calendar_snippet, name='calendar-snippet'),
]

