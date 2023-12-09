from django.shortcuts import render
from .models import *


def get_products(request):
    return render(request, template_name='products.html', context={'products': Product.objects.all()})
