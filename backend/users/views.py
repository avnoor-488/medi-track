# users/views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import CustomUser, Prescription
from .serializers import UserSerializer, DoctorSerializer, PatientSerializer, PrescriptionSerializer
from .permissions import IsReceptionist



class DoctorViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.filter(role='DOCTOR')
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticated, IsReceptionist]

class PatientViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.filter(role='PATIENT')
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated, IsReceptionist]

class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
    permission_classes = [IsAuthenticated,]
