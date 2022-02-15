from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Product, Category, City
from .serializers import ProductSerializer, CategorySerializer, CitySerializer


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


# ORDER --------------------------------------------------------
# @api_view(['POST'])
# def createOrder(request):
#     data = request.data
#     orderItems = data['orderItems']

#     # Create order
#     order = Order.objects.create(
#         shipping_cost=data['shipping_cost'],
#         totalCost=data['totalCost']
#     )

#     # Create shipping address
#     shippingAddress = ShippingAddress.objects.create(
#         order=order,
#         firstName=data['orderData']['firstName'],
#         lastName=data['orderData']['lastName'],
#         phoneNumberOne=data['orderData']['phoneNumberOne'],
#         phoneNumberTwo=data['orderData']['phoneNumberTwo'],
#         email=data['orderData']['email'],
#         city=data['orderData']['city'],
#         street=data['orderData']['street'],
#         detailedAddress=data['orderData']['detailedAddress'],
#         additionalInformation=data['orderData']['additionalInformation'],
#     )

#     # Create order items
#     for i in orderItems:
#         product = Product.objects.get(id=i['id'])

#         item = OrderItem.objects.create(
#             product=product,
#             order=order,
#             name=product.name,
#             quantity=i['quantity'],
#             totalPrice=i['totalPrice'],
#             image=product.image.url,
#         )

#         # (4) Update stock

#         product.countInStock -= item.quantity
#         product.save()

#         serializer = OrderSerializer(order, many=False)
#         return Response(serializer.data)
