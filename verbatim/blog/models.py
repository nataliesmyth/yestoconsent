
# Create your models here.

# Now we will define the data models for our blog. A model is a Python class that subclasses django.db.models.Model, in which each attribute represents a database field. Using this subclass functionality, we automatically have access to everything within django.db.models.Models and can add additional fields and methods as desired. 
# Post model used in our DB to store posts.

# import class models
from django.db import models
from django.contrib.auth.models import User

# Declared tuple for status post to keep draft and published posts separate when rendered out with templates
STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

# create subclass of models.Model
class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete= models.CASCADE,related_name='blog_posts')
    updated_on = models.DateTimeField(auto_now= True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    
    # Meta class contains metadata
    # We then tell Django to sort the results in the created_on field in descending order by default when we query the DB
    # We specify descending order so most recent published posts appear first, and we do this with the negative prefix 
    class Meta:
        ordering = ['-created_on']

# The __str__() method is the default human-readable representation of the object. Django will use it in many places, such as the administration site.
    def __str__(self):
        return self.title