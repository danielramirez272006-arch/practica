import { useState, useEffect } from 'react';

export const DataDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [attempt, setAttempt] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setData(null);

    const timer = setTimeout(() => {
      // Alterna entre éxito y error según el intento para permitir probar ambos estados
      const shouldFail = attempt % 3 === 0;

      shouldFail
        ? setError('Error 500: Fallo al comunicarse con el servidor simulado.')
        : setData({
            id: 'USR-2026',
            nombre: 'Daniel Ramírez',
            rol: 'Frontend Engineer',
            empresa: 'Taller React & Vite',
            timestamp: new Date().toLocaleTimeString()
          });

      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [attempt]);

  const handleRefetch = () => {
    setAttempt((prev) => prev + 1);
  };

  return (
    <div
      className="data-display"
      style={{
        padding: '1.5rem',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        background: '#ffffff',
        maxWidth: '420px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#1e293b' }}>
          Reto 3: Petición Asíncrona
        </h3>

        <button
          type="button"
          onClick={handleRefetch}
          disabled={isLoading}
          style={{
            padding: '0.4rem 0.8rem',
            fontSize: '0.8rem',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            backgroundColor: '#f8fafc',
            fontWeight: 500
          }}
        >
          {isLoading ? 'Cargando...' : 'Reintentar'}
        </button>
      </div>

      {isLoading ? (
        <div
          style={{
            padding: '2rem 1rem',
            textAlign: 'center',
            color: '#0284c7',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            border: '1px solid #bae6fd'
          }}
        >
          <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>⏳</div>
          <p style={{ margin: 0, fontWeight: 600, fontSize: '0.95rem' }}>
            Cargando información...
          </p>
          <span style={{ fontSize: '0.75rem', color: '#0369a1' }}>
            Simulando latencia de red (1.5s)
          </span>
        </div>
      ) : error ? (
        <div
          style={{
            padding: '1rem',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            color: '#991b1b'
          }}
        >
          <p style={{ margin: '0 0 0.3rem', fontWeight: 600, fontSize: '0.95rem' }}>
            ❌ Error en la solicitud
          </p>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>{error}</p>
        </div>
      ) : (
        <div
          style={{
            padding: '1rem',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '8px',
            color: '#166534'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem',
              borderBottom: '1px solid #dcfce7',
              paddingBottom: '0.4rem'
            }}
          >
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
              ✅ Perfil Recuperado
            </span>
            <span style={{ fontSize: '0.75rem', color: '#15803d' }}>
              {data?.timestamp}
            </span>
          </div>

          <p style={{ margin: '0.3rem 0', fontSize: '0.875rem' }}>
            <strong>ID:</strong> {data?.id}
          </p>
          <p style={{ margin: '0.3rem 0', fontSize: '0.875rem' }}>
            <strong>Nombre:</strong> {data?.nombre}
          </p>
          <p style={{ margin: '0.3rem 0', fontSize: '0.875rem' }}>
            <strong>Rol:</strong> {data?.rol}
          </p>
          <p style={{ margin: '0.3rem 0', fontSize: '0.875rem' }}>
            <strong>Entorno:</strong> {data?.empresa}
          </p>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
