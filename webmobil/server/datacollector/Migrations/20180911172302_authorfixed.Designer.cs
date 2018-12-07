﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using datacollector.PicsumContext;

namespace datacollector.Migrations
{
    [DbContext(typeof(PicsumDbContext))]
    [Migration("20180911172302_authorfixed")]
    partial class authorfixed
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.2-rtm-30932")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("datacollector.Entity.Author", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorFullName");

                    b.Property<string>("AuthorUrl");

                    b.HasKey("Id");

                    b.ToTable("Authors");
                });

            modelBuilder.Entity("datacollector.Entity.PicsumImage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AuthorForeignKey");

                    b.Property<string>("FileName");

                    b.Property<string>("Format");

                    b.Property<int>("Height");

                    b.Property<int>("PicsumImageId");

                    b.Property<string>("PostUrl");

                    b.Property<int>("Width");

                    b.HasKey("Id");

                    b.HasIndex("AuthorForeignKey");

                    b.ToTable("PicsumImage");
                });

            modelBuilder.Entity("datacollector.Entity.PicsumImage", b =>
                {
                    b.HasOne("datacollector.Entity.Author", "Author")
                        .WithMany("PicsumImages")
                        .HasForeignKey("AuthorForeignKey");
                });
#pragma warning restore 612, 618
        }
    }
}
