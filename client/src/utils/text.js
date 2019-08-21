export function cropText(text, textSize = 60) {
	if (!text) return "";

	if (text.length < textSize) return `${text}...`;

	return `${text.slice(0, textSize)}...`;
}

export function removeTags(textWithTags) {
	if (!textWithTags) return textWithTags;
	return textWithTags.toString().replace(/<[^>]*>/g, "");
}
