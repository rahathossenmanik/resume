export const usernameValidation = (username) => {
	let error = '';
	if (!username) {
		error = 'Username is required!';
	} else if (username.length < 6) {
		error = 'Username must contain at least 6 characters!';
	} else if (!/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/.test(username)) {
		error = 'Username can only contain alphanumerics!';
	}
	return error;
};

export const emailValidation = (email) => {
	let error = '';
	if (email && !/\S+@\S+\.\S+/.test(email)) {
		error = 'Email address is invalid!';
	}
	return error;
};

export const passwordValidation = (pass) => {
	let error = '';
	if (!pass) {
		error = 'Password is required!';
	} else if (pass.length < 8) {
		error = 'Password must be 8 or more characters!';
	} else if (!/\d/.test(pass)) {
		error = 'Password must contain at least 1 number!';
	} else if (!/[!@#$%&?]/g.test(pass)) {
		error = 'Password must contain at least 1 special character!';
	} else if (!/[A-Z]/g.test(pass)) {
		error = 'Password must contain at least 1 capital letter!';
	}
	return error;
};

export const confirmPasswordValidation = (pass1, pass2) => {
	let error = '';
	if (pass1 !== pass2) error = 'Password Did not match!!!';
	return error;
};

export const isRequired = (user) => {
	let error = '';
	if (!user) error = 'This Field is required!';
	return error;
};

// export const bdPhoneValidation = (phone) => {
//   let error = '';
//   if (!/^(+(880|0)1(3|4|5|6|7|8|9)(\d{2}[-]?\d{6})$/.test(phone)) error = 'This Field is required!';
//   return error;
// };
