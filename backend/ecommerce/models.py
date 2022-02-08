from django.db import models


class Entity(models.Model):
    class Meta:
        abstract = True

    id = models.AutoField(primary_key=True, editable=False)
    created = models.DateTimeField(editable=False, auto_now_add=True)
    updated = models.DateTimeField(editable=False, auto_now=True)


class Product(Entity):
    name = models.CharField('name', max_length=255)
    # images =
    price = models.DecimalField('price', max_digits=10, decimal_places=2)
    # category =
    countInStock = models.IntegerField(default=0)
    short_description = models.TextField(
        'description', null=True, blank=True, max_length=500)
    long_description = models.TextField('description', null=True, blank=True)

    def __str__(self):
        return self.name
