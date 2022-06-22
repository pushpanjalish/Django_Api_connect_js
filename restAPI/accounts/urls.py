from django.urls import path
from accounts import views

urlpatterns = [
    path('',views.Apioverview),
    path('emplist/',views.Emplist,name='emplist'),
    path('emplistid/<int:pk>/',views.EmplistId,name='emplistid'),
    path('empcreate/',views.Empcreate,name='empcreate'),
    path('empupdate/<int:pk>/',views.EmpUpdate,name='empupdate'),
    path('empdelete/<int:pk>/',views.EmpDelete,name='empdelete'),
]
