# users/permissions.py

from rest_framework import permissions

class IsReceptionist(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'RECEPTIONIST'
