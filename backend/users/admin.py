# users/admin.py

from django.contrib import admin
from .models import CustomUser, Prescription

admin.site.register(CustomUser)
admin.site.register(Prescription)
