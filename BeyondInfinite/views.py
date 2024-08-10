#Made by me
from django.shortcuts import render
from django.http import HttpResponse

def homepage(request):
    return render(request,"index.html")


def upload_view(request):
    return HttpResponse("This is the upload view.")

def about(request):
    return HttpResponse("This is the about page.")

def contact(request):
    return HttpResponse("Contact us at example@example.com.")