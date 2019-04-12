var classesName = ['header', 'menu', 'menu_item', 'menu_item', 'menu_item', 'menu_item', 'link', 'link', 'link_type', 'footer', 'tabs', 'div', 'tab_item', 'tab_item', 'tab_item', 'image', 'image', 'image'];

var classesObj = {};

classesName.forEach(function(elem) {
	if (!classesObj [elem]) {
		classesObj [elem] = 1;
	} else {
		classesObj [elem] += 1;
	}
});

console.log(classesObj);


var result = [];
for (var className in classesObj) {
	result.push(className);
}

result.sort(function(a, b) {
	return classesObj[b] - classesObj [a];
});

console.log(result);