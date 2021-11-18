import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  public relation = [];
  public name = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if(params['relation']) {
        this.relation = JSON.parse(params['relation']);
      }
    });
  }

  public toMain() {
    this.router.navigate(['/qima'], {
      queryParams: { relation: JSON.stringify(this.relation) },
    });
  }
}
