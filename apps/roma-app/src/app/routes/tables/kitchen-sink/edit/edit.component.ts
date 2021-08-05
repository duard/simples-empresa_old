/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-table-kitchen-sink-edit',
  templateUrl: './edit.component.html',
})
export class TablesKitchenSinkEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TablesKitchenSinkEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {}

  onClose(): void {
    this.dialogRef.close()
  }
}
