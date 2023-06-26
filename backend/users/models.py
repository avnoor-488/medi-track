# users/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('DOCTOR', 'Doctor'), 
        ('PATIENT', 'Patient'), 
        ('RECEPTIONIST', 'Receptionist')
    )
    role = models.CharField(max_length=12, choices=ROLE_CHOICES)

    # add related_name to these fields to avoid the clash
    groups = models.ManyToManyField(
        'auth.Group', 
        blank=True, 
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', 
        related_name="customuser_groups",
        related_query_name="customuser",
        verbose_name='groups'
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="customuser_user_permissions",
        related_query_name="customuser",
        verbose_name='user permissions'
    )

class Prescription(models.Model):
    doctor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='prescriptions_as_doctor')
    patient = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='prescriptions_as_patient')
    description = models.TextField()
