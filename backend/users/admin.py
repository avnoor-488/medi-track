#admin.py
from django.contrib import admin
from .models import CustomUser, Prescription,Patient, Doctor

class CustomUserAdmin(admin.ModelAdmin):
    def delete_model(self, request, obj):
        obj.delete()

class DoctorUser(Doctor):
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
    list_display = ('id','username', 'email', 'full_name')
    def get_queryset(self, request):
        return super().get_queryset(request).filter(role='DOCTOR')

class PatientAdmin(admin.ModelAdmin):
    def doctor_assigned(self, obj):
        return obj.doctor_assigned.username if obj.doctor_assigned else None

    list_display = ('id', 'username', 'email', 'full_name', 'doctor_assigned')



class ReceptionistAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    def get_queryset(self, request):
        return super().get_queryset(request).filter(role='RECEPTIONIST')

admin.site.register(DoctorUser, DoctorAdmin)
admin.site.register(PatientUser, PatientAdmin)
admin.site.register(ReceptionistUser, ReceptionistAdmin)
admin.site.register(Prescription)