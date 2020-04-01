var image_slide = document.querySelectorAll('.product-image');
var category_down = document.querySelectorAll('#category');
var sub_category_down = document.querySelectorAll('#sub_category');
var sub_category_1 = document.querySelectorAll('#sub_1');
var sub_category_2 = document.querySelectorAll('#sub_2');
var outline_pass = document.querySelectorAll('#password_login');
var outline_eye = document.querySelectorAll('.btn-pass-visible');
var pass_eye = document.querySelectorAll('#pass_show');
var pass_confirm = document.querySelector('.confirm-alert');

var login_confirm_alert = document.querySelectorAll('.login-confirm-alert');

var search_history = document.querySelector('.search-box > ul');

var search_product = document.querySelectorAll('.search-box > ul > li');

var button_slide_bottom = document.querySelectorAll('.slide-bottom');

var stok = document.querySelectorAll('#stok');

var jumlah = document.querySelectorAll('#count');

var login_input = document.querySelectorAll('.login-input');

var checkbox_check_cart = document.querySelectorAll('#checkbox_check_cart');
var all_checkbox_check = document.querySelector('#all_checkbox_cart');

var option_down = document.querySelectorAll('.option-custom');
var arrow_button = document.querySelectorAll('#arrow-fa');

var select_input = document.querySelectorAll('.select-input-custom');

var tab_content_click = document.querySelectorAll('#tab_content');

var price = document.querySelectorAll('#price');
var show_price = document.querySelectorAll('#price_detail');

var price_detail_input = document.querySelectorAll('#price_detail_input');
var option_click = document.querySelectorAll('.option-custom > li');
var show_option_down = document.querySelectorAll('.select-custom > ul');

var btn_slide_right = document.querySelector('.slide-right');
var btn_slide_left = document.querySelector('.slide-left');

var left_btn_category = document.querySelector('.left-btn-category');
var right_btn_category = document.querySelector('.right-btn-category');
var category_item = document.querySelectorAll('.category-item');

var category_box = document.querySelector('#category_box');

var update_notif_box = document.querySelectorAll('#update_notif');

var product_image_bottom = document.querySelectorAll('.product-image-bottom');

var product_image_getImg = document.querySelectorAll('.product-image-bottom > img');

var product_image_all = document.querySelector('.product-image-all');

var left_btn_product = document.querySelector('.left-btn-product');

var right_btn_product = document.querySelector('.right-btn-product');

var FReader = new FileReader();

var getUrl = window.location.href;

var getPathName = window.location.pathname;

var option_toggle = [];
var tab_toggle = [];
var select_array = [];
var category_toggle_button = [];
var sub_toggle_button = [];
var show_pass = [ false, false ];
var slide_image = [];
var hover_select = false;
var hover_search = false;

var h = 0;

var number_product = 0;

var product_image_bottom_length = product_image_bottom.length - 4;

update_notif();
category_toggle();
sub_category_toggle();
select_push_array();

if (getPathName.search('product_detail') == 1 || getPathName.search('/') == 0) {
	for (let i = 0; i < image_slide.length; i++) {
		slide_image.push(0);
	}
	slide_image[0] = 1;
	if (getPathName.search('/product_detail') != 0) {
		button_slide_bottom[0].style.backgroundColor = '#ea8117';
	}
	if (slide_image[0] == 1) {
		btn_slide_left.style.display = 'none';
	}
}

for (let i = 0; i < search_product.length; i++) {
	search_product[i].addEventListener('mouseover', function() {
		hover_search = true;
	});

	search_product[i].addEventListener('mouseout', function() {
		hover_search = false;
	});
}

for (let i = 0; i < tab_content_click.length; i++) {
	tab_toggle.push(0);
	tab_content_click[i].addEventListener('click', function() {
		tab_toggle[tab_toggle.indexOf(1)] = 0;
		tab_toggle[i] = 1;
		tab_content_click[tab_toggle.indexOf(1)].classList.remove('click-true');
		tab_content_click[i].classList.add('click-true');
	});
}

for (let i = 0; i < option_click.length; i++) {
	option_click[i].addEventListener('mouseover', function() {
		hover_select = true;
		option_click[i].addEventListener('click', function() {
			select_input[option_toggle.indexOf(true)].value = option_click[i].innerHTML;
			arrow_button[option_toggle.indexOf(true)].className = 'fa fa-chevron-down';
			option_down[option_toggle.indexOf(true)].classList.remove('show-option');
			option_toggle[option_toggle.indexOf(true)] = false;
		});
		option_down.addEventListener('mouseout', function() {
			hover_select = false;
		});
	});
}

if (product_image_bottom.length > 4) {
	product_image_all.style.width = '1' + product_image_bottom_length * 25 + '%';
	right_btn_product.style.display = 'block';
	let i = 0;
	while (number_product < 1) {
		right_btn_product.addEventListener('click', function() {
			number_product += 1;
			left_btn_product.style.display = 'block';
			product_image_all.style.marginLeft = '-' + number_product * 25 + '%';
			if (number_product > product_image_bottom_length - 1) {
				right_btn_product.style.display = 'none';
			}
		});
		number_product++;
	}

	while (number_product > 0) {
		left_btn_product.addEventListener('click', function() {
			number_product -= 1;
			right_btn_product.style.display = 'block';
			product_image_all.style.marginLeft = '-' + number_product * 25 + '%';
			if (number_product == 0) {
				left_btn_product.style.display = 'none';
			}
		});
		number_product--;
	}
}

if (category_item.length > 7) {
	category_box.style.width = '1' + category_item.length - 7 + '0%';
	right_btn_category.style.display = 'block';
	let i = 0;
	while (i < 1) {
		right_btn_category.addEventListener('click', function() {
			i += 1;
			left_btn_category.style.display = 'block';
			category_box.style.marginLeft = '-' + i + '0%';
			if (i > category_item.length - 7) {
				right_btn_category.style.display = 'none';
			}
		});
		i++;
	}

	while (i > 0) {
		left_btn_category.addEventListener('click', function() {
			i -= 1;
			right_btn_category.style.display = 'block';
			category_box.style.marginLeft = '-' + i + '0%';
			if (i == 0) {
				left_btn_category.style.display = 'none';
			}
		});
		i--;
	}
}

function select_push_array() {
	for (let i = 0; i < show_option_down.length; i++) {
		option_toggle.push(false);
		select_array.push([]);
	}
	for (let i = 0; i < show_option_down.length; i++) {
		for (let j = 0; j < show_option_down[i].querySelectorAll('.option-custom > li').length; j++) {
			select_array[i].push(0);
		}
	}
}

function all_checkbox_checked() {
	for (let i = 0; i < checkbox_check_cart.length; i++) {
		if (all_checkbox_check.checked) {
			checkbox_check_cart[i].checked = true;
		} else {
			checkbox_check_cart[i].checked = false;
		}
	}
}

function slide_right() {
	h = slide_image.indexOf(1);
	if (h <= image_slide.length - 2) {
		image_slide[h].style.transition = '0.6s';
		image_slide[h].style.marginLeft = '-100%';
		slide_image[h + 1] = 1;
		slide_image[h] = 0;
		if (getPathName.search('/product_detail') != 0) {
			button_slide_bottom[h].style.backgroundColor = '#dbd7d7';
			button_slide_bottom[h + 1].style.backgroundColor = '#ea8117';
		} else {
			if (h > 2) {
				number_product += 1;
				console.log(number_product);
				product_image_all.style.marginLeft = '-' + product_image_bottom_length * 25 + '%';
				left_btn_product.style.display = 'block';
				if (h == product_image_bottom.length - 2) {
					right_btn_product.style.display = 'none';
				}
			}
			product_image_getImg[h].style.borderColor = '#dbd7d7';
			product_image_getImg[h + 1].style.borderColor = '#ea8117';
		}
		btn_slide_left.style.display = 'block';
		if (slide_image[image_slide.length - 1] == 1) {
			btn_slide_right.style.display = 'none';
		}
	}
	if (h <= image_slide.length - 2) {
		h += 1;
	}
}

function slide_left() {
	h = slide_image.indexOf(1);
	if (h >= 1) {
		h -= 1;
		image_slide[h].style.marginLeft = '0%';
		image_slide[h].style.transition = '0.6s';
		slide_image[h] = 1;
		if (getPathName.search('/product_detail') != 0) {
			button_slide_bottom[h + 1].style.backgroundColor = '#dbd7d7';
			button_slide_bottom[h].style.backgroundColor = '#ea8117';
		} else {
			// console.log(h);
			console.log(number_product);
			if (h < number_product) {
				number_product -= 1;
				product_image_all.style.marginLeft = '-' + number_product * 25 + '%';
				right_btn_product.style.display = 'block';
				if (number_product == 0) {
					left_btn_product.style.display = 'none';
				}
			}
			product_image_getImg[h + 1].style.borderColor = '#dbd7d7';
			product_image_getImg[h].style.borderColor = '#ea8117';
		}
		slide_image[h + 1] = 0;
		btn_slide_right.style.display = 'block';
		if (slide_image[0] == 1) {
			btn_slide_left.style.display = 'none';
		}
	}
}

function minus(values) {
	show_value = parseInt(jumlah[values].value);
	if (show_value > 1) {
		show_value -= 1;
		jumlah[values].value = show_value;
		showPrice(values, show_value);
	}
}

function plus(values) {
	show_value = parseInt(jumlah[values].value);
	stoks = stok[values].value;
	if (show_value < stoks) {
		show_value += 1;
		jumlah[values].value = show_value;
		showPrice(values, show_value);
	}
}

function click_down(category) {
	if (category_toggle_button[category] == 0) {
		category_down[category].className = 'fa fa-chevron-right';
		category_toggle_button[category] = 1;
		sub_category_1[category].style.display = 'none';
	} else {
		category_down[category].className = 'fa fa-chevron-down';
		category_toggle_button[category] = 0;
		sub_category_1[category].style.display = 'block';
	}
}

function sub_click_down(category, sub) {
	if (category >= 1) {
		var sub_category = sub_category_1[category - 1].querySelectorAll('#sub_2').length + sub;
	} else if (category < 1) {
		sub_category = sub;
	}
	if (sub_toggle_button[category][sub] == 0) {
		sub_category_down[sub_category].className = 'fa fa-chevron-right';
		sub_toggle_button[category][sub] = 1;
		sub_category_2[sub_category].style.display = 'none';
	} else {
		sub_category_down[sub_category].className = 'fa fa-chevron-down';
		sub_toggle_button[category][sub] = 0;
		sub_category_2[sub_category].style.display = 'block';
	}
}

function category_toggle() {
	for (let i = 0; i < category_down.length; i++) {
		category_toggle_button.push(0);
	}
}

function sub_category_toggle() {
	for (let i = 0; i < sub_category_1.length; i++) {
		sub_toggle_button.push([]);
	}
	for (let i = 0; i < sub_category_1.length; i++) {
		for (let j = 0; j < sub_category_1[i].querySelectorAll('#sub_2').length; j++) {
			sub_toggle_button[i].push(0);
		}
	}
}

function onfocus_pass_login(pass) {
	outline_pass[pass].style.borderColor = '#ea8117';
	outline_eye[pass].style.borderColor = '#ea8117';
}

function onblur_pass_login(pass) {
	outline_pass[pass].style.borderColor = '#dbd7d7';
	outline_eye[pass].style.borderColor = '#dbd7d7';
}

function pass_text(pass) {
	if (show_pass[pass] == false) {
		show_pass[pass] = true;
		pass_eye[pass].style.color = '#ea8117';
		outline_pass[pass].type = 'text';
	} else {
		show_pass[pass] = false;
		pass_eye[pass].style.color = '#b2babb';
		outline_pass[pass].type = 'password';
	}
}

function confirm_pass() {
	if (outline_pass[0].value != '' && outline_pass[1].value != '') {
		if (outline_pass[0].value != outline_pass[1].value) {
			pass_confirm.style.color = 'red';
			pass_confirm.innerHTML = 'Password dan Konfirmasi Password tidak sama';
		} else {
			pass_confirm.style.color = 'green';
			pass_confirm.innerHTML = 'Konfirmasi Password berhasil';
		}
	} else {
		pass_confirm.style.color = 'red';
		pass_confirm.innerHTML = 'Password dan Konfirmasi Password tidak boleh kosong';
	}
}

function keyup_confirm_text(confirm, text) {
	if (login_input[confirm].value != '') {
		login_confirm_alert[confirm].innerHTML = '';
		var email_confirm = login_input[1].value;
		var search_email = email_confirm.search('@gmail.com');
		if (confirm == 1) {
			if (email_confirm.substring(search_email) == '@gmail.com') {
				login_confirm_alert[confirm].innerHTML = '';
			} else {
				login_confirm_alert[confirm].innerHTML = 'Harus Menyertakan @gmail.com';
				login_confirm_alert[confirm].style.color = 'red';
			}
		}
	} else {
		login_confirm_alert[confirm].innerHTML = text + ' tidak boleh kosong';
		login_confirm_alert[confirm].style.color = 'red';
	}
}

function focus_outline(confirm) {
	login_input[confirm].style.borderColor = '#dbd7d7';
}

function blur_outline(confirm, text) {
	if (login_input[confirm].value != '') {
		login_confirm_alert[confirm].innerHTML = '';
	} else {
		login_confirm_alert[confirm].style.color = 'red';
		login_input[confirm].style.borderColor = 'red';
		login_confirm_alert[confirm].innerHTML = text + ' tidak boleh kosong';
	}
}

function slide_bottom_image(slide) {
	product_image_getImg[slide_image.indexOf(1)].style.borderColor = '#dbd7d7';
	product_image_getImg[slide].style.borderColor = '#ea8117';
	if (slide > slide_image.indexOf(1)) {
		for (let i = 0; i < slide; i++) {
			image_slide[i].style.transition = '0.6s';
			image_slide[i].style.marginLeft = '-100%';
		}
		if (slide_image[0] == 1) {
			btn_slide_left.style.display = 'block';
		}
		slide_image[slide_image.indexOf(1)] = 0;
		slide_image[slide] = 1;
		if (slide_image[image_slide.length - 1] == 1) {
			btn_slide_right.style.display = 'none';
		}
	} else if (slide < slide_image.indexOf(1)) {
		for (let i = slide_image.indexOf(1); i >= slide; i--) {
			image_slide[i].style.transition = '0.6s';
			image_slide[i].style.marginLeft = '0%';
		}
		if (slide_image[image_slide.length - 1] == 1) {
			btn_slide_right.style.display = 'block';
		}
		slide_image[slide_image.indexOf(1)] = 0;
		slide_image[slide] = 1;
		if (slide_image[0] == 1) {
			btn_slide_left.style.display = 'none';
		}
	}
}

function slide_bottom(slide) {
	button_slide_bottom[slide_image.indexOf(1)].style.backgroundColor = '#dbd7d7';
	button_slide_bottom[slide].style.backgroundColor = '#ea8117';
	if (slide > slide_image.indexOf(1)) {
		for (let i = 0; i < slide; i++) {
			image_slide[i].style.transition = '0.6s';
			image_slide[i].style.marginLeft = '-100%';
		}
		if (slide_image[0] == 1) {
			btn_slide_left.style.display = 'block';
		}
		slide_image[slide_image.indexOf(1)] = 0;
		slide_image[slide] = 1;
		if (slide_image[image_slide.length - 1] == 1) {
			btn_slide_right.style.display = 'none';
		}
	} else if (slide < slide_image.indexOf(1)) {
		for (let i = slide_image.indexOf(1); i >= slide; i--) {
			image_slide[i].style.transition = '0.6s';
			image_slide[i].style.marginLeft = '0%';
		}
		if (slide_image[image_slide.length - 1] == 1) {
			btn_slide_right.style.display = 'block';
		}
		slide_image[slide_image.indexOf(1)] = 0;
		slide_image[slide] = 1;
		if (slide_image[0] == 1) {
			btn_slide_left.style.display = 'none';
		}
	}
}

function search_history_product() {
	search_history.style.display = 'block';
}

function search_blur_product() {
	if (hover_search == false) {
		search_history.style.display = 'none';
	}
}

function showPrice(values, total) {
	prices = price[values].value;
	all_total = prices * total;
	price_detail[values].innerHTML = all_total;
	price_detail_input[values].value = all_total;
}

function show_option(option) {
	if (option_toggle[option] == false) {
		arrow_button[option].className = 'fa fa-chevron-up';
		option_down[option].classList.add('show-option');
		if (option_toggle[option_toggle.indexOf(true)] == true) {
			option.toggle[option_toggle.indexOf(true)] = false;
		}
		option_toggle[option] = true;
	} else {
		arrow_button[option].className = 'fa fa-chevron-down';
		option_down[option].classList.remove('show-option');
		option_toggle[option] = false;
	}
}

function hidden_option(option) {
	if (hover_select == false) {
		arrow_button[option].className = 'fa fa-chevron-down';
		option_down[option].classList.remove('show-option');
		option_toggle[option] = false;
	}
}

function update_notif() {
	if (update_notif_box.length > 1) {
		for (let i = 0; i < update_notif_box.length; i++) {
			update_notif_box[i].classList.add('border-active');
		}
	}
}

function PreviewImage() {
	var file_avatar = document.querySelector('#file_avatar');
	var edit_avatar = document.querySelector('.edit-avatar');
	FReader.readAsDataURL(file_avatar.files[0]);
	FReader.onload = function(e) {
		edit_avatar.src = e.target.result;
	};
}

// for (let j = 0; j < 4; j++) {
// 	for (let i = 0; i < j; i--) {
// 		console.log(j, i);
// 	}
// }

// auto_slide_image_left();

// function auto_slide_image_left() {
// 	for (let j = 0; j < image_slide.length; j++) {
// 		setTimeout(function() {
// 			for (let i = 0; i < j; i++) {
// 				button_slide_bottom[slide_image.indexOf(1)].style.backroundColor = '#dbd7d7';
// 				button_slide_bottom[i].style.backgroundColor = '#ea8117';
// 				image_slide[i].style.transition = '0.6s';
// 				image_slide[i].style.marginLeft = '-100%';
// 				console.log(slide_image);
// 				console.log(j, i);
// 			}
// 			if (j <= 3) {
// 				slide_image[j] = 0;
// 				slide_image[j + 1] = 1;
// 			} else {
// 				for (let i = j; i > 0; i--) {
// 					console.log(i);
// 					button_slide_bottom[slide_image.indexOf(1)].style.backroundColor = '#dbd7d7';
// 					button_slide_bottom[i].style.backgroundColor = '#ea8117';
// 					image_slide[i].style.transition = '0.6s';
// 					image_slide[i].style.marginLeft = '-100%';
// 					console.log(slide_image);
// 				}
// 			}
// 		}, j * 3000);
// 	}
// }

// function auto_slide_image_right() {
// 	for (let i = 0; image_slide.length > i; i--) {
// 		slide_image[i] = 1;
// 		slide_image[slide_image.indexOf(1)] = 0;
// 		setTimeout(function() {
// 			button_slide_bottom[slide_image.indexOf(1)].style.backgroundColor = '#dbd7d7';
// 			button_slide_bottom[i].style.backgroundColor = '#ea8117';
// 			image_slide[i].style.transition = '0.6s';
// 			image_slide[i].style.marginLeft = '0%';
// 		}, i * 2000);
// 		if (i == 3) {
// 			i = 3;
// 		}
// 	}
// }

// showPrice(0, 2);
