# Generated by Django 3.0.8 on 2020-09-16 01:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Recipe', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='ingredients',
        ),
        migrations.AddField(
            model_name='ingredients',
            name='Recipe',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Recipe.Recipe'),
            preserve_default=False,
        ),
    ]
