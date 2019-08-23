import React from "react";
import withTemplate from "../../containers/withTemplate";
import agent from "../../agent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { removeTags, cropText } from "../../utils/text";
import { format, compareAsc } from "date-fns";
import { ptBR } from "date-fns/locale";
import withAuthentication from "../../containers/withAuthentication";
import { usePromise } from "bananahooks";

const fetchMyNews = async () => {
	const newsResponse = await agent.get("news");
	return newsResponse.data;
};

const MyNews = () => {
	const [news, error, pending] = usePromise(fetchMyNews, [], []);

	return (
		<React.Fragment>
			<h5 className="display-4 font-italic">Meus Textos</h5>
			<p className="lead mb-4">Aqui estão todos os seus textos e criações.</p>

			<Row className="mb-2">
				{!pending &&
					!error &&
					news.map((news, newsIdx) => {
						const description = removeTags(news.description);

						const publishAt =
							compareAsc(new Date(news.createdAt), new Date(news.updatedAt)) ==
							-1
								? news.updatedAt
								: news.createdAt;

						return (
							<Col key={newsIdx} xs={12} md={6} lg={6}>
								<Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
									<Col className="p-4 d-flex flex-column position-static">
										<strong className="d-inline-block mb-2 text-primary">
											{news.category}
										</strong>
										<h3 className="mb-0">{news.title}</h3>
										<div className="mb-1 text-muted">
											{format(new Date(publishAt), "dd LLL, yyyy", {
												locale: ptBR
											})}
										</div>
										<p className="card-text mb-auto">
											{cropText(description, 70)}
										</p>
										<Link to={`/editar/${news._id}`}>Editar Texto</Link>
										<Link to={`/read/${news._id}`}>Visualizar Texto</Link>
									</Col>
									<div className="col-auto d-none d-lg-block">
										<img src="https://picsum.photos/id/870/200/250" />
									</div>
								</Row>
							</Col>
						);
					})}
				{}
			</Row>
		</React.Fragment>
	);
};

export default compose(
	withTemplate,
	withAuthentication
)(MyNews);
