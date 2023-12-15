from django.db import models

# Create your models here.
class Person(models.Model):
    name_surname = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='johan_app/static/img/')

    def __str__(self):
        return self.name_surname