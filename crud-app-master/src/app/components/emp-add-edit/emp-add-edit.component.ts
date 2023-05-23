import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  taskForm: FormGroup;
 documents : string[] = [
  'AOCA 7000/09/2022',
  'AOCA 7000/12/2022',
  'C 7000/03/2021',
  'AOCA 7000/01/2023',
  'AO 45/2022',
  'budget sonede 2023',
  'AO Réparation des décanteurs Ezzouhour'
 ]

 phases : string[] = [
  'Terminé',
  'En cours',
 ]

 constructor(private fb:FormBuilder, private taskService: TasksService,
  private dialogRef : MatDialogRef<EmpAddEditComponent>,
  @Inject(MAT_DIALOG_DATA) public data : any, private _coreService:CoreService) {
  this.taskForm = this.fb.group({
    task: '',
    date: '',
    document: '',
    observation: '',
    phase:''
  })
 }

  ngOnInit(): void {
    this.taskForm.patchValue(this.data)
  }
 onSubmit(){
  if (this.taskForm.valid) {
    if (this.data) {
      this.taskService.updateTask(this.data._id, this.taskForm.value).subscribe({
        next : (val:any) => {
          this._coreService.openSnackBar('tâche mise à jour !','fait!')
          this.dialogRef.close(true);
          console.log(this.taskForm.value);
        },
        error: (err:any) => {
          console.log(err)
        }
      })
    } else {
      this.taskService.addTask(this.taskForm.value).subscribe({
        next : (val:any) => {
          this._coreService.openSnackBar('tâche ajoutée !','fait!')
          this.dialogRef.close(true);
        },
        error: (err:any) => {
          console.log(err)
        }
      })
    }
  }
 }
}
