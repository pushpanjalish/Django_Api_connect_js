from rest_framework import serializers
from .models import EmpData

class EmpDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=EmpData
        fields='__all__'
