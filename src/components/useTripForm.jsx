import { useState, useEffect } from 'react';

const useTripForm = (callback, validate) => {
// const useTripForm = (callback) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value
        });
    };

    // prevents the refreshing of the form
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useTripForm;
