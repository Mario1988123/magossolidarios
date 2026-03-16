import { useState, useEffect } from "react";
import { Lock, Trash2, Download } from "lucide-react";

interface Submission {
  tipo: string;
  fecha: string;
  nombre?: string;
  email?: string;
  telefono?: string;
  cantidad?: number;
  anonimo?: boolean;
  mensaje?: string;
  colaborarComo?: string;
  tipoEvento?: string;
  fechaEvento?: string;
  apellidos?: string;
  direccion?: string;
}

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<string>("todos");

  const handleLogin = () => {
    if (password === "DANA2024") {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (authenticated) {
      const stored = JSON.parse(localStorage.getItem("ms_submissions") || "[]");
      setSubmissions(stored);
    }
  }, [authenticated]);

  const filtered = filter === "todos" ? submissions : submissions.filter((s) => s.tipo === filter);

  const handleDelete = (index: number) => {
    const realIndex = submissions.indexOf(filtered[index]);
    const updated = [...submissions];
    updated.splice(realIndex, 1);
    setSubmissions(updated);
    localStorage.setItem("ms_submissions", JSON.stringify(updated));
  };

  const handleExport = () => {
    const csv = [
      ["Tipo", "Fecha", "Nombre", "Email", "Teléfono", "Cantidad", "Anónimo", "Mensaje", "Colaborar como", "Tipo evento", "Fecha evento"].join(";"),
      ...filtered.map((s) =>
        [s.tipo, s.fecha, s.nombre || "", s.email || "", s.telefono || "", s.cantidad || "", s.anonimo ? "Sí" : "No", s.mensaje || "", s.colaborarComo || "", s.tipoEvento || "", s.fechaEvento || ""].join(";")
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "magos_solidarios_registros.csv";
    a.click();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="bg-card rounded-lg p-8 border border-border shadow-card max-w-sm w-full text-center">
          <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Área Privada</h1>
          <p className="font-body text-muted-foreground text-sm mb-6">Introduce la contraseña para acceder.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Contraseña"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 mb-4"
          />
          {error && <p className="font-body text-accent text-sm mb-4">Contraseña incorrecta</p>}
          <button onClick={handleLogin} className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
            Acceder
          </button>
          <a href="/" className="block mt-4 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Volver a la web
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Panel de Registros</h1>
            <p className="font-body text-muted-foreground text-sm">{submissions.length} registros totales</p>
          </div>
          <div className="flex gap-3">
            <button onClick={handleExport} className="flex items-center gap-2 bg-primary/10 text-primary font-body text-sm px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
              <Download className="w-4 h-4" /> Exportar CSV
            </button>
            <a href="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors px-4 py-2">
              ← Volver
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["todos", "contacto", "colaborar", "contratar", "donativo"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-body text-sm px-4 py-2 rounded-full border transition-all capitalize ${
                filter === f
                  ? "bg-gradient-gold text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="bg-card rounded-lg p-12 border border-border text-center">
            <p className="font-body text-muted-foreground">No hay registros aún.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg border border-border overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="font-body text-xs text-muted-foreground font-semibold text-left px-4 py-3">Tipo</th>
                  <th className="font-body text-xs text-muted-foreground font-semibold text-left px-4 py-3">Fecha</th>
                  <th className="font-body text-xs text-muted-foreground font-semibold text-left px-4 py-3">Nombre</th>
                  <th className="font-body text-xs text-muted-foreground font-semibold text-left px-4 py-3">Email</th>
                  <th className="font-body text-xs text-muted-foreground font-semibold text-left px-4 py-3">Detalle</th>
                  <th className="font-body text-xs text-muted-foreground font-semibold text-left px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                    <td className="px-4 py-3">
                      <span className={`font-body text-xs px-2 py-1 rounded-full ${
                        s.tipo === "donativo" ? "bg-accent/20 text-accent" :
                        s.tipo === "colaborar" ? "bg-primary/20 text-primary" :
                        s.tipo === "contratar" ? "bg-blue-accent/20 text-blue-light" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {s.tipo}
                      </span>
                    </td>
                    <td className="font-body text-sm text-muted-foreground px-4 py-3">
                      {new Date(s.fecha).toLocaleDateString("es-ES")}
                    </td>
                    <td className="font-body text-sm text-foreground px-4 py-3">
                      {s.anonimo ? <span className="italic text-muted-foreground">Anónimo</span> : (s.nombre || "—")}
                    </td>
                    <td className="font-body text-sm text-muted-foreground px-4 py-3">{s.email || "—"}</td>
                    <td className="font-body text-sm text-muted-foreground px-4 py-3 max-w-[200px] truncate">
                      {s.cantidad ? `${s.cantidad},00 €` : s.mensaje || s.colaborarComo || s.tipoEvento || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => handleDelete(i)} className="text-muted-foreground hover:text-accent transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
