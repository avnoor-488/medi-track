# users/permissions.py
from rest_framework import permissions

class IsReceptionist(permissions.BasePermission):
    def has_permission(self, request, view):
        print(f"User: {request.user}")  # Let's print user
        print(f"Role: {request.user.role}")  # Let's print role
        return request.user.role == 'RECEPTIONIST'
