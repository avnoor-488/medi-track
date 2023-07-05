# Generated by Django 4.2.2 on 2023-07-05 16:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_alter_doctor_working_days'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='doctor_assigned',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='patients', to=settings.AUTH_USER_MODEL),
        ),
    ]
