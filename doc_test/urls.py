from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from .views import get_page

urlpatterns = [
    path('', get_page),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
