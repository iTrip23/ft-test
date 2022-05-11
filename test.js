// const arrStr = [{ title: 'hello FROM the other side', summary: 'FROM hell I come!!!' }, { title: 'hello FROM the other side', summary: 'from hell I come!!!' }, { title: 'hello from the other side', summary: 'from hell I come!!!' }, { title: 'hello from the other side', summary: 'from hell I come!!!' }, { title: 'hello from the other side', summary: 'from hell I come!!!' }]

// const strrep = 'from'
// const newStrArr = arrStr.map(article => {
// 	const newArticle = {}
// 	if (article.title) {
// 		console.log("before", article.title)
// 		const regex = new RegExp(strrep, 'gi');
// 		const strArr = article.title.replace(regex, `<span className="o-labels">${strrep}</span>`)
// 		console.log("after", strArr)

// 		newArticle.title = strArr
// 	}
// 	if (article.summary.includes(strrep)) {
// 		const strArr = article.summary.split(strrep)
// 		const newStr = strArr.join(`<span className="o-labels">${strrep}</span>`)
// 		newArticle.summary = newStr
// 	}
// 	return newArticle
// })
// // const strTest = 'hello from the other side'
// // const strArr = strTest.split(strrep)
// // const newStr = strArr.join(`<span className="o-labels">${strrep}</span>`)
// console.log(newStrArr)
