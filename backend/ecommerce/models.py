from django.db import models


class Entity(models.Model):
    class Meta:
        abstract = True

    id = models.AutoField(primary_key=True, editable=False)
    dateCreated = models.DateTimeField(editable=False, auto_now_add=True)
    dataUpdated = models.DateTimeField(editable=False, auto_now=True)


class Product(Entity):
    name = models.CharField('name', max_length=255)
    # images =
    price = models.DecimalField('price', max_digits=10, decimal_places=2)
    # category =
    countInStock = models.IntegerField('Count In Stock', default=0)
    short_description = models.TextField(
        'Short Description', null=True, blank=True, max_length=500)
    long_description = models.TextField(
        'Long Description', null=True, blank=True)

    def __str__(self):
        return self.name


# class Order(Entity):
#     isDeliverd: models.BooleanField(default=False)

#     def __str__(self):
#         return str(self.id)


# class OrderItem(Entity):
#     product = models.ForeignKey(Product,
#                                 on_delete=models.CASCADE)
#     quantity = models.IntegerField('Quantity')

#     def __str__(self):
#         return self.product.name
