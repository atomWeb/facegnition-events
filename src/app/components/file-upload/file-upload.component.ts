import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileUploadComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: FileUploadComponent,
    },
  ],
})
export class FileUploadComponent implements ControlValueAccessor, Validators {
  @Input()
  requiredFileType!: string;
  fileName!: string;
  onChange = (fileName: String) => {};
  onTouched = () => {};
  disabled: boolean = false;
  fileUploadSuccess: boolean = false;
  fileUploadError = false;
  onValidatorChange = () => {};

  constructor() {}
  writeValue(obj: any): void {
    this.fileName = obj;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null | undefined {
    if (this.fileUploadSuccess) {
      return null;
    }
    let errors: any = {
      requiredFileType: this.requiredFileType,
    };

    if (this.fileUploadError) {
      errors.uploadFailed = true;
    }
    return errors;
  }

  registerOnValidatorChange(onValidatorChange: () => void) {
    this.onValidatorChange = onValidatorChange;
}

  onClick(fileUpload: HTMLInputElement) {
    this.onTouched();
    fileUpload.click();
  }

  // Este sera el que la pase a base64 y devuelva el string
  onFileSelectedHdl(event: any) {
    console.log(event);
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.onChange(this.fileName);
      this.fileUploadSuccess = true;
      this.onValidatorChange();
    }
  }
}
