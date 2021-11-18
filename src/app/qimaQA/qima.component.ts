import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'qima',
  templateUrl: './qima.component.html',
  styleUrls: ['./qima.component.css'],
})
export class QimaComponent implements OnInit {
  public relation = [
    {
      name: 'testaaaaaaaaaaaaaaaaaaaaaa',
      transferr: 'test',
    },
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if(params['relation']) {
        this.relation = JSON.parse(params['relation']);
      }
    });
  }
  public toCreate() {
    this.router.navigate(['create-status'], {
      queryParams: { relation: JSON.stringify(this.relation) },
    });
  }
}
