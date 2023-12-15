from django.db import models
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *

@api_view(['GET', 'POST'])
def get_data(request):
    person = Person.objects.all()
    serializer = PersonSerializers(person, many=True)
    print(serializer.data)
    return Response(serializer.data)

