import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Row, Col } from 'react-bootstrap';
import EndPage from './EndPage';

const ContactPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [disabled, setDisabled] = useState(false);
	const [alertInfo, setAlertInfo] = useState({
		display: false,
		message: '',
		type: '',
	});

	const toggleAlert = (message, type) => {
		setAlertInfo({ display: true, message, type });
		setTimeout(() => {
			setAlertInfo({ display: false, message: '', type: '' });
		}, 5000);
	};

	const onSubmit = async (data) => {
		const { name, email, message } = data;
		const templateParams = {
			name,
			email,
			subject: 'Contact Form Submission',
			message,
		};

		try {
			setDisabled(true);
			const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
			const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
			const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

			await emailjs.send(serviceId, templateId, templateParams, publicKey);
			toggleAlert('yeah!!I got You.', 'success');
		} catch (e) {
			console.error(e);
			toggleAlert('Uh oh. Something went wrong.', 'danger');
		} finally {
			setDisabled(false);
			reset();
		}
	};

	return (
		<div id="contact">
			<div className="contact-page">
				<Row>
					<Col lg={6} className="text text-end">
						<h1 className="text-2xl font-bold heading-text lh-base">
							Get In{' '}
							<span
								className="rounded-5 p-2 text-white"
								style={{ backgroundColor: '#006b7b' }}
							>
								Touch
							</span>
						</h1>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col lg={6} md={6}>
						<div className="contact-picture mt-2"></div>
					</Col>
					<Col lg={4} md={5}>
						{alertInfo.display && (
							<div
								className={`alert alert-${alertInfo.type} alert-dismissible my-3`}
								role="alert"
							>
								{alertInfo.message}
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="alert"
									aria-label="Close"
									onClick={() =>
										setAlertInfo({ display: false, message: '', type: '' })
									}
								></button>
							</div>
						)}
						<form onSubmit={handleSubmit(onSubmit)} className="contact-form">
							<div className="form-group">
								<input
									type="text"
									id="name"
									className="form-control"
									placeholder="Name"
									{...register('name', { required: true })}
								/>

								{errors.name && <span className="error">Name is required</span>}
							</div>
							<div className="form-group">
								<input
									type="email"
									id="email"
									placeholder="Email"
									className="form-control"
									{...register('email', { required: true })}
								/>
								{errors.email && <span className="error">Email is required</span>}
							</div>
							<div className="form-group">
								<textarea
									id="message"
									className="form-control"
									placeholder="Message"
									{...register('message', { required: true })}
								></textarea>
								{errors.message && (
									<span className="error">Message is required</span>
								)}
							</div>
							<button type="submit" className="contact-button" disabled={disabled}>
								Send
							</button>
						</form>
					</Col>
					<Col lg={2}> </Col>
				</Row>
			</div>
			<EndPage />
		</div>
	);
};

export default ContactPage;
