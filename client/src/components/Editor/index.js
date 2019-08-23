import React, { useState, useEffect } from "react";
import withTemplate from "../../containers/withTemplate";
import { compose } from "redux";
import EditorReader from "./EditorHeader";
import EditorForm from "./EditorForm";
import agent from "../../agent";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NEWS_TYPE } from "../../redux/news";
import withAuthentication from "../../containers/withAuthentication";
import { usePromise } from "bananahooks";

const Editor = props => {
	const { editorFormInitialValues, history } = props;

	const handleSubmit = async values => {
		if (!values.newsId) await createNews(values);
		else {
			const { newsId, ...news } = values;
			await updateNews(newsId, news);
		}
	};

	const createNews = async news => {
		try {
			await agent.post("news", news);
			history.push("/my/news");
		} catch (err) {
			console.log(err);
		}
	};

	const updateNews = async (newsId, news) => {
		try {
			await agent.put(`news/${newsId}`, news);
			history.push("/my/news");
		} catch (err) {
			console.log(err);
		}
	};

	const getNews = async newsId => {
		const newsResponse = await agent.get(`news/${newsId}`);
		const news = newsResponse.data;
		const newsToEdit = {
			newsId: news._id,
			category: news.category,
			description: news.description,
			title: news.title,
			public: news.public
		};

		await editorFormInitialValues(newsToEdit);
	};

	const resetEditorForm = async () => await editorFormInitialValues(null);

	useEffect(() => {
		if (props.match.params.newsId) getNews(props.match.params.newsId);

		return () => resetEditorForm();
	}, []);

	return (
		<React.Fragment>
			<EditorReader />
			<EditorForm onSubmit={handleSubmit} />
		</React.Fragment>
	);
};

const mapDispatchToProps = dispatch => ({
	editorFormInitialValues: values =>
		dispatch({ type: NEWS_TYPE.FORM_INITIAL_VALUES, payload: values })
});

export default compose(
	withRouter,
	withAuthentication,
	withTemplate,
	connect(
		null,
		mapDispatchToProps
	)
)(Editor);
