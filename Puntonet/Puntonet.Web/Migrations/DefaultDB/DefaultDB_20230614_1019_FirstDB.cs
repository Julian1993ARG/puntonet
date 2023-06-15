using FluentMigrator;
using Microsoft.VisualBasic;

namespace Puntonet.Migrations.DefaultDB
{
    [Migration(20230614_1019)]
    public class DefaultDB_20230614_1019_FirstDB : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Persons")
                 .WithColumn("IdPerson").AsInt32().Identity().PrimaryKey().NotNullable()
                 .WithColumn("Name").AsString(200).NotNullable()
                 .WithColumn("Address").AsString(300)
                 .WithColumn("Phone").AsString(20)
                 .WithColumn("[Identity]").AsString(12).NotNullable().Unique()
                 .WithColumn("Photo").AsString(200);

            Insert.IntoTable("Persons").Row(new
            {
                Name = "John Doe",
                Address = "Av. 6 de Diciembre N34-120",
                Phone = "0999999999",
                Identity = "1717171717",
                Photo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }).Row(new
            {
                Name = "Jane Doe",
                Address = "Av. 6 de Diciembre N34-120",
                Phone = "0999999999",
                Identity = "1818181818",
                Photo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }).Row(new
            {
                Name = "John Smith",
                Address = "Av. 6 de Diciembre N34-120",
                Phone = "0999999999",
                Identity = "1919191919",
                Photo = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            });

            //**************************************************************************************
            Create.Table("Atributes")
                .WithColumn("IdAtribute").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Description").AsString(200).NotNullable()
                .WithColumn("Value").AsString(200).NotNullable();

            Insert.IntoTable("Atributes").Row(new
            {
                Description = "Pesca",
                Value = "Deportiva"
            }).Row(new
            {
                Description = "Deporte",
                Value = "Tenis"
            }).Row(new
            {
                Description = "Deporte",
                Value = "Correr"
            }).Row(new
            {
                Description = "Lectura",
                Value = "Harry Potter"
            }).Row(new
            {
                Description = "Deporte",
                Value = "Fulbo"
            }).Row(new
            {
                Description = "Hobby",
                Value = "Cocinar"
            });

            //**************************************************************************************

            Create.Table("PersonAtributte")
                .WithColumn("IdPersonAtributte").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("IdPerson").AsInt32().NotNullable()
                    .ForeignKey("FK_dbo_PersonAtributte_IdPerson", "Persons", "IdPerson")
                .WithColumn("IdAtribute").AsInt32().NotNullable()
                    .ForeignKey("FK_dbo_PersonAtributte_IdAtribute", "Atributes", "IdAtribute");

            Insert.IntoTable("PersonAtributte").Row(new
            {
                IdPerson = 1,
                IdAtribute = 1
            }).Row(new
            {
                IdPerson = 1,
                IdAtribute = 2
            }).Row(new
            {
                IdPerson = 1,
                IdAtribute = 3
            }).Row(new
            {
                IdPerson = 2,
                IdAtribute = 4
            }).Row(new
            {
                IdPerson = 2,
                IdAtribute = 5
            }).Row(new
            {
                IdPerson = 2,
                IdAtribute = 6
            }).Row(new
            {
                IdPerson = 3,
                IdAtribute = 1
            }).Row(new
            {
                IdPerson = 3,
                IdAtribute = 2
            }).Row(new
            {
                IdPerson = 3,
                IdAtribute = 3
            }).Row(new
            {
                IdPerson = 3,
                IdAtribute = 4
            }).Row(new
            {
                IdPerson = 3,
                IdAtribute = 5
            }).Row(new
            {
                IdPerson = 3,
                IdAtribute = 6
            });

            //**************************************************************************************
            Create.Table("Accesories")
                .WithColumn("IdAccesory").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Description").AsString(200).NotNullable();

            Insert.IntoTable("Accesories").Row(new
            {
                Description = "Citurón"
            }).Row(new
            {
                Description = "Gorra"
            }).Row(new
            {
                Description = "Gorrita de invierno"
            }).Row(new
            {
                Description = "Gafas"
            }).Row(new
            {
                Description = "Reloj"
            }).Row(new
            {
                Description = "Pulsera"
            });

            //**************************************************************************************
            Create.Table("PersonAccesories")
                .WithColumn("IdPersonAccesory").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("IdPerson").AsInt32().NotNullable()
                    .ForeignKey("FK_dbo_PersonAccesories_IdPerson", "Persons", "IdPerson")
                .WithColumn("IdAccesory").AsInt32().NotNullable()
                    .ForeignKey("FK_dbo_PersonAccesories_IdAccesory", "Accesories", "IdAccesory");

            Insert.IntoTable("PersonAccesories").Row(new
            {
                IdPerson = 1,
                IdAccesory = 1
            }).Row(new
            {
                IdPerson = 1,
                IdAccesory = 2
            }).Row(new
            {
                IdPerson = 1,
                IdAccesory = 3
            }).Row(new
            {
                IdPerson = 2,
                IdAccesory = 4
            }).Row(new
            {
                IdPerson = 2,
                IdAccesory = 5
            }).Row(new
            {
                IdPerson = 2,
                IdAccesory = 6
            }).Row(new
            {
                IdPerson = 3,
                IdAccesory = 1
            }).Row(new
            {
                IdPerson = 3,
                IdAccesory = 2
            }).Row(new
            {
                IdPerson = 3,
                IdAccesory = 3
            }).Row(new
            {
                IdPerson = 3,
                IdAccesory = 4
            }).Row(new
            {
                IdPerson = 3,
                IdAccesory = 5
            }).Row(new
            {
                IdPerson = 3,
                IdAccesory = 6
            });


            //**************************************************************************************

            Create.Table("Colors")
                .WithColumn("IdColor").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Description").AsString(200).NotNullable();

            Insert.IntoTable("Colors").Row(new
            {
                Description = "Rojo"
            }).Row(new
            {
                Description = "Verde"
            }).Row(new
            {
                Description = "Negro"
            }).Row(new
            {
                Description = "Azul"
            }).Row(new
            {
                Description = "Amarillo"
            }).Row(new
            {
                Description = "Morado"
            });

            //**************************************************************************************

            Create.Table("Clothes")
                .WithColumn("IdClothe").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Description").AsString(200).NotNullable()
                .WithColumn("IdColor").AsInt32().NotNullable()
                    .ForeignKey("FK_dbo_ClotheColor_IdColor", "Colors", "IdColor");


            Insert.IntoTable("Clothes")
                .Row(new
                {
                    Description = "Jeans",
                    IdColor = 1
                })
                .Row(new
                {
                    Description = "Pollera",
                    IdColor = 1
                })
                .Row(new
                {
                    Description = "Remera",
                    IdColor = 5
                })
                .Row(new
                {
                    Description = "Camisa",
                    IdColor = 4
                })
                .Row(new
                {
                    Description = "Buzo",
                    IdColor = 2
                })
                .Row(new
                {
                    Description = "Zapatilla",
                    IdColor = 3
                })
                .Row(new
                {
                    Description = "Sweater",
                    IdColor = 5
                });

            //**************************************************************************************

            Create.Table("PersonClothes")
                .WithColumn("IdPersonClothe").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("IdPerson").AsInt32().NotNullable()
                    .ForeignKey("FK_dbo_PersonClothes_IdPerson", "Persons", "IdPerson")
                .WithColumn("IdClothe").AsInt32().NotNullable()
                    .ForeignKey("FK_dbo_PersonClothes_IdClothe", "Clothes", "IdClothe");

            Insert.IntoTable("PersonClothes").Row(new
            {
                IdPerson = 1,
                IdClothe = 1
            }).Row(new
            {
                IdPerson = 1,
                IdClothe = 2
            }).Row(new
            {
                IdPerson = 1,
                IdClothe = 3
            }).Row(new
            {
                IdPerson = 2,
                IdClothe = 4
            }).Row(new
            {
                IdPerson = 2,
                IdClothe = 5
            }).Row(new
            {
                IdPerson = 2,
                IdClothe = 6
            }).Row(new
            {
                IdPerson = 3,
                IdClothe = 1
            }).Row(new
            {
                IdPerson = 3,
                IdClothe = 2
            }).Row(new
            {
                IdPerson = 3,
                IdClothe = 3
            }).Row(new
            {
                IdPerson = 3,
                IdClothe = 4
            }).Row(new
            {
                IdPerson = 3,
                IdClothe = 5
            }).Row(new
            {
                IdPerson = 3,
                IdClothe = 6
            });

        }
    }
}