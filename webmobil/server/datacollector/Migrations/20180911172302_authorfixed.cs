using Microsoft.EntityFrameworkCore.Migrations;

namespace datacollector.Migrations
{
    public partial class authorfixed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PicsumImageId",
                table: "PicsumImage",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "AuthorFullName",
                table: "Authors",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PicsumImageId",
                table: "PicsumImage");

            migrationBuilder.AlterColumn<int>(
                name: "AuthorFullName",
                table: "Authors",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
