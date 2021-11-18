import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  @ViewChild('selectRef') selectRef: ElementRef;
  public relation: Array<any> = [];
  public name: string = '';
  public selected: Array<any> = [];

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
        this.relation = JSON.parse(params['relation']);
        this.name = params['name'];
        this.selected = this.relation.filter(item => item.name === this.name)[0]['transferr']
    });
  }

  // 跳转到主页面
  public toMain(): void {
    this.router.navigate(['/qima'], {
      queryParams: { relation: JSON.stringify(this.relation), currentStatus: this.name }
    });
  }

  public deleteStatus() :void {
    this.relation = this.relation.filter(item => item.name !== this.name);
    this.name = '';
    this.toMain();
  }

  // 创建新的status
  public updateStatus(): void {
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
