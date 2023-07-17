#users/utils.py
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.template import loader
from django.contrib.sites.shortcuts import get_current_site

def get_password_reset_link(user, request):
    # Get a PasswordResetForm instance
    form = PasswordResetForm({'email': user.email})

    # Get the token for the user
    token = default_token_generator.make_token(user)

    # Get the uid for the user
    uid = urlsafe_base64_encode(force_bytes(user.pk))

    # Get the current site
    current_site = get_current_site(request)

    # Load the email template
    email_template_name='registration/password_reset_email.html'
    email_body = loader.render_to_string(
        email_template_name, 
        {
            'email': user.email,
            'domain': current_site.domain,
            'site_name': 'Your Site Name',
            'uid': uid,
            'user': user,
            'token': token,
            'protocol': 'http',  # or 'https' if your website supports it
        }
    )
    return email_body
