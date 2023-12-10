from django.shortcuts import render
from .models import *


def get_products(request):
    # Я Галя и я хочу 7 продуктов
    products = Product.objects.all()[:7]
    return render(request, template_name='products.html', context={'products': products})
