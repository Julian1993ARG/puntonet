using Serenity.Navigation;
using MyPages = Puntonet.Parameters.Pages;

[assembly: NavigationLink(int.MaxValue, "Parameters/Accesories", typeof(MyPages.AccesoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Parameters/Clothes", typeof(MyPages.ClothesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Parameters/Colors", typeof(MyPages.ColorsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Parameters/Person Accesories", typeof(MyPages.PersonAccesoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Parameters/Person Clothes", typeof(MyPages.PersonClothesController), icon: null)]
