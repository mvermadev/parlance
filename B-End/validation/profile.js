module.exports = function validateCompleteProfile(data) {
    let errors = {};

    data.bio = !isEmpty(data.bio) ? data.bio : '';
    data.designation = !isEmpty(data.designation) ? data.designation : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.experience = !isEmpty(data.experience) ? data.experience : '';
    data.industry = !isEmpty(data.industry) ? data.industry : '';
    data.location = !isEmpty(data.location) ? data.location : '';

    if (!Validator.isEmpty(data.bio)) {
        errors.bio = 'Bio is invalid';
    }

    if (Validator.isEmpty(data.designation)) {
        errors.designation = 'Designation field is required';
    }

    if (Validator.isEmpty(data.company)) {
        errors.company = 'Company name field is required';
    }

    if (!Validator.isEmpty(data.experience)) {
        errors.experience = 'Experience is required';
    }

    if (Validator.isEmpty(data.industry)) {
        errors.industry = 'Industry field is required';
    }

    if (Validator.isEmpty(data.location)) {
        errors.location = 'Location name field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};