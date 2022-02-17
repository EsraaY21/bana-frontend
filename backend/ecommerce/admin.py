from django.contrib import admin
from .models import Product, Category, City, Order, ShippingAddress, OrderItem


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(City)
admin.site.register(Order)
admin.site.register(ShippingAddress)
admin.site.register(OrderItem)
