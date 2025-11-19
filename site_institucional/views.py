from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "site_institucional\index.html")


def sobre(request):
    return render(request, "site_institucional\sobre.html")


def contato(request):
    return render(request, "site_institucional\contato.html")
