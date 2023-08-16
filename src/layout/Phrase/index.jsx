import { useLocation } from "preact-iso";

export function Phrase() {
	const location = useLocation();
	const phrase = location.query.p ?? "London is the capital city of the United Kingdom.";
	const words = phrase.split(' ');

	return (
        <div class="wrapper">
			{
				words.map((word, index) => (
					<Word word={word}></Word>
				))
			}
        </div>
	);
}

function Word(props) {
	return (
		<a target="_blank" class="word">
			{ props.word }
		</a>
	);
}
