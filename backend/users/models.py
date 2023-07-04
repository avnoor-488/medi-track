from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.core.validators import RegexValidator
import uuid


class CustomUserManager(BaseUserManager):
    def _create_user(self, username, email=None, password=None, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError('The given username must be set')
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def assign_doctor_to_patient(self, receptionist, patient, doctor):
        """
        Allows a receptionist to assign a doctor to a patient.
        """
        if receptionist.role != 'RECEPTIONIST':
            raise ValueError('Only receptionists can assign doctors to patients.')
        patient.doctor_assigned = doctor
        patient.save()

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'RECEPTIONIST')  # set role to 'RECEPTIONIST' by default

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        return self._create_user(username, email, password, **extra_fields)
    
    def create_user(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email, password, **extra_fields)


class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('DOCTOR', 'Doctor'), 
        ('PATIENT', 'Patient'), 
        ('RECEPTIONIST', 'Receptionist')
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    role = models.CharField(max_length=12, choices=ROLE_CHOICES)
    speciality = models.CharField(max_length=30, blank=True, null=True)
    groups = models.ManyToManyField(Group, blank=True, related_name="customuser_set")
    user_permissions = models.ManyToManyField(Permission, blank=True, related_name="customuser_set")
    objects = CustomUserManager()

    def delete(self, *args, **kwargs):
        Prescription.objects.filter(doctor=self).update(doctor=None)
        Prescription.objects.filter(patient=self).update(patient=None)
    # Add similar lines for other related models
        super().delete(*args, **kwargs)


class Prescription(models.Model):
    doctor = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='prescriptions_as_doctor')
    patient = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='prescriptions_as_patient')
    description = models.TextField()


class Patient(CustomUser):
    full_name = models.CharField(max_length=255)
    blood_group = models.CharField(max_length=3)
    phone_number = models.CharField(max_length=15, validators=[RegexValidator(r'^\d{1,15}$')])
    address = models.TextField()
    patient_age = models.PositiveIntegerField()
    doctor_assigned = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='patients')

class Doctor(CustomUser):
    full_name = models.CharField(max_length=255)
    medical_degree = models.CharField(max_length=255)
    blood_group = models.CharField(max_length=3)
    phone_number = models.CharField(max_length=15, validators=[RegexValidator(r'^\d{1,15}$')])
    address = models.TextField()
    doctor_age = models.PositiveIntegerField()
    # email = models.EmailField()