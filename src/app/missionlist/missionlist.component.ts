import { Component, OnInit, Input } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, MissionfilterComponent, MatCardModule, MatButtonModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe(data => {
      console.log('Fetched missions:', data);
      this.missions = data;
    });
  }

  getAllMissions() {
    this.spacexService.getMissions().subscribe(data => {
      this.missions = data;
    });
  }

  getMissionsByYear(year: string) {
    if (!year) {
      this.getAllMissions();
    } else {
      this.spacexService.getMissionsByYear(year).subscribe(data => {
        this.missions = data;
      });
    }
  }
}