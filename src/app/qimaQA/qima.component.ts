import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'qima',
  templateUrl: './qima.component.html',
  styleUrls: ['./qima.component.css'],
})
export class QimaComponent implements OnInit {
  @ViewChild('updateSelect') updateSelect: ElementRef;
  @ViewChild('transferr') transferr: ElementRef;
  @ViewChild('shortest') shortest: ElementRef;
  @ViewChild('changeCurrent') changeCurrent: ElementRef;
  public relation: Array<any> = []; //所有的status
  public currentStatus: string = '';
  public aviableStep: Array<any> = []; // 两个stauts 之间 transferr的最快方案
  public allSteps: Array<any> = []; // 所有可能的transferr连接方案
  public transferrName: string = '';
  public isTrans = false;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['relation']) {
        this.relation = JSON.parse(params['relation']);
      }
      if (params['currentStatus']) {
        this.currentStatus = params['currentStatus'];
      }
    });
  }

  public toCreate(): void {
    this.router.navigate(['create-status'], {
      queryParams: { relation: JSON.stringify(this.relation) },
    });
  }

  public toUpdate(): void {
    this.router.navigate(['update-status'], {
      queryParams: {
        relation: JSON.stringify(this.relation),
        name: this.updateSelect.nativeElement.value,
      },
    });
  }

  public findStatusByName(name) {
    return this.relation.filter((item) => item.name === name)[0];
  }

  // 判断currentStatus 是否能 transferr to selectedStatus
  public isTransferr(param, currentName?): void {
    this.transferrName = param === 'is' ? this.transferr.nativeElement.value : this.shortest.nativeElement.value;
    this.currentStatus = currentName || this.currentStatus;
    if (this.currentStatus === '') {
      this.aviableStep = [this.transferrName];
      this.isTrans = true;
    } else {
      this.aviableStep = [];
      this.isTrans = false;

      let index = 0;
      this.allSteps.push([this.findStatusByName(this.currentStatus).name]);
      while (this.allSteps.length > 0 && !this.isTrans && index < 10) {
        let tempStep = [];
        this.allSteps.forEach((arr) => {
          let tempTransferr = this.findStatusByName(arr[index]).transferr;
          if ((!tempTransferr.includes(this.currentStatus)) && (!tempTransferr.includes(this.transferrName))) {
            tempTransferr.forEach((item) => {
              if (!arr.includes(item)) {
                tempStep.push(arr.concat([item]));
              }
            });
          } else if (tempTransferr.includes(this.transferrName)) {
            this.isTrans = true;
            this.aviableStep = arr.concat([this.transferrName]);
          }
        });
        this.allSteps = tempStep;
        index++;
      }
    }
  }

  public changCurrentStatus(): void {
    this.currentStatus = this.changeCurrent.nativeElement.value;
  }
}
