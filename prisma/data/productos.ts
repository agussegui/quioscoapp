const productos = [
	{
		nombre : "Café Caramel con Chocolate",
		precio : 1500,
		imagen : "cafe_01",
		categoriaId : 1
	},
	{
		nombre : "Café Frio con Chocolate Grande",
		precio : 1650,
		imagen : "cafe_02",
		categoriaId : 1
	},
	{
		nombre : "Latte Frio con Chocolate Grande",
		precio : 1550,
		imagen : "cafe_03",
		categoriaId : 1
	},
	{
		nombre : "Latte Frio con Chocolate Grande",
		precio : 1550,
		imagen : "cafe_04",
		categoriaId : 1
	},
	{
		nombre : "Malteada Fria con Chocolate Grande",
		precio : 1300,
		imagen : "cafe_05",
		categoriaId : 1
	},
	{
		nombre : "Café Mocha Caliente Chico",
		precio : 1750,
		imagen : "cafe_06",
		categoriaId : 1
	},
	{
		nombre : "Café Mocha Caliente Grande con Chocolate",
		precio : 1900,
		imagen : "cafe_07",
		categoriaId : 1
	},
	{
		nombre : "Café Caliente Capuchino Grande",
		precio : 1250,
		imagen : "cafe_08",
		categoriaId : 1
	},
	{
		nombre : "Café Mocha Caliente Mediano",
		precio : 1450,
		imagen : "cafe_09",
		categoriaId : 1
	},
	{
		nombre : "Café Mocha Frio con Caramelo Mediano",
		precio : 1450,
		imagen : "cafe_10",
		categoriaId : 1
	},
	{
		nombre : "Café Mocha Frio con Chocolate Mediano",
		precio : 1500,
		imagen : "cafe_11",
		categoriaId : 1
	},
	{
		nombre : "Café Espresso",
		precio : 1100,
		imagen : "cafe_12",
		categoriaId : 1
	},
	{
		nombre : "Café Capuchino Grande con Caramelo",
		precio : 1900,
		imagen : "cafe_13",
		categoriaId : 1
	},
	{
		nombre : "Café Caramelo Grande",
		precio : 1750,
		imagen : "cafe_14",
		categoriaId : 1
	},
	{
		nombre : "Paquete de 3 donas de Chocolate",
		precio : 1425,
		imagen : "donas_01",
		categoriaId : 4
	},
	{
		nombre : "Paquete de 3 donas Glaseadas",
		precio : 950,
		imagen : "donas_02",
		categoriaId : 4
	},
	{
		nombre : "Dona de Fresa ",
		precio : 250,
		imagen : "donas_03",
		categoriaId : 4
	},
	{
		nombre : "Dona con Galleta de Chocolate ",
		precio : 300,
		imagen : "donas_04",
		categoriaId : 4
	},
	{
		nombre : "Dona glass con Chispas Sabor Fresa ",
		precio : 250,
		imagen : "donas_05",
		categoriaId : 4
	},
	{
		nombre : "Dona glass con Chocolate ",
		precio : 250,
		imagen : "donas_06",
		categoriaId : 4
	},
	{
		nombre : "Dona de Chocolate con MÁS Chocolate ",
		precio : 19.9,
		imagen : "donas_07",
		categoriaId : 4
	},
	{
		nombre : "Paquete de 3 donas de Chocolate ",
		precio : 950,
		imagen : "donas_08",
		categoriaId : 4
	},
	{
		nombrex : "Paquete de 3 donas con Vainilla y Chocolate ",
		preciox : 950,
		imagenx : "donas_09",
		categoriaId : 4
	},
	{
		nombre : "Paquete de 6 Donas",
		precio : 1850,
		imagen : "donas_10",
		categoriaId : 4
	},
	{
		nombre : "Paquete de 3 Variadas",
		precio : 1000,
		imagen : "donas_11",
		categoriaId : 4
	},
	{
		nombre : "Dona Natural con Chocolate",
		precio : 850,
		imagen : "donas_12",
		categoriaId : 4
	},
	{
		nombre : "Paquete de 3 Donas de Chocolate con Chispas",
		precio : 950,
		imagen : "donas_13",
		categoriaId : 4
	},
	{
		nombre : "Dona Chocolate y Coco",
		precio : 275,
		imagen : "donas_14",
		categoriaId : 4
	},
	{
		nombre : "Paquete Galletas x6 de Chocolate",
		precio : 1800,
		imagen : "galletas_01",
		categoriaId : 6
	},
	{
		nombre : "Paquete Galletas x6 de Chocolate y Avena",
		precio : 2000,
		imagen : "galletas_02",
		categoriaId : 6
	},
	{
		nombre : "Paquete de Muffins x6 de Vainilla",
		precio : 2250,
		imagen : "galletas_03",
		categoriaId : 6
	},
	{
		nombre : "Paquete de 4 Galletas de Avena",
		precio : 1550,
		imagen : "galletas_04",
		categoriaId : 6
	},
	{
		nombre : "Galletas de Mantequilla x6 Variadas",
		precio : 1900,
		imagen : "galletas_05",
		categoriaId : 6
	},
	{
		nombre : "Macarons x6 mixtos",
		precio : 6500,
		imagen : "galletas_06",
		categoriaId : 6
	},
	{
		nombre : "Hamburguesa Sencilla",
		precio : 4500,
		imagen : "hamburguesas_01",
		categoriaId : 2
	},
	{
		nombre : "Hamburguesa de Pollo",
		precio : 4850,
		imagen : "hamburguesas_02",
		categoriaId : 2
	},
	{
		nombre : "Hamburguesa de Pollo y Chili",
		precio : 5000,
		imagen : "hamburguesas_03",
		categoriaId : 2
	},
	{
		nombre : "Hamburguesa Queso y  Pepinos",
		precio : 4950,
		imagen : "hamburguesas_04",
		categoriaId : 2
	},
	{
		nombre : "Hamburguesa Cuarto de Libra",
		precio : 5500,
		imagen : "hamburguesas_05",
		categoriaId : 2
	},
	{
		nombre : "Hamburguesa Doble Queso",
		precio : 5250,
		imagen : "hamburguesas_06",
		categoriaId : 2
	},
	{
		nombre : "Hot Dog Especial",
		precio : 3500,
		imagen : "hamburguesas_07",
		categoriaId : 2
	},
	{
		nombre : "Paquete 2 Hot Dogs",
		precio : 6000,
		imagen : "hamburguesas_08",
		categoriaId : 2
	},
	{
		nombre : "4 Rebanadas de Pay de Limon",
		precio : 6750,
		imagen : "pastel_01",
		categoriaId : 5
	},
	{
		nombre : "Waffle Especial",
		precio : 4550,
		imagen : "pastel_02",
		categoriaId : 5
	},
	{
		nombre : "Croissants De la casa x3",
		precio : 1850,
		imagen : "pastel_03",
		categoriaId : 5
	},
	{
		nombre : "Pay de Limon",
		precio : 1800,
		imagen : "pastel_04",
		categoriaId : 5
	},
	{
		nombre : "Pastel de Chocolate",
		precio : 2750,
		imagen : "pastel_05",
		categoriaId : 5
	},
	{
		nombre : "Cuadrado Chocotorta ",
		precio : 3500,
		imagen : "pastel_06",
		categoriaId : 5
	},
	{
		nombre : "Pizza Spicy con Doble Queso",
		precio : 7500,
		imagen : "pizzas_01",
		categoriaId : 3
	},
	{
		nombre : "Pizza Jamón y Queso",
		precio : 5000,
		imagen : "pizzas_02",
		categoriaId : 3
	},
	{
		nombre : "Pizza Doble Queso",
		precio : 5500,
		imagen : "pizzas_03",
		categoriaId: 3
	},
	{
		nombre : "Pizza Especial de la Casa",
		precio : 8250,
		imagen : "pizzas_04",
		categoriaId : 3
	},
	{
		nombre : "Pizza Salchicha",
		precio : 7250,
		imagen : "pizzas_05",
		categoriaId : 3
	},
	{
		nombre : "Pizza Hawaiana",
		precio : 6500,
		imagen : "pizzas_06",
		categoriaId : 3
	},
	{
		nombre : "Pizza Tocino",
		precio : 6250,
		imagen : "pizzas_07",
		categoriaId : 3
	},
	{
		nombre : "Pizza Vegetales y Queso",
		precio : 5500,
		imagen : "pizzas_08",
		categoriaId : 3
	},
	{
		nombre : "Pizza Pepperoni y Queso",
		precio : 6000,
		imagen : "pizzas_09",
		categoriaId : 3
	},
	{
		nombre : "Pizza Aceitunas y Queso",
		precio : 5250,
		imagen : "pizzas_10",
		categoriaId : 3
	},
	{
		nombre : "Pizza Queso, Jamón y Champiñones",
		precio : 5750,
		imagen : "pizzas_11",
		categoriaId : 3
	},
	{
		nombre: "Gaseosa Coca-Cola 500ml",
		precio: 1250,
		imagen: "gaseosa_01",
		categoriaId : 7
	},
	{
		nombre : "Gaseosa Sprite 500ml",
		precio : 1200,
		imagen : "gaseosa_02",
		categoriaId : 7
	},
	{
		nombre : "Gaseosa Fanta 500ml",
		precio : 1200,
		imagen : "gaseosa_03",
		categoriaId : 7
	},
	{
		nombre : "Gaseosa Pepsi 500ml",
		precio : 1150,
		imagen : "gaseosa_04",
		categoriaId : 7
	},
	{
		nombre : "Gaseosa Seven-up 500ml",
		precio : 1150,
		imagen : "gaseosa_05",
		categoriaId : 7
	},
	{
		nombre : "Agua 500ml",
		precio : 700,
		imagen : "gaseosa_06",
		categoriaId : 7
	}
]

export {
    productos 
}