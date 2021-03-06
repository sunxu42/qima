import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  @ViewChild('selectRef') selectRef: ElementRef;
  public relation = [];
  public name = '';
  public selectedList = [];
  private relationLen = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['relation']) {
        this.relation = JSON.parse(params['relation']);
        this.relationLen = this.relation.length;
      }
    });
  }

  // 跳转到主页面
  public toMain() {
    this.router.navigate(['/qima'], {
      queryParams: { relation: JSON.stringify(this.relation), currentStatus: this.name, }
    });
  }

  // 选择框同步展示输入的status
  public nameInput(): void {
    this.relation[this.relationLen] = {
      name: this.name
    }
  }

  // 创建新的status
  public addStatus() {
    const selected = [];

    // 获取选中的name
    for (let i = 0; i < this.relation.length; i++) {
      if (this.selectRef.nativeElement.children[i].selected) {
        selected.push(this.relation[i].name);
      }
    }
    this.relation = this.relation.map(item => {
      if (item.name === this.name) {
        item.transferr = selected;
      }
      return item;
    })
    this.toMain();
  }
}
