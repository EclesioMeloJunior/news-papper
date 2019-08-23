function fromSnapshotToArray(querySnapshot) {
	const normalArray = querySnapshot.docs.map(doc => {
		return { ...doc.data(), id: doc.id };
	});

	return normalArray;
}

export { fromSnapshotToArray };
