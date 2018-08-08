import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundinglist',
  template: `
  <div class="fundinglist-container">
    <div class="title-container">
      <div class="title">펀딩 내역</div>
    </div>
    <div class="list">
      <div class="empty-text" *ngIf="fundingList.length === 0">
        <p>
          리워드 프로젝트에 펀딩한 내역이 없습니다.<br>
          지금 바로 리워드 프로젝트를 둘러보세요!<br><br>
          <a [routerLink]="['/main']">
            <span class="link-text fas">
              리워드 프로젝트 바로가기
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./fundinglist.component.css']
})
export class FundinglistComponent implements OnInit {
  fundingList = [];

  constructor() { }

  ngOnInit() {
  }

}
