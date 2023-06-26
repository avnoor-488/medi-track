# users/views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import CustomUser, Prescription
from .serializers import UserSerializer, PrescriptionSerializer
from .permissions import IsReceptionist

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, IsReceptionist]

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            self.permission_classes = [IsAuthenticated,]
        return super(UserViewSet, self).get_permissions()

class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
    permission_classes = [IsAuthenticated,]
