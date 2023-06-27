import React from 'react';
import { Field, Form, Formik } from 'formik';

export const CustomInput = (props) => {
	return (
		<>
			<Field type="text" name={props.name} placeholder={props.placeholder} className="form-control my-2" />
			{props.touchedName && props.errorName ? (
				<div className="text-warning pt-1 mb-2 position-relative">
					<i className="bi bi-info-circle"></i>
					{` ${props.errorName}`}
				</div>
			) : null}
		</>
	);
};
