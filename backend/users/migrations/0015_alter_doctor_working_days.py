# Generated by Django 4.2.2 on 2023-07-06 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0014_alter_patient_doctor_assigned'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctor',
            name='working_days',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
