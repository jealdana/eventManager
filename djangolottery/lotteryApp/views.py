from django.shortcuts import render

from django.views.generic import TemplateView

from random import seed
from random import randint

class home(TemplateView):
    template_name = "about.html"
