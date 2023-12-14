from django.db import models

# Create your models here.

class StaffUser(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='media')
    experience = models.CharField(max_length=255, blank=True, null=True)
    job_title = models.CharField(max_length=255, blank=True,null=True)
    about = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
