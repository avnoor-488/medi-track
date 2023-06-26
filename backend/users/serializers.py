# users/serializers.py

from rest_framework import serializers
from .models import CustomUser, Prescription

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'role')

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ('doctor', 'patient', 'description')
