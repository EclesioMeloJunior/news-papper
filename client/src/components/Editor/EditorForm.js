import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ReactQuill from "react-quill";
import { Field, reduxForm, change, formValueSelector } from "redux-form";
import { withRouter } from "react-router-dom";
import { ReduxFormControl } from "../../containers/ReduxFormControls";
import agent from "../../agent";
import { usePromise } from "bananahooks";

const fetchCategories = async () => {
	const categoriesResponse = await agent.get("news/categories");
	return categoriesResponse.data;
};

const EditorForm = props => {
	const { handleSubmit, initialValues, change, history } = props;
	const [categories, error, pending] = usePromise(fetchCategories, []);

	const handleNewsRemove = async newsId => {
		try {
			await agent.delete(`news/${newsId}`);
			history.push("/my/news");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<React.Fragment>
			<Form onSubmit={handleSubmit} className="mb-5">
				<Form.Row>
					<Col>
						<Form.Label>Título</Form.Label>
						<Field
							type="hidden"
							name="newsId"
							component={ReduxFormControl}
							placeholder="Informe um título para o seu texto"
						/>

						<Field
							type="text"
							name="title"
							component={ReduxFormControl}
							placeholder="Informe um título para o seu texto"
						/>
						<small id="emailHelp" className="form-text text-muted">
							Seu título também será usado nas otimizações de busca.
						</small>
					</Col>
					<Col>
						<Form.Label>Categoria</Form.Label>
						<Field as="select" name="category" component={ReduxFormControl}>
							<option key={-1} value={-1}>
								Selecione uma categoria
							</option>

							{!pending &&
								!error &&
								categories.map((category, categoryIdx) => (
									<option key={categoryIdx} value={category}>
										{category}
									</option>
								))}
						</Field>
					</Col>
				</Form.Row>
				<Form.Row className="mt-2">
					<Col>
						<Form.Label>Texto</Form.Label>

						<Field
							name="description"
							component={({ input }) => {
								return (
									<ReactQuill
										{...input}
										onChange={(newValue, delta, source) => {
											if (source === "user") {
												input.onChange(newValue);
											}
										}}
										onBlur={(range, source, quill) => {
											input.onBlur(quill.getHTML());
										}}
									/>
								);
							}}
						/>
					</Col>
				</Form.Row>
				<Form.Row className="mt-2">
					<Col>
						<Field
							type="checkbox"
							name="public"
							label="Este texto ficará público?"
							component={({ input, meta, ...props }) => (
								<Form.Group controlId="formBasicChecbox">
									<Form.Check {...props} {...input} />
								</Form.Group>
							)}
						/>
					</Col>
				</Form.Row>
				<Form.Row className="mt-2">
					<Col>
						<Button className="mr-5" type="submit" variant="outline-success">
							Salvar
						</Button>

						{initialValues && initialValues.newsId && (
							<OverlayTrigger
								trigger="focus"
								placement="right"
								overlay={
									<Popover id="popover-basic">
										<Popover.Title>Excluir esta News?</Popover.Title>
										<Popover.Content>
											Você irá excluir: <strong>{initialValues.title}</strong>.
											Tem certeza?
											<hr />
											<Button
												onClick={() => handleNewsRemove(initialValues.newsId)}
												size="sm"
												variant="secondary"
											>
												Sim, tenho!
											</Button>
										</Popover.Content>
									</Popover>
								}
							>
								<Button variant="danger">Excluir</Button>
							</OverlayTrigger>
						)}
					</Col>
				</Form.Row>
			</Form>
		</React.Fragment>
	);
};

const validate = values => {
	const errors = {};

	if (!values.title) {
		errors.title = "Informe o título do seu texto.";
	}

	if (!values.category) {
		errors.category = "A categoria é necessária.";
	}

	return errors;
};

const EDITOR_FORM_NAME = "editor-form";

const EditorFormWrapper = reduxForm({
	form: EDITOR_FORM_NAME,
	validate
});

const EditorFormWithRouter = withRouter(EditorForm);

const mapDispatchToProps = dispatch => ({
	change: (field, value) => dispatch(change(EDITOR_FORM_NAME, field, value))
});

const mapStateToProps = state => ({
	initialValues: state.news.formInitialValues
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditorFormWrapper(EditorFormWithRouter));
