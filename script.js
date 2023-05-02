const regExList = document.querySelector("#regex-example-list");

// NOTE: There is a '\n' in the middle of the str.
const str =
	"The fat cat ran down the Street.\nIt was searching for a mouse to eat.";

const re1 = /at/g;
console.log("re1");
console.log(re1.test(str));
console.log(str.match(re1));
addToDOM(str, re1, "", re1.test(str), str.match(re1));
console.log("----------------------------------------------------------");

const re2 = /at/;
console.log("re2");
console.log(re2.test(str));
console.log(str.match(re2));
addToDOM(str, re2, "", re2.test(str), str.match(re2));
console.log("----------------------------------------------------------");

const re3 = /e+/g;
const description3 =
	"As many occurrences of 'e', with each instance having zero or more consecutive 'e's. Valid sub strings: '', 'e', 'ee', 'eee', 'eeee', ...";
console.log("re3");
console.log(re3.test(str));
console.log(str.match(re3));
addToDOM(str, re3, description3, re3.test(str), str.match(re3));
console.log("----------------------------------------------------------");

const re4 = /e+a/g;
const description4 = "Explanation of re3 + occurrence of 'a' compulsory at end";
console.log("re4");
console.log(re4.test(str));
console.log(str.match(re4));
addToDOM(str, re4, description4, re4.test(str), str.match(re4));
console.log("----------------------------------------------------------");

const re5 = /e+a?/g;
const description5 =
	"Explanation of re3 + '?' indicates that the char just before it ('a' in this case) is optional (0 or 1 occurrence or 'a').";
console.log("re5");
console.log(re5.test(str));
console.log(str.match(re5));
addToDOM(str, re5, description5, re5.test(str), str.match(re5));
console.log("----------------------------------------------------------");

const re6 = /re*/g;
const description6 =
	"One 'r', optionally followed by any number of 'e's (0 or multiple occurrences of 'e')";
console.log("re6");
console.log(re6.test(str));
console.log(str.match(re6));
addToDOM(str, re6, description6, re6.test(str), str.match(re6));
console.log("----------------------------------------------------------");

const re7 = /t../g;
const description7 =
	"'t' followed by any two char [other than '\n' (new line) - it won't match it (check the o/p)]";
console.log("re7");
console.log(re7.test(str));
console.log(str.match(re7));
addToDOM(str, re7, description7, re7.test(str), str.match(re7));
console.log("----------------------------------------------------------");

const re8 = /..\./g;
const description8 =
	"Escape the usual meaning of a period ('.') in regex with a '' and treat that period like a normal period";
console.log("re8");
console.log(re8.test(str));
console.log(str.match(re8));
addToDOM(str, re8, description8, re8.test(str), str.match(re8));
console.log("----------------------------------------------------------");

const re9 = /\w/g;
const description9 = "Match every word character (alphanumeric and underscore)";
console.log("re9");
console.log(re9.test(str));
console.log(str.match(re9));
addToDOM(str, re9, description9, re9.test(str), str.match(re9));
console.log("----------------------------------------------------------");

const re10 = /\W/g;
const description10 =
	"Match every non-word character (ie, chars which are NOT alphanumeric and underscore)";
console.log("re10");
console.log(re10.test(str));
console.log(str.match(re10));
addToDOM(str, re10, description10, re10.test(str), str.match(re10));
console.log("----------------------------------------------------------");

// 'd' for digit and 'D' for non-digits

const re11 = /\s/g;
const description11 = "Match every whitespace char";
console.log("re11");
console.log(re11.test(str));
console.log(str.match(re11));
addToDOM(str, re11, description11, re11.test(str), str.match(re11));
console.log("----------------------------------------------------------");

const re12 = /\S/g;
const description12 = "Match every char that is NOT a whitespace";
console.log("re12");
console.log(re12.test(str));
console.log(str.match(re12));
addToDOM(str, re12, description12, re12.test(str), str.match(re12));
console.log("----------------------------------------------------------");

const re13 = /\w{4}/g;
const description13 =
	"Match every word character (alphanumeric and underscore) sub-str which is 4 in length.";
console.log("re13");
console.log(re13.test(str));
console.log(str.match(re13));
addToDOM(str, re13, description13, re13.test(str), str.match(re13));
console.log("----------------------------------------------------------");

const re14 = /\w{4,6}/g;
const description14 =
	"Match every word character (alphanumeric and underscore) sub-str which is min 4 in length and max 6.";
console.log("re14");
console.log(re14.test(str));
console.log(str.match(re14));
addToDOM(str, re14, description14, re14.test(str), str.match(re14));
console.log("----------------------------------------------------------");

const re15 = /\w{4,}/g;
const description15 =
	"Match every word character (alphanumeric and underscore) sub-str which is 4 or more in length.";
console.log("re15");
console.log(re15.test(str));
console.log(str.match(re15));
addToDOM(str, re15, description15, re15.test(str), str.match(re15));
console.log("----------------------------------------------------------");

const re16 = /[ae]t/g;
const description16 =
	"Match any sub-str of length 2 starting with either 'a' or 'e' and ending in 't'";
console.log("re16");
console.log(re16.test(str));
console.log(str.match(re16));
addToDOM(str, re16, description16, re16.test(str), str.match(re16));
console.log("----------------------------------------------------------");

const re17 = /[a-zA-Z]t/g;
const description17 =
	"Match any sub-str with length 2 starting with any char between 'a' and 'z' or 'A' and 'Z' (both inclusive) and ending in 't' (FYI: In '/[^a-zA-Z]t/g', the caret '^' negates the entire set (ie, the stuff between '[]'))";
console.log("re17");
console.log(re17.test(str));
console.log(str.match(re17));
addToDOM(str, re17, description17, re17.test(str), str.match(re17));
console.log("----------------------------------------------------------");

const re18 = /[0-9]t/g;
const description18 =
	"Match any sub-str with length 2 starting with any number between '0' and '9' (both inclusive) and ending in 't'";
console.log("re18");
console.log(re18.test(str));
console.log(str.match(re18));
addToDOM(str, re18, description18, re18.test(str), str.match(re18));
console.log("----------------------------------------------------------");

const re19 = /(t|T)he/g;
const description19 =
	"'()' allows the making of an isolated group. Here, it means look for 'the' or 'The', same as '[tT]he'.";
console.log("re19");
console.log(re19.test(str));
console.log(str.match(re19));
addToDOM(str, re19, description19, re19.test(str), str.match(re19));
console.log("----------------------------------------------------------");

const re20 = /(re){2,3}/g;
const description20 =
	"'re{2,3}' will only affect 'e', ie, match sub-strs with one occurrence of 'r' followed by min 2 and max 3 consecutive occurrences of 'e', but '(re){2,3}' will match sub-strs with 're' occurring together consecutively for min 2 and max 3 times in a str, eg: 'rere', '<rerere>re' (only first 3 are matched out of the 4 consecutive repetitions of 're').";
console.log("re20");
console.log(re20.test(str));
console.log(str.match(re20));
addToDOM(str, re20, description20, re20.test(str), str.match(re20));
console.log("----------------------------------------------------------");

const re21 = /(t|r|e){2,3}/g;
const description21 =
	"Explanation of 're19' + match any sub-str of length 2 or 3 which contain a combo of 't', 'r' or 'e'.";
console.log("re21");
console.log(re21.test(str));
console.log(str.match(re21));
addToDOM(str, re21, description21, re21.test(str), str.match(re21));
console.log("----------------------------------------------------------");

const re22 = /(t|r|e){2,3}\./g;
const description22 =
	"Explanation of 're21' + match a '.' after the 2 or 3 length sub-str.";
console.log("re22");
console.log(re22.test(str));
console.log(str.match(re22));
addToDOM(str, re22, description22, re22.test(str), str.match(re22));
console.log("----------------------------------------------------------");

const re23 = /^I/g;
const description23 = "Match the beginning of the str";
console.log("re23");
console.log(re23.test(str));
console.log(str.match(re23));
addToDOM(str, re23, description23, re23.test(str), str.match(re23));
console.log("----------------------------------------------------------");

const re24 = /^I/gm;
const description24 = "Match the beginning of every new line";
console.log("re24");
console.log(re24.test(str));
console.log(str.match(re24));
addToDOM(str, re24, description24, re24.test(str), str.match(re24));
console.log("----------------------------------------------------------");

const re25 = /\.$/g;
const description25 = "Match the end of the str";
console.log("re25");
console.log(re25.test(str));
console.log(str.match(re25));
addToDOM(str, re25, description25, re25.test(str), str.match(re25));
console.log("----------------------------------------------------------");

const re26 = /\.$/gm;
const description26 = "Match the end of every new line";
console.log("re26");
console.log(re26.test(str));
console.log(str.match(re26));
addToDOM(str, re26, description26, re26.test(str), str.match(re26));
console.log("----------------------------------------------------------");

const re27 = /(?<=[tT]he)./g;
const description27 =
	"Positive look behind. '<' indicates a look behind and '=' indicates a positive look behind. This exp gives any char after 'the' or 'The', without including them in the result.";
console.log("re27");
console.log(re27.test(str));
console.log(str.match(re27));
addToDOM(str, re27, description27, re27.test(str), str.match(re27));
console.log("----------------------------------------------------------");

const re28 = /(?<![tT]he)./g;
const description28 =
	"Negative look behind. '<' indicates a look behind and '!' indicates a negative look behind. This exp gives any char that is not preceded by 'the' or 'The', without including the two words as sub-strs in the result.";
console.log("re28");
console.log(re28.test(str));
console.log(str.match(re28));
addToDOM(str, re28, description28, re28.test(str), str.match(re28));
console.log("----------------------------------------------------------");

const re29 = /.(?=at)/g;
const description29 =
	"Positive look ahead. '=' indicates a positive look ahead. This exp gives any char which is followed by 'at', without including 'at' in the result.";
console.log("re29");
console.log(re29.test(str));
console.log(str.match(re29));
addToDOM(str, re29, description29, re29.test(str), str.match(re29));
console.log("----------------------------------------------------------");

const re30 = /.(?!at)/g;
const description30 =
	"Negative look ahead. '!' indicates a negative look ahead. This exp gives any char which is NOT followed by 'at', without including 'at' as a sub-str in the result.";
console.log("re30");
console.log(re30.test(str));
console.log(str.match(re30));
addToDOM(str, re30, description30, re30.test(str), str.match(re30));
console.log("----------------------------------------------------------");

// Phone number matching

const phNo =
	"1234567890\n123-456-7890\n123 456 7890\n(123) 456-7890\n+1 123 456 7890\n+91-(123)-456-7890";

const re31 =
	/(?:(\+[0-9][0-9]?)[- ]?)?\(?(?<areaCode>\d{3})\)?[ -]?(\d{3})[- ]?(\d{4})/gm;
console.log("re31 (Phone number)");
console.log(re31.test(phNo));
console.log(phNo.match(re31));
console.log(phNo.replace(re31, "$1$<areaCode>$3$4"));
const replaceDescription31 =
	"'()' in re31 is for capturing groups. They can be referenced as follows '$<int>'. They can be named as well '(?<grpName>RE)'. More at <a href=\"https://javascript.info/regexp-groups\" target=\"_blank\" rel=\"noreferrer\">javascript.info/regexp-groups</a>. '?:' makes a group non-capturing, ie, it can't be referenced with a '$' (doesn't apply to groups within it)";
addToDOM(
	phNo,
	re31,
	"Phone number matching",
	re31.test(phNo),
	phNo.match(re31),
	"$1$<areaCode>$3$4",
	phNo.replace(re31, "$1$<areaCode>$3$4"),
	replaceDescription31
);
console.log("----------------------------------------------------------");

// e-mail matching

const email =
	"harshgkapadia@gmail.com\nharsh-g-kapadia@gmail.com\nharsh.kapadia@g-mail.com";

const re32 = /(\S{1,})@(\S{1,})\.(\S{1,})/gm;
console.log("re32 (e-mail)");
console.log(re32.test(email));
console.log(email.match(re32));
console.log(email.replace(re32, "$1@$2.$3"));
addToDOM(
	email,
	re32,
	"e-mail matching",
	re32.test(email),
	email.match(re32),
	"$1@$2.$3",
	email.replace(re32, "$1@$2.$3"),
	""
);
console.log("----------------------------------------------------------");

function addToDOM(
	string,
	regEx,
	description,
	testResult,
	matchArr,
	replaceVal = undefined,
	replaceResult = undefined,
	replaceDescription = undefined
) {
	const li = document.createElement("li");
	const stringPara = document.createElement("p");
	const regExPara = document.createElement("p");
	const descriptionPara = document.createElement("p");
	const testResultPara = document.createElement("p");
	const matchArrPara = document.createElement("p");

	stringPara.innerText = "str: " + string.replaceAll("\n", "\\n");
	regExPara.innerHTML = `re: <code>${regEx}</code>`;
	descriptionPara.innerText =
		description === ""
			? ""
			: "NOTE: " + description.replaceAll("\n", "\\n");
	testResultPara.innerHTML = "<code>re.test(str)</code>: " + testResult;
	matchArrPara.innerHTML = "<code>str.match(re)</code>: ";

	if (testResult === true) {
		for (let i = 0; i < matchArr.length; i++) {
			matchArrPara.innerHTML =
				matchArrPara.innerHTML +
				"<br />" +
				matchArr[i].replaceAll("\n", "\\n");
		}
	}

	li.appendChild(regExPara);
	li.appendChild(stringPara);
	li.appendChild(descriptionPara);
	li.appendChild(testResultPara);
	li.appendChild(matchArrPara);

	// If 'Replace' present
	if (replaceVal !== undefined) {
		const replacePara = document.createElement("p");
		replacePara.innerHTML = `<code>str.replace(re, "${replaceVal.replaceAll(
			"\n",
			"\\n"
		)}")</code>: ${replaceResult.replaceAll(
			"\n",
			"\\n"
		)}<br /><br />${replaceDescription.replaceAll("\n", "\\n")}`;
		li.appendChild(replacePara);
	}

	regExList.appendChild(li);
}
