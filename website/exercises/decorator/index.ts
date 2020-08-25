class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || '';
    });
  }

  validate() {}
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;
    if (!value) {
      field.errors.push('Requerido');
    }
  };

  return field;
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;

  field.validate = function() {
    validate();
    let value = field.input.value;

    //if (value.indexOf('@') === -1) {
    if (!~value.indexOf('@')) { //@insight With ~ JS will verify if one value it's -1
      field.errors.push('Debe ser un email');
    }
  };

  return field;
}

let field = new Field(document.querySelector('#email'));
//@insight It's important to have good order on the validations, because JS reads from top to bottom the code and will validate first the top function.
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);