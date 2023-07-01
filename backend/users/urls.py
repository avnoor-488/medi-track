# users/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, PatientViewSet, PrescriptionViewSet, DoctorLoginView, PatientLoginView, ReceptionistLoginView,AssignDoctorView,DoctorPatientsView

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)
router.register(r'prescriptions', PrescriptionViewSet)

urlpatterns = [
    path('login/doctor/', DoctorLoginView.as_view()),
    path('login/patient/', PatientLoginView.as_view()),
    path('login/receptionist/', ReceptionistLoginView.as_view()),
    path('', include(router.urls)),
    path('assign_doctor/', AssignDoctorView.as_view()),
    path('api/doctor/patients/', DoctorPatientsView.as_view(), name='doctor-patients'),
]