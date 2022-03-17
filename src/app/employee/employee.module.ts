import { EmployeeComponent } from './employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './stepper/bank/bank.component';
import { CurrentOrganizationComponent } from './stepper/current-organization/current-organization.component';
import { EducationComponent } from './stepper/education/education.component';
import { ExperienceComponent } from './stepper/experience/experience.component';
import { PersonalComponent } from './stepper/personal/personal.component';
import { ProfessionalComponent } from './stepper/professional/professional.component';
import { MatComponentsModule } from '../mat-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { ButtonComponent } from './stepper/button/button.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    PersonalComponent,
    BankComponent,
    ProfessionalComponent,
    EducationComponent,
    ExperienceComponent,
    CurrentOrganizationComponent,
    EmployeeListComponent,
    StepperComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }