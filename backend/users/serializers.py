#serializers.py
from rest_framework import serializers
from django.core.mail import send_mail
from django.contrib.auth import authenticate
from .models import CustomUser, Prescription, Patient,Doctor
from .utils import get_password_reset_link

def send_password_email(email, password,username,role):
        # Email notification to the doctor
    subject = 'Password of your account'
    if role=="doctor":
        message = f'Dear Dr.{username},\n\n' \
                    f'Your account has been created by our receptionist.\n\n' \
                    f'Please use this {username} as your username and {password} as your password to login into Dashboard.\n\n' \
                    f'Best,\n' \
                    f'Your Hospital Administration'
        send_mail(
            subject,
            message,
            'admin@hospital-management.com',  # replace with your actual email
            [email],
            fail_silently=False,
        )
    elif role=="patient":
        message = f'Dear Patient {username},\n\n' \
                f'Your account has been created by our receptionist.\n\n' \
                f'Please use this "{username}" as your username and "{password}" as your password to login into Dashboard.\n\n' \
                f'Best,\n' \
                f'Your Hospital Administration'
        send_mail(
            subject,
            message,
            'admin@hospital-management.com',  # replace with your actual email
            [email],
            fail_silently=False,
        )

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'role')

class DoctorSerializer(serializers.ModelSerializer):
    working_days = serializers.ListField(child=serializers.CharField())
    class Meta:
        model = Doctor
        fields = ('username', 'email', 'speciality', 'full_name', 'blood_group', 'doctor_age', 'phone_number', 
                  'address', 'medical_degree', 'working_days', 'id')
        extra_kwargs = {'role': {'default': 'DOCTOR'}}

    def create(self, validated_data):
        # Validate the working days input
        valid_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        working_days = validated_data.get('working_days', [])

        for day in working_days:
            if day not in valid_days:
                raise serializers.ValidationError("Invalid day: " + day)

        # Make a random password
        password = Doctor.objects.make_random_password()

        # Create the doctor
        doctor = Doctor.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=password,
            role='DOCTOR',
            speciality=validated_data['speciality'],
            full_name=validated_data['full_name'],
            blood_group=validated_data['blood_group'],
            doctor_age=validated_data['doctor_age'],
            phone_number=validated_data['phone_number'],
            address=validated_data['address'],
            medical_degree=validated_data['medical_degree'],
            working_days=validated_data['working_days'],
        )
        # Email the password to the doctor
        reset_link = get_password_reset_link(doctor, self.context['request'])
        # send_password_email(validated_data['email'], password,validated_data['full_name'],role="doctor")
        send_password_email(validated_data['email'], reset_link, validated_data['full_name'], role="doctor")
        return doctor

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('id','username', 'email', 'full_name', 'blood_group', 'phone_number', 'address', 'patient_age', 'doctor_assigned')        
    def create(self, validated_data):
        password = Patient.objects.make_random_password()
        patient = Patient.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=password,
            role='PATIENT',
            full_name=validated_data.get('full_name'),
            blood_group=validated_data.get('blood_group'),
            phone_number=validated_data.get('phone_number'),
            address=validated_data.get('address'),
            patient_age=validated_data.get('patient_age'),
            doctor_assigned=validated_data.get('doctor_assigned'),
        )
        # send_password_email(validated_data['email'], password,validated_data["full_name"],role="patient")
        reset_link = get_password_reset_link(patient, self.context['request'])
        send_password_email(validated_data['email'], reset_link, validated_data["full_name"], role="patient")

        return patient

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ('doctor', 'patient', 'description')

# Add these serializers for user login
class DoctorLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active and user.role == 'DOCTOR':
            return user
        raise serializers.ValidationError("Incorrect Credentials")

class PatientLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active and user.role == 'PATIENT':
            return user
        raise serializers.ValidationError("Incorrect Credentials")

class ReceptionistLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active and user.role == 'RECEPTIONIST':
            return user
        raise serializers.ValidationError("Incorrect Credentials")
