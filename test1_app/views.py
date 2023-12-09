from django.shortcuts import render
from .models import *


def get_products(request):
    products = Product.objects.all()[:8]
    return render(request, template_name='products.html', context={'products': products})
