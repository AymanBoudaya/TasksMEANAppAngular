import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/core/core.service';
import { TasksService } from 'src/app/services/tasks.service';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  displayedColumns: string[] = ['task', 'date', 'document', 'observation','phase','action'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog : MatDialog, private taskService : TasksService, private _coreService:CoreService){}

  ngOnInit(): void{
    this.getTaskList()
  }

  openAddEmpEditForm(){
    const dialogRef = this._dialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTaskList()
        }
      }
    })
  }

  getTaskList(){
    this.taskService.getTaskList().subscribe({
      next: (data) => {
            this.dataSource = new MatTableDataSource(data)
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            },
      error: (err) => {
        console.log(err);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTask(id:string){
    let conf = confirm("Are you sure ?")
    if (conf == false) return;
    this.taskService.deleteTask(id).subscribe({
      next : ()=>{
        this._coreService.openSnackBar('Tâche supprimée','fait!')
        this.getTaskList()
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

  openEditForm(data:any) {
    const dialogRef = this._dialog.open(EmpAddEditComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTaskList()
        }
      }
    })
  }
}
