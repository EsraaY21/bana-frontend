from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Product, Category, City, Order
from .serializers import ProductSerializer, CategorySerializer, CitySerializer, OrderSerializer


def getRoutes(request):
    routes = ['/api/products/']
    return JsonResponse(routes, safe=False)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()[::-1]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCities(request):
    cities = City.objects.all()
    serializer = CitySerializer(cities, many=True)
    return Response(serializer.data)


# ORDER - -------------------------------------------------------
@api_view(['GET', 'POST'])
def createOrder(request):
    # Create order
    serializer = OrderSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data)

    # Create shipping address

    # Create order items

    # Update stock

    return Response(serializer.data)
