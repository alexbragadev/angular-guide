import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenNameDirective } from '../shared/directives/forbidden-name.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionControlService } from '../shared/services/question-control.service';
import { QuestionService } from '../shared/services/question.service';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';

@NgModule({
  declarations: [
    FormControlComponent,
    ReactiveFormComponent,
    ForbiddenNameDirective,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ], providers: [
    QuestionControlService, QuestionService
  ]
})
export class FormModule {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
 }
