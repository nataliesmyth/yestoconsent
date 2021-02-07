# Create your views here.
# A Django view is just a Python function that receives a web request and returns a web response. We’re going to use class-based views then map URLs for each view and create an HTML templated for the data returned from the views.

from django.shortcuts import render
from django.views import generic
from .models import Post

class PostList(generic.ListView):
    queryset = Post.objects.filter(status=1).order_by('-created_on')
    template_name = 'verbatim.html'

class PostDetail(generic.DetailView):
    model = Post
    template_name = 'post_detail.html'

# we need to map the URLS for the views above. Django controllers will check for the corresponding views via the urls.py file and return an HTML response or a 404 not found error