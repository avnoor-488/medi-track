# users/permissions.py
from rest_framework import permissions

class IsReceptionist(permissions.BasePermission):
    def has_permission(self, request, view):
        print(f"User: {request.user}")  # Let's print user
        print(f"Role: {request.user.role}")  # Let's print role
        return request.user.role == 'RECEPTIONIST'

class IsDoctor(permissions.BasePermission):
    """
    Custom permission to only allow doctors to access the view.
    """

    def has_permission(self, request, view):
        return bool(request.user and request.user.role == 'DOCTOR')