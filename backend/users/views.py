# users/views.py
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, status, viewsets,views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser, Prescription, Patient,Doctor
from .serializers import UserSerializer, DoctorSerializer, PatientSerializer, PrescriptionSerializer, DoctorLoginSerializer, PatientLoginSerializer, ReceptionistLoginSerializer
from .permissions import IsReceptionist,IsDoctor
from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status



class DoctorLoginView(generics.GenericAPIView):
    serializer_class = DoctorLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        if user.role != 'DOCTOR':
            return Response({'detail': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'id':user.id
        })


class PatientLoginView(generics.GenericAPIView):
    serializer_class = PatientLoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        if user.role != 'PATIENT':
            return Response({'detail': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        refresh = RefreshToken.for_user(user)
        print(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'username':user.username,
            'id':user.id
        })

class ReceptionistLoginView(generics.GenericAPIView):
    serializer_class = ReceptionistLoginSerializer
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        if user.role != 'RECEPTIONIST':
            return Response({'detail': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'username': user.username,
            'id':user.id
        })

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.filter(role='DOCTOR')
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticated, IsReceptionist]

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated, IsReceptionist]
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        # Include the 'id' in the response.
        data = serializer.data
        data['id'] = str(serializer.instance.id)
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)
    
class PrescriptionViewSet(viewsets.ModelViewSet):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer
    permission_classes = [IsAuthenticated,]

#view for assigning doctor to a patient
class AssignDoctorView(views.APIView):
    def post(self, request, format=None):
        receptionist = request.user
        patient_username = request.data.get('patient')
        doctor_username = request.data.get('doctor')

        if receptionist.role != 'RECEPTIONIST':
            return Response({'error': 'Only receptionists can assign doctors to patients.'}, status=status.HTTP_400_BAD_REQUEST)

        patient = get_object_or_404(Patient, username=patient_username)  # Fetch patient directly
        doctor = get_object_or_404(CustomUser, username=doctor_username)

        patient.doctor_assigned = doctor
        patient.save()

        # Email notification to the doctor
        subject = 'New Patient Assigned'
        message = f'Dear Dr. {doctor.username},\n\n' \
                  f'A new patient has been assigned to you by our receptionist, {receptionist.username}.\n\n' \
                  f'Patient Details:\n' \
                  f'Name: {patient.full_name}\n' \
                  f'Email: {patient.email}\n' \
                  f'Blood Group: {patient.blood_group}\n' \
                  f'Phone Number: {patient.phone_number}\n' \
                  f'Address: {patient.address}\n' \
                  f'Age: {patient.patient_age}\n\n' \
                  f'Please check your dashboard for more details.\n\n' \
                  f'Best,\n' \
                  f'Your Hospital Administration'

        send_mail(
            subject,
            message,
            'hospital_admin@example.com',  # replace with your actual email
            [doctor.email],
            fail_silently=False,
        )

        return Response({'success': 'Doctor assigned successfully.'}, status=status.HTTP_200_OK)


#view to see all the assigned patients of a doctor
class DoctorPatientsView(generics.ListAPIView):
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated, IsDoctor]

    def get_queryset(self):
        """
        This view should return a list of all the patients
        for the currently authenticated doctor.
        """
        user = self.request.user
        return Patient.objects.filter(doctor_assigned=user)