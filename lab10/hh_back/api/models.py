from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    city = models.CharField(max_length=255)
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}. Company name: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')
    salary = models.FloatField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.id}. Vacancy name: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company_id
        }
def get_next_available_id(model_cls):
    max_id = model_cls.objects.aggregate(models.Max('id'))['id__max']
    if max_id is None:
        return 1 
    else:
        all_ids = set(model_cls.objects.values_list('id', flat=True))
        for i in range(1, max_id + 2):
            if i not in all_ids:
                return i

        return max_id + 1  
@receiver(pre_save, sender=Company)
def set_company_id(sender, instance, **kwargs):
    if not instance.id:
        next_id = get_next_available_id(Company)
        instance.id = next_id

@receiver(pre_save, sender=Vacancy)
def set_vacancy_id(sender, instance, **kwargs):
    if not instance.id:
        next_id = get_next_available_id(Vacancy)
        instance.id = next_id