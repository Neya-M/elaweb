const title = document.getElementById("title");
const story = document.getElementById("story");
const essay = document.getElementById("essay");
const page_img = document.getElementById("page_img");
front = true;
page() {
	if front {
		page_img.src = "";
		front = false;
	} else {
		page_img.src = "";
		front = true;
	}
}
