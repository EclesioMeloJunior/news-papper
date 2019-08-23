import React from "react";
import axios from "axios";

const agent = axios.create({
	baseURL: "http://localhost:3000"
});

export default agent;
