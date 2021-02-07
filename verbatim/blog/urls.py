from . import views
from django.urls import path

# We mapped general URL patterns for our views using the path function. The first pattern takes an empty string denoted by ' ' and returns the result generated from the PostList view which is essentially a list of posts for our homepage and at last we have an optional parameter name which is basically a name for the view which will later be used in the templates.

urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
]