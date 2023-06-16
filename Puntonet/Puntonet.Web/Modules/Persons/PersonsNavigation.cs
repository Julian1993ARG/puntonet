using Serenity.Navigation;
using MyPages = Puntonet.Persons.Pages;

[assembly: NavigationLink(int.MaxValue, "Persons/Persons", typeof(MyPages.PersonsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Persons/Person Atributtes", typeof(MyPages.PersonAtributtesPage), icon: null)]