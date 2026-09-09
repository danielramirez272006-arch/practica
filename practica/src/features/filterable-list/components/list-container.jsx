import { useState } from 'react';

const STATIC_TECHNOLOGIES = [
  { id: 1, name: 'React', category: 'Frontend', level: 'Avanzado' },
  { id: 2, name: 'TypeScript', category: 'Lenguaje', level: 'Intermedio' },
  { id: 3, name: 'Vite', category: 'Bundler', level: 'Avanzado' },
  { id: 4, name: 'Tailwind CSS', category: 'Estilos', level: 'Avanzado' },
  { id: 5, name: 'Node.js', category: 'Backend', level: 'Intermedio' },
  { id: 6, name: 'Next.js', category: 'Framework', level: 'Intermedio' },
  { id: 7, name: 'GraphQL', category: 'API', level: 'Principiante' },
  { id: 8, name: 'PostgreSQL', category: 'Base de Datos', level: 'Intermedio' }
];

export const ListContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = STATIC_TECHNOLOGIES.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="list-container"
      style={{
        padding: '1.5rem',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        background: '#ffffff',
        maxWidth: '420px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}
    >
      <h3 style={{ margin: '0 0 1rem', fontSize: '1.25rem', color: '#1e293b' }}>
        Reto 2: Lista con Filtros
      </h3>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por tecnología o categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.65rem 0.85rem',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            boxSizing: 'border-box',
            outline: 'none',
            fontSize: '0.9rem'
          }}
        />
      </div>

      {filteredItems.length > 0 ? (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxHeight: '260px',
            overflowY: 'auto'
          }}
        >
          {filteredItems.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.65rem 0.85rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '1px solid #f1f5f9'
              }}
            >
              <div>
                <span style={{ fontWeight: 600, color: '#1e293b', display: 'block' }}>
                  {item.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {item.category}
                </span>
              </div>

              <span
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: '#e0f2fe',
                  color: '#0369a1',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  fontWeight: 500
                }}
              >
                {item.level}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div
          style={{
            color: '#64748b',
            textAlign: 'center',
            padding: '1.5rem 1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '8px',
            border: '1px dashed #cbd5e1'
          }}
        >
          🔍 No se encontraron resultados para &quot;<strong>{searchTerm}</strong>&quot;
        </div>
      )}
    </div>
  );
};

export default ListContainer;
