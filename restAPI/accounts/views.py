from rest_framework.decorators import api_view
from rest_framework.response import Response
from accounts.models import EmpData
from accounts.serializers import EmpDataSerializer
from django.shortcuts import get_object_or_404
# Create your views here.
@api_view(['GET'])
def Apioverview(request):
    return Response('API Calling')

@api_view(['GET'])
def Emplist(request):
    emp=EmpData.objects.all()
    serializer=EmpDataSerializer(emp,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def EmplistId(request,pk):
    emp=EmpData.objects.get(pk=pk)
    serializer=EmpDataSerializer(emp)
    return Response(serializer.data)

@api_view(['POST'])
def Empcreate(request):
    serializer=EmpDataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response('item added')

@api_view(['POST'])
def EmpUpdate(request, pk):
    serializer = EmpData.objects.get(pk=pk)
    data = EmpDataSerializer(instance=serializer, data=request.data)
    if data.is_valid():
        data.save()
        return Response('item updated')

@api_view(['DELETE'])
def EmpDelete(request, pk):
    serializer = get_object_or_404(EmpData, pk=pk)
    serializer.delete()
    return Response('Item deleted')
