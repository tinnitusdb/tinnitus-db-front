import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tinnitus-form',
  templateUrl: './tinnitus-form.component.html',
  styleUrls: ['./tinnitus-form.component.css']
})
export class TinnitusFormComponent implements OnInit {
  tinnitusForm: FormGroup;
  ages: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  constructor(private fb: FormBuilder) {
    this.tinnitusForm = this.fb.group({
      sex: ['', Validators.required],
      age: ['', Validators.required],
      cause: ['', Validators.required],
      loudness: [0, Validators.required],
      drugs: this.fb.array([]),
      hyperacusis: ['', Validators.required],
      fluctuates: ['', Validators.required],
      medicalProblems: [[]],
    });
  }

  ngOnInit(): void {
    this.addDrug();
  }

  get drugs() {
    return this.tinnitusForm.get('drugs') as FormArray;
  }

  addDrug() {
    this.drugs.push(this.fb.group({
      name: ['', Validators.required],
      worked: ['', Validators.required],
      worsened: ['', Validators.required],
      reduction: [0, Validators.required]
    }));
  }

  onSubmit() {
    console.log(this.tinnitusForm.value);
    // Handle form submission
  }
}
