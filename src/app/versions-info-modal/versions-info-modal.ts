import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';

import versionsData from './versions-info-data';

interface VersionsData {
  date: string;
  version: string;
  info: string;
}

@Component({
  selector: 'app-versions-info-modal',
  templateUrl: './versions-info-modal.html',
  styleUrls: ['./versions-info-modal.scss'],
})
export class VersionsInfoModalComponent implements OnInit {
  versionsData: VersionsData[] = [];

  constructor (
    public dialogRef: MatDialogRef<VersionsInfoModalComponent>
  ) { }

  ngOnInit(): void {
    this.versionsData = versionsData;
  }
}
