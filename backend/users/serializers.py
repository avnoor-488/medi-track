# users/serializers.py

from rest_framework import serializers
from django.core.mail import send_mail
from .models import CustomUser, Prescription

def send_password_email(email, password):
    send_mail(
        'Your Account Password',
        f'Your password is {password}',
        'avnoorsingh488@gmail.com',  # replace with your actual email
        [email],
        fail_silently=False,
    )

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'role')

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'speciality')
        extra_kwargs = {'role': {'default': 'DOCTOR'}}

    def create(self, validated_data):
        password = CustomUser.objects.make_random_password()
        doctor = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=password,
            role='DOCTOR',
            speciality=validated_data['speciality'],
        )
        send_password_email(validated_data['email'], password)
        return doctor

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email')
        extra_kwargs = {'role': {'default': 'PATIENT'}}

    def create(self, validated_data):
        password = CustomUser.objects.make_random_password()
        patient = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=password,
            role='PATIENT',
        )
        send_password_email(validated_data['email'], password)
        return patient

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ('doctor', 'patient', 'description')
