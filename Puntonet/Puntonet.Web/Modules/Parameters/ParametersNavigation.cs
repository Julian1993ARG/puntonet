using Serenity.Navigation;
using MyPages = Puntonet.Parameters.Pages;

[assembly: NavigationMenu(1000, "Parameters", icon: "fa-cogs")]
[assembly: NavigationLink(100, "Parameters/Accesories", typeof(MyPages.AccesoriesController), icon: "fa-suitcase")]
[assembly: NavigationLink(200, "Parameters/Clothes", typeof(MyPages.ClothesController), icon: "fa-tshirt")]
//[assembly: NavigationLink(int.MaxValue, "Parameters/Atributtes", typeof(MyPages.AtributtesPage), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Parameters/Colors", typeof(MyPages.ColorsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Parameters/Person Accesories", typeof(MyPages.PersonAccesoriesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Parameters/Person Clothes", typeof(MyPages.PersonClothesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Parameters/Person Atributtes", typeof(MyPages.PersonAtributtesPage), icon: null)]
