from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('gallery', views.gallery, name='gallery'),
     path('alumini', views.alumini, name='alumini'),
     path('gallery', views.gallery, name='gallery'),
     path('events', views.events, name='events'),
     path('profile', views.profile, name='profile'),

]