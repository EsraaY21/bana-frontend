from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from .models import Product, Category, City, Order
from .serializers import ProductSerializer, CategorySerializer, CitySerializer, OrderSerializer, ShippingAddress


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
# @api_view(['GET', 'POST'])
# def createOrder(request):

#     orderData = request.data

#     print(request.data['shipping_cost'])
#     # Create order
#     serializer = OrderSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#         return Response(serializer.data)

#     # Create order items

#     # Update stock

#     return Response(serializer.data)


# ORDER - -------------------------------------------------------
@api_view(['GET', 'POST'])
def createOrder(request):

    print(request.data, 'this is my data')

    orderData = request.data

    # Create order

    order = Order.objects.create(
        shipping_cost=orderData['shipping_cost'],
        totalCost=orderData['totalCost'],
    )

    # Create shipping address

    shipping = ShippingAddress.objects.create(
        order=order,
        firstName=orderData['firstName'],
        lastName=orderData['lastName'],
        phoneNumberOne=orderData['phoneNumberOne'],
        phoneNumberTwo=orderData['phoneNumberTwo'],
        email=orderData['email'],
        city=orderData['city'],
        street=orderData['street'],
        detailedAddress=orderData['detailedAddress'],
        additionalInformation=orderData['additionalInformation'],
    )

    # # (3) Create order items adn set order to orderItem relationship
    # for i in orderItems:
    #     product = Product.objects.get(_id=i['product'])

    #     item = OrderItem.objects.create(
    #         product=product,
    #         order=order,
    #         name=product.name,
    #         qty=i['qty'],
    #         price=i['price'],
    #         image=product.image.url,
    #     )

    #     # (4) Update stock

    #     product.countInStock -= item.qty
    #     product.save()

    serializer = OrderSerializer(order, many=False)
    return Response(serializer.data)
