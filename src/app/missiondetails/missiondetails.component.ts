import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../spacex.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})

export class MissiondetailsComponent implements OnInit {
  mission: any = null;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.spacexService.getMissionById(id).subscribe(data => {
        this.mission = data;
      });
    }
  }
}