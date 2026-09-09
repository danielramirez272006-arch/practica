import { useState } from 'react';

export const CounterWidget = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div
      className="counter-widget"
      style={{
        padding: '1.5rem',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        background: '#ffffff',
        maxWidth: '360px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}
    >
      <h3 style={{ margin: '0 0 1rem', fontSize: '1.25rem', color: '#1e293b' }}>
        Reto 1: Contador
      </h3>

      <div
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center',
          color: count < 0 ? '#ef4444' : '#0ea5e9'
        }}
      >
        {count}
      </div>

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}
      >
        <button
          type="button"
          onClick={decrement}
          style={{
            padding: '0.5rem 0.8rem',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            cursor: 'pointer',
            backgroundColor: '#f8fafc',
            fontWeight: 500
          }}
        >
          - Decrementar
        </button>

        <button
          type="button"
          onClick={reset}
          style={{
            padding: '0.5rem 0.8rem',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            cursor: 'pointer',
            backgroundColor: '#f8fafc',
            fontWeight: 500
          }}
        >
          Reiniciar
        </button>

        <button
          type="button"
          onClick={increment}
          style={{
            padding: '0.5rem 0.8rem',
            borderRadius: '8px',
            border: '1px solid #0284c7',
            cursor: 'pointer',
            backgroundColor: '#0ea5e9',
            color: '#ffffff',
            fontWeight: 500
          }}
        >
          + Incrementar
        </button>
      </div>

      {count < 0 ? (
        <div
          style={{
            color: '#b91c1c',
            backgroundColor: '#fee2e2',
            padding: '0.6rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            textAlign: 'center',
            fontWeight: 500
          }}
        >
          ⚠️ ¡Atención: El contador es negativo!
        </div>
      ) : null}
    </div>
  );
};

export default CounterWidget;
