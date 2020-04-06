import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

interface Profile {
  data: Array<object>;
}
@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  allProfiles: Array<object> = []
  currentId;

  ngOnInit() {
    this.formService.getAll().subscribe(
      (profiles: Profile) => {
        this.allProfiles = profiles.data;
      });
      console.warn("-->" + this.route.snapshot.queryParams.id);  
  }

  profileChanged(event) {
    if(event.value === 'new_profile') {
      //this.formService.reset();
      this.router.navigate(['/users']);
      window.location.reload();
      //this.router.navigate(['/users', { id: 1 }]);
    } else {
      if (event.value.id) {
        this.router.navigate(['users', event.value.id]);
      }
    }
  }

}
