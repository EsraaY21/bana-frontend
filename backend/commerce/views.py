from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def getRoutes(request):
    routes = ['/api/', '/api/products/']
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    return Response(products)


@api_view(['GET'])
def getProductDetails(request, pk):
    return Response(product)
