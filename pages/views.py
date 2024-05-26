from django.http import HttpResponse
from django.template import loader

def home(request):
  template = loader.get_template('home.html')
  return HttpResponse(template.render())
def about(request):
  template = loader.get_template('About.html')
  return HttpResponse(template.render())
def gallery(request):
  template = loader.get_template('Gallery.html')
  return HttpResponse(template.render())
def alumini(request):
  template = loader.get_template('Alumini.html')
  return HttpResponse(template.render())
def contact(request):
  template = loader.get_template('contact.html')
  return HttpResponse(template.render())
def events(request):
  template = loader.get_template('Events.html')
  return HttpResponse(template.render())
def profile(request):
  template = loader.get_template('profile.html')
  return HttpResponse(template.render())
