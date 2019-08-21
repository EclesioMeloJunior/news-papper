import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import RichTextEditor from "react-rte";

const EditorForm = () => {
	const [text, setText] = useState(RichTextEditor.createEmptyValue());

	const toolbarConfig = {
		// Optionally specify the groups to display (displayed in the order listed).
		display: [
			"INLINE_STYLE_BUTTONS",
			"BLOCK_TYPE_BUTTONS",
			"LINK_BUTTONS",
			"BLOCK_TYPE_DROPDOWN",
			"HISTORY_BUTTONS"
		],
		INLINE_STYLE_BUTTONS: [
			{ label: "Bold", style: "BOLD", className: "custom-css-class" },
			{ label: "Italic", style: "ITALIC" },
			{ label: "Underline", style: "UNDERLINE" }
		],
		BLOCK_TYPE_DROPDOWN: [
			{ label: "Normal", style: "unstyled" },
			{ label: "Heading Large", style: "header-one" },
			{ label: "Heading Medium", style: "header-two" },
			{ label: "Heading Small", style: "header-three" }
		],
		BLOCK_TYPE_BUTTONS: [
			{ label: "UL", style: "unordered-list-item" },
			{ label: "OL", style: "ordered-list-item" }
		]
	};

	return (
		<React.Fragment>
			<Form>
				<Form.Row>
					<Col>
						<Form.Label>Título</Form.Label>
						<Form.Control placeholder="Informe um título para o seu texto" />
						<small id="emailHelp" className="form-text text-muted">
							Seu título também será usado nas otimizações de busca.
						</small>
					</Col>
					<Col>
						<Form.Label>Categoria</Form.Label>
						<Form.Control as="select">
							<option selected disabled>
								Selecione uma categoria
							</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Col>
				</Form.Row>
				<Form.Row className="mt-2 mb-5">
					<Col>
						<Form.Label>Texto</Form.Label>
						<RichTextEditor
							toolbarConfig={toolbarConfig}
							value={text}
							onChange={value => setText(value)}
						/>
					</Col>
				</Form.Row>
			</Form>
		</React.Fragment>
	);
};

export default EditorForm;
