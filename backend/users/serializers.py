# # users/serializers.py

# from rest_framework import serializers
# from django.core.mail import send_mail
# from .models import CustomUser, Prescription

# def send_password_email(email, password):
#     send_mail(
#         'Your Account Password',
#         f'Your password is {password}',
#         'avnoorsingh488@gmail.com',  # replace with your actual email
#         [email],
#         fail_silently=False,
#     )

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email', 'password', 'role')

# class DoctorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email', 'speciality')
#         extra_kwargs = {'role': {'default': 'DOCTOR'}}

#     def create(self, validated_data):
#         password = CustomUser.objects.make_random_password()
#         doctor = CustomUser.objects.create_user(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             password=password,
#             role='DOCTOR',
#             speciality=validated_data['speciality'],
#         )
#         send_password_email(validated_data['email'], password)
#         return doctor

# class PatientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email')
#         extra_kwargs = {'role': {'default': 'PATIENT'}}

#     def create(self, validated_data):
#         password = CustomUser.objects.make_random_password()
#         patient = CustomUser.objects.create_user(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             password=password,
#             role='PATIENT',
#         )
#         send_password_email(validated_data['email'], password)
#         return patient

# class PrescriptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Prescription
#         fields = ('doctor', 'patient', 'description')















from rest_framework import serializers
from django.core.mail import send_mail
from django.contrib.auth import authenticate
from .models import CustomUser, Prescription, Patient

def send_password_email(email, password):
    send_mail(
        'Your Account Password',
        f'Your password is {password}',
        'admin@hospital-management.com',  # replace with your actual email
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
        fields = ('username', 'email', 'speciality','id')
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
        send_password_email(validated_data['email'], password)
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
