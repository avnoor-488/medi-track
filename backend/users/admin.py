from django.contrib import admin
from .models import CustomUser, Prescription,Patient

class CustomUserAdmin(admin.ModelAdmin):
    def delete_model(self, request, obj):
        obj.delete()

class DoctorUser(CustomUser):
    class Meta:
        proxy = True
        verbose_name = 'Doctor'
        verbose_name_plural = 'Doctors'

class PatientUser(Patient):
    class Meta:
        proxy = True
        verbose_name = 'Patient'
        verbose_name_plural = 'Patients'

class ReceptionistUser(CustomUser):
    class Meta:
        proxy = True
        verbose_name = 'Receptionist'
        verbose_name_plural = 'Receptionists'

class DoctorAdmin(admin.ModelAdmin):
    list_display = ('username', 'email','id')
    def get_queryset(self, request):
        return super().get_queryset(request).filter(role='DOCTOR')

class PatientAdmin(admin.ModelAdmin):
    def username(self, obj):
        return obj.user.username

    def email(self, obj):
        return obj.user.email

    def doctor_assigned(self, obj):
        return obj.doctor_assigned.username if obj.doctor_assigned else None

    list_display = ('id','username', 'email', 'full_name', 'blood_group', 'phone_number', 'address', 'patient_age', 'doctor_assigned')


class ReceptionistAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    def get_queryset(self, request):
        return super().get_queryset(request).filter(role='RECEPTIONIST')

admin.site.register(DoctorUser, DoctorAdmin)
admin.site.register(PatientUser, PatientAdmin)
admin.site.register(ReceptionistUser, ReceptionistAdmin)
admin.site.register(Prescription)