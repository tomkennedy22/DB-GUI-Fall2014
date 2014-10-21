
var allIngredients = getIngredients();

function getIngredients(){

	console.log("in get Ingredients");
	$.ajax({
        type: "GET",
        url: "ingredientList.csv",
        dataType: "text/csv",
        success: function (result) {
            console.log(result);
            //alert("done!"+ csvData.getAllResponseHeaders())
        }
    });
}


$(function() {
   var availableTags = [
      "almond",
"all-purpose flour",
"amaretti",
"anchovy",
"anise",
"apple juice",
"artichoke",
"artichoke heart",
"artichoke",
"asparagus",
"asparagus spear","asparagus",
"aubergine",
"avocado",
"bacon",
"baguette",
"baked beans",
"balsamic vinegar",
"bamboo",
"banana",
"bap",
"basil",
"bay leaf",
"bay leaves","bay leaf",
"bean",
"beef",
"beef mince",
"beef brisket",
"beef stock",
"bell pepper",
"berry",
"berries","berry",
"bicarbonate of soda",
"biscuit",
"biscuit",
"black olive",
"black pepper",
"black-eyed peas",
"blueberries","blueberry",
"blueberry",
"bonnet chilli",
"bouillon",
"bourbon",
"braising steak",
"bran",
"brandy",
"bread",
"breadcrumbs",
"bbq sauce",
"habanero sauce",
"brie",
"brine",
"broccoli",
"brown rice",
"brown sauce",
"brown sugar",
"buckwheat",
"buffalo",
"bun",
"butter",
"buttermilk",
"butternut",
"butternut squash",
"butterscotch",
"cabbage",
"cake",
"candy",
"candies","candy",
"cannellini",
"canola oil",
"caper",
"caramel",
"caraway seed",
"cardamom",
"carrot",
"carrot",
"cashew",
"caster sugar",
"cayenne pepper",
"celeriac",
"celery",
"cereal",
"champagne",
"chard",
"cheddar cheese",
"cheese",
"cherries","cherry",
"cherry",
"cherry tomatoe",
"chestnut",
"chicken",
"chicken breast",
"chicken drumstick",
"chicken stock",
"chicken thigh",
"chicken leg",
"chicken",
"chickpea",
"chicory",
"chile",
"chilli",
"chillies","chilli",
"chipotle",
"chip",
"chive",
"chive",
"chocolate",
"chop",
"choy",
"chutney",
"ciabatta",
"cider",
"cinnamon",
"clam",
"clarified butter",
"clove",
"cocoa",
"coconut",
"orange essence",
"almond essence",
"coconut milk",
"cod",
"coffee",
"coleslaw",
"condensed milk",
"coriander",
"coriander leaves",
"corn",
"cornflour",
"cornmeal",
"courgette",
"couscous",
"cranberries","cranberry",
"cranberry",
"cranberry juice",
"cream",
"single cream",
"double cream",
"sour cream",
"crﾏme fraiche",
"crisp",
"crust",
"creme de cassis",
"cucumber",
"cumin",
"custard",
"dijon mustard",
"dill",
"duck",
"edamame bean",
"egg",
"espresso",
"fennel",
"feta",
"fig",
"fillet steak",
"filo pastry",
"fish",
"flank",
"flour",
"focaccia",
"foie gras",
"fruit",
"fudge",
"garam masala",
"garlic",
"gelatine",
"gin",
"ginger",
"glucose",
"goat",
"goat's cheese",
"golden syrup",
"gorgonzola",
"gouda",
"grape",
"grapefruit",
"grape",
"grapeseed",
"green olive",
"green pepper",
"green",
"gruyere",
"gruyere cheese",
"haddock",
"ham",
"harissa",
"herbs",
"hoisin",
"hoisin sauce",
"honey",
"honeydew melon",
"horseradish",
"iceberg lettuce",
"icing sugar",
"jalapeno pepper",
"juice",
"julienne",
"kalamata olives",
"ketchup",
"kidney bean",
"lager",
"lamb",
"lard",
"lardons",
"lasagne",
"lavender",
"leek",
"lemon",
"lemongrass",
"lentil",
"lettuce",
"lime",
"limoncello",
"lobster",
"loin",
"lychee",
"macadamia nut",
"malt",
"mangetout",
"mango",
"mangoes","mango",
"maple syrup",
"marinara",
"marshmallow",
"marzano",
"mascarpone",
"mayonnaise",
"meat",
"melon",
"milk",
"mince",
"mint",
"miso soup",
"molasses",
"monterey jack",
"mozzarella",
"mushroom",
"mustard",
"new potato",
"noodle",
"nutella",
"nutmeg",
"nut",
"oat",
"oil",
"okra",
"olive oil",
"olive",
"onion",
"onion ring",
"orange",
"orange juice",
"oregano",
"oyster",
"pak choi",
"pancetta",
"panko",
"papaya",
"paprika",
"parma ham",
"parmesan",
"parmigiano",
"parmigiano-reggiano",
"parsley",
"parsnip",
"passion fruit",
"pasta",
"Pasta shell",
"pastry",
"pea",
"peach",
"peaches","peach",
"peanut",
"peanut",
"pear",
"pea",
"pecan",
"pecorino",
"penne",
"penne pasta",
"pepper",
"peppercorn",
"peppers",
"pesto",
"pickle",
"pickled gherkin",
"pickled onion",
"pickled red onion",
"pie",
"pimento pepper",
"pine nut",
"pineapple",
"pistachio",
"pita","pitta",
"pitta",
"pitted olive",
"pizza",
"plantain",
"plum",
"plum tomato",
"plum tomatoes","plum tomato",
"sun dried tomato","sun dried tomatoes",
"sun-dried tomato","sun-dried tomatoes",
"poblano",
"pod",
"polenta",
"pomegranate",
"popcorn",
"pork",
"Pork chop",
"porridge",
"potato",
"potatoes","potato",
"prawn",
"prosciutto",
"prosciutto ham",
"provolone",
"pumpkin",
"quail",
"radicchio",
"radish",
"radishes","radish",
"rapeseed oil",
"raspberries","raspberry",
"raspberry",
"red pepper",
"red onion",
"relish",
"rhubarb",
"rib",
"rice",
"ricotta",
"rocket",
"roll",
"rose",
"rosemary",
"russet",
"saffron",
"sage",
"sake",
"salad",
"salami",
"salmon",
"salmon flake",
"salsa",
"salt",
"sauce",
"sausage",
"savoy cabbage",
"scallop",
"schnapps",
"self raising flour",
"semolina",
"serrano ham",
"shallot",
"shaohsing",
"sherry",
"shiitake",
"shiitake mushroom",
"shortcrust pastry",
"sirloin",
"sirloin steak",
"slaw",
"smoky bacon",
"snapper",
"sourdough",
"soy sauce",
"spaghetti",
"spice",
"spinach",
"sponge",
"spring onion",
"sprout",
"squash",
"squid",
"sriracha",
"steak",
"stock",
"stout",
"strawberries",
"strawberry",
"stuffing",
"sugar",
"sultana",
"sunflower oil",
"sweet pepper",
"sweetcorn",
"sweets",
"swordfish",
"tangerine",
"tapioca",
"tarragon",
"tartar",
"tea",
"tequila",
"thyme",
"toast",
"toffee",
"tofu",
"tomatillos",
"tomato",
"tomato puree",
"tomatoes","tomato",
"tortilla",
"treacle",
"tuna steak",
"tuna",
"turkey",
"turkey breast",
"turkey thigh",
"turmeric",
"turnip",
"vanilla",
"vanilla essence",
"vanilla pod",
"veal",
"vegetable oil",
"vermouth",
"vinaigrette",
"vinegar",
"white wine vinegar",
"red wine vinegar",
"vodka",
"waffle",
"walnut",
"watercress",
"watermelon",
"white rice",
"wholegrain pasta",
"wine",
"worcestershire sauce",
"yeast",
"yellow pepper",
"greek yoghurt",
"natural yoghurt",
"yoghurt",
"yogurt",
"red onion"
    ];
    $( "#textIngredient" ).autocomplete({
      source: availableTags
    });
  });


console.log("in action");

$('#addIngredient').click(function(){
	var inputted = $('#textIngredient').val();
	console.log(inputted);
	$('#textIngredient').val("");	

	if(inputted != ""){
		$('#ingredientList').append("<li class='ingredient'>"+ inputted + "</li>");
	}
});

$("#search").click(function(){
	console.log("go to results");
	window.location.href = "results.html"

});

$(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
});

$("#search").hover(
	function(){
		$(this).css("color","#8aa1ab");
},  function(){
		$(this).css("color","white");
});

$(function() {
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5"
      }
})});

