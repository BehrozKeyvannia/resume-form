import { Component, OnInit, Input } from '@angular/core';
import { FormService } from './form.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

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
  ) {}

  allProfiles: Array<object> = []
  currentId;

  selected: string = "New profile";

  ngOnInit() {
    
    this.formService.getAll().subscribe(
      (profiles: Profile) => {
        this.allProfiles = profiles.data;
      });
      if (this.route.snapshot.params.id) {
        this.formService.get(this.route.snapshot.params.id).subscribe(
          (response: any) => {
            this.formService.updateForm(response.data[0]);
            this.selected = response.data[0].general.firstname + " " + response.data[0].general.lastname;
          }
        )
      } else {
        this.formService.reset();
      }
  }

  newProfilePressed() {
    this.router.navigate(['/users']);
  }

  userProfilePressed(id) {
    this.router.navigate(['users', id]);
  }

  // profileChanged(event) {
  //   if(event.value === 'new_profile') {
  //     //this.formService.reset();
  //     this.router.navigate(['/users']);
  //     // window.location.reload();
  //     //this.router.navigate(['/users', { id: 1 }]);
  //   } else {
  //     if (event.value.id) {
  //       this.router.navigate(['users', event.value.id]);
  //     }
  //   }
  // }

}
