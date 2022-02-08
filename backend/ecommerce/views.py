from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


def getRoutes(request):
    routes = ['/api/products/']
    return JsonResponse(routes, safe=False)


@api_view(['GET'])
def getProducts(request):
    return Response({"message": "Hello, world!"})


@api_view(['GET'])
def getProduct(request, pk):
    product = None
    return Response(product)
