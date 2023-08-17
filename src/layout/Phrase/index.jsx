import { useLocation } from "preact-iso";

export function Phrase() {
	const location = useLocation();
	const base64Phrase = location.query.tgWebAppStartParam;
	
	const phrase = (
		base64Phrase 
			? atob(base64Phrase) 
			: location.query.p
	) ?? "London is the capital city of the United Kingdom.";

	const words = phrase.split(' ');

	return (
        <div class="wrapper">
			{
				words.map((word, index) => (
					<Word word={word}></Word>
				))
			}
			<BottomSheet></BottomSheet>
        </div>
	);
}

function wordClickHandle(word) {
	alert(word);
}

function Word(props) {
	return (
		<a class="word" onClick={() => wordClickHandle(props.word)}>
			{ props.word }
		</a>
	);
}

function BottomSheet(props) {
	return (
		<div class="buttomSheet hide">
			Hello world!
		</div>
	)
}