from django.shortcuts import render
from .models import *


def get_products(request):
    # Я Вася и я хочу только 8 продуктов
    products = Product.objects.all()[:8]
    return render(request, template_name='products.html', context={'products': products})
