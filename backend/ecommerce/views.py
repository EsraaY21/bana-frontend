from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


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


# @api_view(['GET'])
# def getCategories(request):
#     categories = Category.objects.all()
#     serializer = CategorySerializer(categories, many=True)
#     return Response(serializer.data)


# @api_view(['GET'])
# def getCities(request):
#     cities = City.objects.all()
#     serializer = CitySerializer(cities, many=True)
#     return Response(serializer.data)


# # ORDER - -------------------------------------------------------
# @api_view(['GET', 'POST'])
# def createOrder(request):

#     print(request.data, 'this is my data')

#     orderData = request.data

#     # Create order

#     order = Order.objects.create(
#         shipping_cost=orderData['shipping_cost'],
#         totalCost=orderData['totalCost'],
#     )

#     # Create shipping address

#     shipping = ShippingAddress.objects.create(
#         order=order,
#         firstName=orderData['firstName'],
#         lastName=orderData['lastName'],
#         phoneNumberOne=orderData['phoneNumberOne'],
#         phoneNumberTwo=orderData['phoneNumberTwo'],
#         email=orderData['email'],
#         city=orderData['city'],
#         street=orderData['street'],
#         detailedAddress=orderData['detailedAddress'],
#         additionalInformation=orderData['additionalInformation'],
#     )

#     # Create order items
#     orderItems = request.data['items']

#     for i in orderItems:

#         # get the product with the same id as the order item
#         product = Product.objects.get(id=i['id'])

#         item = OrderItem.objects.create(
#             product=product,
#             order=order,
#             quantity=i['quantity'],
#         )

#         # Update stock

#         product.countInStock -= item.quantity
#         product.save()

#     serializer = OrderSerializer(order, many=False)
#     return Response(serializer.data)
