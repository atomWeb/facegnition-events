import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { FileUtils } from '../../shared/file-utils';

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

  @Output()
  image64Coded: EventEmitter<string> = new EventEmitter();

  fileName!: string;
  onChange = (fileName: string) => {};
  onTouched = () => {};
  disabled: boolean = false;
  fileUploadSuccess: boolean = false;
  fileUploadError = false;
  onValidatorChange = () => {};
  fileUtils = new FileUtils();
  base64Img!: string;

  constructor() {}
  writeValue(value: any): void {
    this.fileName = value;
    this.base64Img = value;
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

  onFileSelectedHdl(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.fileUtils.toBase64(file).subscribe((imgCoded) => {
        this.base64Img = imgCoded;
        this.image64Coded.emit(this.base64Img);
      });
      this.onChange(this.fileName);
      this.fileUploadSuccess = true;
      this.onValidatorChange();
    }
  }
}
