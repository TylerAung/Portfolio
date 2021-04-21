import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tidbits',
  templateUrl: './tidbits.component.html',
  styleUrls: ['./tidbits.component.css']
})
export class TidbitsComponent implements OnInit {
 //slides !: [sHead: string, sContent: string] = [];
 arr: Array<{sHead: number, sContent: string}> = [];
  constructor() {
    // this.arr[
    //       {sHead: 1,sContent:"Different Internet Browsers display content differently"},
    //       {}
    // ]
   }

  ngOnInit(): void {
  }

}




// Fun Tidbits 1
//   Different Internet Browsers display content differently

//         Fun Tidbits 2
//   Google does not read text information in graphics

//         Fun Tidbits 3
//           Coding requires a lot of patience

//         Fun Tidbits 4
//           YouTube & Google have tons of resources offering solutions to common problems


//         Fun Tidbits 5
//         Using a Content Management System(CMS) for a website is like going for a 400metre run with energy gel, hydration backpack, muscle relief sprary and weighted vest. There's a lot of unnecessary baggage just for 1 lap right?
//           Likewise with CMS. You are loading thousands & thousands of codes where most of it are not used by your site. That's one of the reason why your site takes time to load.


//         Fun Tidbits 1
//   Different Internet Browsers display content differently
