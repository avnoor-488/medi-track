from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('DOCTOR', 'Doctor'), 
        ('PATIENT', 'Patient'), 
        ('RECEPTIONIST', 'Receptionist')
    )
    role = models.CharField(max_length=12, choices=ROLE_CHOICES)
    speciality = models.CharField(max_length=30, blank=True, null=True)
    
    # Override the groups and user_permissions fields
    groups = models.ManyToManyField(Group, blank=True, related_name="customuser_set")
    user_permissions = models.ManyToManyField(Permission, blank=True, related_name="customuser_set")

class Prescription(models.Model):
    doctor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='prescriptions_as_doctor')
    patient = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='prescriptions_as_patient')
    description = models.TextField()

from django.contrib.auth.models import BaseUserManager

class CustomUserManager(BaseUserManager):
    ...
    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'RECEPTIONIST')  # set role to 'RECEPTIONIST' by default

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self._create_user(username, email, password, **extra_fields)
class CustomUser(AbstractUser):
    objects = CustomUserManager()