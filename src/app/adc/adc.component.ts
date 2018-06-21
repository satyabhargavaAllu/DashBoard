import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adc',
  templateUrl: './adc.component.html',
  styleUrls: ['./adc.component.css']
})
export class AdcComponent implements OnInit {
  private loa: string;
  private cb: string;
  private bucketList: object;
  private buckets;
  private primaryBucket: String;
  private selectSecondaryBucket: boolean;
  private textInput: String;
  constructor() { }

  ngOnInit() {
    this.loa = 'LOA';
    this.cb = 'CouchBase';
    this.bucketList = {
      Checklist: false,
      ChecklistMetadata: false,
      Client: false,
      UserProfile: false,
      AuditLog: false
    };
    this.buckets = Object.keys(this.bucketList);
    this.primaryBucket = "";
    this.selectSecondaryBucket = false;
    this.textInput = '';
  }

  checkIfUserProfileSelected(event) {
    console.log(event);
    if (event == "UserProfile") {
      this.selectSecondaryBucket = false;
      this.resetBucketList();
    } else {
      this.bucketList[event] = false;
    }
  }

  checkSecondaryRequired(event) {
    if (!event) {
      this.resetBucketList()
    }
  }

  resetBucketList() {
    for (let key in this.bucketList) {
      this.bucketList[key] = false;
    }
  }


  get isSecondaryBucketSelected() {
    let secondaryBuckets = this.getSelectedSecondaryBuckets();
    if (secondaryBuckets.length > 0 && secondaryBuckets.some(x => x != this.primaryBucket)) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedSecondaryBuckets() {
    return ((Object.keys(this.bucketList)).filter(x => (this.bucketList[x] === true)));
  }
  

  cbFormSubmit(cbForm) {
    console.log(cbForm);
    console.log(cbForm.form.value, this.primaryBucket, this.bucketList, this.selectSecondaryBucket);
  }

}
