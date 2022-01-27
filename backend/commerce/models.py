from django.db import models


class Entity(models.Model):
    class Meta:
        abstract = True

    date_created = models.DateTimeField(editable=False, auto_now_add=True)
    date_updated = models.DateTimeField(editable=False, auto_now=True)
    id = models.AutoField(primary_key=True, editable=False)


class Product(Entity):
    name = models.CharField('name', max_length=255)
    short_description = models.TextField(
        'short description', null=True, blank=True)
    long_description = models.TextField(
        'long description', null=True, blank=True)
    price = models.DecimalField('price', max_digits=10, decimal_places=2)
    discounted_price = models.DecimalField(
        'discounted price', max_digits=10, decimal_places=2, null=True, blank=True)
    countInStock = models.IntegerField('count in stock', default=0)
    image_main = models.ImageField(null=True, blank=True)
    # brand =
    # category =
    # tags =

    def __str__(self):
        return self.name
