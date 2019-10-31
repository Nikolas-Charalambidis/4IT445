export const validateUserID = (id_user) => {
	if(!id_user){
		throw {status: 400, msg: 'Missing data'};
	}
};

export const validateNewUserData = (email, password1, password2, name, surname) => {
	if(!email || !password1|| !password2  || !name || !surname){
		throw {status: 400, msg: 'Missing data'};
	}
	const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
	if(!emailRegex.test(email)){
		throw {status: 400, msg: 'Invalid email'};
	}
	const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){6}/;
	if(!passwordRegex.test(password1)) {
		throw {status: 400, msg: 'Password does not match the right format. It must contain six chars and at lest one uppercase, one lowercase and one number.'};
	}
	if(password1 !== password2) {
		throw {status: 400, msg: 'Passwords do not match'};
	}
};

export const validateChangePasswordData = (id_user, oldPassword, newPassword1, newPassword2) => {
	if(!id_user || !oldPassword || !newPassword1 || !newPassword2){
		throw {status: 400, msg: 'Missing data for password change'};
	}
	const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){6}/;
	if(!passwordRegex.test(newPassword1)) {
		throw {status: 400, msg: 'Password does not match the right format. It must contain six chars and at lest one uppercase, one lowercase and one number.'};
	}
	if(newPassword1 !== newPassword2) {
		throw {status: 400, msg: 'Passwords do not match'};
	}
};

export const validateChangeUserData = (name, surname) => {
	if(!name || !surname){
		throw {status: 400, msg: 'Missing data for user data change'};
	}
};

