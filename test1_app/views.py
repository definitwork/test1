from django.shortcuts import render
from .models import *


def get_products(request):
    # Не трогать, все ок
    products = Product.objects.all()
    return render(request, template_name='products.html', context={'products': products})
