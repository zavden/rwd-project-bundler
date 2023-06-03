"use strict";
(function () {
    const nav = document.getElementById("nav");
    const menu = [
        {
            title: "Home",
            submenu: []
        },
        {
            title: "Courses",
            submenu: [
                {
                    title: "JavaScript",
                    submenu: [
                        {
                            title: "Basic",
                            submenu: []
                        },
                        {
                            title: "OOP",
                            submenu: []
                        },
                        {
                            title: "NodeJS",
                            submenu: [
                                {
                                    title: "NPM",
                                    submenu: []
                                },
                                {
                                    title: "YARN",
                                    submenu: []
                                },
                                {
                                    title: "Deno",
                                    submenu: []
                                },
                            ]
                        },
                        {
                            title: "TypeScript",
                            submenu: []
                        },
                    ]
                },
                {
                    title: "CSS",
                    submenu: [
                        {
                            title: "Flexbox",
                            submenu: []
                        },
                        {
                            title: "Grid",
                            submenu: []
                        },
                        {
                            title: "Animations",
                            submenu: []
                        },
                    ]
                },
                {
                    title: "VueJS",
                    submenu: [
                        {
                            title: "Option API",
                            submenu: []
                        },
                        {
                            title: "Composition API",
                            submenu: []
                        },
                        {
                            title: "Composition-Setup",
                            submenu: []
                        },
                    ]
                },
                {
                    title: "Java",
                    submenu: []
                },
            ]
        },
        {
            title: "Prices",
            submenu: []
        }
    ];
    const getMenu = (menu, addSubmenu = false) => {
        const ul = document.createElement("ul");
        ul.classList.add("menu");
        if (addSubmenu) {
            ul.classList.add("submenu");
        }
        menu.forEach(e => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            li.classList.add("item");
            a.classList.add("link");
            a.innerText = e.title;
            li.appendChild(a);
            ul.appendChild(li);
            if (e.submenu.length > 0) {
                li.appendChild(getMenu(e.submenu, true));
            }
        });
        return ul;
    };
    nav.appendChild(getMenu(menu));
})();
