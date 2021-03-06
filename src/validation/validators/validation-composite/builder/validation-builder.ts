import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { FieldValidation } from '@/validation/protocols/field-validation'
import { EmailValidation } from '../../email-validation/email-validation'
import { MinLengthValidation } from './../../min-length-validator/min-length-validator'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) { }

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min (length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
