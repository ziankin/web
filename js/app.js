window.onload = function () {

	// Выбираем кнопку
	const btn = document.querySelector(".main__btn");
	// Выбираем настройки темы из localStorage
	const currentTheme = localStorage.getItem("theme");
	// Если текущая тема в localStorage равна "dark"…
	if (currentTheme == "act-color") {
		// …тогда мы используем класс .dark-theme
		document.body.classList.add("act-color");
	}

	// Отслеживаем щелчок по кнопке
	btn.addEventListener("click", function () {
		// Переключаем класс .dark-theme при каждом щелчке
		document.body.classList.toggle("act-color");
		// Допустим, тема светлая
		let theme = "light";
		// Если <body> содержит класс .dark-theme…
		if (document.body.classList.contains("act-color")) {
			// …тогда делаем тему тёмной
			theme = "act-color";
		}
		// После чего сохраняем выбор в localStorage
		localStorage.setItem("theme", theme);
	});

};






