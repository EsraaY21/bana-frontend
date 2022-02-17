from ctypes import addressof
from django.db import models


class Entity(models.Model):
    class Meta:
        abstract = True

    id = models.AutoField(primary_key=True, editable=False)
    dateCreated = models.DateTimeField(
        editable=False, auto_now_add=True)
    dataUpdated = models.DateTimeField(editable=False, auto_now=True)


class Product(Entity):
    name = models.CharField('name', max_length=255)
    imageOne = models.ImageField(blank=True)
    imageTwo = models.ImageField(blank=True)
    imageThree = models.ImageField(blank=True)
    imageFour = models.ImageField(blank=True)
    price = models.DecimalField('price', max_digits=10, decimal_places=2)

    category = models.ForeignKey('ecommerce.Category', verbose_name='category', related_name='products',
                                 null=True,
                                 blank=True,
                                 on_delete=models.SET_NULL)

    countInStock = models.IntegerField('Count In Stock', default=0)

    short_description = models.TextField(
        'Short Description', null=True, blank=True, max_length=500)

    long_description = models.TextField(
        'Long Description', null=True, blank=True)

    def __str__(self):
        return self.name


class Category(Entity):
    name = models.CharField('name', max_length=255)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class City(Entity):
    name = models.CharField('name', max_length=255)
    shipping_cost = models.IntegerField('shipping cost')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'City'
        verbose_name_plural = 'Cities'


class Order(Entity):
    shipping_cost = models.DecimalField(
        max_digits=4, decimal_places=2, null=True, blank=True)

    totalCost = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)


class ShippingAddress(Entity):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    firstName = models.CharField(max_length=200, null=True, blank=True)
    lastName = models.CharField(max_length=200, null=True, blank=True)
    phoneNumberOne = models.CharField(max_length=200, null=True, blank=True)
    phoneNumberTwo = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    street = models.CharField(max_length=200, null=True, blank=True)
    detailedAddress = models.CharField(max_length=200, null=True, blank=True)
    additionalInformation = models.CharField(
        max_length=200, null=True, blank=True)

    class Meta:
        verbose_name = 'Shipping Address'
        verbose_name_plural = 'Shipping Addresses'


class OrderItem(Entity):
    product = models.ForeignKey(
        Product, on_delete=models.SET_NULL, null=True, blank=True)
    order = models.ForeignKey(
        Order, on_delete=models.SET_NULL, null=True, blank=True)
    quantity = models.IntegerField(null=True, blank=True, default=0)


# # class ProductImage(Entity):
# #     product = models.ForeignKey(
# #         Product, default=None, on_delete=models.CASCADE)
# #     images = models.FileField(upload_to='')

# #     def __str__(self):
# #         return self.product.name


# # ADD PLACEHOLDER --------------------------------------------
#     # image = models.ImageField(null=True, blank=True,
#    #                           default='/placeholder.png')
