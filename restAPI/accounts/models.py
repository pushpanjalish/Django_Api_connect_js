from django.db import models

# Create your models here.
class EmpData(models.Model):
    name=models.CharField(max_length=100)
    age=models.CharField(max_length=100)
    def __str__(self):
        return self.name
