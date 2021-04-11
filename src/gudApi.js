// GitHub User Data API
import React, { useState, useEffect } from "react";
import "./App.css";

//https://api.github.com/users/mgckaled

function GithubAPI({ login }) {
	// Use state 'null' because we won't have any inicial and static data
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!login) return;
		setLoading(true);
		fetch(`https://api.github.com/users/${login}`)
			.then((response) => response.json())
			.then(setData)
			.then(() => setLoading(false))
			.catch(setError);
	}, [login]);

	if (loading) return <h2>Loading...</h2>;
	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
	if (!data) return null

	return (
		<div className="App">
			<h1>{data.name}</h1>
			<p>{data.bio}</p>
			<img alt={data.login} src={data.avatar_url} height={100} />
		</div>
	);
}
export default GithubAPI;
