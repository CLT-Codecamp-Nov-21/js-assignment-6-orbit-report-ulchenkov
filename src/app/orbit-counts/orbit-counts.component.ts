import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

 get satelliteTypesCounter() {
	let result = [];
	let types = {};
	this.satellites.forEach((satellite) => {
		if (types[satellite.type] === undefined) {
			types[satellite.type] = 1;
		} else {
			types[satellite.type]++;
		}
	});
	for (let type in types) {
		result.push({"type" : type, "count" : types[type]});
	}
	return result;
 }

}

