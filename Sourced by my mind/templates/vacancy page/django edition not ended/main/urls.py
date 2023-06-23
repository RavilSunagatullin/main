from django.urls import path
from.import views

urlpatterns = [
    path('', views.index, name="start"),
    path('TT', views.TT, name="TT"),
    path('IS', views.IS, name="IS"),
    path('CHPY', views.CHPY, name="CHPY"),
    path('TERP', views.TERP, name="TERP"),
    path('OP', views.OP, name="OP"),
    path('TM', views.TM, name="TM"),
    path('MO', views.MO, name="MO"),
    path('KA', views.KA, name="KA"),
    path('BY', views.BY, name="BY"),
]