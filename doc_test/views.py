from django.shortcuts import render

def get_page(request):
    print(request.POST)
    return render(request, 'index.html')



