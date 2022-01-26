from django.db import models


class Entity(models.Model):
    class Meta:
        abstract = True

    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date_created = models.DateTimeField(editable=False, auto_now_add=True)
    date_updated = models.DateTimeField(editable=False, auto_now=True)


class Product(Entity):
    name = models.CharField('name', max_length=255)
    short_description = models.TextField(
        'short description', null=True, blank=True)
    long_description = models.TextField(
        'long description', null=True, blank=True)
    price = models.DecimalField('price', max_digits=10, decimal_places=2)
    discounted_price = models.DecimalField(
        'discounted price', max_digits=10, decimal_places=2)
    countInStock = models.IntegerField('count in stock', default=0)
    image_main = models.ImageField(null=True, blank=True)
    # brand =
    # category =
    # tags =

    def __str__(self):
        return self.name
