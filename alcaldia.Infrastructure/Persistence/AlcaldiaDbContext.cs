
using alcaldia.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace alcaldia.Infrastructure.Persistence;

public class AlcaldiaDbContext : DbContext  
{
    public AlcaldiaDbContext(
        DbContextOptions<AlcaldiaDbContext> options
    ) : base(options)
    {
    }
    

    public DbSet<BienTecnologico> BienesTecnologicos
        => Set<BienTecnologico>();

    protected override void OnModelCreating(
        ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<BienTecnologico>(entity =>
        {
            entity.ToTable("bienes_tecnologicos");

            entity.HasKey(x => x.Id);

            entity.Property(x => x.Placa)
                .HasMaxLength(50)
                .IsRequired();

            entity.HasIndex(x => x.Placa)
                .IsUnique();

            entity.Property(x => x.Nombre)
                .HasMaxLength(150)
                .IsRequired();

            entity.Property(x => x.Marca)
                .HasMaxLength(100);

            entity.Property(x => x.Modelo)
                .HasMaxLength(100);

            entity.Property(x => x.Serial)
                .HasMaxLength(150);

            entity.Property(x => x.Estado)
                .HasMaxLength(30)
                .IsRequired();
        });
    }
}
