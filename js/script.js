var btn = document.querySelector('.btn-write-to-us');
var modal = document.querySelector('#contact-dialog');
var btnClose = modal.querySelector('.btn-close');

var form = modal.querySelector('.contact-form');
var nameField = form.querySelector('#contact-form-name');
var emailField = form.querySelector('#contact-form-email');
var messageField = form.querySelector('#contact-form-message');

var isStorageSupport = true;
var nameStorage = '';
var emailStorage = '';

try {
	nameStorage = localStorage.getItem('name');
	emailStorage = localStorage.getItem('email');
} catch (err) {
	isStorageSupport = false;
}

btn.addEventListener('click', function(e) {
	e.preventDefault();
	modal.classList.add('modal-show');
    
    if (nameStorage) {
    	nameField.value = nameStorage;
    }

    if (emailStorage) {
    	emailField.value = emailStorage;
    }

    if (!nameField.value) {
    	nameField.focus();
    } else if (!emailField.value) {
    	emailField.focus();
    } else {
    	messageField.focus();
    }
});

form.addEventListener('submit', function(e) {
	if (!nameField.value) {
		e.preventDefault();
		nameField.classList.add('invalid');
	}
	else {
		nameField.classList.remove('invalid');
	}

	if (!emailField.value) {
		e.preventDefault();
		emailField.classList.add('invalid');
	}
	else {
		emailField.classList.remove('invalid');
	}
});

function closeModal() {
	modal.classList.remove('modal-show');
	nameField.classList.remove('invalid');
	emailField.classList.remove('invalid');

	if (isStorageSupport) {
		localStorage.setItem('name', nameField.value);
		localStorage.setItem('email', emailField.value);
	}
};
  
btnClose.addEventListener('click', function(e) {
	e.preventDefault();
	closeModal();
});

window.addEventListener('keydown', function (e) {
	if (e.keyCode === 27) {
		e.preventDefault();
		closeModal();
	}
});
