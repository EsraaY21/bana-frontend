from django.db import models


class Entity(models.Model):
    class Meta:
        abstract = True

    id = models.AutoField(primary_key=True, editable=False)
    dateCreated = models.DateTimeField(editable=False, auto_now_add=True)
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


# class ProductImage(Entity):
#     product = models.ForeignKey(
#         Product, default=None, on_delete=models.CASCADE)
#     images = models.FileField(upload_to='')

#     def __str__(self):
#         return self.product.name


class Category(Entity):
    # parent = models.ForeignKey(
    #     'self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)

    name = models.CharField('name', max_length=255)
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


# ADD PLACEHOLDER --------------------------------------------
    # image = models.ImageField(null=True, blank=True,
   #                           default='/placeholder.png')


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
