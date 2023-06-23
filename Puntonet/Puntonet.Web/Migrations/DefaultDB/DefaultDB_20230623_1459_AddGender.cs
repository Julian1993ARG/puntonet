using FluentMigrator;
using Microsoft.VisualBasic;

namespace Puntonet.Migrations.DefaultDB
{
    [Migration(20230623_1459)]
    public class DefaultDB_20230623_1459_AddGender : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Persons")
                .AddColumn("Gender").AsInt16().WithDefaultValue(1).NotNullable();
        }
    }
}