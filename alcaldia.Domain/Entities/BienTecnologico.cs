
namespace alcaldia.Domain.Entities;

public class BienTecnologico
{
    public int Id { get; set; }

    public string Placa { get; set; } = string.Empty;

    public string Nombre { get; set; } = string.Empty;

    public string? Marca { get; set; }

    public string? Modelo { get; set; }

    public string? Serial { get; set; }

    public string Estado { get; set; } = "Activo";
}
